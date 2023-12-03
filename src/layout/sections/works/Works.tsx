import {AnimatePresence, motion} from "framer-motion"
import React, {useState} from 'react';
import cardsPhoto from '../../../assets/images/cardsPNG.png'
import clientsPhoto from '../../../assets/images/clientsPNG.png'
import lofthousePhoto from '../../../assets/images/loftHouse.png'
import portfolioPhoto from '../../../assets/images/Portfolio.png'
import nikePhoto from '../../../assets/images/nike.png'
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
        text: "Cards is a powerful flashcard app. It provides a user-friendly interface for creating, organizing, and studying flashcard decks, enhancing the learning experience. Cards is the ultimate tool for effective studying.",
        image: cardsPhoto,
        hrefDemo: 'https://saturday-one.vercel.app/login',
        hrefCode: 'https://github.com/Yelkira/Cards',
        type: 'spa',
        id: 1
    },
    {
        title: "Clients",
        text: "Manage your client database with ease using this JavaScript application. Add and delete clients, along with their contact information, and conveniently search for clients based on their contact details. The user interface is designed to be clean and intuitive, providing a seamless user experience.",
        image: clientsPhoto,
        hrefDemo: 'https://clients-q8wxlettm-yelkira.vercel.app/',
        hrefCode: 'https://github.com/Yelkira/Clients',
        type: 'spa',
        id: 2
    },
    {
        title: "LoftHouse",
        text: "LoftHouse: A modern web app showcasing a stunning residential complex. Built with JavaScript, HTML, and SCSS, it features an attractive UI to captivate potential residents.",
        image: lofthousePhoto,
        hrefDemo: 'https://loft-house-glwxtndmj-yelkira.vercel.app/',
        hrefCode: 'https://github.com/Yelkira/LoftHouse',
        type: 'landing',
        id: 3
    },
    {
        title: "Portfolio",
        text: "StyledPortfolio is a contemporary portfolio created using React and Styled Components. Its main objective is to present my projects in an appealing manner and provide a convenient contact form for easy communication.",
        image: portfolioPhoto,
        hrefDemo: 'https://styled-portfolio-zeta.vercel.app/',
        hrefCode: 'https://github.com/Yelkira/StyledPortfolio',
        type: 'landing',
        id: 4
    },
    {
        title: "NikeRun",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque corporis dicta, dolore dolores excepturi ipsum labore minus neque obcaecati, placeat quam quidem, repellat soluta totam ullam ut veritatis! Esse?",
        image: nikePhoto,
        hrefDemo: 'https://nike-app-ashy.vercel.app/',
        hrefCode: 'https://github.com/Yelkira/nikeApp',
        type: 'landing',
        id: 5
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
                <FlexContainer justify={'center'} align={'flex-start'} wrap={'wrap'}>
                    <AnimatePresence>
                        {filteredWorks.map((work) => (
                            <motion.div
                                style={{maxWidth: '540px ', flexGrow: '0'}}
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
                                    hrefDemo={work.hrefDemo}
                                    hrefCode={work.hrefCode}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </FlexContainer>
            </Container>
        </S.StyledWorks>
    );
};


