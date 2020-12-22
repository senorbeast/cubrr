import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
//import { Link as LinkS } from "react-scroll";

export const CardContainer = styled.section`
    display: grid;
    padding: 0.9rem 0.9rem 0.9rem 0.9rem;
    //position: absolute;
    margin: 0;
    gap: 1rem;
    background-color: ${(props) => props.theme.secondary};
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(8, 1fr);
    color: ${(props) => props.theme.priopp};
    height: calc(100vh - 6.8rem);
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 768px) {
        height: 100vh;
    }
`;

export const SetCard = styled(LinkR)`
    display: grid;
    background-color: ${(props) => props.theme.primary};
    border-radius: 1.75rem;
    padding: 1rem 2rem 1rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    transition: all 0.5s ease;
    grid-row: span 3 / auto;

    &:hover {
        filter: contrast(100%);
    }
`;

export const HeadCard = styled.div`
    display: grid;
    background-color: ${(props) => props.theme.primary};
    border-radius: 1.75rem;
    padding: 1rem 2rem 1rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    transition: all 0.5s ease;
    grid-row: span 1 / auto;
    grid-column: span 3 / auto;
    justify-content: center;

    &:hover {
        filter: contrast(100%);
    }
`;
