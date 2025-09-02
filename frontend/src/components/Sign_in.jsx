import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Css/Sign_in.css";
import sign_in from "../assets/svg_&_images/sign-in.svg";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
   
function Sign_in() {  
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");  

        try {
            const response = await axios.post("http://localhost:4000/api/user/login", { 
                email, 
                password 
            });  
  
            if (response.data.success) {
                const { token, userId } = response.data; // ✅ Get token and user details

                // ✅ Store token & user details in localStorage
                localStorage.setItem("token", token);
                localStorage.setItem("userId", JSON.stringify(userId));
                
                console.log(userId);

                // ✅ Navigate to User Dashboard/Profile Page
                toast.success("Signed in successfully!", { position: "top-right" });
                navigate(`/user/${userId}`);

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
                            <p className="text-center">Welcome back to Folk Tunes!</p>
                        </div>

                        {error && <p className="text-danger text-center">{error}</p>}

                        <form onSubmit={handleSubmit}>
                            <div className="d-flex justify-content-center align-items-center">
                                <input
                                    className="custom-input"
                                    type="text"
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
                                    placeholder="Enter Your Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="d-flex justify-content-center align-items-center">
                                <input
                                    className="hover"
                                    id="custom-btn"
                                    type="submit"
                                    value="Sign in"
                                    style={{ color: "white" }}
                                />
                            </div>
                        </form>

                        <div className="py-3 d-flex justify-content-center align-items-center">
                            <p>Don't have an account? <Link to='/sign-up'>Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sign_in;
