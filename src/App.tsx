import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as TPMaterial, createTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage';
import Sidebar from './components/Sidebar';
//import CubeD from "./components/CubeD";
import Home from './components/Home';
import AlgsTrainer from './components/AlgsTrainer';
import Signup from './components/Signup';
import * as themes from './components/themes';
import CubeAlgWrap from './components/CubeD';
/* 
main App

States Used and their useStates: 
    For Sidebar : isOpen
    For Theme : theme 

Passing the Sidebar, Theme states to Router Components or Pages like Home, Sidebar, navbar, Sidenav, Signup, Algs Trainer 
TODO: We could use useContext Hook or other Alternative instead of passing props to individual children -- not a priority just passing 1 level down to children
!will also fix deprecated createmuiTheme

*/

function getInitialTheme() {
    let savedTheme = reactLocalStorage.get('theme', 'lightT', true);
    return savedTheme;
}

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(getInitialTheme);
    console.log('App.js');
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const themeMUI = createTheme({
        palette: {
            type: theme == 'lightT' ? 'light' : 'dark',
        },
    });

    useEffect(() => {
        reactLocalStorage.set('theme', theme);
    }, [theme]);
    return (
        <>
            {/* @ts-ignore */}
            <ThemeProvider theme={themes[theme]}>
                <TPMaterial theme={themeMUI}>
                    <Router>
                        <Sidebar
                            isOpen={isOpen}
                            toggle={toggle}
                            theme={theme}
                            setTheme={setTheme}
                        />
                        {/* <Navbar toggle={toggle} theme={theme} setTheme={setTheme} /> */}
                        <Switch>
                            <Route
                                path="/"
                                exact
                                render={() => (
                                    <Home toggle={toggle} theme={theme} setTheme={setTheme} />
                                )}
                            />
                            <Route
                                path="/cube"
                                exact
                                render={() => (
                                    <CubeAlgWrap
                                        toggle={toggle}
                                        theme={theme}
                                        setTheme={setTheme}
                                    />
                                )}
                            />
                            <Route
                                path="/algstrainer"
                                render={() => (
                                    <AlgsTrainer
                                        toggle={toggle}
                                        theme={theme}
                                        setTheme={setTheme}
                                    />
                                )}
                            />
                            <Route
                                path="/signin"
                                exact
                                render={() => (
                                    <Signup toggle={toggle} theme={theme} setTheme={setTheme} />
                                )}
                            />
                        </Switch>
                    </Router>
                </TPMaterial>
            </ThemeProvider>
        </>
    );
};

export default App;
