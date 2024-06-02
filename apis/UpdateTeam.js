const { ObjectId } = require('mongodb'); 

const connectDB = require('../db/DbConnect');

async function UpdateTeam(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection("team");

        const {id, name,designation,text } = req.body;
        const image = req.file ? req.file.filename : null;

        // Create an update object with the fields to update
        const updateData = {
            $set: {
                name,
                designation,
                image,
                text
            }
        };

        // Update the profile based on the provided id 
        const result = await collection.updateOne({ _id: new ObjectId(id) }, updateData);

        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: "No team found with the provided ID" });
        } else {
            return res.status(200).json({ message: "Team updated successfully" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { UpdateTeam };