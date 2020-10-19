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
    let [newScra, setnewScra] = useState();
    const [newSol, setnewSol] = useState("");
    let [inScra, setinScra] = useState();

    useEffect(() => {
        if (newScra != undefined) {
            window.history.pushState(
                "object or string",
                "",
                "/cube/?scramble=" + newScra
            );
        }
    }, [newScra]);
    useEffect(() => {
        let urlstr = window.location.href;
        let splitedurl = urlstr.split("=");
        //console.log("HERERERE ", splitedurl[1]);
        setinScra(splitedurl[1]);
    }, [window.location.href]);

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
                        id="Scramblespls"
                        type="Text"
                        onKeyUp={handleChangeScra}
                        placeholder="Enter the Scramble Here :)"
                        //value={inScra}
                    />
                </ScrambleI>
                <SolutionI>
                    <h1>Solutions </h1>
                    <InTextArea2
                        type="Text"
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
