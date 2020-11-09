import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
//import CubeD from "./components/CubeD";
import Home from "./components/Home";
import AlgsTrainer from "./components/AlgsTrainer";
import { ThemeProvider } from "styled-components";
import * as themes from "./components/themes.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CubePage from "./components/CubeD";

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState("lightT");

    console.log("Got the theme herw", theme);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <ThemeProvider theme={themes[theme]}>
                <Router>
                    <Sidebar
                        isOpen={isOpen}
                        toggle={toggle}
                        theme={theme}
                        setTheme={setTheme}
                    />
                    <Navbar toggle={toggle} theme={theme} setTheme={setTheme} />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/cube" exact component={CubePage} />
                        <Route
                            path="/algstrainer"
                            exact
                            component={AlgsTrainer}
                        />
                    </Switch>
                </Router>
            </ThemeProvider>
        </>
    );
};

export default App;
