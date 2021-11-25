/* eslint react/prop-types: 0 */
import React from 'react';

import './styled.css';

import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { InputAdornment } from '@mui/material';

function Body({
  viewComponent,
  category,
  handleClick,
  inputValue,
  setInputValue,
  handleGetCategories,
  categories,
  handleSelectCategory,
}) {
  return (
    <>
      {!viewComponent ? (
        <>
          <span className="paragrafo2">Segmento Selecionado:</span>
          <div className="container-paragrafo">
            <span className="categoria">{category.descricao}</span>
            <Button
              variant="outlined"
              className="btnselecao"
              size="large"
              onClick={handleClick}
              endIcon={<EditIcon cursor="pointer" className="svg" />}
            ></Button>
          </div>
        </>
      ) : (
        <>
          <div className="form">
            <FormControl className="form">
              <OutlinedInput
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ex.: Restaurante"
                endAdornment={
                  <InputAdornment position="end" onClick={handleGetCategories}>
                    <IconButton
                      type="submit"
                      disableRipple
                      className="icon-search"
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className="result">
            {categories.length <= 0 ? (
              <p>Informe acima o segmento para continuar</p>
            ) : (
              categories.map((category) => (
                <p
                  key={category.id}
                  onClick={() => handleSelectCategory(category)}
                >
                  {category.descricao}
                </p>
              ))
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Body;
