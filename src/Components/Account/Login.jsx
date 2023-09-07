import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    if (isLoggedIn) {
        return null; 
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const response = await fetch('https://use2fun.onrender.com/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: email,
                    password: password,
                }),
            });

            const data = await response.json();

            if (data.status === 1) {
                toast.success("Login Successful")
                localStorage.setItem('MasterAdmintoken', data.data.token);
                setIsLoggedIn(true); 
                navigate('/');
                window.location.reload();
            } else {
                console.log('Login failed'); 
                toast.error("Error while Login")
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };


    const handleNavigate = () => {
        navigate("/change-password")
    }

    return (
        <>
            <h3>Admin Login</h3>
            <div
                style={{boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset", top: "0", display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>

                <section className="container ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <form onSubmit={handleLogin}>
                                {/* Email input */}
                                <div className="form-outline mb-4">
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        placeholder="admin@gmail.com"
                                        autoComplete="email"
                                        required

                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                {/* Password input */}
                                <div className="form-outline mb-4">
                                    <input
                                        type="text"
                                        id="password"
                                        className="form-control"
                                        placeholder="admin123"
                                        autoComplete="current-password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <button style={{border:"none"}} onClick={handleNavigate}>Forgot password?</button>
                                </div>

                                {/* Submit button */}
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    
                                >
                                    Sign in
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Login;