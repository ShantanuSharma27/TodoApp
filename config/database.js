const mongoose=require("mongoose");

require("dotenv").config();//

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        return console.log("DB Connection is Successful")
    })
    .catch((error)=>{
        return (console.log("Issue in Connection"),
        console.log(error.message),
        process.exit(1));
    })
}
module.exports=dbConnect;
