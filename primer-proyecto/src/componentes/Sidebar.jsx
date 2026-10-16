function Sidebar() {
  return (
    <aside className="sidebar">
        <h2 className="sidebar-titulo">Hola, Andrea Garzón Astudillo</h2>
        <h3 className="sidebar-titulo">Menú</h3>
        <nav>   
            <ul className="sidebar-Menu">
                <li>< a href="#"> 🏠 Inicio</a></li>
                <li>< a href="#"> 🔥 Mi perfil</a></li>
                <li>< a href="#"> 👩‍💻 Tecnologia</a></li>
                <li>< a href="#"> 😎 Recursos</a></li>
                <li>< a href="#"> 🏠 Contacto</a></li>

            </ul>
        </nav>
        <p className="sidebar-pie">3312943 - ADSO</p>
    </aside>
  );
}
export default Sidebar;