import React from 'react';

import './styled.css';

import Title from '../../components/Title';
import InputArea from '../../components/InputArea';

function Home() {
  return (
    <div className="container">
      <Title />
      <InputArea />
    </div>
  );
}

export default Home;
