import React from 'react';

import Main from '../Main';
import MenuBarn from '../MenuBar';
import SideBar from '../SideBar';

import { Container, Wrapper } from './styles';

const Layout : React.FC = () => {
 return (
     <Container>
         <Wrapper>
             <MenuBarn />
             <Main />
             <SideBar />
         </Wrapper>
     </Container>
 )
}

export default Layout;