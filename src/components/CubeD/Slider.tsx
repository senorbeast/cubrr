import { SliderSC } from "./CubeElements";
//import { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import selMode from "./modes";
import getComments from "./Parser/getComments";
import getAlgs from "./Parser/getAlgs";
import validateAlgs from "./Parser/validateAlg";
import getAlgCmtNum from "./Parser/getAlgCmtNum";
import { useSol } from "./AlgProvider";

function ValueLabelComponent(props: any) {
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

interface propsM {
    mode: string;
}
const Slider = ({ mode }: propsM) => {
    //TODO props Add props.Sol as state
    let soln = useSol();
    function loadSlLabels(soln: string) {
        //var soln: string = useSol();
        var cmtLabel = getComments(soln);
        var cmtValue: number[] = getAlgCmtNum(soln);
        var MarksC = cmtValue.map(function (Cvalue, index) {
            return { value: Cvalue, label: cmtLabel[index] };
        });
        return MarksC;
    }
    function loadSolMoves(soln: string) {
        //var soln = loadSol(); //Get sol from props
        var alrg = getAlgs(soln);
        return validateAlgs(alrg).movesNum;
    }
    //const [newSol];
    // const [Cmarks, setCmarks] = useState(loadSlLabels);
    // const [solMoves, setsolMoves] = useState(loadSolMoves);

    return (
        <>
            <SliderSC
                mode={selMode(mode)}
                //ThumbComponent={BiCubeAlt}
                //track={false}
                styles={{ height: "30px" }}
                ValueLabelComponent={ValueLabelComponent}
                defaultValue={0}
                // getAriaValueText={(value) => {
                //console.log(value); //* Getting Values of the the marker
                // }}
                //aria-labelledby="discrete-slider-custom"
                step={1}
                max={loadSolMoves(soln)}
                valueLabelDisplay="auto"
                marks={loadSlLabels(soln)}
            />
        </>
    );

    // function SlLabels(soln: string) {
    //     //TODO props
    //     var alrg = getAlgs(soln);
    //     setsolMoves(validateAlgs(alrg).movesNum);
    //     var cmtLabel = getComments(soln);
    //     var cmtValue = getAlgCmtNum(soln);
    //     var MarksC = cmtValue.map(function (Cvalue, index) {
    //         return { value: Cvalue, label: cmtLabel[index] };
    //     });
    //     return MarksC;
    // }
};

export default Slider;
