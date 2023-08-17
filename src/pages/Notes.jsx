import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import {MdClose } from "react-icons/md";
import dummy_notes from "../dummy_notes";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import NoteItem from "../components/NoteItem";

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  // SEARCH / FILTER FUNCTIONALITY
  const searchHandler = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  };

  // function to run for every change in the text input
  useEffect(searchHandler, [text]);

  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && (
          <input
            type="text"
            autoFocus
            placeholder="keyword.."
            onChange={(e) => {
              setText(e.target.value);
              searchHandler;
            }}
          />
        )}
        <button
          className="btn"
          onClick={() => setShowSearch((prevState) => !prevState)}
        >
          {showSearch ? <MdClose /> : <CiSearch />}
        </button>
      </header>

      <div className="notes__container">
        {filteredNotes.length === 0 && <p className = 'empty__notes'> No notes found.</p>}
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} eachNote={note} />
        ))}
      </div>

      <Link to="/create-note" className="btn add__btn">
        <BsPlusLg />
      </Link>
    </section>
  );
};
export default Notes;
