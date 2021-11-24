import React from 'react';

import './styled.css';

import Title from '../../components/Title';
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
