const connectDB = require('../db/DbConnect');

async function AddCausesData(req, res){
    try{
        const db = await connectDB();
        const collection = db.collection("causes");

        const{title,raised,goal} = req.body;
        const image = req.file ? req.file.filename : null;
        
        await collection.insertOne ({
            title,
            raised,
            goal,
            image
        })
        return res.status(200).json({message:"Data Inserted Successfully"});

    }
    catch{
        console.log(error);
        return res.status(500).json({message:"Internal Server Error",check:error.message});
    }
}

module.exports = {AddCausesData};