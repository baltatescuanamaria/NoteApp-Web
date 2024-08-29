import React from 'react';
import './DashboardPage.css';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {

    const navigate = useNavigate();

    const handleClick3 = () =>  {
        navigate('/NewNotePage')
    }

    const handleClick4 = () =>  {
        navigate('/DashboardPage')
    }
    
    const handleClick5 = () =>  {
        navigate('/EditPage')
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
                    <botton className="add" onClick={handleClick3}>+</botton>
                </div>
                <div className='notes-list'>
                    <button className="link" onClick={handleClick5}>Note1</button>
                </div>
            </div>
        <div className='dashboard'>
            <h1>Dashboard</h1>  
            <h2>Pinned Notes</h2> 
            <div className="pinned-notes">
               <div className="note" onClick={handleClick6}>
                    <p className="title-note">Title</p>
                    <p className="title-note">Text</p>
                </div> 
               <div className="note"></div> 
               <div className="note"></div> 
            </div>
            <h2>Latest Notes</h2> 
            <div className="latest-notes">
               <div className="note"></div> 
               <div className="note"></div> 
               <div className="note"></div> 
            </div>
        </div>
        </div>
    )
}

export default DashboardPage