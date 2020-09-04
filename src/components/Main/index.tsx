import React from 'react';

import ProfilePage from '../ProfilePage';
import { Container, Header, ProfileInfo, BottonManu } from './styles';

const Main: React.FC = () => {
    return (
        <Container>
            <Header>
                <button>
                    <i className="fas fa-arrow-left"></i>
                </button>

                <ProfileInfo>
                    <strong>Arlindo José</strong>
                    <span>2000 Tweets</span>
                </ProfileInfo>
            </Header>

            <ProfilePage />

            <BottonManu>
                <i className="fas active fa-home"></i>
                <i className="fas fa-search"></i>
                <i className="far fa-bell"></i>
                <i className="far fa-envelope"></i>
            </BottonManu>
        </Container>
    )
}

export default Main;