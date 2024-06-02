const connectDB = require('./db/DbConnect');
const cors = require('cors');
const express = require('express');
const upload = require('./multer/fileUpload');

const { Logout } = require('./apis/Logout');
const  Session  = require('./apis/Session');

const {UpdateProfile} = require('./apis/UpdateProfile');

const { FetchUserData } = require('./apis/FetchUserData');
const {DeleteUser} = require('./apis/DeleteUser');

const { FetchVolunteerData } = require('./apis/FetchVolunteerData');
const { AddVolunteerData } = require('./apis/AddVolunteerData');
const { UpdateVolunteer } = require('./apis/UpdateVolunteer');
const { DeleteVolunteer } = require('./apis/DeleteVolunteer');

const { FetchCausesData } = require('./apis/FetchCausesData');
const { AddCausesData } = require('./apis/AddCausesData');
const { UpdateCauses } = require('./apis/UpdateCauses');
const { DeleteCauses } = require('./apis/DeleteCauses');

const { FetchEventData } = require('./apis/FetchEventData');
const { AddEventData } = require('./apis/AddEventData');
const { UpdateEvent } = require('./apis/UpdateEvent');
const { DeleteEvent } = require('./apis/DeleteEvent');

const { FetchTeamData } = require('./apis/FetchTeamData');
const { AddTeamData } = require('./apis/AddTeamData');
const { UpdateTeam } = require('./apis/UpdateTeam');
const { DeleteTeam } = require('./apis/DeleteTeam');

const { FetchContactusData } = require('./apis/FetchContactusData');
const { AddContactusData } = require('./apis/AddContactusData');
const { UpdateContactus } = require('./apis/UpdateContactus');
const { DeleteContactus } = require('./apis/DeleteContactus');

const { FetchFaqData } = require('./apis/FetchFaqData');
const { AddFaqData } = require('./apis/AddFaqData');
const { UpdateFaq } = require('./apis/UpdateFaq');
const { DeleteFaq } = require('./apis/DeleteFaq');
const path = require('path');
const session = require('express-session');

// connect to the database
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//configure express-session middleware
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use('/images',express.static(path.join(__dirname,'images')));

const PORT = 8000;

// Allow CROS
app.use(cors());

// Define your routes 

app.post('/logout',Logout);
app.post('/session',Session);

app.post('/updateprofile',UpdateProfile);

app.get('/fetchuser',FetchUserData);
app.post('/deleteuser',DeleteUser);

app.get('/fetchvolunteer',FetchVolunteerData);
app.post('/addvolunteer', upload.single("image"),AddVolunteerData);
app.post('/updatevolunteer',UpdateVolunteer);
app.post('/deletevolunteer',DeleteVolunteer);

app.get('/fetchcauses',FetchCausesData);
app.post('/addcauses',upload.single("image"),AddCausesData);
app.post('/updatecauses',upload.single("image"),UpdateCauses);
app.post('/deletecauses',DeleteCauses);

app.get('/fetchevent',FetchEventData);
app.post('/addevent',upload.single("image"),AddEventData);
app.post('/updateevent',upload.single("image"),UpdateEvent);
app.post('/deleteevent',DeleteEvent);

app.get('/fetchteam',FetchTeamData);
app.post('/addteam',upload.single("image"),AddTeamData);
app.post('/updateteam',upload.single("image"), UpdateTeam );
app.post('/deleteteam',DeleteTeam);

app.get('/fetchcontact',FetchContactusData);
app.post('/addcontact',AddContactusData);
app.post('/updatecontact',UpdateContactus);
app.post('/deletecontact',DeleteContactus);

app.get('/fetchfaq',FetchFaqData);
app.post('/addfaq',AddFaqData);
app.post('/updatefaq',UpdateFaq);
app.post('/deletefaq',DeleteFaq);



//Start the server
app.listen(PORT, ()=> {
    console.log("Server started on port",PORT);
});