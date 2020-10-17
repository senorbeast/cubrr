import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignInBut = styled(Link)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 15px 48px;
    color: #010606;
    font-size: 1.1rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;
