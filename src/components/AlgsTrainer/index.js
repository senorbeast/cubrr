import React from "react";
import Navbar from "../Navbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { ButtonSC, TypographySC } from "../BasicElements";
import Button from "@material-ui/core/Button";
import { CardContainer, SetCard, HeadCard } from "./algsElement";

function AlgsTrainer(props) {
    console.log("Run this", props.theme);
    return (
        <div>
            <Navbar
                toggle={props.toggle}
                theme={props.theme}
                setTheme={props.setTheme}
            />
            <Container maxWidth="lg">
                <TypographySC component="div">
                    <CardContainer>
                        <HeadCard>
                            <h1>Algorithm database</h1>
                        </HeadCard>
                        <SetCard to="/algstrainer/PLL">
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
                </TypographySC>
            </Container>
        </div>
    );
}

export default AlgsTrainer;
