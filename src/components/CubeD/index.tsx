import AlgProvider from './AlgProvider';
import { lazy } from 'react';

const CubePage = lazy(() => import('./CubePage'));
interface CmProps {
    toggle: () => void;
    theme: string;
    setTheme: React.Dispatch<any>;
}

const CubeAlgWrap = (props: CmProps) => {
    return (
        <>
            <AlgProvider>
                <CubePage toggle={props.toggle} theme={props.theme} setTheme={props.setTheme} />
            </AlgProvider>
        </>
    );
};

export default CubeAlgWrap;
