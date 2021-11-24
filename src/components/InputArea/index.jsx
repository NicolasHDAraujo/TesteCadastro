import React from 'react';
import { Link } from 'react-router-dom';

import './styled.css';

import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

function InputArea() {
  return (
    <div className="container">
      <div className="paragrafo">
        <span>
          Selecione abaixo o segmento que mais se aproxima com o ramo de
          atividade de sua empresa
        </span>
      </div>
      <div className="form">
        <FormControl className="form-input">
          <OutlinedInput placeholder="Ex.: Restaurante" />
        </FormControl>
        <IconButton type="submit" className="icon-search">
          <SearchIcon />
        </IconButton>
      </div>
      <div className="btn">
        <div className="btnv">
          <Link to="/" style={{ textDecoration: 'none' }}>
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
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InputArea;
