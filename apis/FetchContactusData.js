const connectDB = require('../db/DbConnect');

async function FetchContactusData(req, res) {

    try{
        const db = await connectDB();
        const collection = db.collection("contactUs");

        const contactData = await collection.find().toArray();

        if(contactData.length == 0 )
        {
            return res.status(404).json({message: "No Contact Data"});
        }
        else 
        {
            return res.status(200).json({message:"Contact Data Found",Data:contactData});
        }

    }
    catch(error) {
        return res.status(500).json({message:error.message});
    }
}
module.exports = {FetchContactusData};