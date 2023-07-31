import React from 'react';
import photo from '../../../assets/images/portrait 1.png'
import {Container} from "../../../components/Container";
import {FlexContainer} from "../../../components/FlexContainer";
import {S} from "./Main_styles";

export const Main = () => {
    return (
        <S.StyledMain>
            <Container>
                <FlexContainer wrap={"wrap"} align={"center"} justify={"space-around"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Super Toxic</span></S.Name>
                        <S.MainTitle>A Web Developer.</S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="My photo"/>
                    </S.PhotoWrapper>
                </FlexContainer>
            </Container>
        </S.StyledMain>
    );
};

