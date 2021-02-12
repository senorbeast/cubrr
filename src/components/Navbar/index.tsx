import React from "react";
// import { Link } from "react-router-dom";
// import logo from "./cubelogo.jpg";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import { SiNintendogamecube } from "react-icons/si";
import { HiChevronDown } from "react-icons/hi";
import { MdStyle } from "react-icons/md";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavItem,
    NavMenu,
    NavLinks,
    NavBtn,
    LinkItemBtn,
    ThemeBtnN,
} from "./NavbarElements";
import { SignInBut } from "../BasicElements";
interface CmProps {
    toggle: () => void;
    theme: string;
    setTheme: React.Dispatch<any>;
}
const Navbar = (props: CmProps) => {
    function changeTheme() {
        if (props.theme === "lightT") {
            props.setTheme("darkT");
        } else {
            props.setTheme("lightT");
        }
    }
    const icon =
        props.theme === "lightT" ? <FaMoon size={30} /> : <FaSun size={30} />;
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
                </NavMenu>
                <NavBtn>
                    <SignInBut to="/signin">Sign In</SignInBut>
                </NavBtn>
                <NavMenu>
                    <ThemeBtnN onClick={changeTheme}>
                        <MdStyle />
                    </ThemeBtnN>
                    <ThemeBtnN onClick={changeTheme}>{icon}</ThemeBtnN>
                    <ThemeBtnN onClick={changeTheme}>
                        <HiChevronDown />
                    </ThemeBtnN>
                    <LinkItemBtn to="/cube">
                        <SiNintendogamecube />
                    </LinkItemBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;
