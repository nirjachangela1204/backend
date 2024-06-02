const connectDB = require('../db/DbConnect');

async function FetchCausesData(req, res) {

    try{
        const db = await connectDB();
        const collection = db.collection("causes");

        const causesData = await collection.find().toArray();

        if(causesData.length == 0 )
        {
            return res.status(404).json({message: "No causes Data"});
        }
        else 
        {
            return res.status(200).json({message:"causes Data Found",Data:causesData});
        }

    }
    catch(error) {
        return res.status(500).json({message:error.message});
    }
}
module.exports = {FetchCausesData};