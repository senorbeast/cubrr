import React, { useContext, useState } from 'react';

function loadScra() {
    let urlstr = window.location.href;
    let splitedurl = urlstr.split('=');
    if (splitedurl[1] != undefined) {
        //Runs only if there is some scramble in the URL (so no replace error)
        let aftereq = splitedurl[1];
        let scramble = aftereq.split('?');
        let scra = scramble[0].replace(/%20/g, ' '); // (/  /g) to replace globally here it means to replace all values
        let scra2 = scra.replace(/%27/g, "'");
        //let scra3 = scra2.replace(/\./g, ".\n");
        //setnewScra(scra2);
        //console.log("Getting Scramble");
        return scra2;
    }
    return '';
}
function loadSol() {
    let urlstr = window.location.href;
    let splitedurl = urlstr.split('=');
    //Same for solution
    if (splitedurl[2] != undefined) {
        //Runs only if there is some scramble in the URL (so no replace error)
        let aftereq2 = splitedurl[2];
        let solution = aftereq2.split('?');
        let sol = solution[0].replace(/%20/g, ' '); // (/  /g) to replace globally here it means to replace all values
        let sol2 = sol.replace(/%27/g, "'");
        let sol3 = sol2.replace(/\./g, '.\n');
        //setnewSol(sol3);
        //console.log("Getting Solution");
        return sol3;
    }
    return '';
}
// @ts-ignore
var undA: (arg0: string) => void = null;
// @ts-ignore
var undB: () => void = null;
const ScrambleContext = React.createContext('');
const SetScrambleContext = React.createContext((_arg0: string): void => {});
const SolutionContext = React.createContext('');
const SetSolutionContext = React.createContext((_arg0: string): void => {});
const PlayContext = React.createContext(false);
const SetPlayContext = React.createContext((_arg0: boolean): void => {});
const MoveNumContext = React.createContext(0);
const SetMoveNumContext = React.createContext((_arg0: number): void => {});

export function useSol() {
    return useContext(SolutionContext);
}

export function useSetSol() {
    return useContext(SetSolutionContext);
}
export function useScra() {
    return useContext(ScrambleContext);
}

export function useSetScra() {
    return useContext(SetScrambleContext);
}
export function usePlay() {
    return useContext(PlayContext);
}

export function useToggPlay() {
    return useContext(SetPlayContext);
}
export function useMoveNum() {
    return useContext(MoveNumContext);
}

export function useSetMoveNum() {
    return useContext(SetMoveNumContext);
}

const AlgProvider = ({ children }: any) => {
    const [newSol, setnewSol] = useState(loadSol());

    const setSol = (soln: string) => {
        setnewSol(soln);
    };
    const [newScra, setnewScra] = useState(loadScra());

    const setScra = (scra: string) => {
        setnewScra(scra);
    };
    const [Play, setPlay] = useState(false);

    const toggleplay = (value: boolean) => {
        setPlay(value);
    };
    const [MoveNum, setMoveNum] = useState(0);

    const setMoveNumber = (num: number) => {
        setMoveNum(num);
    };

    return (
        <>
            <SolutionContext.Provider value={newSol}>
                <SetSolutionContext.Provider value={setSol}>
                    <ScrambleContext.Provider value={newScra}>
                        <SetScrambleContext.Provider value={setScra}>
                            <PlayContext.Provider value={Play}>
                                <SetPlayContext.Provider value={toggleplay}>
                                    <MoveNumContext.Provider value={MoveNum}>
                                        <SetMoveNumContext.Provider value={setMoveNumber}>
                                            {children}
                                        </SetMoveNumContext.Provider>
                                    </MoveNumContext.Provider>
                                </SetPlayContext.Provider>
                            </PlayContext.Provider>
                        </SetScrambleContext.Provider>
                    </ScrambleContext.Provider>
                </SetSolutionContext.Provider>
            </SolutionContext.Provider>
        </>
    );
};

export default AlgProvider;
