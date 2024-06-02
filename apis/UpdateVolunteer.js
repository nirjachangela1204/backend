const { ObjectId } = require('mongodb'); 

const connectDB = require('../db/DbConnect');

async function UpdateVolunteer(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection("volunteerRequest");

        const{id,name,email,phoneNo,gender,city,state,address,status} = req.body;

        // Create an update object with the fields to update
        const updateData = {
            $set: {
                name,
                email,
                phoneNo,
                gender,
                city,
                state,
                address,
                status
            }
        };

        // Update the profile based on the provided id 
        const result = await collection.updateOne({ _id: new ObjectId(id) }, updateData);

        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: "No Volunteer found with the provided ID" });
        } else {
            return res.status(200).json({ message: "Volunteer updated successfully" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {UpdateVolunteer};