import React, { useState } from 'react';
import SidebarIcon from './SideBarIcon';  // Asegúrate de que estas rutas sean correctas
import SideBarContent from './SideBarContent';  // Asegúrate de que estas rutas sean correctas
import SlideContent from './SlideContent';
import './styles/SideBar.css';  // Asegúrate de que la ruta sea correcta

const Blanco = () => {
  // Estado que controla la visibilidad del SidebarContent
  const [isSidebarContentVisible, setSidebarContentVisible] = useState(false);

  // Función para alternar la visibilidad del SidebarContent
  const toggleSidebarContent = () => {
    setSidebarContentVisible(prevState => !prevState);
  };

  return (
    <div className="blanco-container">
      <div>
        <SidebarIcon toggleSidebarContent={toggleSidebarContent} />
        <SideBarContent isVisible={isSidebarContentVisible} />
      </div>

      <div>
        <SlideContent />
      </div>

      {/* Aquí puedes agregar más contenido o personalizar el área donde se muestra el DragDrop */}
    </div>
  );
};

export default Blanco;
