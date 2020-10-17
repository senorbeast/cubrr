import * as React from "react";
import PropTypes from "prop-types";
import {
    SidebarContainer,
    CloseIcon,
    Icon,
    SidebarLink,
    SidebarRoute,
    SidebarWrapper,
    SidebarMenu,
    SideBtnWrap,
} from "./SidebarElements";
import { Link } from "react-router-dom";
import { SignInBut } from "../BasicElements";

const Sidebar = (props) => {
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
                </SidebarWrapper>
            </SidebarContainer>
        </>
    );
};

export default Sidebar;
