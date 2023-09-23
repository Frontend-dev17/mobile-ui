import "./NotificationPage.scss";

import Header from './../../Shared/Header/Header';
import { useNavigate } from 'react-router-dom';


const NotificationPage = () => {
    const navigate = useNavigate()
    return (
        <div className='notification-page-container'>
            <Header showArrow handleArrow={() => navigate("/")} headerText="Notifications" />
            <div className='notification-text'>There are no notification yet!!</div>
        </div>
    )
}

export default NotificationPage