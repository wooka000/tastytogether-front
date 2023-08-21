import React from 'react';
import styled from 'styled-components';
import { BiLogoGitlab } from 'react-icons/bi';

export default function Footer() {
    return (
        <Container>
            <Title>
                TASTY <br />
                TOGETHER
            </Title>
            <Text>
                <A
                    href="https://kdt-gitlab.elice.io/sw_track/class_05/web_2_project/team08/tastytogther-fe"
                    target="blank"
                >
                    <BiLogoGitlab />
                    GitLab Repository
                </A>
                <P>
                    <Name>©2023 Palette.</Name>All rights reserved
                </P>
            </Text>
        </Container>
    );
}

const Container = styled.section`
    width: 100%;
    height: 100px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
    font-size: 16px;
`;

const Title = styled.h3`
    font-size: 25px;
    margin-right: 30px;
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
`;

const A = styled.a`
    color: gray;
    font-weight: bold;
    text-decoration: underline;
`;

const P = styled.a`
    margin-top: 10px;
    font-size: 15px;
`;

const Name = styled.span`
    font-weight: bold;
    margin-right: 5px;
    font-size: 16px;
`;
