const connectDB = require('../db/DbConnect');

async function FetchFaqData(req, res) {

    try{
        const db = await connectDB();
        const collection = db.collection("faq");

        const faqData = await collection.find().toArray();

        if(faqData.length == 0 )
        {
            return res.status(404).json({message: "No Faq Data"});
        }
        else 
        {
            return res.status(200).json({message:"Faq Data Found",Data:faqData});
        }

    }
    catch(error) {
        return res.status(500).json({message:error.message});
    }
}
module.exports = {FetchFaqData}