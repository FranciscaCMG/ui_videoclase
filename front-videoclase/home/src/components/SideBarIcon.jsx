import React, { useState } from 'react';
import './styles/SideBar.css';  // Asegúrate de que la ruta sea correcta

// Importamos los íconos
import { PiTextT } from 'react-icons/pi';
import { LuTextCursor } from "react-icons/lu";
import { IoIosList } from "react-icons/io";
import { AiOutlineTable } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";
import { CiCircleQuestion } from "react-icons/ci";

// Definimos una constante con todos los íconos y sus propiedades
const ICONS = [
  { id: 'textT', Icon: PiTextT, label: 'Text T' },
  { id: 'textCursor', Icon: LuTextCursor, label: 'Text Cursor' },
  { id: 'list', Icon: IoIosList, label: 'List' },
  { id: 'table', Icon: AiOutlineTable, label: 'Table' },
  { id: 'code', Icon: FaCode, label: 'Code' },
  { id: 'question', Icon: CiCircleQuestion, label: 'Question' }

];

const SidebarIcon = ({ toggleSidebarContent }) => {
  // Creamos un estado para gestionar los íconos activos
  const [activeIcon, setActiveIcon] = useState(null);

  // Función para alternar el estado de activo/inactivo
  const handleIconClick = (iconName) => {
    setActiveIcon(activeIcon === iconName ? null : iconName);  // Alterna el estado de isActive
    toggleSidebarContent();  // Ejecuta la función pasada como prop para alternar el contenido
  };

  return (
    <div className="sidebar-p">
      <div className="icon-container">
        {/* Iteramos sobre la constante ICONS para renderizar los íconos */}
        {ICONS.map(({ id, Icon }) => (
          <div
            key={id}
            className={`icon ${activeIcon === id ? 'active' : ''}`}
            onClick={() => handleIconClick(id)}
          >
            <Icon size={30} color={activeIcon === id ? '#992bff' : 'white'} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarIcon;
