import React, {useState} from 'react';
import {S} from "../HeaderMenu_styles";
import {Menu} from "../menu/Menu";


type MenuPropsType = {
    menuItems: string[],
}

export const MobileMenu = ({menuItems}: MenuPropsType) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const popUpHandler = () => setIsOpen(!isOpen)
    return (
        <S.StyledMobileMenu>
            <S.BurgerButton onClick={popUpHandler} isOpen={isOpen}>
                <span>
                </span>
            </S.BurgerButton>
            <S.MobileMenuPopup onClick={popUpHandler} isOpen={isOpen}>
                <Menu menuItems={menuItems}/>
            </S.MobileMenuPopup>
        </S.StyledMobileMenu>
    );
};

