// @ts-nocheck
import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import SideNav from '../SideNav';
import { CardContainer, CubeContainer, AlgsCard } from './CubeElements';
import selMode from './modes';
import AlgProvider, { useScra, useSol } from './AlgProvider';

const Scramble = lazy(() => import('./Scramble'));
const Solution = lazy(() => import('./Solution'));
const VirtualRubiksC = lazy(() => import('./VirtualRubiks'));
const ButtonBox = lazy(() => import('./ButtonBox'));
const Slider = lazy(() => import('./Slider'));
const FullCard = lazy(() => import('./FullCard'));

function CubePage(props) {
    //TODO: Divide into different Components (acc to states) to avoid rerendering the whole index.js -Done (React handles its)
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
                    <Suspense fallback={<div> Slow loading thanks to Aditya 😄</div>}>
                        <VirtualRubiksC
                            //play={play}
                            theme={props.theme}
                        />
                    </Suspense>

                    <Suspense fallback={<div> Loading FullCard</div>}>
                        <Slider mode={mode} />
                        <ButtonBox mode={mode} setMode={setMode} />
                    </Suspense>
                </CubeContainer>
                <Suspense fallback={<div> Loading FullCard</div>}>
                    <AlgsCard mode={selMode(mode)}>
                        <FullCard />
                    </AlgsCard>
                </Suspense>

                <Suspense fallback={<div> Loading Scramble</div>}>
                    <Scramble mode={mode} />
                </Suspense>
                <Suspense fallback={<div> Loading Solution</div>}>
                    <Solution mode={mode} />;
                </Suspense>
            </CardContainer>
        </>
    );
}

export default CubePage;
