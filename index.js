const express = require("express");
const mongoose =require("mongoose");
const bodyparser =require("body-parser");
const user_routes =require("./routes/users");
const logreqres = require('./middlewares/index')
const app = express();

const PORT = 4000;

// middlware send body data through body parser in json format
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(logreqres('log.txt'));





// Wi
// // Create user
// app.post("/api/v1/user/new" , async(req, res) =>{
//     const user = await restApi.create(req.body);

//    res.status(201).json({
//     success:true,
//     user
//    })
// })

// // read users 

// app.get("/api/v1/users" , async(req, res) => {
//         const users = await restApi.find();

//         res.status(200).json({success:true,
//         users
//     })
// });

// // Update user
// app.put("/api/v1/user/:id" , async(req, res) =>{
//     let user = await restApi.findById(req.params.id);
//     if (!user) {
//         return res.status(500).json({
//             success:"false",
//             message:"user not found"
//         })
//     }
//         user = await restApi.updateOne({_id:req.params.id,}, req.body);
      

//     res.status(200).json({
//         success:"true",
//         user
//     })

// })

// // delete user

// app.delete("/api/v1/user/:id" , async(req, res) =>{
//     let user = await restApi.findById(req.params.id);
      

// if (!user) {
//     return res.status(500).json({
//         success:"false",
//         message:"user not found"
//     })
// }
// await user.deleteOne();

//     res.status(200).json({
//         success:"true",
//         message:"User Deleted"
//     })

// })

// // Midddleware or to set router

app.get('/',(req, res) => {
    const bodyParser = bodyparser
    console.log(bodyParser)

})




app.use("/api/v1", user_routes)





app.listen(PORT,() =>{
    console.log("Server is working")
})