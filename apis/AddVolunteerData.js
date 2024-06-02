const connectDB = require("../db/DbConnect");

async function AddVolunteerData(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection('volunteerRequest');

        const { name, email, gender, phoneNo, address, city, state } = req.body;
        const image = req.file.filename;

        if (!name || !email || !gender || !phoneNo || !address || !city || !state || !image) {
            return res.status(400).json({ success: false, message: "Missing required fields!" });
        }

        const userExist = await collection.findOne({ email });
        if (userExist) {
            return res
                .status(400)
                .json({ success: false, message: "Request Already Sent!" });
        }

        await collection.insertOne({
            name,
            email,
            gender,
            phoneNo,
            address,
            city,
            state,
            image,
            status: "Pending",
            date: new Date(),
            requestUpdateDate: null
        });

        return res
            .status(201)
            .json({ success: true, message: "Request Sent Successfully" });

    } catch (error) {
        console.error("addVolunteerRequest.js:", error);
        return res.status(500).json({ success: false, error: "Something went wrong" });
    }
}

module.exports = { AddVolunteerData };