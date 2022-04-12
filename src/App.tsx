import React from 'react';

import { UsuarioProvider } from './hooks/usuario';
import { RepositorioProvider } from './hooks/repositorio';

import Container from './components/Container';
import SearchBar from './components/SearchBar';

import './global.scss';

const App: React.FC = () => {
  return (
    <UsuarioProvider>
      <RepositorioProvider>
        <Container>
          <SearchBar />
          {/* card list aqui */}
        </Container>
      </RepositorioProvider>
    </UsuarioProvider>
  );
};

export default App;
