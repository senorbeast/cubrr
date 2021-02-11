import AlgProvider from "./AlgProvider";
import CubePage from "./index";

const CubeAlgWrap = (props) => {
    return (
        <>
            <AlgProvider>
                <CubePage
                    toggle={props.toggle}
                    theme={props.theme}
                    setTheme={props.setTheme}
                />
            </AlgProvider>
        </>
    );
};

export default CubeAlgWrap;
