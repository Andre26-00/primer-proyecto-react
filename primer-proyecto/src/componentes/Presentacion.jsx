function Presentacion({ nombre, barrio, correo, telefono }) {     
    return (         
        <article className="presentacion">             
            <h2>Presentación</h2>             
            <p className="presentacion-nombre">{nombre}</p>                          
            <p><strong>Barrio:</strong> {barrio}</p>             
            <p><strong>Correo:</strong> <a href={`mailto:${correo}`}>{correo}</a></p>             
            <p><strong>Teléfono:</strong> <a>{telefono}</a></p>         
        </article>     
    ); 
}  

export default Presentacion;
