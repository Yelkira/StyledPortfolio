import React, {ReactNode} from 'react';
import {FlexContainer} from "../../../../components/FlexContainer";
import {S} from "../Skills_styles";

type SkillPropsType = {
    Icon: ReactNode
    title: string
    text: string
}


export const Skill = ({Icon, title, text}: SkillPropsType) => {
    return (
        <S.StyledSkill>
            <FlexContainer direction={'column'} align={'center'}>
                <S.IconWrapper>
                    {Icon}
                </S.IconWrapper>
                <S.SkillTitle>{title}</S.SkillTitle>
                <S.SkillText>{text}</S.SkillText>
            </FlexContainer>
        </S.StyledSkill>
    );
};


