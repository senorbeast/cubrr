import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavItem,
    NavMenu,
    NavLinks,
    NavBtn,
    NavBtnLink,
    ThemeBtn,
} from "./NavbarElements";
import { SignInBut } from "../BasicElements";

const Navbar = (props) => {
    function changeTheme() {
        if (props.theme === "lightT") {
            props.setTheme("darkT");
        } else {
            props.setTheme("lightT");
        }
    }
    const icon =
        props.theme == "lightT" ? <FaMoon size={30} /> : <FaSun size={30} />;
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">cubba</NavLogo>
                <MobileIcon onClick={props.toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="/cube">Cube</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/algstrainer">Algs Trainer</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/signup">Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <SignInBut to="/signin">Sign In</SignInBut>
                </NavBtn>
                <NavMenu>
                    <ThemeBtn onClick={changeTheme}>{icon}</ThemeBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;
