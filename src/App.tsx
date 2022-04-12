import React from 'react';

import { RepositorioProvider } from './hooks/repositorio';

import Container from './components/Container';
import SearchBar from './components/SearchBar';
import RepositoryList from './components/RepositoryList';

import './global.scss';

const App: React.FC = () => {
  return (
    <RepositorioProvider>
      <Container>
        <SearchBar />
        <RepositoryList />
      </Container>
    </RepositorioProvider>
  );
};

export default App;
