import { AiTwotoneDelete } from "react-icons/ai";
import { VscGoToEditingSession } from "react-icons/vsc";
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useState } from "react";

/* eslint-disable react/prop-types */
const TodoItem = ({ text, id, deleteTodo, updatingTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleSave = () => {
    if (!editedText.trim()) return;
    updatingTodo(id,editedText)
    setIsEditing(false)
  };

  return (
    <div className="flex justify-between align-center w-4xl p-5 rounded-lg shadow-lg bg-red-300">
      <div className="flex gap-2">
        <input
          className="p-5"
          type="checkbox"
          name="inputText"
          id="inputText"
        />
        {isEditing ? (
          <input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} className="bg-white p-2 rounded-lg"/>
        ) : (
          <>
            <div>{text}</div>
          </>
        )}
      </div>
      <div className="flex gap-5 justify-center items-center ">
        {isEditing ? (
          <>
            <FaSave
              onClick={handleSave}
              className="cursor-pointer text-green-600"
            />
            <MdCancel
              onClick={() => setIsEditing(false)}
              className="cursor-pointer text-gray-600"
            />
          </>
        ) : (
          <>
            <AiTwotoneDelete
              onClick={() => deleteTodo(id)}
              className="cursor-pointer"
            />
            <VscGoToEditingSession
              onClick={() => setIsEditing(true)}
              className="cursor-pointer"
            />
          </>
        )}
      </div>
    </div>
  );
};
export default TodoItem;
