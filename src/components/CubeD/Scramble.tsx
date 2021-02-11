import { ScrambleI, InTextArea1 } from "./CubeElements";
import { Typography } from "@material-ui/core";
import selMode from "./modes";
import { useScra, useSetScra, useSol } from "./AlgProvider";
import { useEffect } from "react";
interface propsM {
    mode: string;
    // loadScra: any;
    // handleScra: any;
}
const Scramble = ({ mode }: propsM) => {
    //const [newScra, setnewScra] = useState(loadScra);
    let newScra = useScra();
    let newSol = useSol();
    let setScra = useSetScra();
    console.log("Scarbmle", newScra);
    useEffect(() => {
        if (newScra != undefined) {
            console.log("URL useEffect");
            window.history.pushState(
                "object or string",
                "",
                "/cube/?scramble=" +
                    newScra +
                    "?solution=" +
                    newSol +
                    "?play=" +
                    "?"
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
                    autoFocus={true}
                    type="Text"
                    onKeyUp={handleChangeScra}
                    placeholder="Enter the Scramble Here :)"
                    defaultValue={newScra}
                />
            </ScrambleI>
        </>
    );
    function handleChangeScra(event: any) {
        console.log("Scra");
        var Scra = event.target.value;
        //setnewScra(Scra);
        setScra(Scra);
        //handleScra(Scra);
    }
};

export default Scramble;
