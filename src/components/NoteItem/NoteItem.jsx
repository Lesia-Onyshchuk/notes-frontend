import { useDispatch } from "react-redux";
import { deleteNote } from "../../redux/operations";

export const NoteItem = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        <li>{data.title}</li>
        <li>{data.content}</li>
      </ul>
      <button
        onClick={() => {
          dispatch(deleteNote(data.id));
        }}
      >
        Delete
      </button>
    </div>
  );
};
