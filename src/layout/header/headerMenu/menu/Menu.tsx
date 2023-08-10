import React from 'react';
import {S} from "../HeaderMenu_styles";


const items = [
    {title: "Home", id: 'home'},
    {title: "Skills", id: 'skills'},
    {title: "Works", id: 'works'},
    {title: "Testimony", id: 'testimony'},
    {title: "Contact", id: 'contact'},
]

export const Menu = () => {
    return (
        <ul>
            {items.map((el, i) => {
                return (
                    <S.MenuItem key={i}>
                        <S.NavLink
                            activeClass='active'
                            to={el.id}
                            smooth={true}
                            spy={true}
                            offset={1}
                            >
                            {el.title}
                            <S.Mask><span>{el.title}</span></S.Mask>
                            <S.Mask><span>{el.title}</span></S.Mask>
                        </S.NavLink>
                    </S.MenuItem>
                )
            })}
        </ul>
    );
};
