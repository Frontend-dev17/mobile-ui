import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './../Components/Pages/HomePage/HomePage';
import ProductDetails from './../Components/Pages/ProductDetails/ProductDetails';
import CartPage from './../Components/Pages/CartPage/CartPage';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:productId" element={<ProductDetails />} />
                <Route path='/cart/:productId/:productSize' element={<CartPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
