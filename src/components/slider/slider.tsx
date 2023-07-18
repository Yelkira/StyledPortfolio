import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../FlexContainer";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexContainer>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.</Text>
                    <Name>@ivan ivanow</Name>
                </Slide>
            </FlexContainer>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};
const StyledSlider = styled.div`
  max-width: 500px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Slide = styled.div`
  text-align: center;
`
const Text = styled.p``

const Name = styled.span``

const Pagination = styled.div`
span{
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 5px;
  background-color: deeppink;
}
`