import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
//import { Link as LinkS } from "react-scroll";

export const CardContainer = styled.section`
    display: grid;
    padding: 0.9rem 0.9rem 0.9rem 0.9rem;
    gap: 1rem;
    background-color: ${(props) => props.theme.secondary};
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(14, 1fr);
    height: 87vh;
    color: ${(props) => props.theme.priopp};
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 768px) {
        height: 160vh;
    }
    //justify-content: space-evenly;
    //grid-template-columns:repeat(2
`;

export const CubeContainer = styled.div`
    display: grid;
    background-color: ${(props) => props.theme.primary};
    grid-row: span 14 / auto;
    grid-column: span ${(props) => props.mode.cubecols}/ auto;
    grid-template-rows: repeat(8, 1fr); //for the child tags
    padding: 1rem 2rem 1rem;
    color: ${(props) => props.theme.priopp};
    border-radius: 1.75rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    transition: all 0.5s ease;

    @media screen and (max-width: 768px) {
        grid-row: span 7 / auto;
        grid-column: span 3 / auto;
    }

    &:hover {
        filter: contrast(100%);
    }
`;

export const TrialStyle = styled.div`
    display: grid;
    grid-row: span 6 / auto;
    border: none;
    margin: none;
    box-shadow: none;
    border-radius: 1.75rem;
    background-color: ${(props) => props.theme.priopp};
`;

export const ScrambleI = styled.div`
    display: ${(props) => props.mode.none};
    background-color: ${(props) => props.theme.prialt};
    border-radius: 1.75rem;
    padding: 1rem 2rem 1rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    grid-row: span 6 / auto;
    grid-template-rows: repeat(4, 1fr);
    transition: all 0.5s ease;
    @media screen and (max-width: 768px) {
        grid-column: span 3 / auto;
        grid-row: span 3 / auto;
    }

    &:hover {
        filter: contrast(100%);
    }
`;

export const SolutionI = styled.div`
    display: ${(props) => props.mode.none};
    background-color: ${(props) => props.theme.secalt};
    border-radius: 1.75rem;
    grid-row: span 8 / auto;
    padding: 1rem 2rem 1rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    grid-template-rows: repeat(5, 1fr);
    transition: all 0.5s ease;
    @media screen and (max-width: 768px) {
        grid-column: span 3 / auto;
        grid-row: span 4 / auto;
    }
    &:hover {
        filter: contrast(100%);
    }
`;

export const InTextArea1 = styled.textarea`
    display: grid;
    height: 100%;
    font-size: 2.3rem;
    background-color: ${(props) => props.theme.prialt};
    color: ${(props) => props.theme.priopp};
    //background: papayawhip;
    border-radius: 1.2rem;
    padding: 1rem 1rem 1rem;
    grid-row: span 2 / auto;
    transition: all 0.5s ease;
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
    background: ${(props) => props.theme.secalt};
    color: ${(props) => props.theme.priopp};
    border-radius: 1.2rem;
    padding: 1rem 1rem 1rem;
    grid-row: span 3 / auto;
    transition: all 0.5s ease;
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

export const ThemeBtn = styled.div`
    display:block;
    align-items: center;
    height: 2rem;
    cursor: pointer;
    &:hover {
        color: ${(props) => props.theme.highlight};
        transition: 0.4s ease-in-out;
    }
    &:focus {
        color: ${(props) => props.theme.highlight};
        transition: 0.4s ease-in-out;
    }
`;

export const ButtonArea = styled.div`
    display:grid;
    grid-template-columns: repeat(7,1fr);
    font-size:5rem;
    margin-top:0.7rem;
    margin-bottom:1rem;
    @media screen and (max-width: 768px) {
        font-size:3rem;
        
    }
`;

