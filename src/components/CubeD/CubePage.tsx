// @ts-nocheck
import { useState, useEffect, useRef } from 'react';
import SideNav from '../SideNav';
import { CardContainer, CubeContainer, AlgsCard } from './CubeElements';
import selMode from './modes';
import Scramble from './Scramble';
import Solution from './Solution';
//import CubeD from "./cube.js";
import { FullCard } from './FullCard';
import VirtualRubiksC from './VirtualRubiks';
import ButtonBox from './ButtonBox';
import Slider from './Slider';
import AlgProvider, { useScra, useSol } from './AlgProvider';

function CubePage(props) {
    //TODO: Divide into different Components (acc to states) to avoid rerendering the whole index.js
    //* Save multiple useRefs in Cubepage and modify them with functions passed to individual components wherer they will be states and will rerender acc.
    // let play = useRef(false);s
    console.log('Index.js');
    //console.log("ScraINDEDX", useScra(), useSol());
    // let newSol = useSol();
    // let newScra = useScra();
    //const [ctrl, setCtrl] = useState(false);
    const [mode, setMode] = useState('scraM'); //for fullscreen mode and Scra/Sol mode
    //var url = new URL("http://localhost:3000/cube");

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
                        <VirtualRubiksC
                            //play={play}
                            theme={props.theme}
                        />
                        <Slider mode={mode} />
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
