import Segundo from "./Segundo";
import ErrorBoundary from "./ErrorBoundary";

const MiComponente = ({usuario}) => { 
    const saludo = "Paulo te esta saludando!!!"
    return (
        <section>
            <h3>El usuario conectado es: {usuario} </h3>
            <Segundo saludo={saludo}/>
        </section>
    )
}

export default MiComponente;