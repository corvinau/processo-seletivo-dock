import React from 'react';

import { UsuarioProvider } from './hooks/usuario';
import { RepositorioProvider } from './hooks/repositorio';

import Container from './components/Container';

import './global.scss';

const App: React.FC = () => {
  return (
    <UsuarioProvider>
      <RepositorioProvider>
        <Container>oi</Container>
      </RepositorioProvider>
    </UsuarioProvider>
  );
};

export default App;
