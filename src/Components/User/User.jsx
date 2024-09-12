import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { followAndUnfollowUser, getUserProfile } from "../../Actions/User";
const User = ({ userId, name, avatar }) => {
  const dispatch = useDispatch();
  const { user, loading: userLoading } = useSelector((state) => state.user);
  const [following, setFollowing] = useState(false);
  const [isFollowing, setIsFollowing] = useState(
    user && user.following.some((followedUser) => followedUser._id === userId)
  );
  const {
    error: followError,
    message,
    loading: followLoading,
  } = useSelector((state) => state.like);

  const followHandler = async () => {
    setFollowing(!following);
    await dispatch(followAndUnfollowUser(userId));
    dispatch(getUserProfile(user._id));
  };
  useEffect(() => {
    setIsFollowing(
      user && user.following.some((followedUser) => followedUser._id === userId)
    );
  }, [user, userId]);
  return (
    <div className="homeUser" >
    {/* <Link to={`/user/${userId}`} className="homeUser"> */}
    <div className="suggestion-box" >
    <div className="homeUser-img" > <img src={avatar} alt={name} /></div>
    <div className="homeUser-med" > <Typography>{name}</Typography></div>
 
    <div className="homeUser-follow" 
                variant="contained"
                style={{ background: following ? "red" : "" }}
                onClick={followHandler}
                disabled={followLoading}
              >
                {following ? "Unfollow" : "Follow"}
              </div>
     
     {/* </Link> */}
     
     </div>
    </div>  
  );
};

export default User;
