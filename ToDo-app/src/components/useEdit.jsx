// import React from "react";
// import { useState, useEffect } from 'react';

// export default function Edit({ isOpen, onClose, task, onSave }) {
//   const [editedTask, setEditedTask] = useState({
//     id: '',
//     content: '',
//     dueDate: ''
//   });

//   // Initialize form when task prop changes or modal opens
//   useEffect(() => {
//     if (task) {
//       setEditedTask({
//         id: task.id || '',
//         content: task.content || '',
//         dueDate: task.dueDate || ''
//       });
//     }
//   }, [task, isOpen]);

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedTask(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!editedTask.content.trim()) {
//       alert('Task name cannot be empty');
//       return;
//     }
//     onSave(editedTask);
//     onClose();
//   };

//   // Handle cancel
//   const handleCancel = () => {
//     onClose();
//   };

//   // Don't render if not open
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
//         <div className="p-6">
//           <h3 className="text-xl font-bold text-gray-800 mb-4">Edit Task</h3>
//           <form onSubmit={handleSubmit}>
//             <div className="space-y-4">
//               <div>
//                 <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
//                   Task Name
//                 </label>
//                 <input
//                   id="content"
//                   name="content"
//                   type="text"
//                   value={editedTask.content}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="Enter task name"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-1">
//                   Due Date
//                 </label>
//                 <input
//                   id="dueDate"
//                   name="dueDate"
//                   type="date"
//                   value={editedTask.dueDate}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//               </div>
//             </div>
//             <div className="mt-6 flex justify-end space-x-3">
//               <button
//                 type="button"
//                 onClick={handleCancel}
//                 className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }