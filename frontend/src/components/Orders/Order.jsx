import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

function InputCheckBox({ id, name, label, onChange, checked }) {
    return (
        <div className='my-1 container p-2'>
            <input 
                style={{ marginRight: '10px' }} 
                type="checkbox" 
                id={id} 
                name={name} 
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );   
}

function ProductBox({ order }) {
    return order.products.map((product, index) => (
        <div key={index} className=" my-3">
            <div className='row border' style={{ backgroundColor: 'white', borderRadius: '5px' }}>
                <div className="col-2 p-2 d-flex justify-content-center align-items-center">
                    <img src={`http://localhost:4000${product.photo}`} alt={product.name} style={{marginLeft:'10px', height: '80px', width: '90px' }} />
                </div>

                <div className="col-4 p-3">
                    <p style={{ fontSize: '14px' }}>{product.name}</p>
                    <p style={{ fontSize: '11px' }}>Quantity: {product.quantity}</p>
                </div>

                <div className="col-2 p-3">
                    <p>₹{product.price}</p>
                </div>
  
                <div className="col-4 p-3">
                    <p className='fw-bold' style={{ fontSize: '14px' }}>Ordered on {new Date(order.createdAt).toDateString()}</p>
                    <p style={{ fontSize: '11px' }}>
                        Status: <span className={product.status === 'delivered' ? 'text-success' : 'text-warning'}>
                            {product.status}
                        </span>
                    </p>

                </div>
            </div>
        </div>
    ));
}


    

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [selectedYear, setSelectedYear] = useState(null);
    const userId = localStorage.getItem("userId")?.replace(/"/g, "");

    useEffect(() => {
        fetchOrders();
    }, [selectedYear]);  

    const fetchOrders = async () => {
        try {
            const url = selectedYear

            ? `http://localhost:4000/api/getOrders/${userId}?year=${selectedYear}`
            : `http://localhost:4000/api/getOrders/${userId}`;
                
    
            const response = await axios.get(url);
            // console.log("Orders received:", response.data);  // Check API response
    
            setOrders(response.data);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };
    

    const handleYearChange = (year) => {
        setSelectedYear(prevYear => (prevYear === year ? null : year));
    };
    

    return (
        <>
            <Header />
            <Navbar />
            <div style={{ marginTop: '20px' }} className='container'>

                <div className="row">
                    <div style={{ backgroundColor: 'white', height: '320px' }} className="col-lg-2 col-md-2 col-sm-2 col-12 border my-3">
                        <h3 style={{ marginTop: '5px' }}>Filters</h3>
                        <div style={{ marginTop: '20px' }}>
                            <p className='fw-bold'>ORDER TIME</p>
                        </div>

                        <InputCheckBox id='_2025' name='_2025' label='2025' checked={selectedYear === '2025'} onChange={() => handleYearChange('2025')} />
                        <InputCheckBox id='_2024' name='_2024' label='2024' checked={selectedYear === '2024'} onChange={() => handleYearChange('2024')} />
                        <InputCheckBox id='_2023' name='_2023' label='2023' checked={selectedYear === '2023'} onChange={() => handleYearChange('2023')} />
                        <InputCheckBox id='_2022' name='_2022' label='2022' checked={selectedYear === '2022'} onChange={() => handleYearChange('2022')} />

                    </div>  

                    <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                        {orders.length > 0 ? (
                            orders.map(order => <ProductBox key={order._id} order={order} />)
                        ) : (
                            <div style={{height:'50vh'}} className='d-flex justify-content-center align-items-center'>

                                <p className='fw-bold fs-5'>No orders found</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </>
    );
}

export default Order;
