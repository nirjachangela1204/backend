const { MongoClient } = require('mongodb');
const url = "mongodb+srv://nirjac412:nirja412@cluster412.dywv5ss.mongodb.net/?retryWrites=true&w=majority&appName=cluster412";
const client = new MongoClient(url);

async function ConnectToMongoDB() {
    try {
        await client.connect();
        const database = client.db("RaahNGO"); 
        console.log("Connected to MongoDB");
        return database;
    } 
    catch (error) {
        console.log(error);
    }
}

module.exports = ConnectToMongoDB;