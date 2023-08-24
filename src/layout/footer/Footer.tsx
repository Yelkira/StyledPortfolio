import React from 'react';
import {InstaIcon} from "../../assets/icons/IconInsta";
import {LinkedInIcon} from "../../assets/icons/IconLinkedin";
import {TelegramIcon} from "../../assets/icons/IconTelegram";
import {VkIcon} from "../../assets/icons/IconVK";
import {FlexContainer} from "../../components/FlexContainer";
import {S} from "./Footer_styles";

const socialIcons = [
    {icon: <InstaIcon/>, id:1},
    {icon: <TelegramIcon/>, id:2},
    {icon: <VkIcon/>, id:3},
    {icon: <LinkedInIcon/>, id:4},
]

export const Footer = () => {
    return (
        <S.StyledFooter>
            <FlexContainer direction={'column'} align={'center'}>
                <S.Name>Savemorbor</S.Name>
                <S.SocialList>

                    {socialIcons.map((s) => {
                        return (
                            <S.SocialItem key={s.id}>
                                <S.SocialIconLink>
                                    {s.icon}
                                </S.SocialIconLink>
                            </S.SocialItem>)
                    })}
                </S.SocialList>
                <S.Copyright>© 2023 Savemorbor Diablo, All Rights Reserved.</S.Copyright>
            </FlexContainer>
        </S.StyledFooter>
    )
        ;
};

