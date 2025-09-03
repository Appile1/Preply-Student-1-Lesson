import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Paths } from "../../utils/paths.ts";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";

const Layout = () => {
  /**
   * useSelector:
   * - React-Redux hook to access the Redux store state.
   * - Here we extract the "authUser" string from state.auth.
   * - If no user is logged in, authUser will be an empty string "".
   */
  const authUser = useSelector(
    (state: { auth: { authUser: string } }) => state.auth.authUser
  );

  return (
    <div>
      {/* ------------------ Navigation Section ------------------ */}
      {/* 
        This <nav> holds the main navigation menu for the app.
        Each <NavLink> is a React Router link that changes the route.
        "Paths" is a helper object that stores route constants (cleaner than hardcoding paths).
        When clicked, each NavLink will render the respective page inside <Outlet>.
      */}
      <nav>
        <ul className="nav-list">
          <NavLink to={Paths.HOME}>
            <li>Home</li>
          </NavLink>
          <NavLink to={Paths.CART}>
            <li>ShoppingCart</li>
          </NavLink>
          <NavLink to={Paths.CUSTOMERS}>
            <li>Customers</li>
          </NavLink>
          <NavLink to={Paths.ORDERS}>
            <li>Orders</li>
          </NavLink>
          <NavLink to={Paths.PRODUCTS}>
            <li>Products</li>
          </NavLink>
        </ul>
      </nav>

      {/* ------------------ User Info Section ------------------ */}
      {/* 
        If "authUser" is not empty, it means a user is logged in.
        - We show the username in plain text.
        - We also show a Material-UI Avatar component:
          → Displays the first character of the user's name.
          → Example: "Ahmad" → "A".
        - Flexbox is used to align the name + avatar to the right corner.
      */}
      {authUser && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end", // push content to the right
            padding: "10px",
            gap: "10px", // space between name and avatar
          }}
        >
          {/* Show the full user name */}
          <span>{authUser}</span>

          {/* Avatar with first letter of username, capitalized */}
          <Avatar>{authUser.charAt(0).toUpperCase()}</Avatar>
        </div>
      )}

      {/* ------------------ Content Section ------------------ */}
      {/* 
        <Outlet> is where child routes are rendered.
        Example:
          If the user clicks "Products", 
          React Router will load the <Products /> page inside this Outlet.
      */}
      <Outlet />
    </div>
  );
};

export default Layout;
