import React from 'react';
import Typewriter from 'typewriter-effect';
import photo from '../../../assets/images/portrait 1.png'
import {Container} from "../../../components/Container";
import {FlexContainer} from "../../../components/FlexContainer";
import {S} from "./Main_styles";
import Tilt from 'react-parallax-tilt';


export const Main = () => {
    return (
        <S.StyledMain id={'home'}>
            <Container>
                <FlexContainer wrap={"wrap"} align={"center"} justify={"space-around"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Super Toxic</span></S.Name>
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
                    </div>
                    <Tilt className="parallax-effect-img"
                          tiltMaxAngleX={40}
                          tiltMaxAngleY={40}
                          perspective={800}
                          transitionSpeed={2000}
                          scale={1.1}
                          gyroscope={true}>
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt="My photo"/>
                        </S.PhotoWrapper>
                    </Tilt>
                </FlexContainer>
            </Container>
        </S.StyledMain>
    );
};

//A Web Developer