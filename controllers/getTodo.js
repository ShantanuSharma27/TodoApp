const Todo=require("../models/Todo");

exports.getTodo= async(req,res)=>{
    try{
        //fetch all todo items from database
        const todos=await Todo.find({});
        res.status(200).json({
            success:true,
            data:todos,
            message:"entire todo data is fetched"
        })
    }
    catch(err){
        console.log(err);
        res.status(404).json({
            success:false,
            message:"error in getting the data",
            error:err.message,
        });
    }
}

exports.getTodoById=async(req,res)=>{
    try{
        //fetch item basis on id
        const id=req.params.id;
        const todo=await Todo.findById({_id:id})
        
        //data for given id not found

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No Data Found with Given Id",
            })
        }
        //data fond
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            message:'Error In Fetching The Data',
            error:err.message,
            })
    }
}