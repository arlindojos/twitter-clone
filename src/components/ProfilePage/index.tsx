import React from 'react';
import { Container, Banner, EditButton, Avatar, ProfileData, Followage } from './styles';
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButton outlined>
                    Editar Perfil
                </EditButton>
                <h1>Arlindo josé</h1>
                <h2>@arlindo_jose</h2>

                <p>
                    FullStack Developer
                </p>

                <ul>
                    <li>
                        <i className="fas fa-map-marker-alt"></i>
                        Maputo, Moçambique
                    </li>
                    <li>
                        <i className="fas fa-birthday-cake"></i>
                        Nascido(a) em 09 de Agosto de 1999
                    </li>
                </ul>

                <Followage>
                    <span>
                        Seguindo <strong>6004</strong>
                    </span>
                    <span>
                        <strong>6084 </strong> seguidores
                    </span>
                </Followage>
            </ProfileData>

            <Feed />
        </Container>
    )
}


export default ProfilePage; 