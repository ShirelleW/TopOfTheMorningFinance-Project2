import React from 'react';
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
// Style
import '../../CSS/LoginCSS/style.css'

const Login = ({ setUser }) => {

    const [userName, setUserName] = useState('')
    const navigate = useNavigate()


    const handleChange = (e) => {
        setUserName(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(userName);
        navigate('/') 
    }


        return (
            <div id="login-body">
                <div className="text-center">
                    <form id="login-form"
                        onSubmit={handleSubmit}>
                        <img className="mb-4" src="https://news.tradimo.com/wp-content/uploads/2019/11/technicalanalysis.jpg" alt="" width="250" height="250" />
                        <h1 className="h3 mb-3 fw-normal"></h1>

                        <div className="form-floating">
                            <input type="username" className="form-control" id="floatingInput" placeholder="Username" value={userName}
                                onChange={handleChange} />
                            <label htmlFor="floatingInput">User Name</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Log in</button>

                    </form>
                </div>
            </div>
        );
}

export default Login