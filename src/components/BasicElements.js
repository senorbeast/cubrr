import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignInBut = styled(Link)`
    border-radius: 50px;
    background: ${(props) => props.theme.highlight};
    white-space: nowrap;
    padding: 15px 48px;
    color: ${(props) => props.theme.highopp};
    font-size: 1.1rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.priopp};
    }
`;

export const MTTag = styled.div`
    display: grid;
    height: 3rem;
`;
