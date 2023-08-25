import React from 'react';
import { BiLogoGitlab } from 'react-icons/bi';
import * as S from './style/Footer.style';

export default function Footer() {
    return (
        <S.Container>
            <S.Title>
                TASTY <br />
                TOGETHER
            </S.Title>
            <S.Text>
                <S.A
                    href="https://kdt-gitlab.elice.io/sw_track/class_05/web_2_project/team08/tastytogther-fe"
                    target="blank"
                >
                    <BiLogoGitlab />
                    GitLab Repository
                </S.A>
                <S.P>
                    <S.Name>©2023 Palette.</S.Name>All rights reserved
                </S.P>
            </S.Text>
        </S.Container>
    );
}
