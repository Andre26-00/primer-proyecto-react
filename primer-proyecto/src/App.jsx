import './App.css';
import Encabezado from './componentes/Encabezado';
import Sidebar from './componentes/Sidebar';
import PiePagina from './componentes/PiePagina';
import Presentacion from './componentes/Presentacion';
import Tarjeta from './componentes/Tarjeta';
import fotoPerfil from './img/images.jpg';


function App() {
  const programa = 'Análisis y Desarrollo de Software';
  const usuario = {
  nombre: 'Andrea Garzón Astudillo',
  rol: 'Aprendiz ADSO',
  correo: 'garzonastudillo2006.15@gmail.com',
  foto: fotoPerfil,
}
  return (
    <>
    <div className='layout'>
      <Encabezado usuario={usuario} />
      <Sidebar />
      <main className="contenido">
        <h2>Bienvenido al programa {programa}</h2>
        <section className="tarjetas">
          <Presentacion />
          <Tarjeta
          icono ="🌷" 
          titulo =" React"
          descripcion =" Herramienta de Javascript para construir interface con componentes"
          horas = {120}
          destacada={ true}/>

          <Tarjeta 
          icono ="🏈" 
          titulo ="Vite"
          descripcion =" Herramienta que crea, ejecuta y empaqueta el proyecto"
          horas = {60}
          destacada={false }/>

          <Tarjeta
          icono ="😶‍🌫️" 
          titulo ="ESLint"
          descripcion ="Herramienta que crea , ejecuta y empaqueta el proyecto"
          horas = {20}
          destacada={ true} />
        </section>
      </main>
      <PiePagina />
    </div>
    </>
  );
}

export default App;