const connectDB = require('../db/DbConnect');

async function AddTeamData(req, res){
    try{
        const db = await connectDB();
        const collection = db.collection("team");

        const{name,designation,text} = req.body;
        const image = req.file ? req.file.filename : null;
        
        await collection.insertOne ({
           name,
           designation,
           image,
           text
        })
        return res.status(200).json({message:"Data Inserted Successfully"});

    }
    catch(error){
        return res.status(500).json({message:"Internal Server Error"});
    }
}

module.exports = {AddTeamData};