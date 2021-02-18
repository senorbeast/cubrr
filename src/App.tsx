import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
//import CubeD from "./components/CubeD";
import Home from './components/Home';
import AlgsTrainer from './components/AlgsTrainer';
import Signup from './components/Signup';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as TPMaterial, createMuiTheme } from '@material-ui/core/styles';
import * as themes from './components/themes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage';
import CubeAlgWrap from './components/CubeD';

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

    const themeMUI = createMuiTheme({
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
