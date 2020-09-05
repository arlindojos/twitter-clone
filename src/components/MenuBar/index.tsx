import React from 'react';
import Button from '../Button';

import { Container, TopSide, MenuButton, BotSide, Avatar, ProfileData } from './styles';

const MenuBar: React.FC = () => {
    return (
        <Container>
            <TopSide>
                <i className="fab fa-twitter"></i>
                <MenuButton>
                    <i className="fas fa-home"></i>
                    <span>Pagina Inicial</span>
                </MenuButton>

                <MenuButton>
                    <i className="far fa-bell"></i>
                    <span>Notificações</span>
                </MenuButton>

                <MenuButton>
                    <i className="far fa-envelope"></i>
                    <span>Mensagens</span>
                </MenuButton>

                <MenuButton>
                    <i className="far fa-heart"></i>
                    <span>Favoritados</span>
                </MenuButton>

                <MenuButton className="active">
                    <i className="fas fa-user"></i>
                    <span>Perfil</span>
                </MenuButton>
                
                <Button>
                    <span>Tweetar</span>
                </Button>
            </TopSide>

            <BotSide>
                <Avatar>

                </Avatar>

                <ProfileData>
                    <strong>Arlindo José</strong>
                    <span>@arindo_jose</span>
                </ProfileData>

                <i className="fas fa-sign-out-alt"></i>
            </BotSide>
        </Container>
    )
}

export default MenuBar;