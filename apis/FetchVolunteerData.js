const connectDB = require('../db/DbConnect');

async function FetchVolunteerData(req, res) {

    try{
        const db = await connectDB();
        const collection = db.collection("volunteerRequest");

        const volunteersData = await collection.find().toArray();

        if(volunteersData.length == 0 )
        {
            return res.status(404).json({message: "No Volunteer Data"});
        }
        else 
        {
            return res.status(200).json({message:"Volunteers Data Found",Data:volunteersData});
        }

    }
    catch(error) {
        return res.status(500).json({message:error.message});
    }
}
module.exports = {FetchVolunteerData}