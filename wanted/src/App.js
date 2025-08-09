import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Forms from './components/Forms/Forms'
import CardsProcurados from './components/CardsProcurados/Cards';


function App() {
  return (
   <>
      <Header/>
      <Forms/>
      <CardsProcurados />
   </>
  );
}

export default App;
