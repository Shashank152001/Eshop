import { LoginContext} from '../LoginContext'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Cart() {
    let total=0;
    const {cart,setCart,userLoginName}= useContext(LoginContext)
    const [products,setProducts]=useState([])
    let navigate =useNavigate()
useEffect(()=>{
    if(!cart.items){
        return;
    }
    fetch('/api/cart',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({ids:Object.keys(cart.items)})
    }).then((res)=>{ return res.json()})
    .then((data)=>{ console.log(data)
        setProducts(data)
    })
},[cart])
           function handleQut(id){
                //console.log(id)
               return cart.items[id];
            }
            function handleIncrement(id){
                //console.log(id)
                const existqnt = cart.items[id];
                const _cart ={...cart}
                _cart.items[id] =existqnt+1;
                _cart.totalItems +=1
                setCart(_cart)
            }
             function handleDecrement(id){
                const existqnt = cart.items[id];
                if(existqnt===1){
                    return;
                }
                const _cart ={...cart}
                _cart.items[id] =existqnt-1;
                _cart.totalItems -=1
                setCart(_cart)
             }
             function handlePrice(id,price){
               const finalPrice= price*handleQut(id)
               total +=finalPrice
               return finalPrice;
             }
             function handleDelete(id){
                console.log(id)
                let _cart ={...cart}
                let qty = cart.items[id]
                delete _cart.items[id]
                _cart.totalItems -=qty
                setCart(_cart)
                //console.log(qty)
                //let _cart ={...cart}

             }
             function handleCheckout(){
                alert('Your order has been submitted')
                fetch(`/api/checkout/${userLoginName}`,{
                    method:'POST',
                    headers: { "Content-Type": "application/json" },
                    body:JSON.stringify(cart)
                })
                setCart('')
                navigate('/userdashboard')
             }
    return ( 
        <>
        {products.length?
        <>
        <table className='table table-hover'>
            <thead>
            <tr>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Product Quantity</th>
                <th>Product Price</th>
                <th>Product Remove</th>
            </tr>
            </thead>
            
            {products.map((result)=>(
                <tbody key={result._id} >
            <tr >
                <td><img src={result.img} alt="..." style={{width:'100px'}} /></td>
                <td>{result.productname}</td> 
                <td><button onClick={()=>{handleIncrement(result._id)}}>+</button>
                {handleQut(result._id)}
                <button onClick={()=>{handleDecrement(result._id)}}>-</button></td>
                <td>{handlePrice(result._id,result.productprice)}</td>
                <td><button onClick={()=>{handleDelete(result._id)}}>Delete</button></td>

            </tr>
            </tbody>
            
            
            ))}
        </table>
        <div><p>Total Amount: {total}</p></div>
        <div><button onClick={handleCheckout}>Check Out</button></div>
        </>
            : <><h2 className='text-center text-primary'>Empty Cart</h2>
            </>
            }
        </>
     );
}

export default Cart;