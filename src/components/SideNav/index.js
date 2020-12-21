import React from "react";
import {
    SideNavContainer,
    SideNavMenu,
    SideNavItem,
    SideNavItemBtn,
} from "./SideNavElements";
//import * as modes from "../CubeD/modes";
import { BiHomeHeart } from "react-icons/bi";
import { FaSun, FaMoon } from "react-icons/fa";
import { VscBook } from "react-icons/vsc";

const SideNav = (props) => {
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
        <SideNavContainer>
            <SideNavMenu>
                <SideNavItemBtn to="/">
                    <BiHomeHeart />
                </SideNavItemBtn>
                <SideNavItem onClick={algModeT}>
                    <VscBook size={25} />
                </SideNavItem>
                <SideNavItem>3</SideNavItem>
                <SideNavItem>4</SideNavItem>
                <SideNavItem>5</SideNavItem>
                <SideNavItem>6</SideNavItem>
                <SideNavItemBtn onClick={changeTheme}>{icon}</SideNavItemBtn>
            </SideNavMenu>
        </SideNavContainer>
    );
    function algModeT() {
        console.log("Alg mode ", props.mode);
        let amodeto = props.mode == "algM" ? "scraM" : "algM";
        props.setMode(amodeto);
    }
};

export default SideNav;
