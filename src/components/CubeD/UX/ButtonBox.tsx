import {
    CgChevronDoubleRight,
    CgChevronDoubleLeft,
    CgChevronRight,
    CgChevronLeft,
} from 'react-icons/cg';
import { FiCodesandbox } from 'react-icons/fi';
import { WiRefresh } from 'react-icons/wi';
import { ImPlay2, ImPause } from 'react-icons/im';
import { ThemeBtn, ButtonArea } from './CubeElements';
import selMode from './modes';
import { useAppSelector, useAppDispatch } from '../../ReduxStore/hooks';
import { toggleplay } from '../../ReduxStore/playSlice';
interface propsM {
    mode: string;
    setMode: React.Dispatch<React.SetStateAction<string>>;
}
const ButtonBox = ({ mode, setMode }: propsM) => {
    let play = useAppSelector((state) => state.playBtn.value);
    let dispatch = useAppDispatch();
    // console.log('PlayBut', play);
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
                {/* @ts-ignore */}
                <ThemeBtn onClick={() => dispatch(toggleplay())}>{icon}</ThemeBtn>
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
    function toggleMode() {
        let modeto = mode == 'fullM' ? 'scraM' : 'fullM';
        setMode(modeto);
    }
};

export default ButtonBox;
