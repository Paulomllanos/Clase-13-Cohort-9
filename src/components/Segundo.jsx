import { useState } from "react";
import { Button } from "react-bootstrap";
import "./Segundo.css";


function Segundo({saludo}){

    const [respuesta, setRespuesta] = useState("Deseas abrir la puerta?");
    const [elemento, setElemento] = useState(null);
    const [controlButton, setControlButton] = useState(false)
    let componente = null;

    const openDoor = () => {
        setControlButton(true)
        setRespuesta("Abriste la puerta!")
    }

    const closeDoor = () => {
        setControlButton(false)
        setRespuesta("Cerraste la puerta!")
    }

    // if(respuesta === "Me han dicho la verdad!!!"){
    //     componente = <p>Estoy feliz!!!</p>
    // }

    const crearParrafo = () => {
       setElemento(<p>Hola</p>)
    }
    console.log(controlButton)
    return(
        <div>
            <h2>{controlButton ? respuesta : respuesta}</h2>
            <Button onClick={openDoor} className="m-2 boton" variant="success">Open</Button>
            <Button onClick={closeDoor} className="m-2" variant="danger">Close</Button>
            <button onClick={crearParrafo}>crear</button>
            {/* <div>
                {componente}
            </div> */}
            {/* <div>
                {elemento}
            </div> */}
        </div>
    )
}

export default Segundo;