import React from 'react';
import {CssIcon} from "../../../assets/icons/IconCSS";
import {HtmlIcon} from "../../../assets/icons/IconHtml";
import {Container} from "../../../components/Container";
import {FlexContainer} from "../../../components/FlexContainer";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {S} from './Skills_styles'

const skills = [
    {
        Icon: <HtmlIcon/>,
        title: 'HTML',
        text: 'Lorem ito at consequatur dicta dolores harum incidunt, itaque magni modi necessitatibus odio officiis perferendis quia quod repellat, similique voluptates.'
    },
    {
        Icon: <CssIcon/>,
        title: 'CSS',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam architecto .'
    },
    {
        Icon: <HtmlIcon/>,
        title: 'HTML',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam arctibus odio officiis perferendis quia quod repellat, similique voluptates.'
    },
    {
        Icon: <HtmlIcon/>,
        title: 'HTML',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam arctibus odio officiis perferendis quia quod repellat, similique voluptates.'
    },
    {
        Icon: <HtmlIcon/>,
        title: 'HTML',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam arctibus odio officiis perferendis quia quod repellat, similique voluptates.'
    },
    {
        Icon: <HtmlIcon/>,
        title: 'HTML',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam arctibus odio officiis perferendis quia quod repellat, similique voluptates.'
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
                    {skills.map((skill, index) => (
                        <Skill key={index} Icon={skill.Icon} title={skill.title} text={skill.text}/>
                    ))}
                </FlexContainer>
            </Container>
        </S.StyledSkills>
    );
};


