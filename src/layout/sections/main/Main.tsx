import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/portrait 1.png'
import {Container} from "../../../components/Container";
import {FlexContainer} from "../../../components/FlexContainer";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
            <FlexContainer align={"center"} justify={"space-between"}>
                <div>
                    <SmallText>Hi There</SmallText>
                    <Name>I am <span>Super Toxic</span></Name>
                    <MainTitle>A Web Developer.</MainTitle>
                </div>
                <PhotoWrapper>
                <Photo src={photo} alt="My photo"/>
                </PhotoWrapper>
            </FlexContainer>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #99ec3f;
  display: flex;
`

const Photo = styled.img`
 width: 350px;
  height: 430px;
`
const MainTitle = styled.h1`
    font-weight: 400;
  font-size: 27px;
`
const Name = styled.h2`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;
    &::before{
      position: absolute;
      content: '';
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accentColor};
      bottom: 0;
      z-index: -1;
    }
  }
`
const SmallText = styled.span`
  font-weight: 400;
  font-size: 14px;
`
const  PhotoWrapper = styled.div`
    position: relative;
  z-index: 0;
  &::before{
    content: '';
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accentColor};
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
  }
`