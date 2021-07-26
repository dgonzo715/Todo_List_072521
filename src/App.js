import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Viewer from './components/Viewer';

function App() {
  const [ skillsList, setSkillsList ] = useState([]);

  return (
    <div className="App">
      <Header />
      <Form
       skillsList={ skillsList }
       setSkillsList={ setSkillsList } 
      />
      <Viewer
       skillsList={ skillsList }
       setSkillsList={ setSkillsList } 
       />
    </div>
  );
}

export default App;
