import React, {useState, useEffect} from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer';
import PreNavText from './Other/PreNavText';

const Layout = () => {

    const location = useLocation();

    useEffect(() => {
    }, [location.pathname])

    return (
        <div style={{width: '100%'}}>
            <PreNavText />
            <Navbar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout
