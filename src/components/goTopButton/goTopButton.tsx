import React, {useEffect, useState} from 'react';
import {animateScroll as scroll} from "react-scroll";
import styled from "styled-components";
import {ArrowTop} from "../../assets/icons/iconArrowTop";

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
            <ArrowTop/>
        </StyledGoTopButton>
        ) : <></>

    );
};
const StyledGoTopButton = styled.button`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 8px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  &:hover{
    transform: translateY(-4px);
    background-color: rgba(20, 20, 20, 0.3);
  }
`