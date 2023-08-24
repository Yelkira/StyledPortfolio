import {AnimatePresence, motion} from "framer-motion"
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
        type: 'spa',
        id: 1
    },
    {
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque corporis dicta, dolore dolores excepturi ipsum labore minus neque obcaecati, placeat quam quidem, repellat soluta totam ullam ut veritatis! Esse?",
        image: timerPhoto,
        type: 'react',
        id: 2
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
                    curentFilterStatus={currentFilterStatus}
                />
                <FlexContainer justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    <AnimatePresence>
                        {filteredWorks.map((work) => (
                            <motion.div
                                style={{width: '330px ',flexGrow: '1', maxWidth:'540px'}}
                                layout={true}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                key={work.id}>
                                <Work
                                    key={work.id}
                                    title={work.title}
                                    text={work.text}
                                    image={work.image}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </FlexContainer>
            </Container>
        </S.StyledWorks>
    );
};


