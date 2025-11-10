import React, { useState, useEffect } from 'react';
import TaskCard from './TaskCard';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [draggedId, setDraggedId] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      setTasks(JSON.parse(saved));
    } else {
      
      setTasks([]);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  
  const addTask = () => {
    if (input.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: input,
      x: 50 + (tasks.length * 30) % 300, 
      y: 100 + (tasks.length * 30) % 300,
    };

    setTasks([...tasks, newTask]);
    setInput('');
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Drag start
  const handleDragStart = (e, id) => {
    setDraggedId(id);
    const task = tasks.find((t) => t.id === id);
    if (task) {
      // Mark as dragging
      setTasks(tasks.map((t) =>
        t.id === id ? { ...t, dragging: true } : t
      ));

      // Optional: hide default drag preview
      const img = new Image();
      img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';
      e.dataTransfer.setDragImage(img, 0, 0);
    }
  };

  // Drag end
  const handleDragEnd = () => {
    setDraggedId(null);
    setTasks(tasks.map((t) => ({ ...t, dragging: false })));
  };

  // Drag over page to update position
  const handlePageDragOver = (e) => {
    e.preventDefault(); // Allow drop

    if (!draggedId) return;

    
    const x = e.clientX 
    const y = e.clientY 

    setTasks(tasks.map((t) =>
      t.id === draggedId ? { ...t, x, y } : t
    ));
  };

  return (
    <>
      <div
        className="min-h-screen relative overflow-hidden bg-amber-100"
        onDragOver={handlePageDragOver}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-purple-600 text-white p-6 shadow-lg">
          <h1 className="text-3xl font-bold text-center">Interactive To-Do List</h1>
          <p className="text-center mt-2 opacity-90">Drag tasks anywhere!</p>
        </div>

        {/* Input Area */}
        <div className="max-w-md mx-auto mt-8 px-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
              placeholder="Enter a new task..."
              className="flex-1 px-4 py-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              onClick={addTask}
              className="px-6 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-900 transition font-medium"
            >
              Add
            </button>
          </div>
        </div>

        {/* Task Cards */}
        <div className="relative">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
          ))}
        </div>
      </div>
    </>
  );
}
