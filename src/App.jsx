import { useState } from 'react'
import './App.css'
import Button from './Button'
import Background from './Background';
import ButtonPanel from './ButtonPanel';

function App() { 
  return (
    <div className='container'>
      <Background/>
      <ButtonPanel/> 
    </div>
  );
}

export default App
