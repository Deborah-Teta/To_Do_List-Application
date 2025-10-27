import React from "react";
import Tasks from "../data/tasks";
import DragDrop from "../components/useDragDrop";
import Edit from "../components/useEdit";
import {useState} from 'react'

export default function Home() {
  const sampleTasks = Tasks(); // Get the task list
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState()

  // Add Task
  const handleAddTask = () => {
    if (!input.trim()) return;
    const newTask = { id: Date.now().toString(), content: input };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">To_Do List</h1>
       {/* Input */}
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
            className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600 transition"
            onClick={handleAddTask}
          >
            Add
          </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <DragDrop initialTasks={sampleTasks} />
      </div>

      {/* Edit modal component (can be activated later) */}
      <Edit />
    </div>
  );
}
