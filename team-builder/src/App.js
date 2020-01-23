import React, { useState } from 'react';
import Form from './components/Form/Form';
import Card from './components/Card/Card';
import './App.css';

function App() {
  const [ data, setData ] = useState();

  return (
    <div className="App">
      <Form></Form>
    </div>
  );
}

export default App;
