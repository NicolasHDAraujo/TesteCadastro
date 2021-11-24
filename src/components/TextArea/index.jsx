import React, { useEffect, useState } from 'react';

import './styled.css';

import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import api from '../../services/axios';

function TextArea() {
  const [service, setService] = useState({});

  useEffect(() => {
    async function getService() {
      const response = await api.get(
        'segmentos?page=1&descricao=servicos%20de%20beleza&temfiltro=true',
      );

      setService(response.data);
    }

    getService();
  }, []);

  return (
    <div className="container">
      <div className="paragrafo">
        <span>
          Confirme o segmento que sua empresa atua para personalizarmos sua
          experiência em nosso aplicativo
        </span>
      </div>
      <div className="paragrafo2">
        <span>Segmento Selecionado:</span>
      </div>
      <div className="title">
        <span>Serviço de Beleza</span>
        <div className="btnc">
          <Button
            variant="outlined"
            className="btnselecao"
            size="large"
            endIcon={<EditIcon cursor="pointer" />}
          ></Button>
        </div>
      </div>
      <div className="btn">
        <div className="btnv">
          <Button
            className="btnvoltar"
            variant="outlined"
            size="large"
            startIcon={<ChevronLeftIcon cursor="pointer" />}
          >
            Voltar
          </Button>
        </div>
        <div>
          <Button
            className="btnfinalizar"
            variant="contained"
            size="large"
            startIcon={<CheckCircleOutlineIcon cursor="pointer" />}
          >
            Finalizar cadastro
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TextArea;
