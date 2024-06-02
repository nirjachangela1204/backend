const connectDB = require('../db/DbConnect');

async function FetchTeamData(req, res) {

    try{
        const db = await connectDB();
        const collection = db.collection("team");

        const teamData = await collection.find().toArray();

        if(teamData.length == 0 )
        {
            return res.status(404).json({message: "No Team Data"});
        }
        else 
        {
            return res.status(200).json({message:"Team Data Found",Data:teamData});
        }

    }
    catch(error) {
        return res.status(500).json({message:error.message});
    }
}
module.exports = {FetchTeamData}