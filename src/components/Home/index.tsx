import { useState, lazy, Suspense } from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import { Typography } from '@material-ui/core';
import Navbar from '../Navbar';
import { homeObject1 } from './Info/Data';
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    HeroP,
    ArrowForward,
    ArrowRight,
    Button,
    HeroBtnWrapper,
} from './HomeElements';

const InfoSection = lazy(() => import('./Info/InfoSection'));

interface CmProps {
    toggle: () => void;
    theme: string;
    setTheme: React.Dispatch<any>;
}

export default function Home(props: CmProps) {
    // const classes = useStyles();

    const [hover, setHover] = useState(false);

    return (
        <>
            <Suspense fallback={<div>Loading infosection</div>}>
                <Navbar toggle={props.toggle} theme={props.theme} setTheme={props.setTheme} />
                {/* <CssBaseline /> */}
                <div>
                    {/* <Typography>Its Hoome</Typography> */}
                    <HeroContainer>
                        <HeroBg>
                            {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg> */}
                        </HeroBg>
                        <HeroContent>
                            <HeroH1>Interactive Rubiks Cube Simulator</HeroH1>
                            <HeroP>Visualize your solves, analyse them and share them.</HeroP>
                            <HeroBtnWrapper>
                                <Button
                                    to="cube"
                                    onMouseEnter={() => {
                                        setHover(!hover);
                                    }}
                                    onMouseLeave={() => {
                                        setHover(!hover);
                                    }}
                                >
                                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                                </Button>
                            </HeroBtnWrapper>
                        </HeroContent>
                    </HeroContainer>
                    <InfoSection {...homeObject1}></InfoSection>
                </div>
            </Suspense>
        </>
    );
}
