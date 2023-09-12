import axios from "axios";
import React, {FormEvent} from 'react';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Button} from "../../../components/button/Button";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {S} from "./Contacts_styles";



export const Contacts = () => {
    const clear = (e: FormEvent<HTMLFormElement>) => {
        const target = e.target as unknown as HTMLInputElement[];
        target[0].value = "";
        target[1].value = "";
        target[2].value = "";
    };
    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const subj = formData.get('subj');
        const message = formData.get('message');

        axios.post('https://express-mailer-iqyn4xcgd-yelkira.vercel.app/sendMessage', {
            name,
            subj,
            message
        })
            .then(() => {
                toast.info('Сообщение отправлено. Ответ обязательно дойдёт до отправителя. Спасибо за уделённое время)')
                clear(e)
            })
            .catch((error) => {
                console.error('Error sending message:', error);
                toast.error('Ошибка при отправке сообщения');
            });
    }
    return (
        <S.StyledContacts id={'contact'}>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <S.StyledForm onSubmit={submit}>
                    <S.Field placeholder={'Name'} name='name'/>
                    <S.Field placeholder={'Subject'} name='subj'/>
                    <S.Field placeholder={'Message'} as={'textarea'} name='message'/>
                    <Button type={'submit'}>Send message</Button>
                </S.StyledForm>
            </Container>
        </S.StyledContacts>
    );
};

