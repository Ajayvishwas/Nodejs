// const express =require('express');
const restApi =require('../db');


const getUsers = async(req, res) => {
  const users = await restApi.find();

  res.status(200).json({ success: true, msg: "Get Users", users });
// res.send("Hello world")
};

const getUsersTesting = async (req, res) => {
  const users = await restApi.find();

  res.status(200).json({ success: true, msg: "Get Users", users });
};


const createUser = async(req, res) =>{
  const user = await restApi.create(req.body);

     res.status(201).json({
      success:true,
      user
     })
}

const updateUser = async(req, res) =>{
  let user = await restApi.findById(req.params.id);
    if (!user) {
        return res.status(500).json({
            success:"false",
            message:"user not found"
        })
    }
        user = await restApi.updateOne({_id:req.params.id,}, req.body);
      

    res.status(201).json({
        success:"true",
        user
    })
}

const deleteUser = async(req, res) => {
  let user = await restApi.findById(req.params.id);
      

  if (!user) {
      return res.status(500).json({
          success:"false",
          message:"user not found"
      })
  }
  await user.deleteOne();
  
      res.status(200).json({
          success:"true",
          message:"User Deleted"
      })
  
}

module.exports = { getUsers, getUsersTesting, createUser , updateUser , deleteUser};
