import "./HomePage.scss";


import Header from "../../Shared/Header/Header";
import { ReactComponent as SearchIcon } from "../../../Constant/Svg/SearchIcon.svg"
import { ReactComponent as FilterIcon } from "../../../Constant/Svg/FilterIcon.svg"


const HomePage = () => {
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
                <span className="filter-options">All</span>
                <span className="filter-options">Men</span>
                <span className="filter-options">Women</span>
                <span className="filter-options">Kids</span>
            </div>
        </div>
    )
}

export default HomePage