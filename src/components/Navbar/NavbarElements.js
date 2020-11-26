import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
//import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
    background: ${(props) => props.theme.highopp};
    height: 80px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: all 0.5s ease;
    @media screen and(max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;
export const NavLogo = styled(LinkR)`
    color: ${(props) => props.theme.priopp};
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.5s ease;
`;
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: ${(props) => props.theme.priopp};
        transition: all 0.5s ease;
    }
`;
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 0px;
    color: ${(props) => props.theme.priopp};

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
export const NavItem = styled.li`
    height: 75px; /*  for border-bottom*/
`;

export const NavLinks = styled(LinkR)`
    font-size: 1.2rem;
    color: ${(props) => props.theme.priopp};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:focus {
        border-bottom: 3px solid ${(props) => props.theme.highlight};
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
export const ThemeBtn = styled.div`
    display:flex;
    align-items: center;
    height: 50px;
    cursor: pointer;
    text-decoration:none;
    &:hover {
        color: ${(props) => props.theme.highlight};
        transition: 0.2s ease-in-out;
    }
`;
