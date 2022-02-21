//@ts-nocheck
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
} from './InfoElements';
import { Button } from '../HomeElements';
import threeDcube from '../../../images/sol_mindset.svg';
interface InfoProps {
    id: string;
    topLine: string;
    headLine: string;
    description: string;
    buttonLabel: string;
    img: any;
    alt: string;
}

export default function InfoSection({
    topLine,
    headLine,
    description,
    buttonLabel,
    img,
    alt,
}: InfoProps): JSX.Element {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading>{headLine}</Heading>
                                <Subtitle>{description}</Subtitle>
                                <BtnWrap>
                                    <Button
                                        to="cube"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        // exact={true}
                                        offset={-80}
                                    >
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={threeDcube} alt={alt}></Img>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
}
