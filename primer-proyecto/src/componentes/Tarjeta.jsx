import readLogo from '../assets/react.svg';

function Tarjeta() {
    return(
        <article className="tarjeta">
            <img src={readLogo} alt="Logo de React" />
            <h3>Esto es React</h3>
            <p>Biblioteca de JavaScript para
                construir interfaces con componentes.
            </p>
        </article>
    )
}

export default Tarjeta