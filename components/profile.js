import React from 'react';
import "../styles/profile.css";

function Profile(props) {
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
    function getRow(title,content) { return <span key={title} className="profileRow">
      <h5 className="profileContent">{title}</h5>
      <h5 className="profileContentColor">{content}</h5>
    </span>;
    }
   
    return <div>
        <h3  className="profileMainContent">Profile</h3>
        <span className="profileMainContent">
            <img src={props.profile.avatarImage} width="150" height="150"/>
            <span>
                {getRow("First Name", props.profile.firstName)}
                {getRow("Last Name", props.profile.lastName)}
                {getRow("Phone", props.profile.phone)}
                {getRow("Email", props.profile.email)}
                {getRow("Bio", props.profile.bio)}
            </span>
        </span>
    </div>;
}

export default Profile;