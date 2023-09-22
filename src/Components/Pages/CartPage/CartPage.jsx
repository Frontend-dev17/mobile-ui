import "./CartPage.scss";
import Header from '../../Shared/Header/Header'

import { useNavigate, useParams } from 'react-router-dom';

import { ReactComponent as TrashBin } from "../../../Constant/Svg/TrashBin.svg"
import { ReactComponent as RightArrow } from "../../../Constant/Svg/RightArrow.svg"

import SHOP_DATA from './../../../products';
import { useContext } from "react";
import { CartContext } from "../../../Contexts/CartContext";

const CartPage = () => {
    const { productId, productSize } = useParams();
    const navigate = useNavigate()

    const { cartState, dispatch } = useContext(CartContext)

    const product = SHOP_DATA
        .flatMap((section) => section.items)
        .find((item) => item.id === parseInt(productId, 10)); // Parse productId to integer


    if (!product) {
        return <div>Product not found</div>;
    }

    const handleRemoveItem = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    }
    const handleIncreaseQuantity = (itemId) => {
        dispatch({ type: 'INCREASE_QUANTITY', payload: itemId });
    }

    const handleDecreaseQuantity = (itemId) => {
        dispatch({ type: 'DECREASE_QUANTITY', payload: itemId });
    }

    console.log(cartState)

    // Initialize these variables with numeric values
    let subTotal = 0;
    let vat = 0.0; // Ensure it's a decimal value (e.g., 0.0 for 0% VAT)
    let shippingFee = 80; // A fixed shipping fee
    let total = 0;


    // Calculate subTotal by considering the quantity of each item
    subTotal = cartState.cartItems.reduce((total, item) => {
        const price = parseFloat(item.price.replace(',', '')); // Parse price as a float
        const quantity = item.quantity || 1; // Default to 1 if quantity is missing
        return total + price * quantity;
    }, 0);

    // Calculate total including VAT and shipping fee
    total = subTotal + subTotal * vat + shippingFee;

    return (

        <div className='cart-page-container'>
            <Header showArrow headerText="My Cart" handleArrow={() => navigate("/")} />
            {
                cartState.cartItems.length > 0 ?
                    <>
                        <div style={{ height: "auto", marginBottom: "200px" }}>
                            <div className='checkout-item-list'>
                                {cartState.cartItems.map((item) => (

                                    <div className='checkout-item-card' key={item.id}>
                                        <span className="trash-icon" onClick={() => handleRemoveItem(item.id)}><TrashBin /></span>
                                        <div className="image-section">

                                            <img src={item.imageUrl} alt={item.name} className='product-image' />
                                        </div>
                                        <div className='details'>
                                            <div className='name'>{item.name}</div>
                                            <div className='size'>Size: {`${productSize}`} </div>
                                            <div className='price'>
                                                <div className="price-amount">INR {item.price}</div>
                                            </div>
                                        </div>
                                        <div className="actions-section">
                                            <span className='actions' onClick={() => handleDecreaseQuantity(item.id)}>&minus;</span>
                                            <span>{item.quantity}</span>
                                            <span className='actions' onClick={() => handleIncreaseQuantity(item.id)}>+</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="voucher">
                                <input type="text" placeholder="Add a voucher" className="voucher-input" />
                            </div>
                            <div className="checking-out-details">
                                <div className="pricing-details">
                                    <span className="title">Sub-total</span>
                                    <span className="price">INR {subTotal}</span>
                                </div>
                                <div className="pricing-details">
                                    <span className="title">VAT(%)</span>
                                    <span className="price">INR {vat}</span>
                                </div>
                                <div className="pricing-details">
                                    <span className="title">Shipping fee</span>
                                    <span className="price">INR {shippingFee}</span>
                                </div>
                            </div>
                            <hr className="hr-tile" />
                            <div className="total-section">
                                <span className="total">Total</span>
                                <span className="price">INR {total}</span>
                            </div>
                            <div className="checkout-btn-section">
                                <button type="button" className="checkout-btn">Checkout <RightArrow className="right-arrow" /></button>
                            </div>
                        </div>
                    </>
                    :
                    <div className="cart-epmty-text">Cart is empty add items to cart</div>
            }
        </div>
    )
}

export default CartPage