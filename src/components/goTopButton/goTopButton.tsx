import React, {useEffect, useState} from 'react';
import {animateScroll as scroll} from "react-scroll";
import styled from "styled-components";
import {ArrowTop} from "../../assets/icons/iconArrowTop";
import {theme} from "../../styles/Theme";

export const GoTopButton = () => {
    const [showBtn, setShowBtn] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            (window.scrollY > 300) ?
                setShowBtn(true)
                : setShowBtn(false)
        })
    }, [])

    const moveToTopHanlder = () => {
        scroll.scrollToTop()
    }
    return (
        showBtn?
        (<StyledGoTopButton onClick={moveToTopHanlder}>
                    <StyledArrowTop/>
        </StyledGoTopButton>
        ) : <></>

    );
};
const StyledGoTopButton = styled.button`
  background-color: rgba(252, 226, 212, 0.8);
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #333333;

  &:hover {
    color: white;
    transform: translateY(-4px);
    background-color: ${theme.colors.accentColor};
  }
`
const StyledArrowTop = styled(ArrowTop)`
  &:hover{
    fill: white;  
  }
`;