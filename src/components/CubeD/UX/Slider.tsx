import Tooltip from '@material-ui/core/Tooltip';
import { SliderSC } from './CubeElements';
//import { useState } from "react";
import selMode from './modes';
import getComments from '../Parser/getComments';
import getAlgs from '../Parser/getAlgs';
import validateAlgs from '../Parser/validateAlg';
import getAlgCmtNum from '../Parser/getAlgCmtNum';
import { useSol, useMoveNum, useSetMoveNum, useToggPlay } from '../AlgProvider';

function ValueLabelComponent(props: any) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top-end" title={value}>
            {children}
        </Tooltip>
    );
}

interface propsM {
    mode: string;
}
interface Mark {
    value: number;
    label: string;
}

const Slider = ({ mode }: propsM) => {
    let soln = useSol();
    let changeSlider = useSetMoveNum();
    let sliderValue = useMoveNum();
    // @ts-ignore
    let toggleP = useToggPlay();
    function loadSlLabels(soln: string): Mark[] {
        //var soln: string = useSol();
        var cmtLabel = getComments(soln);
        var cmtValue: number[] = getAlgCmtNum(soln);
        var MarksC = cmtValue.map(function (Cvalue, index) {
            return { value: Cvalue, label: cmtLabel[index] };
        });
        // console.log(MarksC);
        return MarksC;
    }
    function loadSolMoves(soln: string): number {
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
                // @ts-ignore
                value={sliderValue}
                styles={{ height: '30px' }}
                ValueLabelComponent={ValueLabelComponent}
                defaultValue={0}
                // @ts-ignore
                onChangeCommitted={setChangeValue}
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
    // @ts-ignore
    function setChangeValue(event, value: number) {
        toggleP(false);
        // @ts-ignore
        changeSlider(value);
        console.log('SLider Changes (in Slider.ts)', value);
    }
};

export default Slider;
