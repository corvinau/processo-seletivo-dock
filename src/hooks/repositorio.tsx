import React, { createContext, useState, useContext, useCallback } from 'react';

import axios from 'axios';
import api from 'src/services/api';

const RepositorioContext = createContext<IRepositorioContext>(
  {} as IRepositorioContext
);

/**
 * Provider feito para armazenar o estado global.
 * Aqui, será armazenado o nome de usuário relacionado aos repositórios e uma função
 * para atualizar o nome do usuário.
 */
const RepositorioProvider: React.FC = ({ children }) => {
  const [usernameRepositorio, setUsernameRepositorio] = useState('');

  const updateUsernameRepositorio = useCallback(
    async (username, perPage = 50): Promise<void> => {
      try {
        const response = await api.get(`/users/${username}/repos`, {
          params: {
            per_page: perPage,
          },
        });

        console.log('repo', response.data);

        setUsernameRepositorio(response.data);
      } catch (e) {
        if (axios.isAxiosError(e)) {
          setUsernameRepositorio('');
        }
      }
    },
    []
  );

  return (
    <RepositorioContext.Provider
      value={{ updateUsernameRepositorio, usernameRepositorio }}>
      {children}
    </RepositorioContext.Provider>
  );
};

/**
 * Hook utilizado para recuperar os valores do estado global.
 */
function useRepositorio(): IRepositorioContext {
  const context = useContext(RepositorioContext);

  return context;
}

export { RepositorioProvider, useRepositorio };
