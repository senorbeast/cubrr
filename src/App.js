import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
//import CubeD from "./components/CubeD";
//import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CubePage from "./components/CubeD";

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Router>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                <Switch>
                    {/* /<Route path="/" exact component={Home} /> */}
                    <Route path="/cube" exact component={CubePage} />
                    {/* <Route path="/about" exact component ={About}/> */}
                </Switch>
            </Router>
        </>
    );
};

export default App;
