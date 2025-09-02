import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const Checkout = () => {

    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const { id } = useParams();     
    useEffect(() => { 
        const fetchProduct = async () => {
            try {  
                const response = await axios.get(`http://localhost:4000/api/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.log("Error fetching Product:", error);
            }
        };  
     
        fetchProduct();
    }, [id]);
    


    const userId = localStorage.getItem("userId")?.replace(/"/g, "");  
    const [user, setUser] = useState({ name: "", email: "", address: "" }); // ✅ Ensures no undefined error    
    
    useEffect(() => { 
    const fetchUser = async () => {
        try {  
        const response = await axios.get(`http://localhost:4000/api/users/${userId}`);
        setUser(response.data); // ✅ Properly update state
        // console.log(user);

        } catch (error) {
        console.log("Error fetching user:", error);
        }
    };
    
    fetchUser();
    }, [userId]);

    //delete the product

    const deleteProduct = async (productId) => { 
        try {
            const response = await axios.delete(`http://localhost:4000/api/cart/remove`, {
                data: { userId, productId } // Send both userId and productId
            });
    
            // Update the cart after successful deletion
            setCartItems((prevCart) => prevCart.filter((item) => item.productId._id !== productId));
            // toast.success("Product Deleted successfully", { position: "top-right" });
            console.log(response.data.message);
        } catch (error) {
            console.error("Error removing product:", error);
        }
    };

    //function for captcha
    const generateCaptcha = () => {
        return Math.floor(1000 + Math.random() * 9000).toString(); // Generates a 4-digit captcha
    };
    
    const [captcha, setCaptcha] = useState(generateCaptcha()); // style={{marginBottom:'10px'}}
    // const [captcha, setCaptcha] = useState(generateCaptcha());
    const [userCaptcha, setUserCaptcha] = useState("");


    const handleConfirmOrder = async () => {
        if (userCaptcha === captcha) {
            try {
                await addOrder(); // Call function to add order to the database
                deleteProduct(product._id); // Remove product from cart after successful order
                toast.success("Order successful", { position: "top-right" });
                navigate("/");
            } catch (error) {
                toast.error("Failed to place order", { position: "top-right" });
                console.error("Error placing order:", error);
            }
        } else {
            toast.error("Incorrect captcha", { position: "top-right" });
        }  
    };  
    
    // Function to add the order to the database
    const addOrder = async () => {
        try {
            const orderData = {
                userId,
                products: 
                    {
                        name: product.name,
                        price: product.price,
                        category: product.category,
                        supplierId: product.supplierId,   
                        quantity: 1,
                        photo: product.photo
                    }
                };
    
            const response = await axios.post("http://localhost:4000/api/create/order", orderData);
            console.log("Order Created:", response.data);
        } catch (error) {
            console.error("Error adding order:", error);
            throw error; // Re-throw to handle it in handleConfirmOrder
        }
    };
    


    //calculating amount
    const payment_handling_fee = 5;
    const platform_fee = 3;

  return ( 
    <>
    <Header />
    <div className='container'> 
        <div className="row "> 

            <div style={{marginTop:'4px',marginBottom:'20px'}} className="col-lg-8 col-md-8 col-sm-8 col-12">
                <div  >
                    <div style={{backgroundColor:'white'}} className=' p-2 d-flex justify-content-between'>
                        <div>
                            <p> <span className='text-secondary fw-bold fs-5'>Login</span></p>
                            <p> <span className='fw-bold'>{user.name} </span>+{user.phone} </p>
                        </div>
                        
                        <Link  style={{height:'35px' }} className="btn btn-outline-primary" to={`/update/user/${user._id}`} >
                            <i className="fa-solid fa-pen-to-square" /> 
                        </Link>
                    </div>

                    <div style={{backgroundColor:'white'}} className=' p-2 d-flex justify-content-between my-3'>
                        <div>
                            <p className='text-secondary fw-bold fs-5'>Delivery details</p> 
                            <p> <span className='fw-bold'>{user.name}, </span> {user.address} </p> 
                        </div>

                        <Link  style={{height:'35px' }} className="btn btn-outline-primary" to={`/update/user/${user._id}`} >
                            <i className="fa-solid fa-pen-to-square" /> 
                        </Link>
                    </div>


                    <div style={{ backgroundColor: 'white' }} className=" p-3 ">
                      <p className='bg-primary p-2'> <span style={{marginLeft:'30px',marginTop:'30px'}} className='text-light fw-bold'>PAYMENT OPTIONS</span> </p>  
                        <div style={{cursor:'not-allowed'}}>
                            <input style={{cursor:'not-allowed'}} type="radio" name="payment" id="upi" disabled />
                            <label style={{ marginLeft: '15px' }} htmlFor="upi">UPI</label>
                            <p style={{ color: '#878787', marginLeft: '30px' }}>Pay by any UPI app</p>
                        </div>

                        <div style={{cursor:'not-allowed'}}>
                            <input style={{cursor:'not-allowed'}} type="radio" name="payment" id="card" disabled />
                            <label style={{ marginLeft: '15px' }} htmlFor="card">Credit/Debit/ATM Card</label>
                            <p style={{ color: '#878787', marginLeft: '30px' }}>Add and secure cards as per RBI guidelines</p>
                        </div>

                        <div style={{cursor:'not-allowed'}}>
                            <input style={{cursor:'not-allowed'}} type="radio" name="payment" id="netbanking" disabled />
                            <label style={{ marginLeft: '15px' }} htmlFor="netbanking">Net Banking</label>
                            <p style={{ color: '#878787', marginLeft: '30px' }}>This instrument has low success, use UPI or cards for better experience</p>
                        </div>

                        <div>
                            <input type="radio" name="payment" id="cod" defaultChecked/>
                            <label style={{ marginLeft: '15px' }} htmlFor="cod">Cash On Delivery</label>
                            <p style={{ color: '#878787', marginLeft: '30px' }}>Due to handling costs, a nominate fee of {payment_handling_fee} will be charged</p>
                        </div>


                        <div className="d-flex flex-wrap justify-content-between gap-2">
                            <div>
                                <input 
                                    className="text-center fw-bold fs-5" 
                                    style={{ borderRadius: "5px", width: "150px", color: "green" }} 
                                    type="text" 
                                    value={captcha} 
                                    readOnly 
                                />
                                <button
                                    style={{ borderRadius: "5px", backgroundColor: "#ddd", padding:'3px 10px' }}
                                    onClick={() => setCaptcha(generateCaptcha())}
                                > 🔄 </button>
                            </div>
                            <input className='text-center'
                                style={{ borderRadius: "5px", width: "150px" }} 
                                type="text" 
                                name="captcha" 
                                id="captcha" 
                                placeholder="Enter the captcha"
                                value={userCaptcha}
                                onChange={(e) => setUserCaptcha(e.target.value)}
                            />
                            <button 
                                style={{ backgroundColor: "#ff9f00" }} 
                                className="btn" 
                                onClick={handleConfirmOrder}
                            >CONFIRM ORDER</button>
                        </div>
         
                    </div>
  
                </div>
            </div> 

        {/* price details section  */}

        <div  style={{ height:'360px', marginTop:'4px',backgroundColor:'white'}} className='col-lg-4 col-md-4 col-sm-4 col-12 border'>
            <div style={{marginTop:'14px'}}>
                
                <p className='text-secondary fw-bold'>PRICE DETAILS</p> 

                <div className='d-flex justify-content-between'>
                    <p>Price(1 item)</p>
                    <p>₹{product.price}</p>
                </div>

                <div className='d-flex justify-content-between'>
                    <p>Delivery Charges</p>
                    <p>Free</p>
                </div>

                <div className='d-flex justify-content-between'>
                    <p>Platform Fee</p>
                    <p>₹{platform_fee}</p>
                </div>

                <div className='d-flex justify-content-between'>
                    <p>Payment Handling Fee</p>
                    <p>₹{payment_handling_fee}</p>
                </div>

                <hr style={{border:'none', borderTop:'2px dotted black'}}/>


                <div className='d-flex justify-content-between'>
                    <p className=' fw-bold'>Amount Payable</p>
                    <p className=' fw-bold'>₹{product.price + platform_fee + payment_handling_fee}</p>
                </div>
                <hr style={{border:'none', borderTop:'2px dotted black'}}/>

    
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Checkout
