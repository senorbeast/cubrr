import SideNav from "../SideNav";
import { useState, useEffect, useRef } from "react";
import {
    CardContainer,
    CubeContainer,
    AlgsCard,
    ScrambleI,
    SolutionI,
    InTextArea1,
    InTextArea2,
    ThemeBtn,
    ButtonArea,
    SliderSC,
} from "./CubeElements";
import * as modes from "./modes.js";
import { FiCodesandbox } from "react-icons/fi";
import { WiRefresh } from "react-icons/wi";
import {
    CgChevronDoubleRight,
    CgChevronDoubleLeft,
    CgChevronRight,
    CgChevronLeft,
} from "react-icons/cg";
import { ImPlay2, ImPause } from "react-icons/im";
//import CubeD from "./cube.js";
import VCube from "./VCube";
import { FullCard } from "./FullCard";
import Trial from "./trial1";
import { FormGroup, Typography } from "@material-ui/core";
import { BiCubeAlt } from "react-icons/bi";
import { expand, parse, algToString } from "alg";
import getComments from "./Parser/getComments";
import getAlgs from "./Parser/getAlgs";
import validateAlgs from "./Parser/validateAlg";
import getAlgCmtNum from "./Parser/getAlgCmtNum";

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

const marks = [
    {
        value: 0,
        label: "Cross",
    },
    {
        value: 6,
        label: "F2L",
    },
    {
        value: 30,
        label: "OLL",
    },
    {
        value: 45,
        label: "PLL",
    },
];

function CubePage(props) {
    const [newSol, setnewSol] = useState("");
    const [newScra, setnewScra] = useState(); //using to store the scramble and push it to URL and also to store the initial URl and show in Scramble
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });
    const [play, setplay] = useState(false);
    const txtarea1 = useRef("txtarea1");
    //const [ctrl, setCtrl] = useState(false);
    const [mode, setMode] = useState("scraM"); //for fullscreen mode and Scra/Sol mode
    //var url = new URL("http://localhost:3000/cube");
    useEffect(() => {
        if (newScra != undefined) {
            //TODO: run this only 1 onces and combine newScra and newScol in one state
            //*Check how many times this is running
            //!Aditya extremely usefull and not IRRITATING
            //var alrg = getAlgs(newSol);
            console.log("Comments", getComments(newSol));
            console.log("Section Length", getAlgCmtNum(newSol));
            //console.log("Algs", validateAlgs(cmts).legalAlg);
            //console.log("Valid", !validateAlgs(cmts).IvldTest);
            //console.log("Move Count", validateAlgs(cmts).movesNum);
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
            console.log("Updating URL");
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
            let scra3 = scra2.replace(/\./g, ".\n");
            setnewScra(scra2);
            console.log("Getting Scramble");
        }
        //Same for solution
        if (splitedurl[2] != undefined) {
            //Runs only if there is some scramble in the URL (so no replace error)
            let aftereq2 = splitedurl[2];
            let solution = aftereq2.split("?");
            let sol = solution[0].replace(/%20/g, " "); // (/  /g) to replace globally here it means to replace all values
            let sol2 = sol.replace(/%27/g, "'");
            let sol3 = sol2.replace(/\./g, ".\n");
            setnewSol(sol3);
            console.log("Getting Solution");
        }
    }, []);

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

    const icon = play == false ? <ImPlay2 /> : <ImPause />;

    return (
        <>
            <CardContainer
                mode={modes[mode]} //Passing mode object to mode
            >
                <SideNav
                    toggle={props.toggle}
                    theme={props.theme}
                    setTheme={props.setTheme}
                    mode={mode} //Passing mode name to mode
                    setMode={setMode}
                />
                <CubeContainer mode={modes[mode]}>
                    {/* <h1>
                        Virtual Cube  {dimensions.width} x{" "}
                        {dimensions.height}
                    </h1> */}
                    <Trial
                        //play={play}
                        width={dimensions.width}
                        height={dimensions.height}
                        theme={props.theme}
                        play={play}
                    />
                    <SliderSC
                        mode={modes[mode]}
                        //ThumbComponent={BiCubeAlt}
                        //track={false}
                        styles={{ height: "30px" }}
                        defaultValue={0}
                        getAriaValueText={(value) => {
                            value;
                        }}
                        aria-labelledby="discrete-slider-custom"
                        step={1}
                        max={70}
                        valueLabelDisplay="auto"
                        marks={marks}
                    />
                    <ButtonArea mode={modes[mode]}>
                        <ThemeBtn>
                            <WiRefresh />
                        </ThemeBtn>
                        <ThemeBtn>
                            <CgChevronDoubleLeft />
                        </ThemeBtn>
                        <ThemeBtn>
                            <CgChevronLeft />
                        </ThemeBtn>
                        <ThemeBtn onClick={togglePlay}>{icon}</ThemeBtn>
                        <ThemeBtn>
                            <CgChevronRight />
                        </ThemeBtn>
                        <ThemeBtn>
                            <CgChevronDoubleRight />
                        </ThemeBtn>
                        <ThemeBtn onClick={toggleMode}>
                            <FiCodesandbox />
                        </ThemeBtn>
                    </ButtonArea>
                </CubeContainer>
                <AlgsCard mode={modes[mode]}>
                    <FullCard />
                </AlgsCard>
                <ScrambleI mode={modes[mode]}>
                    <Typography variant="h4" component="h4">
                        Scramble
                    </Typography>
                    <InTextArea1
                        autoFocus={true}
                        type="Text"
                        onKeyUp={handleChangeScra}
                        placeholder="Enter the Scramble Here :)"
                        defaultValue={newScra}
                    />
                </ScrambleI>
                <SolutionI mode={modes[mode]}>
                    <Typography variant="h4" component="h4">
                        Solution
                    </Typography>
                    <InTextArea2
                        id="txt2"
                        type="Text"
                        ref={txtarea1}
                        onKeyUp={handleChangeSol}
                        placeholder="Enter the Solution Here :)"
                        defaultValue={newSol}
                        multiline={true}
                    />
                </SolutionI>
            </CardContainer>
        </>
    );
    //
    function handleChangeScra(event) {
        setnewScra(event.target.value);
    }
    //replace(/(.^|\r\n|\n)([^*]|$)/g, "$1*$2")) (Removes the nextlines after reload idk how)
    //TODO: Understand the diffin \r\n and \n .

    function handleChangeSol(event) {
        var dots = event.target.value.replace(/\./g, ""); //Fixed-User Can type dots in Solution box
        setnewSol(dots.replace(/(.^|\n)([^.]|$)/g, "$1.$2"));
    }
    function togglePlay() {
        setplay(!play);
    }
    function toggleMode() {
        let modeto = mode == "fullM" ? "scraM" : "fullM";
        setMode(modeto);
    }
}

export default CubePage;
