import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
//import { Link as LinkS } from "react-scroll";

export const CardContainer = styled.section`
    display: grid;
    padding: 0.9rem 0.9rem 0.9rem 0.9rem;
    gap: 1rem;
    background-color: #bdbbbb;
    color: #000;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(14, 1fr);
    height: 87vh;

    @media screen and (max-width: 768px) {
        height: 180vh;
    }
    //justify-content: space-evenly;
    //grid-template-columns:repeat(2
`;

export const CubeContainer = styled.div`
    display: grid;
    background-color: white;
    grid-row: span 14 / auto;
    grid-column: span 2 / auto;
    padding: 1rem 2rem 1rem;
    color: green;
    border-radius: 1.75rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    @media screen and (max-width: 768px) {
        grid-row: span 14 / auto;
        grid-column: span 3 / auto;
    }

    &:hover {
        filter: contrast(100%);
    }
`;

export const ScrambleI = styled.div`
    display: grid;
    background-color: #ccd96c;
    border-radius: 1.75rem;
    padding: 1rem 2rem 1rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    grid-row: span 6 / auto;
    grid-template-rows: repeat(4, 1fr);
    @media screen and (max-width: 768px) {
        grid-column: span 3 / auto;
        grid-row: span 6 / auto;
    }

    &:hover {
        filter: contrast(100%);
    }
`;

export const SolutionI = styled.div`
    display: grid;
    background-color: #6cd99b;
    border-radius: 1.75rem;
    grid-row: span 8 / auto;
    padding: 1rem 2rem 1rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    grid-template-rows: repeat(5, 1fr);
    @media screen and (max-width: 768px) {
        grid-column: span 3 / auto;
        grid-row: span 8 / auto;
    }
    &:hover {
        filter: contrast(100%);
    }
`;

export const InTextArea1 = styled.textarea`
    display: grid;
    height: 100%;
    font-size: 2.3rem;
    background-color: #ccd96c;
    //background: papayawhip;
    border-radius: 1.2rem;
    padding: 1rem 1rem 1rem;
    grid-row: span 2 / auto;
    //box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    resize: none;
    outline: none;
    border: none;
    @media screen and (max-width: 768px) {
        grid-column: span 3 / auto;
        grid-row: span 2 / auto;
    }
    &:hover {
        filter: contrast(100%);
    }
    &:focus {
        outline: none;
    }
`;

export const InTextArea2 = styled.textarea`
    display: grid;
    height: 100%;
    font-size: 2.3rem;
    background: #6cd99b;
    border-radius: 1.2rem;
    padding: 1rem 1rem 1rem;
    grid-row: span 3 / auto;
    //box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    resize: none;
    outline: none;
    border: none;
    @media screen and (max-width: 768px) {
        grid-column: span 3 / auto;
        grid-row: span 3 / auto;
    }
    &:hover {
        filter: contrast(100%);
    }
    &:focus {
        outline: none;
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
