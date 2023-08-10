import React, {useState} from 'react';
import {S} from "../HeaderMenu_styles";
import {Menu} from "../menu/Menu";



export const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const popUpHandler = () => setIsOpen(!isOpen)
    return (
        <S.StyledMobileMenu>
            <S.BurgerButton onClick={popUpHandler} isOpen={isOpen}>
                <span>
                </span>
            </S.BurgerButton>
            <S.MobileMenuPopup onClick={popUpHandler} isOpen={isOpen}>
                <Menu/>
            </S.MobileMenuPopup>
        </S.StyledMobileMenu>
    );
};

