import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
//import { Link as LinkS } from "react-scroll";
//import { Link as LinkS } from "react-scroll";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.5rem;
    //position: absolute;
    margin: 0;
    gap: 0.5rem;
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.priopp};
    //height: calc(100vh - 6.8rem);
    align-content: flex-start;
    min-height: calc(100vh - 6rem);
    @media screen and (max-width: 768px) {
    }
`;

export const SetCard = styled(LinkR)`
    display: flex;
    flex-direction: column;
    height: auto;
    width: auto;
    margin: 0;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.priopp};
    text-decoration: none;
    border-radius: 0.75rem;
    padding: 0.75rem 1.5rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    &:hover {
        filter: contrast(100%);
    }
`;

export const HeadCard = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.primary};
    border-radius: 1rem;
    width: 100%;
    height: 5rem;
    margin: 0;
    justify-content: center;
    align-items: center;
    align-content: center;
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

    &:hover {
        filter: contrast(100%);
    }
`;
export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const SubContainer = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
    align-content: center;
`;
export const SubContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 3;
    padding: 0 0 0 1rem;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const EachAlgCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.priopp};
    text-decoration: none;
    border-radius: 0.75rem;
    padding: 1rem 2rem;
    margin: 0rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);

    &:hover {
        filter: contrast(100%);
    }
`;

export const Algorithms = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: auto;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.priopp};
    text-decoration: none;
    border-radius: 1.75rem;
    padding: 1rem 2rem 1rem;
    margin: 0.4rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);

    &:hover {
        filter: contrast(100%);
    }
`;
