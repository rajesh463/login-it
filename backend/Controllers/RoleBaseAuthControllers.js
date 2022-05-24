const RoleBaseAuth = require("../models/rolebaseauth.model");

exports.checkRole = (req, res) => {
  console.log("role-----------------------------------------")
  RoleBaseAuth.find({uid:req.body.uid},(error,data)=>{
    if(!error){
      console.log(data);
      res.json(data);
    }else{
      console.log(error)
      res.json(null);
    }
    
  });
}