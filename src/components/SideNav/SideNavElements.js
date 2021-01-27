import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
//import { Link as LinkS } from "react-scroll";

export const SideNavContainer = styled.div`
    width: 5rem;
    height: calc(100vh - 1.8rem);
    position: fixed;
    background-color: ${(props) => props.theme.primary};
    border-radius: 0.75rem;
    transition: all 0.3s ease;
    @media screen and (max-width: 768px) {
        position: static;
        display: grid;
        width: 100%;
        height: 100%;
        grid-row: span 1 / auto;
        grid-column: span 3 / auto;
        margin: 0.05rem;
    }
`;

export const SideNavMenu = styled.div`
    list-style: none;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 5rem);
    @media screen and (max-width: 768px) {
        height: 4.55rem;
        padding-left: 1rem;
        padding-right: 1rem;
        flex-direction: row;
    }
`;
export const SideNavItem = styled.div`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    display: flex;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.highopp};
    color: ${(props) => props.theme.highlight};

    &:hover {
        color: ${(props) => props.theme.primary};
        background-color: ${(props) => props.theme.priopp};
        filter: brightness(1.2);
        transition: 0.2s ease-in-out;
    }
    &:last-child {
        margin-top: auto;
        filter: brightness(1.4);
    }
    @media screen and (max-width: 768px) {
        margin-left: 0.4rem;
        margin-right: 0.4rem;
        &:last-child {
            margin-top: 0;
            margin-bottom: 0;
            margin-left: auto;
            filter: brightness(1.4);
        }
    }
`;

export const SideNavItemBtn = styled(LinkR)`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    display: flex;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
    justify-content: center;
    font-size: 1.6rem;
    align-items: center;
    background-color: ${(props) => props.theme.highopp};
    color: ${(props) => props.theme.highlight};

    &:hover {
        color: ${(props) => props.theme.primary};
        background-color: ${(props) => props.theme.priopp};
        filter: brightness(1.2);
        transition: 0.2s ease-in-out;
    }
    /* &:last-child {
        margin-top: auto;
    } */
`;

// export const SideNavContainer = styled.div`

// `;
