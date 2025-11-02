// import React from 'react'
// import { useState } from "react";

// export default function DragDrop({ initialTasks }) {
  
//   const [tasks, setTasks] = useState(initialTasks || []);
//   const [draggedIndex, setDraggedIndex] = useState(null);

//   if (!initialTasks) return null;
  

//   // Drag events
//   const handleDragStart = (index) => setDraggedIndex(index);
//   const handleDragOver = (e) => e.preventDefault();
//   const handleDrop = (index) => {
//     const updated = [...tasks];
//     const [draggedTask] = updated.splice(draggedIndex, 1);
//     updated.splice(index, 0, draggedTask);
//     setTasks(updated);
//     setDraggedIndex(null);
//   };

//   // Delete task
//   const handleDelete = (id) => {
//     const updated = tasks.filter((t) => t.id !== id);
//     setTasks(updated);
//   };

//   return (
//     <ul className="space-y-2">
//       {tasks.map((task, index) => (
//         <li
//           key={task.id}
//           draggable
//           onDragStart={() => handleDragStart(index)}
//           onDragOver={handleDragOver}
//           onDrop={() => handleDrop(index)}
//           className="flex justify-between items-center p-3 bg-gray-50 rounded shadow-sm cursor-move hover:bg-blue-50 transition"
//         >
//           <div>
//             <p className="font-medium">{task.name}</p>
//             <p className="text-sm text-gray-500">
//               date: {task.date}
//             </p>
//           </div>
//           <button
//             onClick={() => handleDelete(task.id)}
//             className="text-red-500 hover:text-red-700"
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }
