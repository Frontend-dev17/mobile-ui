import "./Header.scss"

// svgs imported
import { ReactComponent as BellIcon } from "../../../Constant/Svg/BellIcon.svg"
import { ReactComponent as LeftArrow } from "../../../Constant/Svg/LeftArrow.svg"
import { useNavigate } from "react-router-dom"


const Header = ({ headerText, showArrow, handleArrow }) => {
    const navigate = useNavigate()

    return (
        <>
            <div className="logo-section" onClick={() => navigate("/")}>
                <img src="/Assests/Images/logo.png" alt="logo" className="logo" />
            </div>
            <div className='header-container'>
                <div className="header-layout">
                    {
                        showArrow && <span onClick={handleArrow}><LeftArrow /></span>
                    }
                    <span className="discover-text">{headerText}</span>
                    <span onClick={() => navigate("/notifications")}><BellIcon className="bell-icon" /></span>
                </div>
            </div>
        </>
    )
}

export default Header