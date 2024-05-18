const mongoose =require('mongoose');
// connection
mongoose.connect("mongodb://localhost:27017",{
    dbName:"rest",

}).then(()=>{
    console.log("connection okay with db");
}).catch((err) =>{
    console.log(err);
});

// craete Schema
const apiSchema = new mongoose.Schema({
    name: String,
    email: String,
})

// create collection/model

const restApi = mongoose.model("RestAPI" , apiSchema);

module.exports = restApi;