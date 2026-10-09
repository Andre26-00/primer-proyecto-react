import './App.css';
import Encabezado from './componentes/Encabezado';
import Sidebar from './componentes/Sidebar';
import PiePagina from './componentes/PiePagina';
import Presentacion from './componentes/Presentacion';
import Tarjeta from './componentes/Tarjeta';


function App() {
  const programa = 'Análisis y Desarrollo de Software';

  return (
    <>
    <div className='layout'>
      <Encabezado />
      <Sidebar />
      <main className="contenido">
        <h2>Bienvenido al programa {programa}</h2>
        <section className="tarjetas">
          <Presentacion />
          <Tarjeta />
          <Tarjeta />
        </section>
      </main>
      <PiePagina />
    </div>
    </>
  );
}

export default App;