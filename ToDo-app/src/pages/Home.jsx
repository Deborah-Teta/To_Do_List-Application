// import React from "react";
// import Tasks from "../data/tasks";
// import DragDrop from "../components/useDragDrop";
// import Edit from "../components/useEdit";
// import {useState} from 'react'

// export default function Home() {
//   const sampleTasks = Tasks(); // Get the task list
//   const [tasks, setTasks] = useState(sampleTasks)
//   const [input, setInput] = useState("");
  

//   // Add Task
//   const handleAddTask = () => {
//     if (!input.trim()) return;
//     const newTask = { id: Date.now().toString(), content: input };
//     setTasks([...tasks, newTask]);
//     setInput(""); 
//   };
 
 
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-6">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">To_Do List</h1>
//        {/* Input */}
//         <div className="flex mb-4">
//           <input
//             type="text"
//             className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             placeholder="Add a new task..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
        
//           />
//           <button
//             className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600 transition"
//             onClick={handleAddTask}
//           >
//             Add
//           </button>
//       </div>
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
//         <DragDrop initialTasks={tasks} />
//       </div>
//         <Edit  />
       
//     </div>
//   );
// }

import React, { useState } from "react";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [draggedTaskIndex, setDraggedTaskIndex] = useState(null);

  // Add Task
  const handleAddTask = () => {
    if (!input.trim()) return;
    const newTask = { id: Date.now(), content: input };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  // Delete Task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Drag Start
  const handleDragStart = (index) => {
    setDraggedTaskIndex(index);
  };

  // Drag Over (needed so the drop event fires)
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Drop
  const handleDrop = (index) => {
    const updatedTasks = [...tasks];
    const [draggedTask] = updatedTasks.splice(draggedTaskIndex, 1);
    updatedTasks.splice(index, 0, draggedTask);
    setTasks(updatedTasks);
    setDraggedTaskIndex(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          To-Do List
        </h1>

        {/* Input Section */}
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleAddTask()}
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={task.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(index)}
              className="flex justify-between items-center p-3 bg-gray-50 rounded shadow-sm cursor-move hover:bg-blue-50 transition"
            >
              <span>{task.content}</span>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;

