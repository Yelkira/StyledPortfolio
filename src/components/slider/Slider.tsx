import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../styles/slider.css'
import {S} from './Slider_styles'

type SlidePropsType = {
    text: string
    userName: string
}
const Slide = (props: SlidePropsType) => {
    const {text, userName} = props
    return (
        <S.Slide>
            <S.Text>{text}</S.Text>
            <S.Name>@{userName}</S.Name>
        </S.Slide>
    )
}
const items = [
    <Slide
        text={'Your frontend applications are just mind-blowing, dude! I can\'t believe how sleek and user-friendly they are. It\'s like using a futuristic gadget from a sci-fi movie. You\'re definitely the coolest frontend wizard out there!'}
        userName={'Johnny Cool'}
    />,
    <Slide
        text={'OMG, your frontend applications are simply awesome! The designs are so modern and trendy, I feel like I\'m browsing through a stylish fashion magazine. You\'ve nailed the perfect balance between aesthetics and functionality. You rock!'}
        userName={'Samantha Awesome'}
    />,
    <Slide
        text={'Dude, your frontend applications are next level! The user experience is so smooth and seamless, it\'s like riding a high-speed roller coaster. I\'m seriously impressed by your technical skills. You\'re a true tech master!'}
        userName={'Tyler Techmaster'}
    />,
    <Slide
        text={'Your frontend applications are a total blast, seriously! The creative interfaces and witty animations make me giggle every time. It\'s like a carnival of fun and functionality. You\'ve definitely mastered the art of making people smile!'}
        userName={'Jessica Jokester'}
    />,
];
export const Slider = () => (
    <S.StyledSlider>
        <AliceCarousel
            animationType="fadeout"
            animationDuration={1000}
            disableButtonsControls
            items={items}
            mouseTracking
        />
    </S.StyledSlider>
);
