import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
//import { Link as LinkS } from "react-scroll";

export const CardContainer = styled.section`
    display: grid;
    gap: 1rem;
    border: 1rem;
    background-color: grey;
    color: #000;
    grid-template-columns: repeat(3, 1fr);
    height: 90vh;
    @media screen and (max-width: 768px) {
        height: 180vh;
    }
    //justify-content: space-evenly;
    //grid-template-columns:repeat(2
`;

export const CubeContainer = styled.div`
    display: grid;
    background-color: white;
    grid-row: span 2 / auto;
    grid-column: span 2 / auto;
    @media screen and (max-width: 768px) {
        grid-row: span 2 / auto;
        grid-column: span 3 / auto;
    }

    &:hover {
        filter: contrast(100%);
    }
`;

export const ScrambleI = styled.div`
    display: grid;
    background-color: white;
    @media screen and (max-width: 768px) {
        grid-column: span 3 / auto;
    }

    &:hover {
        filter: contrast(100%);
    }
`;

export const SolutionI = styled.div`
    display: grid;
    background-color: white;

    background-color: blue;
    @media screen and (max-width: 768px) {
        grid-column: span 3 / auto;
    }
    &:hover {
        filter: contrast(100%);
    }
`;

// export const SolutionI = styled.li`
//     background-color: white;
//     border-radius: 0.25rem;
//     box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
//     display: flex;
//     flex-wrap: wrap;
//     flex-direction: column;
//     overflow: hidden;
//     color: #000;
//     &:hover {
//         filter: contrast(100%);
//     }
// `;
