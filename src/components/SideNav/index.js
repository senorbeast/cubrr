import React from 'react'
import { SideNavContainer, SideNavMenu, SideNavItem, SideNavItemBtn } from './SideNavElements';
import { BiHomeHeart } from "react-icons/bi"
import { FaSun, FaMoon } from "react-icons/fa";

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
                <SideNavItemBtn to="/"><BiHomeHeart/></SideNavItemBtn>
                <SideNavItem>2</SideNavItem>
                <SideNavItem>3</SideNavItem>
                <SideNavItem>4</SideNavItem>
                <SideNavItem>5</SideNavItem>
                 <SideNavItem>6</SideNavItem>
                <SideNavItemBtn onClick={changeTheme}>{icon}</SideNavItemBtn>
            </SideNavMenu>
        </SideNavContainer>
    )
}

export default SideNav
