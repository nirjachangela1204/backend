async function Logout(req,res){
    const session = req.session.user;

    if(!session){
        return res.status(401).json({message: "No sesssion created!"});
    }
    else{
        req.session.destroy();
        return res.status(200).json({message: "Logout Successful"});
    }

}

module.exports = { Logout};
