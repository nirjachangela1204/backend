const { ObjectId } = require('mongodb'); 

const connectDB = require('../db/DbConnect');

async function DeleteUser(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection("signupCollection");

        const { uid} = req.body;

        const result = await collection.deleteOne({_id: new ObjectId(uid)});

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "No user found with the provided ID" });
        } else {
            return res.status(200).json({ message: "User Deleted successfully" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { DeleteUser };