import React, {useEffect, useState} from 'react';
import {Container} from "../../components/Container";
import {FlexContainer} from "../../components/FlexContainer";
import {Logo} from "../../components/logo/Logo";
import {DesktopMenu} from "./headerMenu/desctopMenu/DesktopMenu";
import {S} from './Header_styles'
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"]

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
                        <DesktopMenu menuItems={items}/>
                        : <MobileMenu menuItems={items}/>}
                </FlexContainer>
            </Container>
        </S.Header>
    );
};


