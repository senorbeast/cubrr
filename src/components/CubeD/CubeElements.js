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
    grid-column: span 2 / auto;
    grid-template-rows: repeat(8, 1fr);
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
    background-color: ${(props) => props.theme.primary};
`;

export const ScrambleI = styled.div`
    display: grid;
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
    display: grid;
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

export const PlayBtn = styled.div`
    border: 0;
    background: transparent;
    box-sizing: border-box;
    width: 0;
    height: 74px;

    border-color: transparent transparent transparent ${(props) => props.theme.priopp};
    transition: 300ms all ease;
    cursor: pointer;
  
    // play state
    border-style: solid;
    border-width: 37px 0 37px 60px;
    color: ${(props) => props.theme.priopp};
    // &.paused {
    //   border-style: double;
    //   border-width: 0px 0 0px 60px;
    // }
  
    &:hover {
      border-color: transparent transparent transparent ${(props) => props.theme.priopp};
      transition: 300ms all ease;
    }
  }
`; 

export const PauseBtn = styled.div`
border: 0;
background: transparent;
box-sizing: border-box;
width: 0;
height: 74px;

border-color: transparent transparent transparent ${(props) => props.theme.priopp};
transition: 300ms all ease;
cursor: pointer;

color: ${(props) => props.theme.priopp};



  border-style: double;
  border-width: 0px 0 0px 60px;


&:hover {
  border-color: transparent transparent transparent ${(props) => props.theme.priopp};
  transition: 300ms fade;
}
}
`;

export const ThemeBtn = styled.ul`
    display: flex;
    align-items: center;
    height: 50px;
    cursor: pointer;
    &:hover {
        color: ${(props) => props.theme.highlight};
        transition: 0.8s ease-in-out;
    }
`;
