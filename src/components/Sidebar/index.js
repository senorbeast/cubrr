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
import { SignInBut, MTTag } from "../BasicElements";

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
                    </SidebarMenu>

                    <SideBtnWrap>
                        <SignInBut to="/signin">Sign In</SignInBut>
                    </SideBtnWrap>
                    <MTTag></MTTag>
                    <ThemeBtn onClick={changeTheme}>{icon}</ThemeBtn>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    );
};

export default Sidebar;
