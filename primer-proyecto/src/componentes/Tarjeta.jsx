import readLogo from '../assets/react.svg';

function Tarjeta({icono, titulo, descripcion, horas, destacada}) {
    return( 
        <article className= {destacada ? 'Tarjeta-destacada' : 'tarjeta'}> 
        <span className = 'tarjeta-icono' > {icono}</span>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <p className=  "tarjeta-horas" > ⏳ {horas} Horas</p>
        </article>
    )
}

export default Tarjeta 