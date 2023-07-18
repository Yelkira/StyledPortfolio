import React from 'react';
import styled from "styled-components";
import {InstaIcon} from "../../assets/icons/IconInsta";
import {LinkedInIcon} from "../../assets/icons/IconLinkedin";
import {TelegramIcon} from "../../assets/icons/IconTelegram";
import {VkIcon} from "../../assets/icons/IconVK";
import {FlexContainer} from "../../components/FlexContainer";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexContainer direction={'column'} align={'center'}>
                <Name>Savemorbor</Name>
                <SocialList>
                    <SocialItem>
                        <SocialIconLink>
                            <InstaIcon/>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <TelegramIcon/>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <VkIcon/>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <LinkedInIcon/>
                        </SocialIconLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2023 Savemorbor Diablo, All Rights Reserved.</Copyright>
            </FlexContainer>
        </StyledFooter>
    )
        ;
};

const StyledFooter = styled.footer`
  background-color: #cb6a17;
  min-height: 30vh;
`
const Name = styled.span`
`
const SocialList = styled.ul`
  display: flex;
  gap: 30px;

`
const SocialItem = styled.li``
const SocialIconLink = styled.a``
const Copyright = styled.small``