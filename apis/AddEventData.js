const connectDB = require('../db/DbConnect');

async function AddEventData(req, res){
    try{
        const db = await connectDB();
        const collection = db.collection("events");

        const{date, month, time, title,location} = req.body;
        const image = req.file ? req.file.filename : null;
        
        await collection.insertOne ({
            image,
            date,
            month,
            time,
            title,
            location
        })
        return res.status(200).json({message:"Data Inserted Successfully"});

    }
    catch(error){
        return res.status(500).json({message:"Internal Server Error"});
    }
}

module.exports = {AddEventData};