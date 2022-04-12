import React from 'react';

import { BsSearch, BsGithub } from 'react-icons/bs';

import { useRepositorio } from 'src/hooks/repositorio';

import './styles.scss';

/**
 * Componente que representa o card do formulário de busca de usuários.
 */
const SearchBar: React.FC = () => {
  const { updateRepositorio, updateUsername } = useRepositorio();

  /**
   * Função que irá atualizar o estado global com o valor do input.
   * @param e Evento de submit do formulário
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = e.currentTarget.search.value;
    updateRepositorio(username);
    updateUsername(username);
  };

  return (
    <div className='search-bar'>
      <div className='card'>
        <div className='title'>
          <span className='title-icon'>
            <BsGithub />
          </span>
          <h2>Pesquise os respositórios de um usuário do GitHub</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='input'>
            <input
              id='search'
              placeholder='Pesquise por usuário'
              aria-label='Barra de busca'
            />

            <button type='submit'>
              <BsSearch size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
