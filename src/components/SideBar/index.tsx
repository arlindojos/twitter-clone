import React from 'react';

import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { Container, SearchWrapper, SearchInput, Body } from './styles';

const SideBar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar novo Twitter"/>
                <i className="fas fa-search"></i>
            </SearchWrapper>

            <StickyBox>
                <Body>
                    <List 
                        title="Talvez você curta"
                        elements={[
                            <FollowSuggestion 
                                name="James Sigauque"
                                nickname="@sigawork"
                            />,
                            <FollowSuggestion 
                                name="Silvio Francisco"
                                nickname="@silviofrancisco"
                            />,
                            <FollowSuggestion 
                                name="João Bacela"
                                nickname="@bacela"
                            />
                        ]}
                    />
                    
                    <List 
                        title="Assuntos para você"
                        elements={[
                            <News />,
                            <News />,
                            <News />,
                        ]}
                    />
                    <List 
                        title="Assuntos para você"
                        elements={[
                            <News />,
                            <News />,
                            <News />,
                        ]}
                    />
                    <List 
                        title="Assuntos para você"
                        elements={[
                            <News />,
                            <News />,
                            <News />,
                        ]}
                    />
                </Body>
            </StickyBox>
        </Container>
    )
}

export default SideBar; 