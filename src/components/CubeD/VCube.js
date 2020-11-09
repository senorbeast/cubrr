import React, { useEffect, useState } from "react";
import Trial from "./trial";

const VCube = (props) => {
    const [state, setstate] = useState(1);
    useEffect(() => {
        setstate((state) => state + 1);
    }, [props]);
    return (
        <>
            <Trial refreshValue={state} width={props.width} />
        </>
    );
};

export default VCube;
