import React from 'react';

import './styled.css';

import StoreIcon from '@mui/icons-material/Store';

function Title() {
  return (
    <div className="container">
      <div className="header">
        <span className="title">
          <StoreIcon fontSize="large" />
          Segmento da empresa
        </span>
      </div>
    </div>
  );
}

export default Title;