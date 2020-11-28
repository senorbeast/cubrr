import React from "react";
import Navbar from "../Navbar"

function Home(props) {
    return (
        <div>
            <Navbar toggle={props.toggle} theme={props.theme} setTheme={props.setTheme} />
            <h1>Its Hoome</h1>
        </div>
    );
}

export default Home;
