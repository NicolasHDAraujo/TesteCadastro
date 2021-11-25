/* eslint react/prop-types: 0 */
import React from 'react';

import './styled.css';

import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function Buttons({ viewComponent, handleClick }) {
  return (
    <>
      {!viewComponent ? (
        <div className="footer">
          <Button
            className="btnvoltar"
            variant="outlined"
            size="large"
            startIcon={
              <ChevronLeftIcon cursor="pointer" className="svg-botao" />
            }
          >
            Voltar
          </Button>

          <Button
            className="btnfinalizar"
            variant="contained"
            size="large"
            startIcon={
              <CheckCircleOutlineIcon cursor="pointer" className="svg-botao" />
            }
          >
            Finalizar cadastro
          </Button>
        </div>
      ) : (
        <div className="footer">
          <Button
            className="btnvoltar"
            variant="outlined"
            size="large"
            startIcon={
              <ChevronLeftIcon cursor="pointer" className="svg-botao" />
            }
            onClick={handleClick}
          >
            Voltar
          </Button>
        </div>
      )}
    </>
  );
}

export default Buttons;
