import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './../Components/Pages/HomePage/HomePage';
import ProductDetails from './../Components/Pages/ProductDetails/ProductDetails';
import CartPage from './../Components/Pages/CartPage/CartPage';
import NotificationPage from '../Components/Pages/NotificationPage/NotificationPage';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:productId" element={<ProductDetails />} />
                <Route path='/cart/:productId' element={<CartPage />} />
                <Route path='/notifications' element={<NotificationPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
