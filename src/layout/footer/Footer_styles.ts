import styled from "styled-components";
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`
const Name = styled.span`
  ${font({
    family: " 'Josefin Sans', sans-serif",
    weight: 700,
    fMax: 22,
    fMin: 16
  })}
  letter-spacing: 3px;


`
const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;

`
const SocialItem = styled.li``
const SocialIconLink = styled.a`
  background-color: ${theme.colors.iconColor};
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.accentColor};
  transition: ${theme.animations.transition};
  

  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
    background-color: ${theme.colors.accentColor};
  }
`
const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`

export const S = {
    StyledFooter,
    Name,
    SocialList,
    SocialItem,
    SocialIconLink,
    Copyright
}