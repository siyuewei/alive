import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './menu.scss';
import HomeView from '../Views/HomeView';

const Menu = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <Router>
            <input type="checkbox" id="navcheck" checked={navOpen} onChange={toggleNav} />
            <label htmlFor="navcheck">
                <span className="burger"></span>
            </label>
            <nav>
                <Link to="/" onClick={toggleNav}>
                    健康主页
                </Link>
                <Link to="/data" onClick={toggleNav}>
                    健康数据
                </Link>
                <Link to="/goal" onClick={toggleNav}>
                    我的目标
                </Link>
            </nav>
            <main>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<HomeView />} />
                        <Route path="/data" element={<HomeView />} />
                        <Route path="/goal" element={<HomeView />} />
                    </Routes>
                </div>
            </main>
        </Router>
    );
};

export default Menu;
