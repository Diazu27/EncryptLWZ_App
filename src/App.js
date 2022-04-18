import {BsFillLockFill} from 'react-icons/bs'


import './App.css';
//import Card from './Componentes/Card';
import CardText from './Componentes/CardText';
import Footer from './Componentes/Footer';

function App() {
  return (
    <div className="container">

      <div className="Header">
        <BsFillLockFill className="icon"/>
        <h1 className="Titulo">Encrypt with Node Js</h1>
      </div>
      <CardText/>
      <Footer/>
    </div>
  );
}

export default App;
