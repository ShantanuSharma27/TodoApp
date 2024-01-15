const express = require("express");
const app =express();

//load config from enve file

require("dotenv").config();
const PORT=process.env.PORT || 4000;

//middle wear for parsing json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes=require("./routes/todo");

//mount the todo ASPI routes
app.use("/api/v1",todoRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

//connect to the databases
const dbConnect=require("./config/database");
dbConnect();

//default Route
app.get("/",(req,res)=>{
    res.send(`<h1> This is HOMEPAGE babay</h1>`)
})