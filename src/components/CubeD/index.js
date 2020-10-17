import React from "react";
import {
    CardContainer,
    CubeContainer,
    ScrambleI,
    SolutionI,
} from "./CubeElements";
//import { CubeD } from './VirtualCube';

function CubePage() {
    return (
        <>
            <CardContainer>
                <CubeContainer>
                    <h1>Virtual Cube </h1>
                    {/* <CubeD /> */}
                </CubeContainer>
                <ScrambleI>
                    <h1>Scramble </h1>
                </ScrambleI>
                <SolutionI>
                    <h1>Solutions </h1>
                </SolutionI>
            </CardContainer>
        </>
    );
}

export default CubePage;
