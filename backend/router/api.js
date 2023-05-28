const router=require('express').Router()
const Reg=require('../models/reg')
const Admin=require('../models/admin')
const Product=require('../models/product')
const Order=require('../models/order')
const MyOrder=require('../models/myorder')
// const url=require('url')

router.get('/',async(req,res)=>{
    try {
        const userData = await Reg.find();
        res.json(userData);
      } catch (error) {
        res.json({ message: error.message });
      }
})
router.post('/',async(req,res)=>{
    const{email,username,password}=req.body
    const regData=await Reg.findOne({username:username})
    if(regData==null){
        const regRecord=new Reg({email:email,username:username,password:password})
        regRecord.save();
        res.status(201).json(regRecord);
    }else{
        res.status(400).json({message:"Already Exit"})
    }
})
router.post('/login',async(req,res)=>{
    const{username,password}=req.body
    
    const regRecord=await Reg.findOne({username:username})
    if(regRecord!==null){
        if(regRecord.password==password){
            res.status(201).json(regRecord)
        }else{
            res.status(400).json({message:"Wrong Credentials"})
        }
    }else{
        res.status(400).json({message:"Wrong Credentials"})
    }
})
router.post('/adminlogin',async(req,res)=>{
    const{username,password}=req.body
    
    const regRecord=await Admin.findOne({username:username})
    if(regRecord!==null){
        if(regRecord.password==password){
            res.status(201).json(regRecord)
        }else{
            res.status(400).json({message:"Wrong Credentials"})
        }
    }else{
        res.status(400).json({message:"Wrong Credentials"})
    }
})
router.get('/adminlogin',async(req,res)=>{
    try {
        const userData = await Reg.find();
        res.json(userData);
      } catch (error) {
        res.json({ message: error.message });
      }
})
router.post('/addproducts',(req,res)=>{
    const{productname,productdesc,productprice}=req.body
    const productRecord=new Product({productname:productname,productdesc:productdesc,productprice:productprice,status:'unpublish'})
    productRecord.save();
    res.status(201).json(productRecord)
})
router.get('/showproducts',async(req,res)=>{
    // let x=url.parse(req.query,true)
    // console.log(x);
    const products=await Product.find();
    res.json(products)
})
router.get('/showsingleproduct/:id',async(req,res)=>{
    const id=req.params.id
    // console.log(req.query)
    const record=await Product.findById(id)
    res.json(record)
})
router.get('/showpublicproduct',async(req,res)=>{
    // console.log(req.query)
    const productsrecord=await Product.find({status:'publish'})
    res.json(productsrecord)
})
router.put('/:id',async(req,res)=>{
    const id=req.params.id;
    const{productname,productdesc,productprice,status}=req.body;
    await Product.findByIdAndUpdate(id,{productname:productname,productdesc:productdesc,productprice:productprice,status:status})
    res.json({message:'Successfully Updated'})
})
router.post('/cart',async(req,res)=>{
    const ids=req.body.ids
    //console.log(ids);
    const cartrecords =await Product.find({_id:{$in:ids}})
    res.json(cartrecords)
})

router.post('/showproducts', async (req, res) => {
        const { name, desc, price ,img,status} = req.body;
        const product = new Product({ productname: name, productdesc: desc, productprice: price,img:img,status:status });
        try {
            await product.save();
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
});
router.delete('/showproducts/:id', async (req, res) => {
    const id = req.params.id
    console.log(id);
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({message:'successfully record delete'});

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.get('/moredetail/:id',async(req,res)=>{
    const id=req.params.id;
    try{
       const productREcord= await Product.findOne({_id:id});
       res.status(200).json(productREcord);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})
router.post('/checkout/:username',async(req,res)=>{
    const username=req.params.username
    const cart=req.body.items;
    for(let key in cart){
        console.log(key,cart[key])
        let cartrecord=await Order({productId:key,quantity:cart[key],username:username,status:'new'})
        cartrecord.save();
    }
    const record=await Order.find({status:'new'})
    record.forEach(async(result)=>{
        const orderid=result._id;
        const products=await Product.findById(result.productId);
        let myrecord=new MyOrder({username:username,productname:products.productname,desc:products.productdesc,quantity:result.quantity})
        myrecord.save();
        await Order.findByIdAndUpdate(orderid,{status:'old'})
    })
})
router.get('/myorders/:username',async(req,res)=>{
    const username=req.params.username;
    const record=await MyOrder.find({username:username});
    res.json(record)
})
module.exports=router