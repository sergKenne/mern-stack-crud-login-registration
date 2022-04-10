import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';

function App() {
    // const navigate = useNavigate()
    const user = localStorage.getItem("token");
    console.log(user);

    return (
        <div className="grid">
            <Routes>
                <Route exact path="/" element={ user ? <Home /> : <Navigate replace to="/login" />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Registration />} />
            </Routes>
        </div>
    );
}

export default App;
