import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const See_Orders = () => {
    const supplierId = localStorage.getItem("supplierId")?.replace(/"/g, ""); 
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (supplierId) {
            fetchOrders();  
        }
    }, [supplierId]);

    const fetchOrders = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/orders/supplier/${supplierId}`);
            setOrders(response.data);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };
     
    const markAsDelivered = async (orderId, productId) => {
        console.log("Updating status for:", { orderId, productId }); // Debug log
    
        try {
            await axios.put("http://localhost:4000/api/orders/updateStatus", {
                orderId,
                productId,
                status: "delivered"
            });
    
            setOrders(prevOrders =>
                prevOrders.map(order => ({
                    ...order,
                    products: order.products.map(product =>
                        product._id === productId ? { ...product, status: "delivered" } : product
                    )
                }))
            );
        } catch (error) {
            console.error("Error updating order status:", error);
        }
    };
    

    return (
        <div>
            <div id="hideHeaderNavbar">
                <Header />
                <Navbar />
            </div>
             

            <div style={{padding:'8px'}} className="product-card">
                <Link className="btn btn-secondary back-button" to={`/supplier/${supplierId}`}>
                    <i style={{ marginRight: "4px" }} className="fa-solid fa-backward"></i>Back
                </Link>
                <h3 className="text-center">Orders</h3>

                <table className="table table-bordered product-table">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Customer Name</th>
                            <th>Product Name</th>
                            <th>Product Category</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Delivery Status</th>
                        </tr>   
                    </thead>
                    <tbody>
                        {orders.length > 0 ? (
                            orders.flatMap((order, index) =>
                                order.products.map((product, prodIndex) => (
                                    <tr key={`${order._id}-${prodIndex}`}>
                                        <td>{index + 1}.{prodIndex + 1}</td>
                                        <td>{order.userId?.name || "Unknown"}</td>
                                        <td>{product.name}</td>
                                        <td>{product.category || "N/A"}</td>
                                        <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                                        <td>₹{product.price}</td>
                                        <td>
                                            {product.status === "delivered" ? (
                                                <span className="text-success">Delivered</span>
                                            ) : (
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={() => markAsDelivered(order._id, product._id)}
                                                >
                                                    Mark as Delivered
                                                </button>
                                            )}
                                        </td> 
                                    </tr>
                                ))
                            )
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center">No orders found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default See_Orders;
