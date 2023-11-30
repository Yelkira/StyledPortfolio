import React from 'react';
import Typewriter from 'typewriter-effect';
import photo from '../../../assets/images/coolPhoto.png'
import {Container} from "../../../components/Container";
import {FlexContainer} from "../../../components/FlexContainer";
import {S} from "./Main_styles";
import Tilt from 'react-parallax-tilt';


export const Main = () => {
    return (
        <S.StyledMain id={'home'}>
            <Container>
                <FlexContainer wrap={"wrap"} align={"center"} justify={"space-around"}>
                    <S.TextWrapper>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Alexey Smertin</span></S.Name>
                        <S.MainTitle>
                            <p>A Frontend Developer.</p>
                            {<Typewriter
                                options={{
                                    strings: ['A Frontend Developer.'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100
                                }}
                            />}
                        </S.MainTitle>
                    </S.TextWrapper>

                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt="My photo"/>
                        </S.PhotoWrapper>

                </FlexContainer>
            </Container>
        </S.StyledMain>
    );
};

/*
<Tilt className="parallax-effect-img"
      tiltMaxAngleX={40}
      tiltMaxAngleY={40}
      perspective={800}
      transitionSpeed={2000}
      scale={1.1}
      gyroscope={true}>
</Tilt>*/
