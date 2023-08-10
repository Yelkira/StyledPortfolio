import React from 'react';
import {Button} from "../../../components/button/Button";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {S} from "./Contacts_styles";

export const Contacts = () => {
    return (
        <S.StyledContacts id={'contact'}>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <S.StyledForm>
                    <S.Field placeholder={'Name'}/>
                    <S.Field placeholder={'Subject'}/>
                    <S.Field placeholder={'Message'} as={'textarea'}/>
                    <Button type={'submit'}>Send message</Button>
                </S.StyledForm>
            </Container>
        </S.StyledContacts>
    );
};

