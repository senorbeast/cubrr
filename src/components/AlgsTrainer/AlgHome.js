import React from "react";
import { ButtonSC, TypographySC } from "../BasicElements";
import { SetCard, HeadCard } from "./AlgsElement";
import { useRouteMatch } from "react-router-dom";
import PLL from "./PLL-step.png";

export const AlgHome = () => {
    let { path, url } = useRouteMatch();
    return (
        <>
            <HeadCard>
                <h1>Algorithm database</h1>
            </HeadCard>
            <SetCard to={`${path}/PLL`}>
                <h1>PLL</h1>
                <img src={PLL} alt="PLL"></img>
            </SetCard>
            <SetCard to="/">
                <h1>Card</h1>
                <img src={PLL} alt="PLL"></img>
            </SetCard>
            <SetCard to="/">
                <h1>Card</h1>
                <img src={PLL} alt="PLL"></img>
            </SetCard>
            <SetCard to="/">
                <h1>Card</h1>
                <img src={PLL} alt="PLL"></img>
            </SetCard>
            <SetCard to="/">
                <h1>Card</h1>
                <img src={PLL} alt="PLL"></img>
            </SetCard>
            <SetCard to="/">
                <h1>Card</h1>
                <img src={PLL} alt="PLL"></img>
            </SetCard>
        </>
    );
};
