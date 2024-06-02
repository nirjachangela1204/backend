const { ObjectId } = require('mongodb'); 

const connectDB = require('../db/DbConnect');

async function UpdateProfile(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection("signupCollection");

        const {id, name, email, phone, password} = req.body;

        //Create an update object with the fields to update
        const updateData = {
            $set: {
                name,
                email,
                phone,
                password
            }
        };

        //Update the profile based on the provided id 
        const result = await collection.updateOne({_id: new ObjectId(id)}, updateData);

        if(result.modifiedCount === 0) {
            return res.status(404).json({ message: "No user Found with the provided ID"});
        } else {
            return res.status(200).json({message: "Profile Updated Successfully"});
        }

    }
    catch(error){
        return res.status(500).json({ message: error.message});
    }
}

module.exports = {UpdateProfile};