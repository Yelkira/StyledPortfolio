import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/portrait 1.png'
import {Container} from "../../../components/Container";
import {FlexContainer} from "../../../components/FlexContainer";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexContainer wrap={"wrap"} align={"center"} justify={"space-around"}>
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
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;
  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`
const MainTitle = styled.h1`
  ${font({
    weight: 400,
    fMax: 27,
    fMin: 20,
  })}
`
const Name = styled.h2`
  ${font({
    family: "'Josefin Sans', sans-serif",
    weight: 700,
    fMax: 50,
    fMin: 36,
  })}
  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;
    
    &::before {
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
  @media ${theme.media.mobile}{
    margin: 15px 0 22px;
  }
`
const SmallText = styled.span`
  font-weight: 400;
  font-size: 14px;
`
const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  margin-top: 65px;

  &::before {
    content: '';
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accentColor};
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;
    }
  }

`