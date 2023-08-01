import React from 'react';
import socialPhoto from '../../../assets/images/socialNetwork.jpg'
import timerPhoto from '../../../assets/images/timer.png'
import {Container} from "../../../components/Container";
import {FlexContainer} from "../../../components/FlexContainer";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tab-menu/TabMenu";
import {Work} from "./work/Work";
import {S} from './Works_styles'

const items = ['All', 'Landing page', 'React', 'SPA']
const works = [
    {
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque corporis dicta, dolore dolores excepturi ipsum labore minus neque obcaecati, placeat quam quidem, repellat soluta totam ullam ut veritatis! Esse?",
        image: socialPhoto
    },
    {
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque corporis dicta, dolore dolores excepturi ipsum labore minus neque obcaecati, placeat quam quidem, repellat soluta totam ullam ut veritatis! Esse?",
        image: timerPhoto
    }
];
export const Works = () => {
    return (
        <S.StyledWorks>
            <Container>
                <SectionTitle>
                    My Works
                </SectionTitle>
                <TabMenu menuItems={items}/>
                <FlexContainer justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    {works.map((work, index) => (
                        <Work
                            key={index}
                            title={work.title}
                            text={work.text}
                            image={work.image}
                        />
                    ))}
                </FlexContainer>
            </Container>
        </S.StyledWorks>
    );
};


