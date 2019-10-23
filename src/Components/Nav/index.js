import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

const NavBar = props => {
  const [loggedIn, setLoggedIn] = useState();

  useEffect(() => {
    setLoggedIn(props.token);
  }, [props.token]);

  return (
    <Navbar color="light" light expand="md">
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </NavItem>

        {loggedIn ? (
          <NavItem>
            <NavLink to="/logout" className="nav-link" activeClassName="active">
              Logout
            </NavLink>
          </NavItem>
        ) : (
          <>
            <NavItem>
              <NavLink
                to="/signup"
                className="nav-link"
                activeClassName="active"
              >
                Signup
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/login"
                className="nav-link"
                activeClassName="active"
              >
                Login
              </NavLink>
            </NavItem>
          </>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
