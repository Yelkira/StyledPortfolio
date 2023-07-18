import React from 'react';
import styled from "styled-components";
import {QuotesIcon} from "../../../assets/icons/iconQuotes";
import {FlexContainer} from "../../../components/FlexContainer";
import {SectionTitle} from "../../../components/SectionTitle";
import {Slider} from "../../../components/slider/slider";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexContainer direction={'column'} align={'center'}>
                <QuotesIcon/>
                <Slider/>
            </FlexContainer>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  background-color: #6a9bf5;
  min-height: 50vh;
`
