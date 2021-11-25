/* eslint react/prop-types: 0 */
import React, { useState } from 'react';

import './styled.css';

import api from '../../services/axios';

import Heading from '../../components/Heading';
import Body from '../../components/Body';
import Buttons from '../../components/Buttons';

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [viewComponent, setViewComponent] = useState(false);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({
    id: 'd5954570-1a24-11ec-890a-357ed7be30b6',
    descricao: 'Serviços de beleza',
  });

  function handleClick() {
    setViewComponent((state) => !state);
  }

  async function handleGetCategories() {
    const response = await api.get(
      `/segmentos?page=1&Descricao=${inputValue}&TemFiltro=true`,
    );

    setCategories(response.data.list);
  }

  function handleSelectCategory({ id, descricao }) {
    setCategory({ id, descricao });
    setViewComponent(false);

    console.log(id, descricao);
  }

  return (
    <div className="container">
      <Heading viewComponent={viewComponent} />
      <Body
        viewComponent={viewComponent}
        category={category}
        handleClick={handleClick}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleGetCategories={handleGetCategories}
        categories={categories}
        handleSelectCategory={handleSelectCategory}
      />
      <Buttons viewComponent={viewComponent} handleClick={handleClick} />
    </div>
  );
}

export default Home;
