import React from "react";
import Navbar from "../Navbar";
import { CardContainer } from "./AlgsElement";
//import { TypographySC } from "../BasicElements";
import { AlgsPage } from "./AlgsPage";
import { AlgHome } from "./AlgHome";
import { Switch, Route, useRouteMatch } from "react-router-dom";

interface CmProps {
    toggle: () => void;
    theme: string;
    setTheme: React.Dispatch<any>;
}
function AlgsTrainer(props: CmProps) {
    let { path, url } = useRouteMatch();
    console.log("Run this", path, url);
    return (
        <div>
            <Navbar
                toggle={props.toggle}
                theme={props.theme}
                setTheme={props.setTheme}
            />

            <CardContainer>
                <Switch>
                    <Route exact path={`${url}`}>
                        <AlgHome />
                    </Route>
                    <Route exact path={`${url}/PLL`}>
                        <AlgsPage />
                    </Route>
                </Switch>
            </CardContainer>
        </div>
    );
}

export default AlgsTrainer;
