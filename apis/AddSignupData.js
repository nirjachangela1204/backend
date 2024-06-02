const connectDB = require('../db/DbConnect');

async function AddSignupData(req, res){
    try{
        const db = await connectDB();
        const collection = db.collection("signupCollection");

        const{name,email,phone,password} = req.body;
        const userExist = await collection.findOne({email});

        if(userExist)
        {
            return res.status(400).json({message:"Email already resgistred"});
        }
        await collection.insertOne ({
            name,
            email,
            phone,
            password
        });
        return res.status(200).json({message:"Registered Successfully"});

    }
    catch{
        console.log(error);
        return res.status(500).json({message:"error.message"});
    }
}

module.exports = {AddSignupData};