import React, { useState } from "react";
import {
    CardContainer,
    CubeContainer,
    ScrambleI,
    SolutionI,
    InTextArea1,
    InTextArea2,
} from "./CubeElements";
//import { CubeD } from './VirtualCube';

function CubePage() {
    const [newScra, setnewScra] = useState();

    function handleChange(event) {
        setnewScra(event.target.value);
        console.log(newScra);

        window.history.pushState(
            "object or string",
            "",
            "/?scramble=" + newScra
        );
    }

    return (
        <>
            <CardContainer>
                <CubeContainer>
                    <h1>Virtual Cube </h1>
                    <textarea type="Text" />
                    {/* <CubeD /> */}
                </CubeContainer>
                <ScrambleI>
                    <h1>Scramble </h1>
                    <InTextArea1 type="Text" onKeyDown={handleChange} />
                </ScrambleI>
                <SolutionI>
                    <h1>Solutions </h1>
                    <InTextArea2 type="Text" onKeyDown={handleChange} />
                </SolutionI>
            </CardContainer>
        </>
    );
}

export default CubePage;
