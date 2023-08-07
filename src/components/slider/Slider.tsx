import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../styles/slider.css'
import {S} from './Slider_styles'
type SlidePropsType = {
    text: string
    userName: string
}
const Slide = (props:SlidePropsType) => {
    const { text, userName} = props
    return (
        <S.Slide>
            <S.Text>{text}</S.Text>
            <S.Name>@{userName}</S.Name>
        </S.Slide>
    )
}
const items = [
    <Slide
        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} userName={'XEEEEEE'}
    />,
    <Slide
        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} userName={'EEEEEEEEEEEEEEEEEEEY'}
    />,
    <Slide
        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} userName={'ALEXEY'}
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
