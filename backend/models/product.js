const mongoose=require("mongoose")
const productSchema=mongoose.Schema({
    productname:String,
    productdesc:String,
    productprice:Number,
    img:String,
    status:String
})

module.exports=mongoose.model('product',productSchema)