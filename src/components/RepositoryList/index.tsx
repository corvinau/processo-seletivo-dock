import React from 'react';

import { BsEye } from 'react-icons/bs';

import { useRepositorio } from 'src/hooks/repositorio';

import './styles.scss';

/**
 * Componente que representa a lista de repositórios encontrados na busca.
 * Caso não haja repositórios, exibe uma mensagem informando que não foram
 * encontrados resultados.
 */
const RepositoryList: React.FC = () => {
  const { username, repositorio } = useRepositorio();

  return (
    <div className='repository-list'>
      {username.login ? (
        <div className='card user-info-card'>
          <div className='user-info-card-container'>
            <div className='user-info-card-avatar'>
              <img src={username.avatarUrl} alt='User Avatar' />
            </div>
            <div className='user-info-card-info'>
              <div className='user-info-card-name'>{username.name}</div>
              <div className='user-info-card-login'>@{username.login}</div>
              <div className='user-info-card-bio'>{username.bio}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className='card user-info-card'>Nenhum usuário encontrado</div>
      )}

      {repositorio ? (
        <div className='respository'>
          {repositorio.map((item) => (
            <a
              href={item.htmlUrl}
              target='_blank'
              rel='noreferrer'
              key={item.id}>
              <div className='repository-item-box' key={item.id}>
                <div className='repository-item-box-header'>
                  <span>{item.fullName}</span>
                  <span className='repository-item-box-watchers'>
                    {item.watchers} <BsEye />
                  </span>
                </div>

                {item.description && (
                  <div className='repository-item-box-content'>
                    {item.description}
                  </div>
                )}

                <div className='repository-item-box-infos'>
                  <span>
                    Data da criação:{' '}
                    {new Date(item.createdAt).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    })}
                  </span>
                  <span>
                    Última atualização:{' '}
                    {new Date(item.updatedAt).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    })}
                  </span>
                  <span>
                    Linguagem principal: {item.language ? item.language : '-'}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className='card respository'>Nenhum repositório encontrado</div>
      )}
    </div>
  );
};

export default RepositoryList;
