import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Forms from './components/Forms/Forms'
import CardsProcurados from './components/CardsProcurados/Cards';
import { useState } from 'react';



function App() {
  
  const [foragidos, setForagidos] = useState('')
  const novoForagido = (foragido) => {
    console.log(foragido)
    setForagidos([...foragidos, foragido])
  }

  return (
    <>
      <Header />
      <Forms
        novoForagido={foragido => novoForagido(foragido)}
      />
      <CardsProcurados />
    </>
  );
}

export default App;
