const connectDB = require('../db/DbConnect');

async function FetchEventData(req, res) {

    try{
        const db = await connectDB();
        const collection = db.collection("events");

        const eventsData = await collection.find().toArray();

        if(eventsData.length == 0 )
        {
            return res.status(404).json({message: "No Event Data"});
        }
        else 
        {
            return res.status(200).json({message:"Events Data Found",Data:eventsData});
        }

    }
    catch(error) {
        return res.status(500).json({message:error.message});
    }
}
module.exports = {FetchEventData};