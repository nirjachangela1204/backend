const connectDB = require('../db/DbConnect');
    
async function AddContactusData(req , res) {

    try {
        const db = await connectDB();
        const collection = db.collection("contactUs");

        const{name,email,phone,subject,message} = req.body;
        await collection.insertOne ({
            name,
            email,
            phone,
            subject,
            message
        });
        return res.status(200).json({message:"Data Submitted Successfully"});
    }
    catch{
        console.log(error);
        return res.status(500).json({message:"error.message"});
    }
}

module.exports = {AddContactusData};