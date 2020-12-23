import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
//import { Link as LinkS } from "react-scroll";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.9rem 0.9rem 0.9rem 0.9rem;
    //position: absolute;
    margin: 0;
    gap: 1rem;
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.priopp};
    //height: calc(100vh - 6.8rem);
    transition: all 0.3s ease-in-out;
    align-content: flex-start;
    min-height:calc(100vh - 6.8rem);
    @media screen and (max-width: 768px) {
       
    }
`;

export const SetCard = styled(LinkR)`
    display: flex;
    flex-direction: column;
    height: auto;
    width: auto;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.priopp};
    text-decoration: none;
    border-radius: 1.75rem;
    padding: 1rem 2rem 1rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    transition: all 0.5s ease;

    &:hover {
        filter: contrast(100%);
    }
`;

export const HeadCard = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.primary};
    border-radius: 1rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    transition: all 0.5s ease;
    width: 100%;
    height: 5rem;
    margin: 0.6rem;
    justify-content: center;
    align-items: center;
    align-content: center;

    &:hover {
        filter: contrast(100%);
    }
`;

export const AlgCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.priopp};
    justify-content: center;
    align-items: center;
    align-content: center;
    text-decoration: none;
    border-radius: 1.75rem;
    padding: 1rem 2rem 1rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    transition: all 0.5s ease;

    &:hover {
        filter: contrast(100%);
    }
`;

export const EachAlgCard = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: calc(92%);
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.priopp};
    text-decoration: none;
    border-radius: 1.75rem;
    padding: 1rem 2rem 1rem;
    margin: 0.4rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    transition: all 0.5s ease;

    &:hover {
        filter: contrast(100%);
    }
`;

