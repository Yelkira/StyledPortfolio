import React from 'react';
import styled from "styled-components";


type MenuPropsType = {
    menuItems: string[]
}

export const Menu = ({menuItems}: MenuPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {menuItems.map((el, i) => {
                    return (
                        <li key={i}>
                            <a href="">{el}</a>
                        </li>
                    )
                })}
            </ul>
        </StyledMenu>
    );
};
const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content:center;
  }
`
