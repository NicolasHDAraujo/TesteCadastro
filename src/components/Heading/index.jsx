/* eslint react/prop-types: 0 */
import React from 'react';

import './styled.css';

import StoreIcon from '@mui/icons-material/Store';

function Heading({ viewComponent }) {
  return (
    <>
      <div className="header">
        <span>
          <StoreIcon className="icon" />
          Segmento da empresa
        </span>
      </div>

      <div className="paragrafo">
        {!viewComponent ? (
          <span>
            Confirme o segmento que sua empresa atua para personalizarmos sua
            experiência em nosso aplicativo
          </span>
        ) : (
          <span>
            Selecione abaixo o segmento que mais se aproxima com o ramo de
            atividade de sua expresa
          </span>
        )}
      </div>
    </>
  );
}

export default Heading;
