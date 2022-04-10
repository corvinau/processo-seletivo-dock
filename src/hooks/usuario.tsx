import React, { createContext, useState, useContext, useCallback } from 'react';

import axios from 'axios';
import api from 'src/services/api';

const UsuarioContext = createContext<IUsuarioContext>({} as IUsuarioContext);

/**
 * Provider feito para armazenar o estado global.
 * Aqui, será armazenado o nome de usuário
 * e uma função para atualizar o nome do usuário.
 */
const UsuarioProvider: React.FC = ({ children }) => {
  const [username, setUsername] = useState('');

  const updateUsername = useCallback(async (username): Promise<void> => {
    try {
      const response = await api.get(`/users/${username}`);

      console.log('user', response);

      setUsername(response.data);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setUsername('');
      }
    }
  }, []);

  return (
    <UsuarioContext.Provider value={{ updateUsername, username }}>
      {children}
    </UsuarioContext.Provider>
  );
};

/**
 * Hook utilizado para recuperar os valores do estado global.
 */
function useUsuario(): IUsuarioContext {
  const context = useContext(UsuarioContext);

  return context;
}

export { UsuarioProvider, useUsuario };
