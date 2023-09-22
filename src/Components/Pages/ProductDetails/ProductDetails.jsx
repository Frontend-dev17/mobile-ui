import "./ProductDetails.scss"

import Header from "../../Shared/Header/Header"
import { ReactComponent as HeartIcon } from "../../../Constant/Svg/HeartIcon.svg"
import { ReactComponent as StarIcon } from "../../../Constant/Svg/StarIcon.svg"
import { ReactComponent as CartIcon } from "../../../Constant/Svg/CartIcon.svg"


import { Link, useNavigate, useParams } from 'react-router-dom';
import SHOP_DATA from './../../../products';
import { useContext, useState } from "react";
import { CartContext } from "../../../Contexts/CartContext"



const ProductDetails = () => {
    const { productId } = useParams();
    const navigate = useNavigate()

    const [colorChange, setColorChange] = useState(false);
    const [selectedSize, setSelectedSize] = useState('S');
    const { dispatch } = useContext(CartContext)

    const product = SHOP_DATA
        .flatMap((section) => section.items)
        .find((item) => item.id === parseInt(productId, 10)); // Parse productId to integer


    if (!product) {
        return <div>Product not found</div>;
    }


    const handleColorChange = () => {
        setColorChange((prevHeartColor) => !prevHeartColor);
    };


    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    const addToCart = () => {
        // Dispatch an action to add the product to the cart
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    return (
        <div className="product-details-container">
            <Header showArrow headerText="Details" handleArrow={() => navigate("/")} />
            <div className="image-container">
                <img src={product.imageUrl} alt={product.name} className="product-image" />
                <span className="heart-icon">
                    <HeartIcon className={`heart ${colorChange ? 'pink-clr' : ''}`}
                        onClick={handleColorChange} />
                </span>
            </div>
            <div className="name-review-section">
                <div className="name">{product.name}</div>
                <div className="rating"> <StarIcon /> {product.rating} <span className="review">{product.reviews}</span></div>
            </div>
            <div className="product-size-text">
                The name says it all, the right size sligtly snugs the body leaving enough room for comfort in the sleeves and waist.
            </div>
            <div className="size-options-section">
                <div className="size">Choose Size</div>
                <div className="size-options">
                    <div
                        className={`size-option ${selectedSize === 'S' ? 'selected' : ''}`}
                        onClick={() => handleSizeClick('S')}
                    >
                        S
                    </div>
                    <div
                        className={`size-option ${selectedSize === 'M' ? 'selected' : ''}`}
                        onClick={() => handleSizeClick('M')}
                    >
                        M
                    </div>
                    <div
                        className={`size-option ${selectedSize === 'L' ? 'selected' : ''}`}
                        onClick={() => handleSizeClick('L')}
                    >
                        L
                    </div>
                </div>
            </div>
            <div className="size-selected">
                <span>{`${selectedSize}`}</span> size is selected proceed with Add to Cart
            </div>
            <div className="price-addtocart">
                <span className="price-section">
                    <div className="name">Price</div>
                    <div className="price">INR {product.price}</div>
                </span>
                <span>
                    <Link to={`/cart/${productId}/${selectedSize}`} className="link-text">
                        <button type="button" className="cart-button" onClick={addToCart}><CartIcon className="cart-icon" />  Add To Cart</button>
                    </Link>
                </span>
            </div>

        </div>
    )
}

export default ProductDetails