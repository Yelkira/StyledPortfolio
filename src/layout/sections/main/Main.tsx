import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/portrait 1.png'
import {FlexContainer} from "../../../components/FlexContainer";

export const Main = () => {
    return (
        <StyledMain>
            <FlexContainer align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Super Toxic</Name>
                    <MainTitle>A Web Developer.</MainTitle>
                </div>
                <Photo src={photo} alt="My photo"/>
            </FlexContainer>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #99ec3f;
`

const Photo = styled.img`
 width: 350px;
  height: 430px;
`
const MainTitle = styled.h1`
`
const Name = styled.h2`
`
