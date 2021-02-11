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
import selMode from "./modes";
import Scramble from "./Scramble";
import Solution from "./Solution";
//import CubeD from "./cube.js";
import { FullCard } from "./FullCard";
import Trial from "./trial2";
import { Typography } from "@material-ui/core";
import getComments from "./Parser/getComments";
import getAlgs from "./Parser/getAlgs";
import validateAlgs from "./Parser/validateAlg";
import getAlgCmtNum from "./Parser/getAlgCmtNum";
import ButtonBox from "./ButtonBox";
import Slider from "./Slider";
import AlgProvider from "./AlgProvider";
import { useScra, useSol } from "./AlgProvider";

// function debounce(fn, ms) {
//     let timer;
//     return (_) => {
//         clearTimeout(timer);
//         timer = setTimeout((_) => {
//             timer = null;
//             fn.apply(this, arguments);
//         }, ms);
//     };
// }

function CubePage(props) {
    //TODO: Divide into different Components (acc to states) to avoid rerendering the whole index.js
    //* Save multiple useRefs in Cubepage and modify them with functions passed to individual components wherer they will be states and will rerender acc.

    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });
    // let play = useRef(false);s
    console.log("Index.js");
    let newSol = useSol();
    let newScra = useScra();

    // let newSol = useSol();
    // let newScra = useScra();
    //const [ctrl, setCtrl] = useState(false);
    const [mode, setMode] = useState("scraM"); //for fullscreen mode and Scra/Sol mode

    //var url = new URL("http://localhost:3000/cube");

    // useEffect(() => {
    //     //Refresh component after resize
    //     const debouncedHandleResize = debounce(function handleResize() {
    //         setDimensions({
    //             height: window.innerHeight,
    //             width: window.innerWidth,
    //         });
    //     }, 1000);
    //     console.log("Index debouce UE");
    //     window.addEventListener("resize", debouncedHandleResize);
    //     return (_) => {
    //         window.removeEventListener("resize", debouncedHandleResize);
    //     };
    // });

    return (
        <>
            <AlgProvider>
                <CardContainer
                    mode={selMode(mode)} //Passing mode object to mode
                >
                    <SideNav
                        toggle={props.toggle}
                        theme={props.theme}
                        setTheme={props.setTheme}
                        mode={mode} //Passing mode name to mode
                        setMode={setMode}
                    />
                    <CubeContainer mode={selMode(mode)}>
                        {/* <h1>
                        Virtual Cube  {dimensions.width} x{" "}
                        {dimensions.height}
                    </h1> */}
                        <Trial
                            //play={play}
                            widthp={dimensions.width}
                            heightp={dimensions.height}
                            theme={props.theme}
                        />
                        <Slider />
                        <ButtonBox mode={mode} setMode={setMode} />
                    </CubeContainer>
                    <AlgsCard mode={selMode(mode)}>
                        <FullCard />
                    </AlgsCard>
                    <Scramble mode={mode} />
                    <Solution mode={mode} />
                </CardContainer>
            </AlgProvider>
        </>
    );
}

export default CubePage;
