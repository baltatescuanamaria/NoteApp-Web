import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import SignInForm from './Components/SignInForm/SignInForm';
import DashboardPage from './Components/DashboardPage/DashboardPage'
import NewNotePage from './Components/NewNotePage/NewNotePage';
import EditPage from './Components/EditPage/EditPage'
function App() {

  return ( 
    <Router>
    <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/SignInForm" element={<SignInForm />} />
        <Route path="/DashboardPage" element={<DashboardPage />} />
        <Route path="/NewNotePage" element={<NewNotePage />} />
        <Route path="/EditPage" element={<EditPage />} />
    </Routes>
</Router>
  );
}

export default App;
