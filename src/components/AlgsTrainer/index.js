import React from "react";
import Navbar from "../Navbar";

function AlgsTrainer(props) {
    return (
        <div>
            <Navbar
                toggle={props.toggle}
                theme={props.theme}
                setTheme={props.setTheme}
            />
            <h1>Algs Trainer</h1>
        </div>
    );
}

export default AlgsTrainer;
