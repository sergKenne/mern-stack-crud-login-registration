import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import { Route, Routes } from 'react-router-dom';

function App() {
    const user = false;
    return (
        <div className="grid">
            <Routes>
                <Route exact path="/" element={ user ? <Home /> : <Login/>} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Registration />} />
            </Routes>
        </div>
    );
}

export default App;
