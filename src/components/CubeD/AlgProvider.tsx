import React, { useContext, useState } from "react";

function loadScra() {
    let urlstr = window.location.href;
    let splitedurl = urlstr.split("=");
    if (splitedurl[1] != undefined) {
        //Runs only if there is some scramble in the URL (so no replace error)
        let aftereq = splitedurl[1];
        let scramble = aftereq.split("?");
        let scra = scramble[0].replace(/%20/g, " "); // (/  /g) to replace globally here it means to replace all values
        let scra2 = scra.replace(/%27/g, "'");
        //let scra3 = scra2.replace(/\./g, ".\n");
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

var undA: any = undefined;
const ScrambleContext = React.createContext("");
const SetScrambleContext = React.createContext(undA);
const SolutionContext = React.createContext("");
const SetSolutionContext = React.createContext(undA);

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

const AlgProvider = ({ children }: any) => {
    const [newSol, setnewSol] = useState(loadSol());

    const setSol = (soln: string) => {
        setnewSol(soln);
    };
    const [newScra, setnewScra] = useState(loadScra());

    const setScra = (scra: string) => {
        setnewScra(scra);
    };

    return (
        <>
            <SolutionContext.Provider value={newSol}>
                <SetSolutionContext.Provider value={setSol}>
                    <ScrambleContext.Provider value={newScra}>
                        <SetScrambleContext.Provider value={setScra}>
                            {children}
                        </SetScrambleContext.Provider>
                    </ScrambleContext.Provider>
                </SetSolutionContext.Provider>
            </SolutionContext.Provider>
        </>
    );
};

export default AlgProvider;