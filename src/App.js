import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
//import CubeD from "./components/CubeD";
import Home from "./components/Home";
import AlgsTrainer from "./components/AlgsTrainer";
import Signup from "./components/Signup";
import { ThemeProvider } from "styled-components";
import * as themes from "./components/themes.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CubePage from "./components/CubeD";
import { reactLocalStorage } from "reactjs-localstorage";
//import storage from "local-storage-fallback";

function getInitialTheme() {
    let savedTheme = reactLocalStorage.get("theme", "lightT", true);
    return savedTheme;
}

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(getInitialTheme);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        reactLocalStorage.set("theme", theme);
    }, [theme]);
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
                    {/* <Navbar toggle={toggle} theme={theme} setTheme={setTheme} /> */}
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={() => (
                                <Home
                                    toggle={toggle}
                                    theme={theme}
                                    setTheme={setTheme}
                                />
                            )}
                        />
                        <Route
                            path="/cube"
                            exact
                            render={() => (
                                <CubePage
                                    toggle={toggle}
                                    theme={theme}
                                    setTheme={setTheme}
                                />
                            )}
                        />
                        <Route
                            path="/algstrainer"
                            exact
                            render={() => (
                                <AlgsTrainer
                                    toggle={toggle}
                                    theme={theme}
                                    setTheme={setTheme}
                                />
                            )}
                        />
                        <Route
                            path="/signin"
                            exact
                            render={() => (
                                <Signup
                                    toggle={toggle}
                                    theme={theme}
                                    setTheme={setTheme}
                                />
                            )}
                        />
                    </Switch>
                </Router>
            </ThemeProvider>
        </>
    );
};

export default App;
