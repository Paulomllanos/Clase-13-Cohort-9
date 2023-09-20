import './App.css';
import MiComponente from './components/MiComponente';
import Segundo from './components/Segundo';
import imagen1 from "./assets/cualidades-producto-1200x900.jpg";
import ErrorBoundary from './components/ErrorBoundary';
import Error from './components/Error';

function App() {
  
  const nombre = "Paulo Maldonado";
  const usuarios = [
    'Usuario1',
    'Usuario2',
    'Usuario3',
    'Usuario4',
    'Usuario5'
  ]

  const handleButton = () => {
    alert("JAJAJA Miserable no te alcanza!!")
    console.log("jajaj")
  }

  // const listaUsuarios = usuarios.map((usuario, index) => (
  //   <li key={index}>{usuario}</li>
  // ))

  return (
    <main>
      <h1>Soy el virtual</h1>
      <h1>Mi primer contacto con React</h1>

      <MiComponente usuario={nombre}/>
      
      {
        usuarios.map((usuario, index) => (
          <div key={index}>
            <img src={imagen1} alt='' />
            <h3>{usuario}</h3>
            <p>Price: </p>
            <button onClick={handleButton}>Comprar</button>
          </div>
        ))
      }
    </main>
  )
}

export default App;
