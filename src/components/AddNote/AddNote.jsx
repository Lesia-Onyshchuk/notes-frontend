import { useState } from "react";
import { AddModal } from "../AddModal/AddModal.jsx";

export const AddNote = () => {
  const [isModalOpen, setIsMosalOpen] = useState(false);

  const handleAddNote = () => {
    setIsMosalOpen(true);
  };

  return (
    <div>
      <button type="button" onClick={handleAddNote}>
        Add
      </button>
      {isModalOpen && (
        <AddModal
          onClick={() => {
            setIsMosalOpen(false);
          }}
        />
      )}
    </div>
  );
};
