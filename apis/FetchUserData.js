const connectDB = require('../db/DbConnect');

async function FetchUserData(req,res) {

    try {

        const db = await connectDB();
        const collection = db.collection("signupCollection");

        const userData = await collection.find().toArray();

        if(userData){
            return res.status(200).json({message: "User Data Found Successfully", Data:userData});
        }
        else{
            return res.status(404).json({message:"No Data Found"});
        }
    }
    catch(error){
        return res.status(500).json({message: "Internal Server Error"});
    }
}

module.exports = {FetchUserData};