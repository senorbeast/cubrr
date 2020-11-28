import React, { useState, useEffect, useRef } from "react";
import SideNav from '../SideNav'
import {
    CardContainer,
    CubeContainer,
    ScrambleI,
    SolutionI,
    InTextArea1,
    InTextArea2,
    ThemeBtn,
    ButtonArea,
} from "./CubeElements";
import * as modes from "./modes.js";
import { FiCodesandbox} from "react-icons/fi";
import { WiRefresh} from "react-icons/wi";
import {CgChevronDoubleRight,CgChevronDoubleLeft, CgChevronRight,CgChevronLeft} from "react-icons/cg";
import { ImPlay2,ImPause } from "react-icons/im";
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
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });
    const [play, setplay] = useState(false);
    const [mode, setMode] = useState('scraM');

    useEffect(() => {
        if (newScra != undefined) {
            window.history.pushState(
                "object or string",
                "",
                "/cube/?scramble=" +
                newScra +
                "?solution=" +
                newSol +
                "?play=" +
                play +
                "?"
            );
        }
    }, [newScra, newSol, play]);

    useEffect(() => {
        //TODO: This can be made efficient by storing the previous values of scramble and solution and running this only when there is a change in scramble and solution
        /*Runs only once now */ /*Used to copy the scramble in URL to Scramble Text Area*/
        let urlstr = window.location.href;
        let splitedurl = urlstr.split("=");
        if (splitedurl[1] != undefined) {
            //Runs only if there is some scramble in the URL (so no replace error)
            let aftereq = splitedurl[1];
            let scramble = aftereq.split("?");
            let scra = scramble[0].replace(/%20/g, " "); // (/  /g) to replace globally here it means to replace all values
            let scra2 = scra.replace(/%27/g, "'");

            setnewScra(scra2);
        }
        //Same for solution
        if (splitedurl[2] != undefined) {
            //Runs only if there is some scramble in the URL (so no replace error)
            let aftereq = splitedurl[2];
            let scramble = aftereq.split("?");
            let scra = scramble[0].replace(/%20/g, " "); // (/  /g) to replace globally here it means to replace all values
            let scra2 = scra.replace(/%27/g, "'");

            setnewSol(scra2);
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

    const icon = play == false ? <ImPlay2/> : <ImPause/>;

    return (
        <>
        <SideNav/>
            <CardContainer mode={modes[mode]}>
                
                <CubeContainer mode={modes[mode]}>
                    <h1>
                        Virtual Cube  {dimensions.width} x{" "}
                        {dimensions.height}
                    </h1>
                    <VCube
                        play={play}
                        width={dimensions.width}
                        height={dimensions.height}
                    />
                    <ButtonArea mode={modes[mode]}>
                        <ThemeBtn ><WiRefresh/></ThemeBtn>
                        <ThemeBtn ><CgChevronDoubleLeft/></ThemeBtn>
                        <ThemeBtn ><CgChevronLeft/></ThemeBtn>
                        <ThemeBtn onClick={togglePlay}>{icon}</ThemeBtn>
                        <ThemeBtn><CgChevronRight/></ThemeBtn>
                        <ThemeBtn ><CgChevronDoubleRight/></ThemeBtn>
                         <ThemeBtn onClick={toggleMode}><FiCodesandbox/></ThemeBtn>
                    </ButtonArea>
                </CubeContainer>
                <ScrambleI mode={modes[mode]}>
                    <h1>Scramble </h1>
                    <InTextArea1
                        type="Text"
                        onKeyUp={handleChangeScra}
                        placeholder="Enter the Scramble Here :)"
                        defaultValue={newScra}
                    />
                </ScrambleI>
                <SolutionI mode={modes[mode]}>
                    <h1>Solutions </h1>
                    <InTextArea2
                        type="Text"
                        onKeyUp={handleChangeSol}
                        placeholder="Enter the Solution Here :)"
                        defaultValue={newSol}
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
    function togglePlay() {
        setplay(!play);
    }
    function toggleMode(){
        let modeto = mode == "fullM" ? "scraM" : "fullM";
        setMode(modeto);
     
    }
}


export default CubePage;
