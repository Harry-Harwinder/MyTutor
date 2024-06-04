import React from 'react';
import { FaPhone, FaBook, FaUserGraduate } from 'react-icons/fa'; // Import icons from react-icons library

const Header = () => {
    return ( <
        header className = "header" >
        <
        div className = "left-section" >
        <
        div className = "icon-text" >
        <
        FaPhone className = "icon" / > 91 - 9911 - 699699 <
        /div> <
        /div> <
        div className = "center-section" >
        <
        span > TryMyTutor.com < br / > Any subject, Any class, Anywhere < /span> <
        /div> <
        div className = "right-section" >
        <
        a href = "/" >
        <
        div className = "box" >
        Become a tutor < FaUserGraduate className = "icon" / >
        <
        /div> <
        /a> <
        a href = "/" >
        <
        div className = "box" >
        Book tutor < FaBook className = "icon" / >
        <
        /div> <
        /a> <
        /div> <
        /header>
    );
}

export default Header;