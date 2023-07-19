import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexContainer} from "../../components/FlexContainer";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexContainer justify={'space-between'} align={'center'}>
                    <Logo/>
                    <Menu menuItems={items}/>
                </FlexContainer>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #aff199;
`
