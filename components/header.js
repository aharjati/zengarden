import React from 'react';
import "../styles/header.css";
import {Link} from "react-router-dom";

function Header(props) {
    //props contains site and profile object
    //site :
    /*{
        "title": "Earthquake Zen Garden",
        "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Arenal_Volcano_07_2015_CRI_3828.jpg/1920px-Arenal_Volcano_07_2015_CRI_3828.jpg",
        "logoImage": "https://www.realtor.com/realtor-com.png"
      }

    "profile": {
        "firstName": "Sally",
        "lastName": "Wang",
        "avatarImage": "https://upload.wikimedia.org/wikipedia/commons/5/59/That_Poppy_profile_picture.jpg",
        "phone": "01-343-989-2345",
        "email": "sw@nowhere.ic.kp",
        "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    
      }
      */
        
    return <div className="headerDiv">
        <div  className="headerLeft">
        <Link to="/"><img src={props.site.logoImage} width="35" height="35"/></Link>
        </div>
        <h2 className="headerMid">{props.site.title}</h2>
        <div className="headerRight">
            <Link to="/profile">Welcome {props.profile.firstName}</Link>
        </div>
        
    </div>;
}

export default Header;