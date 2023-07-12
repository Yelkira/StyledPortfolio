import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../components/FlexContainer";
import {Menu} from "../../../components/menu/Menu";
import {SectionTitle} from "../../../components/SectionTitle";
import {Work} from "./work/work";
import socialPhoto from '../../../assets/images/socialNetwork.jpg'
import timerPhoto from '../../../assets/images/timer.png'
const items = ['All', 'Landing page', 'React', 'SPA']

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>
                My Works
            </SectionTitle>
            <Menu menuItems={items}/>
            <FlexContainer justify={'space-around'}>
                <Work title="Social Network"
                      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque corporis dicta, dolore dolores excepturi ipsum labore minus neque obcaecati, placeat quam quidem, repellat soluta totam ullam ut veritatis! Esse?" image={socialPhoto}/>
                <Work title="Timer"
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque corporis dicta, dolore dolores excepturi ipsum labore minus neque obcaecati, placeat quam quidem, repellat soluta totam ullam ut veritatis! Esse?"} image={timerPhoto}/>
            </FlexContainer>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #6696ee;

`

