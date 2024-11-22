import React, { useState } from 'react';

const DragDrop = () => {
  // Estado que incluye el tamaño de cada título
  const [titles, setTitles] = useState([
    { id: 'title1', text: 'Título 1', size: '16px' },
    { id: 'title2', text: 'Título 2', size: '18px' },
    { id: 'title3', text: 'Título 3', size: '20px' },
    { id: 'title4', text: 'Título 4', size: '22px' },
    { id: 'title5', text: 'Título 5', size: '24px' },
    { id: 'title6', text: 'Título 6', size: '26px' },
  ]);

  const allowDrop = (ev) => {
    ev.preventDefault();
  };

  const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
  };

  const drop = (ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    
    // Mueve el título a la posición del contenedor
    const dropTarget = ev.target;

    // Si el objetivo de la caída es un título, intercambia las posiciones
    if (dropTarget.className === 'drop-target') {
      const draggedId = draggedElement.id;
      const droppedId = dropTarget.id;

      const newTitles = [...titles];
      const draggedIndex = newTitles.findIndex(title => title.id === draggedId);
      const droppedIndex = newTitles.findIndex(title => title.id === droppedId);

      // Intercambia las posiciones en el estado
      [newTitles[draggedIndex], newTitles[droppedIndex]] = [newTitles[droppedIndex], newTitles[draggedIndex]];
      setTitles(newTitles);
    }
  };

  return (
    <div>
      <p>Arrastra los títulos hacia abajo:</p>
      
      {/* Contenedor donde se pueden soltar los títulos */}
      <div
        id="titleContainer"
        style={{
          width: '350px',
          minHeight: '300px',
          padding: '10px',
          border: '1px solid #aaaaaa',
          position: 'relative',
        }}
      >
        {/* Aquí mapeamos los títulos */}
        {titles.map((title) => (
          <div
            key={title.id}
            id={title.id}
            className="drop-target"
            onDrop={drop}
            onDragOver={allowDrop}
            style={{
              width: '100%',
              padding: '8px',
              margin: '5px 0',
              border: '1px solid #cccccc',
              cursor: 'move',
              backgroundColor: '#f1f1f1',
              textAlign: 'center',
            }}
          >
            <div
              id={title.id}
              draggable="true"
              onDragStart={drag}
              style={{
                padding: '10px',
                backgroundColor: '#dfe6e9',
                border: '1px solid #b2bec3',
                borderRadius: '4px',
                cursor: 'move',
                userSelect: 'none', // Evita la selección del texto mientras se mueve
                fontSize: title.size, // Asigna el tamaño del texto según el valor del campo `size`
              }}
            >
              {title.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragDrop;
