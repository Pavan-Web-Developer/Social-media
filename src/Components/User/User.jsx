import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const User = ({ userId, name, avatar }) => {
  return (
    <div className="homeUser" >
    {/* <Link to={`/user/${userId}`} className="homeUser"> */}
    <div className="suggestion-box" >
    <div className="homeUser-img" > <img src={avatar} alt={name} /></div>
    <div className="homeUser-med" > <Typography>{name}</Typography></div>
    <div className="homeUser-follow" >follow</div>
   
     
     {/* </Link> */}
     
     </div>
    </div>  
  );
};

export default User;
