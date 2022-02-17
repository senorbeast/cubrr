import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import { Typography } from '@material-ui/core';
import Navbar from '../Navbar';
import { HeroContainer, HeroBg } from '../HomeElements';

//import { CssBaseline } from "@material-ui/core";
//import rubiks_bg from './rubiks_bg.png';

//const useStyles = makeStyles(() => ({
//   root: {
//       height: 'calc(100vh - 5rem)',
//       backgroundImage: `url(${rubiks_bg})`,
//       minHeight: 'calc(100vh - 5rem)',
//    },
//));
interface CmProps {
    toggle: () => void;
    theme: string;
    setTheme: React.Dispatch<any>;
}
function Home(props: CmProps) {
    // const classes = useStyles();
    return (
        <>
            <Navbar toggle={props.toggle} theme={props.theme} setTheme={props.setTheme} />
            {/* <CssBaseline /> */}
            <div>
                {/* <Typography>Its Hoome</Typography> */}
                <HeroContainer>
                    <HeroBg>
                        {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg> */}
                    </HeroBg>
                </HeroContainer>
            </div>
        </>
    );
}

export default Home;
