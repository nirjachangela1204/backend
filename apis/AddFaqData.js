const connectDB = require('../db/DbConnect');

async function AddFaqData(req, res){
    try{
        const db = await connectDB();
        const collection = db.collection("faq");

        const{question,answer} = req.body;
        
        await collection.insertOne ({
           question,
           answer
        })
        return res.status(200).json({message:"Data Inserted Successfully"});

    }
    catch(error){
        return res.status(500).json({message:"Internal Server Error"});
    }
}

module.exports = {AddFaqData};