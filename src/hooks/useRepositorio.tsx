import React, { createContext, useState, useContext, useCallback } from 'react';

const RepositorioContext = createContext<IRepositorioContext>(
  {} as IRepositorioContext
);

/**
 * Provider feito para armazenar o estado global.
 * Aqui, será armazenado o nome de usuário
 * e uma função para atualizar o nome do usuário.
 */
const RepositorioProvider: React.FC = ({ children }) => {
  const [username, setUsername] = useState('');

  const updateUsername = useCallback((username: string) => {
    setUsername(username);
  }, []);

  return (
    <RepositorioContext.Provider value={{ updateUsername, username }}>
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
