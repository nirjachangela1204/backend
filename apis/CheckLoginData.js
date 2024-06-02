const connectDB = require('../db/DbConnect');

async function CheckLoginData(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection("signupCollection");

        const { email, password } = req.body;

        let userdetails = await collection.findOne({email, password});

        if(!userdetails)
        {
            userdetails = await collection.findOne({phone: email, password});
        }



        if (!userdetails) {
            return res.status(404).json({ message: "Invalid email or phone number or password" });
        } else {
            req.session.user = { session: userdetails, isAuth: true };

            return res.status(200).json({ message: "Login Successfully", userinfo: userdetails });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { CheckLoginData };