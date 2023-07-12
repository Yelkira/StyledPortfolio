import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
    text: string
    title: string
    image: string
}


export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.image} alt=""/>
            <Title>
                {props.title}
            </Title>
            <Text>
                {props.text}
            </Text>
            <Link>demo</Link>
            <Link>code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  background-color: #f1dc78;
  max-width: 540px;
  width: 100%;
`
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`
const Title = styled.h3`

`
const Text = styled.p`

`
const Link = styled.a`

`
