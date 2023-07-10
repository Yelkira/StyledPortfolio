import React, {ReactNode} from 'react';
import styled from "styled-components";

type SkillPropsType = {
    Icon: ReactNode
    title:string
    text:string
}


export const Skill = ({Icon, title, text}: SkillPropsType) => {
    return (
        <StyledSkill>
            {Icon}
            <SkillTitle>{title}</SkillTitle>
            <SkillText>{text}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 33%;
  background-color: #e88f8f;
`
const SkillTitle = styled.h3``
const SkillText = styled.p``
