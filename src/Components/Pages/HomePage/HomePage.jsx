import "./HomePage.scss";

import { useState } from "react";

import Header from "../../Shared/Header/Header";
import { ReactComponent as SearchIcon } from "../../../Constant/Svg/SearchIcon.svg"
import { ReactComponent as FilterIcon } from "../../../Constant/Svg/FilterIcon.svg"
import ProductCard from "../ProductCard/ProductCard";

import SHOP_DATA from './../../../products';
import Footer from "../../Shared/Footer/Footer";


const HomePage = () => {
    const [selectedOption, setSelectedOption] = useState("All")
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="home-page-container">
            <Header headerText="Discover" />
            <div className="search-filter-section">
                <div className="search-container">
                    <input type="search" placeholder="Search anything" />
                    <span className="search-icon"><SearchIcon /></span>
                </div>
                <span><FilterIcon /></span>
            </div>
            <div className="category-filters">
                <span
                    className={`filter-option ${selectedOption === 'All' ? 'selected' : ''}`}
                    onClick={() => handleOptionClick('All')}
                >
                    All
                </span>
                <span
                    className={`filter-option ${selectedOption === 'Men' ? 'selected' : ''}`}
                    onClick={() => handleOptionClick('Men')}
                >
                    Men
                </span>
                <span
                    className={`filter-option ${selectedOption === 'Women' ? 'selected' : ''}`}
                    onClick={() => handleOptionClick('Women')}
                >
                    Women
                </span>
                <span
                    className={`filter-option ${selectedOption === 'Kids' ? 'selected' : ''}`}
                    onClick={() => handleOptionClick('Kids')}
                >
                    Kids
                </span>
            </div>

            {selectedOption === 'All' &&
                <div className="product-layout">
                    {SHOP_DATA.map((section) => (
                        <div key={section.title}>
                            <div className="products-container">

                                {
                                    section.items.map((item) => (
                                        <ProductCard key={item.id} imageUrl={item.imageUrl}
                                            name={item.name}
                                            price={item.price}
                                            productId={item.id}
                                        />
                                    ))
                                }
                            </div>

                        </div>
                    ))}
                </div>
            }
            {selectedOption === 'Men' && (
                <div className="product-layout">
                    {SHOP_DATA.map((section) => {
                        if (section.title === 'Mens') {
                            return (
                                <div key={section.title}>
                                    <div className="products-container">
                                        {section.items.map((item) => (
                                            <ProductCard
                                                key={item.id}
                                                imageUrl={item.imageUrl}
                                                name={item.name}
                                                price={item.price}
                                                productId={item.id}

                                            />
                                        ))}
                                    </div>
                                </div>
                            );
                        }
                        return null; // Return null for other sections to skip them
                    })}
                </div>
            )}
            {selectedOption === 'Women' && (
                <div className="product-layout">
                    {SHOP_DATA.map((section) => {
                        if (section.title === 'Womens') {
                            return (
                                <div key={section.title}>
                                    <div className="products-container">
                                        {section.items.map((item) => (
                                            <ProductCard
                                                key={item.id}
                                                imageUrl={item.imageUrl}
                                                name={item.name}
                                                price={item.price}
                                                productId={item.id}

                                            />
                                        ))}
                                    </div>
                                </div>
                            );
                        }
                        return null; // Return null for other sections to skip them
                    })}
                </div>
            )}

            {selectedOption === 'Kids' && (
                <div className="product-layout">
                    {SHOP_DATA.map((section) => {
                        if (section.title === 'Kids') {
                            return (
                                <div key={section.title}>
                                    <div className="products-container">
                                        {section.items.map((item) => (
                                            <ProductCard
                                                key={item.id}
                                                imageUrl={item.imageUrl}
                                                name={item.name}
                                                price={item.price}
                                                productId={item.id}

                                            />
                                        ))}
                                    </div>
                                </div>
                            );
                        }
                        return null; // Return null for other sections to skip them
                    })}
                </div>
            )}


            <Footer />
        </div>
    )
}

export default HomePage