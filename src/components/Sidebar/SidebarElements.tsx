import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
//import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
    position: fixed;
    z-index: 999;
    height: 100%;
    width: 100%;
    background: ${(props) => props.theme.secondary};
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-outline;

    opacity: ${({ isOpen }) => (isOpen ? "100% " : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
export const CloseIcon = styled(FaTimes)`
    color: ${(props) => props.theme.priopp};
`;
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;
export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 4fr;
    text-align: center;
    justify-content: center;
    grid-template-rows: repeat(6, 60px);
    @media screen and (max-width: 768px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: ${(props) => props.theme.priopp};
    cursor: pointer;

    &:hover {
        color: ${(props) => props.theme.highlight};
        transition: 0.2s ease-in-out;
    }
`;
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    text-align: center;
`;
export const ThemeBtn = styled.div`
    display: flex;
    ${(props) => props.theme.priopp}
    //align-items: center;
    align-items: center;
    text-decoration: none;
    justify-content: center;
    text-align: center;
    position: relative;
    cursor: pointer;
    //height: 50px;
    &:hover {
        color: ${(props) => props.theme.highlight};
        transition: 0.2s ease-in-out;
    }
`;
