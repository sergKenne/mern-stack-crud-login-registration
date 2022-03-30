import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="grid">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/registration" element={<Registration />} />
            </Routes>
        </div>
    );
}

export default App;
