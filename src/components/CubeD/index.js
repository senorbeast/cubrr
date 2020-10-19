import React, { useState, useEffect, useRef } from "react";
import {
    CardContainer,
    CubeContainer,
    ScrambleI,
    SolutionI,
    InTextArea1,
    InTextArea2,
} from "./CubeElements";
//import CubeD from "./cube.js";
import Trial from "./trial";

function CubePage() {
    const [newScra, setnewScra] = useState("");
    const [newSol, setnewSol] = useState("");

    let newRef = useRef();

    useEffect(() => {
        if (newScra != "") {
            console.log("Noice", newScra[-1]);
        }
        window.history.pushState(
            "object or string",
            "",
            "/cube/?scramble=" + newScra
        );
    }, [newScra, newRef]);

    return (
        <>
            <CardContainer>
                <CubeContainer>
                    <h1>Virtual Cube </h1>
                    {/* <CubeD /> */}
                    <Trial />
                </CubeContainer>
                <ScrambleI>
                    <h1>Scramble </h1>
                    <InTextArea1
                        type="Text"
                        onChange={handleChangeScra}
                        placeholder="Enter the Scramble Here :)"
                    />
                </ScrambleI>
                <SolutionI>
                    <h1>Solutions </h1>
                    <InTextArea2
                        type="Text"
                        onKeyup={handleChangeSol}
                        onInput={handleChangeSol}
                        placeholder="Enter the Solution Here :)"
                    />
                </SolutionI>
            </CardContainer>
        </>
    );

    function handleChangeScra(event) {
        setnewScra(event.target.value);
        console.log("Scramble:", newScra);
    }

    function handleChangeSol(event) {
        setnewSol(event.target.value);
        console.log("Solution:", newSol);
    }
}

export default CubePage;
