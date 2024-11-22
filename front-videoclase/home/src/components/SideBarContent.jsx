import React from 'react';
import DragDrop from './DragDrop'
import './styles/SideBar.css';  // Asegúrate de que la ruta sea correcta

const SideBarContent = ({ isVisible }) => {
  if (!isVisible) return null;  // Si no es visible, no renderiza nada

  return (
    <div className="sidebarContent">
      <DragDrop /> {/* Este es el componente que se mostrará en el contenido del sidebar */}
    </div>
  );
};

export default SideBarContent;

