import React from 'react';
import styled from "styled-components";
import {CssIcon} from "../../../assets/icons/IconCSS";
import {HtmlIcon} from "../../../assets/icons/IconHtml";
import {Container} from "../../../components/Container";
import {FlexContainer} from "../../../components/FlexContainer";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>
                    My skills
                </SectionTitle>
                <FlexContainer wrap={'wrap'} justify={'space-between'}>
                    <Skill Icon={<HtmlIcon/>}
                           title={'HTML'}
                           text={"Lorem ito at consequatur dicta dolores harum incidunt, itaque magni modi necessitatibus odio officiis perferendis quia quod repellat, similique voluptates."}/>
                    <Skill Icon={<CssIcon/>}
                           title={'HTML'}
                           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam architecto ."}/>
                    <Skill Icon={<HtmlIcon/>}
                           title={'HTML'}
                           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam arctibus odio officiis perferendis quia quod repellat, similique voluptates."}
                    />
                    <Skill Icon={<HtmlIcon/>}
                           title={'HTML'}
                           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam arctibus odio officiis perferendis quia quod repellat, similique voluptates."}
                    />
                    <Skill Icon={<HtmlIcon/>}
                           title={'HTML'}
                           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam arctibus odio officiis perferendis quia quod repellat, similique voluptates."}
                    />
                    <Skill Icon={<HtmlIcon/>}
                           title={'HTML'}
                           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam arctibus odio officiis perferendis quia quod repellat, similique voluptates."}
                    />
                </FlexContainer>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #ffe5e4;
`
