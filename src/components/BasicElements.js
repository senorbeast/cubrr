import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

export const TypographySC = styled(Typography)`
    && {
        color: ${(props) => props.theme.priopp};
        background-color: ${(props) => props.theme.primary};
        height: calc(100vh - 5rem);
    }
`;

export const ButtonSC = styled(Button)`
    && {
        color: ${(props) => props.theme.highopp};
        background-color: ${(props) => props.theme.highlight};
    }
`;

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
