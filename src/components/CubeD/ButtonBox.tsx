import { ThemeBtn, ButtonArea } from "./CubeElements";
import { useState } from "react";
import {
    CgChevronDoubleRight,
    CgChevronDoubleLeft,
    CgChevronRight,
    CgChevronLeft,
} from "react-icons/cg";
import { FiCodesandbox } from "react-icons/fi";
import { WiRefresh } from "react-icons/wi";
import { ImPlay2, ImPause } from "react-icons/im";
import selMode from "./modes";

interface propsM {
    mode: string;
    setMode: any;
    setPlay: any;
}
const ButtonBox = ({ mode, setMode, setPlay }: propsM) => {
    const [play, setplay] = useState(false);
    const icon = play == false ? <ImPlay2 /> : <ImPause />;
    return (
        <>
            <ButtonArea mode={selMode(mode)}>
                <ThemeBtn>
                    <WiRefresh />
                </ThemeBtn>
                <ThemeBtn>
                    <CgChevronDoubleLeft />
                </ThemeBtn>
                <ThemeBtn>
                    <CgChevronLeft />
                </ThemeBtn>
                <ThemeBtn onClick={togglePlay}>{icon}</ThemeBtn>
                <ThemeBtn>
                    <CgChevronRight />
                </ThemeBtn>
                <ThemeBtn>
                    <CgChevronDoubleRight />
                </ThemeBtn>
                <ThemeBtn onClick={toggleMode}>
                    <FiCodesandbox />
                </ThemeBtn>
            </ButtonArea>
        </>
    );
    function togglePlay() {
        setplay(!play);
        setPlay(play);
    }
    function toggleMode() {
        let modeto = mode == "fullM" ? "scraM" : "fullM";
        setMode(modeto);
    }
};

export default ButtonBox;
