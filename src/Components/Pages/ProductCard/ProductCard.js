import "./ProductCard.scss";

import { ReactComponent as HeartIcon } from "../../../Constant/Svg/HeartIcon.svg"
import { useState } from "react";
import { Link } from 'react-router-dom';

const ProductCard = ({ imageUrl, price, name, productId }) => {
    const [heartColorChange, setHeartColorChange] = useState(false);

    const handleColorChange = () => {
        setHeartColorChange((prevHeartColor) => !prevHeartColor);
    };

    return (
        <div className="product-card-container">
            <Link to={`/product/${productId}`}>
                <div className="image-container">
                    <img src={imageUrl} alt={name} className="product-image" />
                    <span className="heart-icon">
                        <HeartIcon className={`heart ${heartColorChange ? 'pink-clr' : ''}`}
                            onClick={handleColorChange} />
                    </span>
                </div>
            </Link>
            <div className="product-details">
                <div className="name">{name}</div>
                <div className="price">INR {price}</div>
            </div>
        </div>


    )
}

export default ProductCard;