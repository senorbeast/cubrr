import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { Link } from 'react-scroll';

export const HeroContainer = styled.div`
    background-color: ${(props) => props.theme.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: calc(100vh - 5rem);
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent);
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: ${(props) => props.theme.highlight};
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const HeroH1 = styled.h1`
    color: ${(props) => props.theme.highopp};
    font-size: 2.2rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 1.8rem;
    }
    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

export const HeroP = styled.p`
    color: ${(props) => props.theme.highlight};
    font-size: 1.5rem;
    text-align: center;
    max-width: 600px;
    margin-top: 0.8rem;

    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${(props) => props.theme.highlight};
    white-space: nowrap;
    padding: 14px 48px;
    color: ${(props) => props.theme.highopp};
    font-size: 1.2rem;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.priopp};
    }
    @media screen and (max-width: 768px) {
        font-size: 1rem;
        border-radius: 50px;
        white-space: nowrap;
        padding: 14px 48px;
    }
    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`;
