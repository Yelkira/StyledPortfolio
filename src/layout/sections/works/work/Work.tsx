import React from 'react';
import {Button} from "../../../../components/button/Button";
import {Link} from "../../../../components/Link";
import {S} from "../Works_styles";

type WorkPropsType = {
    text: string
    title: string
    image: string
    hrefDemo: string
    hrefCode: string
}


export const Work = (props: WorkPropsType) => {
    const {text, title, image, hrefDemo, hrefCode} = props
    return (
        <S.StyledWork>
            <S.ImageWrapper>
                <S.Image src={image} alt=""/>
                <span>{title}</span>
                <a href={ hrefDemo} target={ "_blank"}>
                <Button >view project</Button>
                </a>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>
                    {title}
                </S.Title>
                <S.Text>
                    {text}
                </S.Text>
                <Link href={hrefDemo} target="_blank">demo</Link>
                <Link href={hrefCode} target="_blank">code</Link>
            </S.Description>
        </S.StyledWork>
    );
};


