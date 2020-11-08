import React from "react";
import Trial from "./trial";

const VCube = (props) => {
    return (
        <>
            <Trial height={props.height} width={props.width} />
        </>
    );
};

export default VCube;
