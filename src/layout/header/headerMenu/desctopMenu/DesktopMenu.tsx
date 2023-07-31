import React from 'react';
import {S} from "../HeaderMenu_styles";
import {Menu} from "../menu/Menu";


type MenuPropsType = {
    menuItems: string[]
}

export const DesktopMenu = ({menuItems}: MenuPropsType) => {
    return (
        <S.StyledHeaderMenu>
            <Menu menuItems={menuItems}/>
        </S.StyledHeaderMenu>
    );
};



