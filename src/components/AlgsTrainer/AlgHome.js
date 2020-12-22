import React from "react";
import { ButtonSC, TypographySC } from "../BasicElements";
import { CardContainer, SetCard, HeadCard } from "./AlgsElement";
import { useRouteMatch } from "react-router-dom";

export const AlgHome = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <CardContainer>
                <HeadCard>
                    <h1>Algorithm database</h1>
                </HeadCard>
                <SetCard to={`${path}/PLL`}>
                    <h1>PLL</h1>
                </SetCard>
                <SetCard to="/">
                    <h1>Card</h1>
                </SetCard>
                <SetCard to="/">
                    <h1>Card</h1>
                </SetCard>
                <SetCard to="/">
                    <h1>Card</h1>
                </SetCard>
                <SetCard to="/">
                    <h1>Card</h1>
                </SetCard>
                <SetCard to="/">
                    <h1>Card</h1>
                </SetCard>
            </CardContainer>
        </div>
    );
};
