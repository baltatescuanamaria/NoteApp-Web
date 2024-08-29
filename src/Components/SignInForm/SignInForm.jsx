import React, { useState } from 'react';
import './SignInForm.css';
import { FaUser} from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordVisibleSecond, setPasswordVisibleSecond] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }

    const togglePasswordVisibilitySecond = () => {
        setPasswordVisibleSecond(!passwordVisibleSecond);
    }

    const navigate = useNavigate();

    const handleClick = () =>  {
        navigate('/DashboardPage')
    }

    const handleClick2 = () =>  {
        navigate('/')
    }

    return (
        <div className='wrapper'>
           <form>
            <h1>Create your account</h1>
            <div className="input-box">
                <input type="text" placeholder='Email' ></input>
                <FaEnvelope className='icon'/>
            </div>
            <div className="input-box">
                <input type="text" placeholder='Username' ></input>
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
            <div className="input-box">
                <input
                    type={passwordVisibleSecond ? "text" : "password"}
                    placeholder='Password'
                    
                />
                
                {passwordVisibleSecond ? (
                    <IoEyeOffOutline className='icon' onClick={togglePasswordVisibilitySecond} />
                ) : (
                    <IoEye className='icon' onClick={togglePasswordVisibilitySecond} />
                )}
            </div>

            <button type="submit" onClick={handleClick}>Create account</button>

            <div className="register-link">
               <p>Have an account? <a onClick={handleClick2}>Log In</a></p>
            </div>
            
           </form>
        </div>
    )
}

export default SignInForm