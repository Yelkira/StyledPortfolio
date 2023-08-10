import React from 'react';
import styled from "styled-components";
import {QuotesIcon} from "../../../assets/icons/iconQuotes";
import {Container} from "../../../components/Container";
import {FlexContainer} from "../../../components/FlexContainer";
import {SectionTitle} from "../../../components/SectionTitle";
import {Slider} from "../../../components/slider/Slider";
import {S} from '../skills/Skills_styles'
export const Testimony = () => {
    return (
        <StyledTestimony id={'testimony'}>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexContainer direction={'column'} align={'center'}>
                    <S.IconWrapper>
                        <QuotesIcon/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexContainer>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  position: relative;
  background-color: #6a9bf5;
  min-height: 50vh;

  ${S.IconWrapper} {
    margin: 40px 0 72px;
  }
`
