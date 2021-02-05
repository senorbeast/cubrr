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
    PrettoSlider,
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
import { FullCard } from "./FullCard";
import Trial from "./trial2";
import { Typography } from "@material-ui/core";
import getComments from "./Parser/getComments";
import getAlgs from "./Parser/getAlgs";
import validateAlgs from "./Parser/validateAlg";
import getAlgCmtNum from "./Parser/getAlgCmtNum";
import Tooltip from "@material-ui/core/Tooltip";

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
function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip
            open={open}
            enterTouchDelay={0}
            placement="top-end"
            title={value}
        >
            {children}
        </Tooltip>
    );
}
function loadScra() {
    let urlstr = window.location.href;
    let splitedurl = urlstr.split("=");
    if (splitedurl[1] != undefined) {
        //Runs only if there is some scramble in the URL (so no replace error)
        let aftereq = splitedurl[1];
        let scramble = aftereq.split("?");
        let scra = scramble[0].replace(/%20/g, " "); // (/  /g) to replace globally here it means to replace all values
        let scra2 = scra.replace(/%27/g, "'");
        let scra3 = scra2.replace(/\./g, ".\n");
        //setnewScra(scra2);
        //console.log("Getting Scramble");
        return scra2;
    }
    return "";
}

function loadSol() {
    let urlstr = window.location.href;
    let splitedurl = urlstr.split("=");
    //Same for solution
    if (splitedurl[2] != undefined) {
        //Runs only if there is some scramble in the URL (so no replace error)
        let aftereq2 = splitedurl[2];
        let solution = aftereq2.split("?");
        let sol = solution[0].replace(/%20/g, " "); // (/  /g) to replace globally here it means to replace all values
        let sol2 = sol.replace(/%27/g, "'");
        let sol3 = sol2.replace(/\./g, ".\n");
        //setnewSol(sol3);
        //console.log("Getting Solution");
        return sol3;
    }
    return "";
}

function CubePage(props) {
    // To use functions to load scra and sol from URL for first load
    const [newScra, setnewScra] = useState(loadScra); //using to store the scramble and push it to URL and also to store the initial URl and show in Scramble
    const [newSol, setnewSol] = useState(loadSol);
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });
    const [play, setplay] = useState(false);
    //const [ctrl, setCtrl] = useState(false);
    const [mode, setMode] = useState("scraM"); //for fullscreen mode and Scra/Sol mode
    const Cmarks = useRef([
        //To Fix Warning:Each child in a list should have a unique "key" prop
        {
            value: 0,
            label: "Cmts..",
        },
    ]);
    const [solMoves, setsolMoves] = useState();
    //var url = new URL("http://localhost:3000/cube");
    useEffect(() => {
        if (newScra != undefined) {
            //TODO: run this only 1 onces and combine newScra and newScol in one state
            //*Check how many times this is running
            //!Aditya extremely usefull and not IRRITATING
            //TODO: try solMoves and Cmarks without useState
            var cmtLabel = getComments(newSol);
            var cmtValue = getAlgCmtNum(newSol);
            //console.log("Comments", cmtLabel);
            //console.log("Section Length", cmtValue);
            var alrg = getAlgs(newSol);
            setsolMoves(validateAlgs(alrg).movesNum);
            var MarksC = cmtValue.map(function (Cvalue, index) {
                return { value: Cvalue, label: cmtLabel[index] };
            });

            Cmarks.current = MarksC;
            //console.log("Marks", MarksC);
            //console.log("Algs", validateAlgs(alrg).legalAlg);
            //console.log("Valid", !validateAlgs(cmts).IvldTest);
            //console.log("Move Count", validateAlgs(alrg).movesNum);
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
            //console.log("Updating URL");
        }
    }, [newScra, newSol, play]);


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
                    <PrettoSlider
                        mode={modes[mode]}
                        //ThumbComponent={BiCubeAlt}
                        //track={false}
                        styles={{ height: "30px" }}
                        ValueLabelComponent={ValueLabelComponent}
                        defaultValue={0}
                        getAriaValueText={(value) => {
                            //console.log(value); //* Getting Values of the the marker
                        }}
                        //aria-labelledby="discrete-slider-custom"
                        step={1}
                        max={solMoves}
                        valueLabelDisplay="auto"
                        marks={Cmarks.current}
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
                        type="Text"
                        onChange={handleChangeSol}
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
        // var alrg = getAlgs(newSol);
        // setsolMoves(() => validateAlgs(alrg).movesNum);
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
