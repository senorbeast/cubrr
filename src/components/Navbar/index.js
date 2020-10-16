import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
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
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">cubba</NavLogo>
                    <MobileIcon onClick={toggle}>
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
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
