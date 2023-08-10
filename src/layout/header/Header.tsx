import React, {useEffect, useState} from 'react';
import {Container} from "../../components/Container";
import {FlexContainer} from "../../components/FlexContainer";
import {Logo} from "../../components/logo/Logo";
import {S} from './Header_styles'
import {DesktopMenu} from "./headerMenu/desctopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";


export const Header = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 768;
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize)

        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])


    return (
        <S.Header>
            <Container>
                <FlexContainer justify={'space-between'} align={'center'}>
                    <Logo/>
                    {width > breakpoint ?
                        <DesktopMenu/>
                        : <MobileMenu/>}
                </FlexContainer>
            </Container>
        </S.Header>
    );
};


