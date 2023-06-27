import React from 'react';
import {Outlet, NavLink, Route, Routes, useLocation} from 'react-router-dom';
import styles from './Portal.module.css';
import ISRO from './NewsContent/ISRO';
import UPI from './NewsContent/UPI';

const Portal = () => {
    const location = useLocation();

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>News Portal</h1>
            <nav className={styles.tabs}>
                <NavLink
                    to="isro"
                    style={{
                        color: location.pathname === '/portal/isro' ? 'blue' : 'inherit',
                        borderBottom: location.pathname === '/portal/isro' ? '2px solid blue' : 'none'
                    }}
                >
                    ISRO
                </NavLink>
                <NavLink
                    to="upi"
                    style={{
                        color: location.pathname === '/portal/upi' ? 'blue' : 'inherit',
                        borderBottom: location.pathname === '/portal/upi' ? '2px solid blue' : 'none'
                    }}
                >
                    UPI
                </NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Outlet/>}/>
                <Route path="isro" element={<ISRO/>}/>
                <Route path="upi" element={<UPI/>}/>
            </Routes>
        </div>
    );
};

export default Portal;
