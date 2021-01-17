import styled from "styled-components";
//import { Link as LinkR } from "react-router-dom";
//import { Link as LinkS } from "react-scroll";

export const CardContainer = styled.section`
    display: grid;
    padding: 0.9rem 0.9rem 0.9rem 0.9rem;
    //position: absolute;
    margin: 0;
    gap: 1rem;
    height: calc(100vh - 1.8rem); //spaces around - sign are fking required
    background-color: ${(props) => props.theme.secondary};
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(14, 1fr);
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
    margin-left: 5.9rem;
    background-color: ${(props) => props.theme.primary};
    grid-row: span 14 / auto;
    grid-column: span ${(props) => props.mode.cubecols} / auto;
    grid-template-rows: repeat(8, 1fr); //for the child tags
    padding: 2rem 2rem 1rem 2rem;
    color: ${(props) => props.theme.priopp};
    border-radius: 1.75rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    transition: all 0.5s ease;

    @media screen and (max-width: 768px) {
        grid-row: span 7 / auto;
        grid-column: span 3 / auto;
        margin-left: 0rem;
    }

    &:hover {
        filter: contrast(100%);
    }
`;

export const TrialStyle = styled.div`
    display: grid;
    grid-row: span 7 / auto;
    border: none;
    margin: none;
    box-shadow: none;
    border-radius: 1.75rem;
    background-color: ${(props) => props.theme.primary};
`;

export const AlgsCard = styled.div`
    display: ${(props) => props.mode.alg};
    background-color: ${(props) => props.theme.mprim};
    border-radius: 1.75rem;
    padding: 1rem 2rem 1rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    grid-row: span 14 / auto;
    grid-template-rows: repeat(9, 1fr);
    //transition: all 0.5s ease;
    @media screen and (max-width: 768px) {
        grid-column: span 3 / auto;
        grid-row: span 7 / auto;
    }

    &:hover {
        filter: contrast(100%);
    }
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
    display: flex;
    align-items: center;
    padding: none;
    margin: none;
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
    display: grid;
    grid-template-columns: repeat(${(props) => props.mode.nobuts}, 1fr);
    font-size: 4.2rem;
    align-items: center;
    @media screen and (max-width: 768px) {
        font-size: 3rem;
    }
`;
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";

const iOSBoxShadow =
    "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";
const PrettoSlider = withStyles((theme) => ({
    root: {
        color: "#3880ff",
        height: 2,
        padding: "15px 0",
    },
    thumb: {
        height: 28,
        width: 28,
        backgroundColor: "#fff",
        boxShadow: iOSBoxShadow,
        marginTop: -14,
        marginLeft: -14,
        "&:focus, &:hover, &$active": {
            boxShadow:
                "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                boxShadow: iOSBoxShadow,
            },
        },
    },
    active: {},
    valueLabel: {
        left: "calc(-50% + 12px)",
        bottom: "50px",
        "& *": {
            background: "#3880ff",
            color: "#000",
        },
    },
    track: {
        height: 2,
    },
    rail: {
        height: 2,
        opacity: 0.5,
        backgroundColor: "#bfbfbf",
    },
    mark: {
        backgroundColor: "#bfbfbf",
        height: 8,
        width: 1,
        marginTop: -3,
    },
    markActive: {
        opacity: 1,
        backgroundColor: "currentColor",
    },
}))(Slider);

export const SliderSC = styled(PrettoSlider)`
    && {
        display: ${(props) => props.mode.none};
    }
`;
