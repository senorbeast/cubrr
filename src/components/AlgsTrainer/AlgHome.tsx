import { useRouteMatch } from 'react-router-dom';
import { SetCard, HeadCard } from './AlgsElement';
import PLL from './PLL-step.png';

export default function AlgHome() {
    let { path } = useRouteMatch(); //path, url
    return (
        <>
            <HeadCard>
                <h1>Algorithm database</h1>
            </HeadCard>
            <SetCard to={`${path}/PLL`}>
                <h1>PLL</h1>
                <img src={PLL} alt="PLL" />
            </SetCard>
            <SetCard to="/">
                <h1>Card</h1>
                <img src={PLL} alt="PLL" />
            </SetCard>
            <SetCard to="/">
                <h1>Card</h1>
                <img src={PLL} alt="PLL" />
            </SetCard>
            <SetCard to="/">
                <h1>Card</h1>
                <img src={PLL} alt="PLL" />
            </SetCard>
            <SetCard to="/">
                <h1>Card</h1>
                <img src={PLL} alt="PLL" />
            </SetCard>
            <SetCard to="/">
                <h1>Card</h1>
                <img src={PLL} alt="PLL" />
            </SetCard>
        </>
    );
}
