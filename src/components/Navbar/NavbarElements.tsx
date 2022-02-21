import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
//import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
    background: ${(props) => props.theme.highopp};
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and(max-width: 960px) {
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    // height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    // max-width: 1100px;
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
    height: 4.65rem; /*  for border-bottom*/
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

export const ThemeBtnN = styled.div`
    display: flex;
    align-items: center;
    height: 3rem;
    cursor: pointer;
    width: 3rem;
    border-radius: 50%;
    justify-content: center;
    text-decoration: none;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    font-size: 1.8rem;
    color: ${(props) => props.theme.priopp};
    background-color: ${(props) => props.theme.prialt};
    &:hover {
        color: ${(props) => props.theme.highlight};
        filter: brightness(1.2);
    }
`;

export const LinkItemBtn = styled(LinkR)`
    display: flex;
    align-items: center;
    height: 3rem;
    cursor: pointer;
    width: 3rem;
    border-radius: 50%;
    justify-content: center;
    text-decoration: none;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    font-size: 1.8rem;
    color: ${(props) => props.theme.priopp};
    background-color: ${(props) => props.theme.prialt};
    &:hover {
        color: ${(props) => props.theme.highlight};
        filter: brightness(1.2);
    }
`;
