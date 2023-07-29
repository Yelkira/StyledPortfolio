import React from 'react';
import styled from "styled-components";
import {QuotesIcon} from "../../../assets/icons/iconQuotes";
import {Container} from "../../../components/Container";
import {FlexContainer} from "../../../components/FlexContainer";
import {SectionTitle} from "../../../components/SectionTitle";
import {Slider} from "../../../components/slider/slider";
import {IconWrapper} from "../skills/skill/Skill";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexContainer direction={'column'} align={'center'}>
                    <IconWrapper>
                        <QuotesIcon/>
                    </IconWrapper>
                    <Slider/>
                </FlexContainer>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  background-color: #6a9bf5;
  min-height: 50vh;

  ${IconWrapper} {
    margin: 40px 0 72px;
  }
`
