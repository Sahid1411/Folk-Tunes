import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Css/Sign_in.css";
import sign_in from "../assets/svg_&_images/sign-in.svg";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Supplier_sign_in() {  
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {  
        e.preventDefault();
        setError("");  
           
        try {
            const response = await axios.post("http://localhost:4000/api/supplier/login", { 
                email, 
                password 
            });

            if (response.data.success) {
                const { token, supplierId } = response.data; // ✅ Get token and user details

                // ✅ Store token & user details in localStorage
                localStorage.setItem("token", token);
                localStorage.setItem("supplierId", JSON.stringify(supplierId));

                console.log(supplierId);

                // ✅ Navigate to User Dashboard/Profile Page
                toast.success("Signed in successfully!", { position: "top-right" });
                navigate(`/supplier/${supplierId}`);

            } else {
                setError(response.data.message || "Invalid credentials. Please try again.");
            }
        } catch (error) {  
            setError("Something went wrong. Please try again later.");
        }
    };


return (
    <>
    <Header />
    <Navbar />
    <div className="container">
        <div className="row">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">                        
                <img style={{ height: "100%" }} src={sign_in} alt="sign-in image" />
            </div>

            <div className="col-lg-6 py-3">
                <div>
                    <h2 className="text-center">Sign in to Folk Tunes</h2>
                    <p className="text-center">Welcome back Supplier!</p>
                </div>

                {error && <p className="text-danger text-center">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-center align-items-center">
                        <input
                            className="custom-input"
                            type="text"
                            id="username"
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="d-flex justify-content-center align-items-center">
                        <input
                            className="custom-input"
                            type="password"
                            id="password"
                            placeholder="Enter Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="d-flex justify-content-center align-items-center">
                        <input
                            style={{ color: "white" }}
                            className="hover"
                            id="custom-btn"
                            type="submit"
                            value="Sign in"
                        />


                    </div>
                </form>

                <div className="py-3 d-flex justify-content-center align-items-center">
                    <p>Don't have an account? <Link to='/suplier/sign-up'>Register</Link></p>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default Supplier_sign_in;
