import React from 'react';

export default function TaskCard({ task, onDelete, onDragStart, onDragEnd }) {
  return (
    <div
      draggable="true"
      onDragStart={(e) => onDragStart(e, task.id)}
      onDragEnd={onDragEnd}
      className="absolute bg-white rounded-lg shadow-md p-4 cursor-move select-none transition-all hover:shadow-lg flex justify-between items-center min-w-64"
      style={{
        left: `${task.x}px`,
        top: `${task.y}px`,
        zIndex: task.dragging ? 1000 : 1,
      }}
    >
      <span className="text-gray-800 font-medium">{task.text}</span>
      <button
        onClick={() => onDelete(task.id)}
        className="ml-4 text-red-500 hover:text-red-700 text-xl"
      >
        ×
      </button>
    </div>
  );
}