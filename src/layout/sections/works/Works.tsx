import {AnimatePresence, motion} from "framer-motion"
import React, {useState} from 'react';
import cardsPhoto from '../../../assets/images/cardsPNG.png'
import clientsPhoto from '../../../assets/images/clientsPNG.png'
import lofthousePhoto from '../../../assets/images/loftHouse.png'
import portfolioPhoto from '../../../assets/images/Portfolio.png'
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
},
    {
        title: 'SPA',
        status: 'spa',
    }]
const works = [
    {
        title: "Cards!",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque corporis dicta, dolore dolores excepturi ipsum labore minus neque obcaecati, placeat quam quidem, repellat soluta totam ullam ut veritatis! Esse?",
        image: cardsPhoto,
        type: 'spa',
        id: 1
    },
    {
        title: "Clients",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque corporis dicta, dolore dolores excepturi ipsum labore minus neque obcaecati, placeat quam quidem, repellat soluta totam ullam ut veritatis! Esse?",
        image: clientsPhoto,
        type: 'spa',
        id: 2
    },
    {
        title: "LoftHouse",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque corporis dicta, dolore dolores excepturi ipsum labore minus neque obcaecati, placeat quam quidem, repellat soluta totam ullam ut veritatis! Esse?",
        image: lofthousePhoto,
        type: 'landing',
        id: 3
    },
    {
        title: "Portfolio",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque corporis dicta, dolore dolores excepturi ipsum labore minus neque obcaecati, placeat quam quidem, repellat soluta totam ullam ut veritatis! Esse?",
        image: portfolioPhoto,
        type: 'landing',
        id: 4
    },
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
                                style={{width: '330px ', flexGrow: '0', minWidth: '540px'}}
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


