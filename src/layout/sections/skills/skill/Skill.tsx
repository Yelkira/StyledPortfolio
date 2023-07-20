import React, {ReactNode} from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../../components/FlexContainer";
import {theme} from "../../../../styles/Theme";

type SkillPropsType = {
    Icon: ReactNode
    title: string
    text: string
}


export const Skill = ({Icon, title, text}: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexContainer direction={'column'} align={'center'}>
                <IconWrapper>
                    {Icon}
                </IconWrapper>
                <SkillTitle>{title}</SkillTitle>
                <SkillText>{text}</SkillText>
            </FlexContainer>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 380px;
  padding: 62px 20px 40px;
`
const IconWrapper = styled.div`
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    display: inline-block;
    width: 80px;
    height: 80px;
    transform: rotate(45deg) translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.1);
    left: 50%;
    top: 50%;
    transform-origin: top left;
    

    position: absolute;
    z-index: -1;
  }

`

const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;

`
const SkillText = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 14px;
`
