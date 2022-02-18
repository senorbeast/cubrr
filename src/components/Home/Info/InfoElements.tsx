import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: ${(props) => props.theme.prop};
    background-color: ${(props) => props.theme.primary};
    @media screen and (max-width: 768) {
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: calc(100vh - 5rem);
    width: 100%;
    /* max-width: 1100; */
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col2 col1';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1 col1';
    }
`;

export const Column1 = styled.div`
    /* margin-bottom: 15px; */
    grid-area: col1;
`;
export const Column2 = styled.div`
    /* margin-bottom: 15px; */
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.div`
    color: ${(props) => props.theme.priopp};
    font-size: 1.5rem;
    line-height: 1rem;
    font-weight: bold;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.div`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1.%;
    font-weight: normal;
    color: ${(props) => props.theme.priopp};

    @media screen and (max-width: 768px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.div`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${(props) => props.theme.priopp};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    padding-right: 0;
`;
