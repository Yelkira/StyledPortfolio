import React from 'react';
import {Button} from "../../../../components/button/Button";
import {Link} from "../../../../components/Link";
import {S} from "../Works_styles";

type WorkPropsType = {
    text: string
    title: string
    image: string
}


export const Work = (props: WorkPropsType) => {
    return (
        <S.StyledWork>
            <S.ImageWrapper>
                <S.Image src={props.image} alt=""/>
                <Button>view project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>
                    {props.title}
                </S.Title>
                <S.Text>
                    {props.text}
                </S.Text>
                <Link>demo</Link>
                <Link>code</Link>
            </S.Description>
        </S.StyledWork>
    );
};


