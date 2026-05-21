import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function SignUp() {
    const navigate = useNavigate();
    const { markLoggedIn } = useAuth();

    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: "",
    });

    const { email, password, username } = inputValue;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        }
    );

    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-right",
        }
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const { data } = await axios.post(
                "http://localhost:3002/signup",
                {
                    ...inputValue,
                },
                { withCredentials: true }
            );
            console.log(data);

            const { success, message } = data;

            if (success) {
                handleSuccess(message);
                markLoggedIn(data?.user?.username || null);

                setInputValue({
                    email: "",
                    password: "",
                    username: "",
                });

                setTimeout(() => {
                    navigate("/");
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="page">
            <div className="form_container p-5 mt-5 mb-5">
                <h2>Signup Account</h2>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={handleOnChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            placeholder="Enter your username"
                            onChange={handleOnChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={handleOnChange}
                        />
                    </div>

                    <button type="submit">Submit</button>
                    <br></br>
                    <span>
                        Already have an account? 
                        <Link to={"/login"}>Login</Link>
                    </span> 
                </form>

                <ToastContainer />
            </div>
        </div>
    );
}

export default SignUp;
