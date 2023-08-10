import React from 'react';
import {HtmlIcon} from "../../assets/icons/IconHtml";
import {animateScroll as scroll} from "react-scroll";

export const Logo = () => {
    const moveToTopHanlder= ()=>{
        scroll.scrollToTop()
    }
    return (
        <a onClick={moveToTopHanlder}>
            <HtmlIcon/>
        </a>
    );
};

