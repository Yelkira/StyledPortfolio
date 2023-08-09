import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/button/Button";
import {Container} from "../../../components/Container";
import {FlexContainer} from "../../../components/FlexContainer";
import {SectionTitle} from "../../../components/SectionTitle";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexContainer direction={'column'} justify={'center'} align={'center'}>
                    <SectionTitle>I Am Available For Freelance</SectionTitle>
                    <Button>Hire me</Button>
                </FlexContainer>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    position: relative;
`