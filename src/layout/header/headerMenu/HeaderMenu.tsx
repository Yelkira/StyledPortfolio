import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";


type MenuPropsType = {
    menuItems: string[]
}

export const HeaderMenu = ({menuItems}: MenuPropsType) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {menuItems.map((el, i) => {
                    return (
                        <ListItem key={i}>
                            <Link href="">
                                {el}
                                <Mask><span>{el}</span></Mask>
                                <Mask><span>{el}</span></Mask>
                            </Link>
                        </ListItem>
                    )
                })}
            </ul>
        </StyledHeaderMenu>
    );
};
const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`

const Link = styled.a`
    font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: transparent;
`
const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  color: ${theme.colors.accentColor};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`
const ListItem = styled.li`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    height: 2px;
    background-color: ${theme.colors.accentColor};
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    
    transform: scale(0);
  }

  &:hover {
    &::before{
      transform: scale(1);
    }
    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${theme.colors.font};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`