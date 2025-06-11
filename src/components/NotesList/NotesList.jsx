import { useSelector } from "react-redux";
import { selectFilteredNotes } from "../../redux/selectors.js";

export const NotesList = () => {
  const filteredData = useSelector(selectFilteredNotes);

  return (
    <ul>
      {filteredData.map((note) => {
        return (
          <li key={note.id}>
            <NoteItem data={note} />
          </li>
        );
      })}
    </ul>
  );
};
