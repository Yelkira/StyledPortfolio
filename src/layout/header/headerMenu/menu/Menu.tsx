import React from 'react';
import {S} from "../HeaderMenu_styles";

type MenuPropsType = {
    menuItems: string[]
}
export const Menu = ({menuItems}: MenuPropsType) => {
    return (
        <ul>
            {menuItems.map((el, i) => {
                return (
                    <S.MenuItem key={i}>
                        <S.Link href="">
                            {el}
                            <S.Mask><span>{el}</span></S.Mask>
                            <S.Mask><span>{el}</span></S.Mask>
                        </S.Link>
                    </S.MenuItem>
                )
            })}
        </ul>
    );
};
