import React from "react";
import Navbar from "../Navbar";
import Container from "@material-ui/core/Container";
import { TypographySC } from "../BasicElements";
import { AlgsPage } from "./AlgsPage";
import { AlgHome } from "./AlgHome";
import { Switch, Route, useRouteMatch } from "react-router-dom";

function AlgsTrainer(props) {
    let { path, url } = useRouteMatch();
    console.log("Run this", path, url);
    return (
        <div>
            <Navbar
                toggle={props.toggle}
                theme={props.theme}
                setTheme={props.setTheme}
            />
            <Container maxWidth="lg">
                <TypographySC component="div">
                    <Switch>
                        <Route exact path={`${url}`}>
                            <AlgHome />
                        </Route>
                        <Route exact path={`${url}/PLL`}>
                            <AlgsPage />
                        </Route>
                    </Switch>
                </TypographySC>
            </Container>
        </div>
    );
}

export default AlgsTrainer;
