import React, { useState} from 'react';
import './LoginForm.css';
import { FaUser} from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }

    const navigate = useNavigate();

    const handleClick = () =>  {
        navigate('/DashboardPage')
    }

    const handleClick2 = () =>  {
        navigate('/SignInForm')
    }


    return (
        <div className='wrapper'>
           <form>
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' 
                ></input>
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder='Password'
                
                />
                
                {passwordVisible ? (
                    <IoEyeOffOutline className='icon' onClick={togglePasswordVisibility} />
                ) : (
                    <IoEye className='icon' onClick={togglePasswordVisibility} />
                )}
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot password?</a>
            </div>

            <button type="submit" onClick={handleClick}>Login</button>

            <div className="register-link">
               <p>Don't have an account? <a onClick={handleClick2}>Register</a></p>
            </div>
           </form>
        </div>
    )
}

export default LoginForm