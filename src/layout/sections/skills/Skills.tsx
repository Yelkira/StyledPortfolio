import React from 'react';
import {Fade} from "react-awesome-reveal";
import {CssIcon} from "../../../assets/icons/IconCSS";
import {HtmlIcon} from "../../../assets/icons/IconHtml";
import {JsIcon} from "../../../assets/icons/jsIcon";
import {MuiIcon} from "../../../assets/icons/MuiIcon";
import {NextIcon} from "../../../assets/icons/NextIcon";
import {RadixIcon} from "../../../assets/icons/RadixIcon";
import {ReactIcon} from "../../../assets/icons/reactIcon";
import {ReduxIcon} from "../../../assets/icons/ReduxIcon";
import {SassIcon} from "../../../assets/icons/SassIcon";
import {StorybookIcon} from "../../../assets/icons/StorybookIcon";
import {StyledIcon} from "../../../assets/icons/styledIcon";
import {TsIcon} from "../../../assets/icons/TsIcon";
import {Container} from "../../../components/Container";
import {FlexContainer} from "../../../components/FlexContainer";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {S} from './Skills_styles'

const skills = [
    {
        Icon: <JsIcon/>,
        title: 'JavaScript'
    },
    {
        Icon: <TsIcon/>,
        title: 'TypeScript'
    },
    {
        Icon: <ReactIcon/>,
        title: 'React'
    },
    {
        Icon: <NextIcon/>,
        title: 'Next.js'
    },
    {
        Icon: <ReduxIcon/>,
        title: 'Redux'
    },
    {
        Icon: <StorybookIcon/>,
        title: 'Storybook'
    },
    {
        Icon: <HtmlIcon/>,
        title: 'HTML'
    },
    {
        Icon: <CssIcon/>,
        title: 'CSS'
    },
    {
        Icon: <SassIcon/>,
        title: 'Sass'
    },
    {
        Icon: <StyledIcon/>,
        title: 'styled components'
    },
    {
        Icon: <MuiIcon/>,
        title: 'Mui'
    },
    {
        Icon: <RadixIcon/>,
        title: 'Radix'
    }
];

export const Skills = () => {
    return (

        <S.StyledSkills id={'skills'}>
            <Container>
                <SectionTitle>
                    My skills
                </SectionTitle>
                <FlexContainer wrap={'wrap'} justify={'space-between'}>
                    <Fade cascade damping={0.05} triggerOnce>
                        {skills.map((skill, index) => (
                            <Skill key={index} Icon={skill.Icon} title={skill.title} />
                        ))}
                    </Fade>
                </FlexContainer>
            </Container>
        </S.StyledSkills>
    );
};


