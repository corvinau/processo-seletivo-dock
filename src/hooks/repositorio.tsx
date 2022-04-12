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
  const [username, setUsername] = useState({} as IUserData);
  const [repositorio, setRepositorio] = useState<IRepositoryData[]>();

  const updateUsername = useCallback(async (user): Promise<void> => {
    try {
      const response = await api.get(`/users/${user}`);

      setUsername(response.data);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setUsername({ login: '', name: '' });
      }
    }
  }, []);

  const updateRepositorio = useCallback(
    async (user, perPage = 50): Promise<void> => {
      try {
        const response = await api.get(`/users/${user}/repos`, {
          params: {
            per_page: perPage,
          },
        });

        setRepositorio(response.data);
      } catch (e) {
        if (axios.isAxiosError(e)) {
          setRepositorio([]);
        }
      }
    },
    []
  );

  return (
    <RepositorioContext.Provider
      value={{
        updateRepositorio,
        repositorio,
        updateUsername,
        username,
      }}>
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
