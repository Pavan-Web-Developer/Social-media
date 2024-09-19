import React, { useState } from "react";
import "./Header.css";
import { Link, useParams } from "react-router-dom";
import {
  Home,
  HomeOutlined,
  Add,
  AddOutlined,
  SearchOutlined,
  Search,
  AccountCircle,
  AccountCircleOutlined,
  NotificationsOutlined,
  ReportOff,
  ReportOutlined,
  BookmarksRounded,
} from "@mui/icons-material";
import Notification from "../Notification/Notification";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";

const Header = () => {
  const userId=window.location.pathname.replace("/user/","")
  const { user, loading: userLoading } = useSelector((state) => state.user);

  console.log("==>",user.avatar.url)
  const [tab, setTab] = useState(window.location.pathname);
  return (
    <div className="header">
      <Link to="/" className="header-icon" onClick={() => setTab("/")}>
        {tab === "/" ? <Home style={{ color: "black" }} /> : <HomeOutlined />}
      </Link>

      <Link to="/newpost" onClick={() => setTab("/newpost")}>
        {tab === "/newpost" ? (
          <Add style={{ color: "black" }} />
        ) : (
          <AddOutlined />
        )}
      </Link>

      <Link to="/search" onClick={() => setTab("/search")}>
        {tab === "/search" ? (
          <Search style={{ color: "black" }} />
        ) : (
          <SearchOutlined />
        )}
      </Link>

      <Link to="/notification" onClick={() => setTab("/notification")}>
        {tab === "/notification" ? (
          <Notification style={{ color: "black" }} />
        ) : (
          <NotificationsOutlined />
        )}
      </Link>

      <Link to="/account" className="header-icon" onClick={() => setTab("/account")}>
        {tab === "/account" ? (
          <Avatar
          src={user.avatar.url}
          sx={{ height: "8vmax", width: "8vmax" }}
        />
        ) : (
          <AccountCircleOutlined />
        )}
      </Link>
      {/* <Link to={`/report`}  onClick={() => setTab("/report")}>
        {tab === "/report" ? (
          <BookmarksRounded style={{ color: "black" }} />
        ) : (
          <BookmarksRounded />
        )}
      </Link> */}
    </div>
  );
};

export default Header;
