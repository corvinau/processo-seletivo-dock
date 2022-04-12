import React from 'react';

import './styles.scss';

/**
 * Componente que envolve os outros componentes.
 * @param children Componentes filhos
 */
const Container: React.FC = ({ children }) => {
  return <div className='container'>{children}</div>;
};

export default Container;
