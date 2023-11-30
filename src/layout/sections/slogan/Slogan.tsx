import React from 'react';
import {toast} from "react-toastify";
import styled from "styled-components";
import {Button} from "../../../components/button/Button";
import {Container} from "../../../components/Container";
import {FlexContainer} from "../../../components/FlexContainer";
import {SectionTitle} from "../../../components/SectionTitle";

export const Slogan = () => {
    const petHandler = () => {
        toast('🐈Meow!🐈')
    }
    return (
        <StyledSlogan>
            <Container>
                <FlexContainer direction={'column'} justify={'center'} align={'center'}>
                    <SectionTitle>Do you want to pet the cat?</SectionTitle>
                    <Button onClick={petHandler}>Pet the cat</Button>
                </FlexContainer>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    position: relative;
`