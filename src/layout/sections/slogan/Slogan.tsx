import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/button/Button";
import {SectionTitle} from "../../../components/SectionTitle";

export const Slogan = () => {
    return (
        <StyledSlogan>
                <SectionTitle>I Am Available For Freelance</SectionTitle>
                <Button>Hire me</Button>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  background-color: darkred;
`