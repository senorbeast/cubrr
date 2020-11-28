import React from 'react'
import { SideNavContainer, SideNavMenu, SideNavItem, SideNavItemBtn } from './SideNavElements';

const SideNav = () => {
    return (
        <SideNavContainer>
            <SideNavMenu>
                <SideNavItemBtn to="/">1</SideNavItemBtn>
                <SideNavItem>2</SideNavItem>
                <SideNavItem>3</SideNavItem>
                <SideNavItem>4</SideNavItem>
                <SideNavItem>5</SideNavItem>
                 <SideNavItem>6</SideNavItem>
                <SideNavItem>7</SideNavItem>
            </SideNavMenu>
        </SideNavContainer>
    )
}

export default SideNav
