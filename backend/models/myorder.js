const mongoose=require("mongoose")
const myorderSchema=mongoose.Schema({
    username:String,
    productname:String,
    desc:String,
    quantity:Number,
    
})

module.exports=mongoose.model('myorder',myorderSchema)