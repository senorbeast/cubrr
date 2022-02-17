import { lazy, Suspense } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { CardContainer } from './AlgsElement';
//import { TypographySC } from "../BasicElements";

const Navbar = lazy(() => import('../Navbar'));
const AlgsPage = lazy(() => import('./AlgsPage'));
const AlgHome = lazy(() => import('./AlgHome'));

interface CmProps {
    toggle: () => void;
    theme: string;
    setTheme: React.Dispatch<any>;
}
function AlgsTrainer(props: CmProps) {
    let { path, url } = useRouteMatch();
    console.log('Run this', path, url);
    return (
        <>
            <Suspense fallback={<div>Loading Algs...</div>}>
                <Navbar toggle={props.toggle} theme={props.theme} setTheme={props.setTheme} />

                <CardContainer>
                    <Switch>
                        <Route exact path={`${url}`}>
                            <AlgHome />
                        </Route>
                        <Route exact path={`${url}/PLL`}>
                            <AlgsPage />
                        </Route>
                    </Switch>
                </CardContainer>
            </Suspense>
        </>
    );
}

export default AlgsTrainer;
