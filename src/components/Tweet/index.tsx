import React from 'react';

import { Container, Retweeted, Body, Content, Avatar, Header, Description, ImageContent, Icons, Status, Dot, RocketseatIcon } from './style';

const Tweet: React.FC = () => {
    return (
        <Container>
            <Retweeted>
                <RocketseatIcon />
                Você retweetou
            </Retweeted>

            <Body>
                <Avatar />
                <Content>
                    <Header>
                        <strong>Rocketseat</strong>
                        <span>@rocketseat</span>
                        <Dot />
                        <time>5 de Set</time>
                    </Header>
                    <Description>
                        Foguete não tem ré <i className="fab fa-itunes-note"></i>
                    </Description>

                    <ImageContent />

                    <Icons>
                        <Status>
                            <i className="far fa-comment-dots"></i>
                            18
                        </Status>
                        <Status>
                            <i className="fas fa-retweet"></i>
                            18
                        </Status>
                        <Status>
                            <i className="fas fa-heart"></i>
                            934
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    )
}

export default Tweet;