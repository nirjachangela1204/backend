const { ObjectId } = require('mongodb'); 

const connectDB = require('../db/DbConnect');

async function UpdateFaq(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection("faq");

        const {id, question,answer } = req.body;

        // Create an update object with the fields to update
        const updateData = {
            $set: {
                question,
                answer
            }
        };

        // Update the profile based on the provided id 
        const result = await collection.updateOne({ _id: new ObjectId(id) }, updateData);

        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: "No faq found with the provided ID" });
        } else {
            return res.status(200).json({ message: "Faq updated successfully" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { UpdateFaq };