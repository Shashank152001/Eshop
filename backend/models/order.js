const mongoose=require("mongoose")
const orderSchema=mongoose.Schema({
    productId:String,
    quantity:Number,
    username:String,
    status:String
})

module.exports=mongoose.model('order',orderSchema)