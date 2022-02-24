import { Typography } from '@material-ui/core';
import { SolutionI, InTextArea2 } from './CubeElements';
//import { useState } from "react";
import selMode from './modes';
import { useSol, useSetSol } from '../AlgProvider';
// import movesMapRawString from '../Parser/movesMapRawString';
interface propsM {
    mode: string;
}

const Solution = ({ mode }: propsM) => {
    // const [newSol, setnewSol] = useState(loadSol);
    let newSol = useSol();
    let setSol = useSetSol();
    return (
        <>
            <SolutionI mode={selMode(mode)}>
                <Typography variant="h4" component="h4">
                    Solution
                </Typography>
                <InTextArea2
                    //@ts-ignore
                    type="Text"
                    onChange={handleChangeSol}
                    placeholder="Enter the Solution Here :)"
                    defaultValue={newSol}
                    multiline
                />
            </SolutionI>
        </>
    );
    function handleChangeSol(event: any): void {
        var dots = event.target.value.replace(/\./g, ''); //Fixed-User Can type dots in Solution box
        var soln = dots.replace(/(.^|\n)([^.]|$)/g, '$1.$2');
        // setnewSol(soln);
        //@ts-ignore
        // var sizee = movesMapRawString(soln);
        setSol(soln);
        //setCmarks(SlLabels(soln));
    }
    //replace(/(.^|\r\n|\n)([^*]|$)/g, "$1*$2")) (Removes the nextlines after reload idk how)
    //TODO: Understand the diffin \r\n and \n .
};

export default Solution;
