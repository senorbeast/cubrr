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
import { TiThList } from "react-icons/ti";

interface SNprops {
    mode: string;
    setMode: React.Dispatch<React.SetStateAction<string>>;
    theme: string;
    setTheme: React.Dispatch<any>;
}
const SideNav = (props: SNprops) => {
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
        <SideNavContainer>
            <SideNavMenu>
                <SideNavItemBtn to="/">
                    <BiHomeHeart />
                </SideNavItemBtn>
                <SideNavItem onClick={algModeT}>
                    <VscBook size={25} />
                </SideNavItem>
                <SideNavItemBtn to="/algstrainer">
                    <TiThList />
                </SideNavItemBtn>
                <SideNavItem>4</SideNavItem>
                <SideNavItem>5</SideNavItem>
                <SideNavItem>6</SideNavItem>
                <SideNavItem onClick={changeTheme}>{icon}</SideNavItem>
            </SideNavMenu>
        </SideNavContainer>
    );
    function algModeT() {
        console.log("Alg mode ", props.mode);
        let amodeto = props.mode === "algM" ? "scraM" : "algM";
        props.setMode(amodeto);
    }
};

export default SideNav;
