import { Header } from "./components/Header/Header.jsx";
import { NotesList } from "./components/NotesList/NotesList.jsx";
import { SearchNotes } from "./components/SearchNotes/SearchNotes.jsx";

export const App = () => {
  return (
    <div>
      <Header />
      <SearchNotes />
      <NotesList />
    </div>
  );
};
