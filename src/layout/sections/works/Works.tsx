import React from 'react';
import styled from "styled-components";
import socialPhoto from '../../../assets/images/socialNetwork.jpg'
import timerPhoto from '../../../assets/images/timer.png'
import {Container} from "../../../components/Container";
import {FlexContainer} from "../../../components/FlexContainer";
import {TabMenu} from "./tab-menu/TabMenu";
import {SectionTitle} from "../../../components/SectionTitle";
import {Work} from "./work/Work";

const items = ['All', 'Landing page', 'React', 'SPA']

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>
                    My Works
                </SectionTitle>
                <TabMenu menuItems={items}/>
                <FlexContainer justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    <Work title="Social Network"
                          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque corporis dicta, dolore dolores excepturi ipsum labore minus neque obcaecati, placeat quam quidem, repellat soluta totam ullam ut veritatis! Esse?"
                          image={socialPhoto}/>
                    <Work title="Timer"
                          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque corporis dicta, dolore dolores excepturi ipsum labore minus neque obcaecati, placeat quam quidem, repellat soluta totam ullam ut veritatis! Esse?"}
                          image={timerPhoto}/>
                </FlexContainer>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  ${FlexContainer}{
    gap: 30px;
  }
`

