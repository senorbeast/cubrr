import React from "react";
import { CubeContainer, ScrambleI, SolutionI } from './CubeElements';
//import { CubeD } from './VirtualCube';

function CubePage() {
    return (
        <>
            <CubeContainer>
                <h1>Virtual Cube </h1>
                {/* <CubeD /> */}
            </CubeContainer>
                <ScrambleI>
                <h1>Scramble </h1>
                 </ScrambleI >
                <SolutionI>
                <h1>Solutions </h1>
                </SolutionI>
                
        </>
    );
}

export default CubePage;
