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

const Header = () => {
  const userId=window.location.pathname.replace("/user/","")

  const [tab, setTab] = useState(window.location.pathname);
  return (
    <div className="header">
      <Link to="/" onClick={() => setTab("/")}>
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

      <Link to="/account" onClick={() => setTab("/account")}>
        {tab === "/account" ? (
          <AccountCircle style={{ color: "black" }} />
        ) : (
          <AccountCircleOutlined />
        )}
      </Link>
      <Link to={`/report`}  onClick={() => setTab("/report")}>
        {tab === "/report" ? (
          <BookmarksRounded style={{ color: "black" }} />
        ) : (
          <BookmarksRounded />
        )}
      </Link>
    </div>
  );
};

export default Header;
