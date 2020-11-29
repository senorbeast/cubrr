import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
//import { Link as LinkS } from "react-scroll";

export const SideNavContainer = styled.div`
    width:5rem;
    height:calc(100vh - 1.8rem);
    position:fixed;
    background-color:${(props) => props.theme.primary};
    border-radius:0.75rem;
    transition: all 0.5s ease;
    @media screen and (max-width: 768px) {
        display:none;
    }

`;

export const SideNavMenu = styled.div`
    list-style:none;
    padding-top:1rem;
    padding-bottom:1rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    height:calc(100vh - 5rem);
`;
export const SideNavItem = styled.div`
    height:3rem;
    width:3rem;
    border-radius:50%;
    display:flex;
    margin-top:0.4rem;
    margin-bottom:0.4rem;
    justify-content:center;
    align-items:center;
    background-color:${(props) => props.theme.highopp};
    color: ${(props) => props.theme.highlight};
    
      &:hover {
        color: ${(props) => props.theme.primary};
        background-color:${(props) => props.theme.priopp};
        filter:brightness(1.2);
        transition: 0.2s ease-in-out;
    }
     &:last-child {
        margin-top: auto;
        filter:brightness(2);

    }
`;

export const SideNavItemBtn = styled(LinkR)`
    height:3rem;
    width:3rem;
    border-radius:50%;
    display:flex;
    margin-top:0.4rem;
    margin-bottom:0.4rem;
    justify-content:center;
    font-size:1.6rem;
    align-items:center;
    background-color:${(props) => props.theme.highopp};
    color: ${(props) => props.theme.highlight};
    
      &:hover {
        color: ${(props) => props.theme.primary};
        background-color:${(props) => props.theme.priopp};
        filter:brightness(1.2);
        transition: 0.2s ease-in-out;
        
    }
     &:last-child {
        margin-top: auto;

    }
`;

// export const SideNavContainer = styled.div`
    
// `;
