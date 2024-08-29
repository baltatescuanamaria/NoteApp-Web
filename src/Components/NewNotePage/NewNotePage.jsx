import React from 'react';
import './NewNotePage.css';
import { useNavigate } from 'react-router-dom';

const NewNotePage = () => {

    const navigate = useNavigate();

    const handleClick4 = () =>  {
        navigate('/DashboardPage')
    }
    const handleClick5 = () =>  {
        navigate('/DashboardPage')
    }
    const handleClick6 = () =>  {
        navigate('/EditPage')
    }

    return (
        <div className="page">
            <div className="side-bar">
                <h3>John Doe</h3>
                <p className="email">johndoe@gmail.com</p>
                <botton className="link" onClick={handleClick4}>Dashboard</botton>
                <botton className="link">Account</botton>
                <botton className="link">Settings</botton>
                <div className="notes">
                    <h3 className="title-notes">Notes</h3>
                    <botton className="add">+</botton>
                </div>
                <div className="notes-list">
                    <button className="link" onClick={handleClick6}>Note1</button>
                </div>   
            </div>
            <div className='note-body'>
                <div className = "title-box">
                    <input className="title" placeholder='New note'></input>
                    <div className="check">
                        <input className="important" type='checkbox'/>
                        <label className="container">Important</label>
                    </div>
                </div>
                <textarea className="text" placeholder='Write here...'></textarea>
                <div className="btn">
                    <button className="save-btn" onClick={handleClick5}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default NewNotePage