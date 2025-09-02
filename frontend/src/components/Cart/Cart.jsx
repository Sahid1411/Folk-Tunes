import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import "./Cart.css"
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

const ProductCart = ({ cartItems, Secured_Packing,deleteProduct }) => {
  return (
      <div className='my-2 container'>
              {cartItems.map((item, index) => (
                  <div style={{ backgroundColor: 'white' }} key={index} className="row  p-3 border my-2">
                      <div className="col-lg-3 col-sm-4 col-12">
                          <img style={{ height: '200px', width: '100%', margin: "10px 0px" }}  src={`http://localhost:4000${item.productId.photo}`}  alt="Product" />
                      </div>
                      <div className="col-lg-6 col-sm-6 col-6 p-2 d-flex flex-column justify-content-center">
                          <p>{item.productId.name} {item.productId.category} FO5 (Twilight Blue, 64 GB)</p>
                          <p><span style={{ textDecoration: "line-through" }}>₹999</span> <span className='fw-bold fs-5'>₹{item.productId.price}</span> <span style={{ color: 'green' }}>37% Off</span></p>
                          <p style={{ color: '#5d96a9' }}>+₹{Secured_Packing} Secured Packing Fee</p>
                          <label style={{ marginRight: '20px' }} htmlFor={`quantity-${index}`}>Quantity: </label>
                          <input style={{ width: '100px',cursor:'not-allowed' }} type="number" name="quantity" id={`quantity-${index}`} placeholder={`${item.quantity}`} disabled/>
                      </div>
                      <div className="col-lg-3 col-sm-2 col-6 d-flex align-items-center">
                          <p>Delivery by Thu Feb 13 | <span className='me-2' style={{ textDecoration: "line-through" }}> ₹40 Free</span></p>
                      </div>
                      <div className='d-flex justify-content-between p-2'>
                  {/* <button style={{ color: 'white' }} className='btn btn-danger fw-bold'>Remove</button> */}
                  <button style={{ color: 'white' }} className='btn btn-danger fw-bold' onClick={() => deleteProduct(item.productId._id)} > 
                    Remove
                 </button>

                  <Link style={{ color: 'white' }} className='btn btn-warning fw-bold' to={`/checkout/${item.productId._id}`}>Place Order</Link>
              </div>
                  </div>
              ))}
             
      </div>
  );  
};

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const userId = localStorage.getItem("userId")?.replace(/"/g, ""); 

    useEffect(() => {
    const fetchCart = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/api/cart/${userId}`);
            setCartItems(res.data.items);
            // console.log(res.data.items);
            // console.log(cartItems.quantity);
            
        } catch (error) {
            console.error("Error fetching cart", error);
        }
    };
    fetchCart();
}, [cartItems]);
   

  const [user, setUser] = useState({ name: "", email: "", address: "" }); // ✅ Ensures no undefined error
 
  useEffect(() => { 
    const fetchUser = async () => {
      try {  
        const response = await axios.get(`http://localhost:4000/api/users/${userId}`);
        setUser(response.data); // ✅ Properly update state

      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };
 
    fetchUser();
  }, [userId]);


  const deleteProduct = async (productId) => { 
    try {
        const response = await axios.delete(`http://localhost:4000/api/cart/remove`, {
            data: { userId, productId } // Send both userId and productId
        });

        // Update the cart after successful deletion
        setCartItems((prevCart) => prevCart.filter((item) => item.productId._id !== productId));
        toast.success("Product Deleted successfully", { position: "top-right" });
        console.log(response.data.message);
    } catch (error) {
        console.error("Error removing product:", error);
    }
};


  // set the delivery charges, shipping fee etc. 
  const Discount = 45;
  const Delivery = 0;
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const Secured_Packing = 29 * totalQuantity;


const totalPrice = cartItems.reduce((acc, item) => acc + item.productId.price * item.quantity, 0);
const totalDiscount = cartItems.reduce((acc, item) => acc + Discount * item.quantity, 0);
const finalAmount = cartItems.length > 0 ? totalPrice - Discount + Delivery + Secured_Packing : 0;

  return (
    <div>
       <Header />
       <hr />
  
       <div className="container">
            
         <div className="row">
            <div style={{marginTop:'4px'}} className="col-lg-8 col-sm-8 col-12 ">
                <div style={{backgroundColor:'white'}} className='d-flex justify-content-between'>
                    <Link style={{margin: "10px 0px 0px 10px",height:'35px'}} to={`/user/${userId}`} type="button" className="btn btn-secondary">
                    <i style={{marginRight:"4px",}} className="fa-solid fa-backward"></i> Back
                    </Link>
                    <p  style={{color:'#8383d1'}} className='text-center fw-bold fs-5  p-2'>Folk Tunes </p>
                    <p></p>
                </div>
                {cartItems.length === 0 ? (
                    <div style={{height:'50vh'}} className='d-flex justify-content-center align-items-center'>
                        <div className=' text-center'>
                            <p className='fs-4'>Your Cart is empty!</p>
                            <p style={{fontSize:'13px'}}>Add items to it now</p> 
                            <Link style={{borderRadius:'0px',marginTop:'10px'}} className='btn btn-primary text-center' to='/'>Shop now</Link>
                        </div>
                        
                    </div>
            ) : 
            (
                <>
                    <div style={{ backgroundColor: 'white' }} className="d-flex border my-3 justify-content-between p-3">
                        <p>Deliver to: <span className="fw-bold">{user.name} </span> <br />
                            {user.address}
                        </p>
                        <Link style={{ height: '36px' }} className="btn btn-outline-primary" to={`/update/user/${userId}`}>Change</Link>
                    </div>

                    <ProductCart cartItems={cartItems} Secured_Packing={Secured_Packing} deleteProduct={deleteProduct} />
                </>
            )}
                

            </div>


            <div style={{ height: '375px', marginTop: '4px', backgroundColor: 'white' }} className="col-lg-4 col-sm-4 col-12 border">
              <div style={{ marginTop: '14px' }}>
                  <p>PRICE DETAILS</p> 

                  <div className='d-flex justify-content-between'>
                      <p>Price ({cartItems.length} {cartItems.length > 1 ? "products" : "product"})</p>
                      <p>₹{totalPrice}</p>
                  </div>

                  <div className='d-flex justify-content-between'>
                      <p>Discount</p>
                      <p>₹{totalDiscount}</p>
                  </div>

                  <div className='d-flex justify-content-between'>
                      <p>Delivery Charges</p>
                      <p>₹{Delivery} Free</p>
                  </div>

                  <div className='d-flex justify-content-between'>
                      <p>Secured Packaging Fee ({cartItems.length} {cartItems.length > 1 ? "products" : "product"})</p>
                      <p>₹{Secured_Packing}</p>
                  </div>

                  <hr style={{ border: 'none', borderTop: '2px dotted black' }} />

                  <div className='d-flex justify-content-between'>
                      <p className='fw-bold'>Total Amount</p>
                      <p className='fw-bold'>₹{finalAmount}</p>
                  </div>

                  <hr style={{ border: 'none', borderTop: '2px dotted black' }} />

                  <p>You will save ₹{totalDiscount} on this order</p>
              </div>
          </div>


         </div>
       </div>
    </div>
  )
}  

export default Cart

// make the details dynamic