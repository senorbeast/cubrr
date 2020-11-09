import * as React from "react";
import PropTypes from "prop-types";
import { FaSun, FaMoon } from "react-icons/fa";
import {
    SidebarContainer,
    CloseIcon,
    Icon,
    SidebarLink,
    SidebarRoute,
    SidebarWrapper,
    SidebarMenu,
    SideBtnWrap,
    ThemeBtn,
} from "./SidebarElements";
import { Link } from "react-router-dom";
import { SignInBut } from "../BasicElements";

const Sidebar = (props) => {
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
        <>
            <SidebarContainer onClick={props.toggle} isOpen={props.isOpen}>
                <Icon onClick={props.toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="/cube">Cube</SidebarLink>
                        <SidebarLink to="/algstrainer">
                            Algs Trainer
                        </SidebarLink>
                        <SidebarLink to="/signup">Sign Up</SidebarLink>
                        <ThemeBtn onClick={changeTheme}>{icon}</ThemeBtn>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SignInBut to="/signin">Sign In</SignInBut>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    );
};

export default Sidebar;
