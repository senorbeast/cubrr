import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
//import { Link as LinkS } from "react-scroll";

export const CubeContainer = styled.li`
    background-color: white;
    border-radius: 0.25rem;
    height: 80vh;
    width: 70%;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    color: #000;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
        width: 80vh;
    }

    &:hover {
        filter: contrast(100%);
    }
`;

export const ScrambleI = styled.li`
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    display: flex;
    height: 40vh;
    flex-wrap: wrap;
    flex-direction: column;
    overflow: hidden;
    color: #000;
    &:hover {
        filter: contrast(100%);
    }
`;

export const SolutionI = styled.li`
    background-color: white;
    border-radius: 0.25rem;
    height: 40vh;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    overflow: hidden;
    color: #000;
    &:hover {
        filter: contrast(100%);
    }
`;
