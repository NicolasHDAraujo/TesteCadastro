import React, { useState } from 'react';

import './styled.css';

import Title from '../../components/Title';
import InputArea from '../../components/InputArea';
import TextArea from '../../components/TextArea';

function Home() {
  return (
    <div className="container">
      <Title />
      <TextArea />
    </div>
  );
}

export default Home;
