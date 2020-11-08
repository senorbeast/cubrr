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
import VCube from "./VCube";

function debounce(fn, ms) {
    let timer;
    return (_) => {
        clearTimeout(timer);
        timer = setTimeout((_) => {
            timer = null;
            fn.apply(this, arguments);
        }, ms);
    };
}

function CubePage() {
    const [newSol, setnewSol] = useState("");
    let [newScra, setnewScra] = useState(); //using to store the scramble and push it to URL and also to store the initial URl and show in Scramble
    let [inScra, setinScra] = useState();
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });

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
        /*Runs only once now */ /*Used to copy the scramble in URL to Scramble Text Area*/
        let urlstr = window.location.href;
        let splitedurl = urlstr.split("=");
        if (splitedurl[1] != undefined) {
            //Runs only if there is some scramble in the URL (so no replace error)
            let aftereq = splitedurl[1];
            let scra = aftereq.replace(/%20/g, " "); // (/  /g) to replace globally here it means to replace all values
            let scra2 = scra.replace(/%27/g, "'");

            setnewScra(scra2);
        }
    }, [window.location.href]);

    useEffect(() => {
        //Refresh component after resize
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        }, 1000);
        window.addEventListener("resize", debouncedHandleResize);
        return (_) => {
            window.removeEventListener("resize", debouncedHandleResize);
        };
    });

    return (
        <>
            <CardContainer>
                <CubeContainer>
                    <h1>
                        Virtual Cube Rendered at {dimensions.width} x{" "}
                        {dimensions.height}
                    </h1>
                    <VCube
                        width={dimensions.width}
                        height={dimensions.height}
                    />
                    <h1>Play Pause </h1>
                </CubeContainer>
                <ScrambleI>
                    <h1>Scramble </h1>
                    <InTextArea1
                        type="Text"
                        onKeyUp={handleChangeScra}
                        placeholder="Enter the Scramble Here :)"
                        defaultValue={newScra}
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
        var key = event.keyCode || event.charCode;
        if (key == 8 || key == 46) {
            setnewScra(event.target.value);
            //Code to run after backspace or del in scramble
        } else {
            setnewScra(event.target.value);
            console.log("Scramble:", newScra);
        }
    }
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
