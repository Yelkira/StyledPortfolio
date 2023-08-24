import {Link} from "react-scroll";
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";

//Menu
const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  color: ${theme.colors.accentColor};
  transition: ${theme.animations.transition};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const MenuItem = styled.li`
  position: relative;
`
const NavLink = styled(Link)`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: transparent;

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
    transition: ${theme.animations.transition};
  }

  &:hover,
  &.active {
    &::before {
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


//Mobile menu
const StyledMobileMenu = styled.nav`
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 999999999999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);

    `}
    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);
      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);


      `}
    }

    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);
      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }
  }
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999;
  background-color: ${theme.colors.mobileMenuPopUpBgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: 0.7s ease-in-out;
  
  ul {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 1s ease-in-out;;
  }
  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);
    & ul {
      gap: 40px;
    }
  `}
`

//Desktop menu
const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`
export const S = {
    NavLink,
    Mask,
    MenuItem,
    StyledMobileMenu,
    BurgerButton,
    MobileMenuPopup,
    StyledHeaderMenu
}