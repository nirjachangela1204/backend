const { ObjectId } = require('mongodb'); 

const connectDB = require('../db/DbConnect');

async function DeleteFaq(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection("faq");

        const {uid} = req.body;

        const result = await collection.deleteOne({_id: new ObjectId(uid)});

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "No faq found with the provided ID" });
        } else {
            return res.status(200).json({ message: "Faq Deleted successfully" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { DeleteFaq };