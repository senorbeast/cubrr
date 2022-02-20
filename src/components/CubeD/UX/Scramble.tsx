import { Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { ScrambleI, InTextArea1 } from './CubeElements';
import selMode from './modes';
import { useScra, useSetScra, useSol } from '../AlgProvider';

interface propsM {
    mode: string;
}
const Scramble = ({ mode }: propsM) => {
    //const [newScra, setnewScra] = useState(loadScra);
    let newScra = useScra();
    let newSol = useSol();
    let setScra = useSetScra();
    useEffect(() => {
        if (newScra != undefined) {
            console.log('URL useEffect');
            window.history.pushState(
                'object or string',
                '',
                `/cube/?scramble=${newScra}?solution=${newSol}?`,
            );
            //console.log("Updating URL");
        }
    }, [newScra, newSol]);
    return (
        <>
            <ScrambleI mode={selMode(mode)}>
                <Typography variant="h4" component="h4">
                    Scramble
                </Typography>
                <InTextArea1
                    autoFocus
                    //@ts-ignore
                    type="Text"
                    onKeyUp={handleChangeScra}
                    placeholder="Enter the Scramble Here :)"
                    defaultValue={newScra}
                />
            </ScrambleI>
        </>
    );
    function handleChangeScra(event: any): void {
        //console.log("Scra");
        var Scra = event.target.value;
        //setnewScra(Scra);
        setScra(Scra);
        //handleScra(Scra);
    }
};

export default Scramble;
