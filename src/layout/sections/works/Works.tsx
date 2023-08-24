import React, {useState} from 'react';
import socialPhoto from '../../../assets/images/socialNetwork.jpg'
import timerPhoto from '../../../assets/images/timer.png'
import {Container} from "../../../components/Container";
import {FlexContainer} from "../../../components/FlexContainer";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tab-menu/TabMenu";
import {Work} from "./work/Work";
import {S} from './Works_styles'

export type StatusTabsItemsType = 'all' | 'landing' | 'react' | 'spa'
export type TabsItemsType = {
    title: string,
    status: StatusTabsItemsType
}
const tabsItems: TabsItemsType[] = [{
    title: 'All',
    status: 'all',
}, {
    title: 'Landing page',
    status: 'landing',
}, {
    title: 'React',
    status: 'react',
}, {
    title: 'SPA',
    status: 'spa',
}]
const works = [
    {
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque corporis dicta, dolore dolores excepturi ipsum labore minus neque obcaecati, placeat quam quidem, repellat soluta totam ullam ut veritatis! Esse?",
        image: socialPhoto,
        type: 'spa'
    },
    {
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque corporis dicta, dolore dolores excepturi ipsum labore minus neque obcaecati, placeat quam quidem, repellat soluta totam ullam ut veritatis! Esse?",
        image: timerPhoto,
        type: 'react'
    }
];
export const Works = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState<StatusTabsItemsType>('all');
    let filteredWorks = works;

    if (currentFilterStatus === 'react') filteredWorks = works.filter((f) => f.type === 'react');

    if (currentFilterStatus === 'spa') {
        filteredWorks = works.filter((f) => f.type === 'spa');
    }
    if (currentFilterStatus === 'landing') {
        filteredWorks = works.filter((f) => f.type === 'landing');
    }
    const changeFilterStatus = (value: StatusTabsItemsType) => {
        setCurrentFilterStatus(value)
    }
    return (
        <S.StyledWorks id={'works'}>
            <Container>
                <SectionTitle>
                    My Works
                </SectionTitle>
                <TabMenu
                    tabsItems={tabsItems}
                    changeFilterStatus={changeFilterStatus}
                    curentFilterStatus = {currentFilterStatus}
                />
                <FlexContainer justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    {filteredWorks.map((work, index) => (
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


