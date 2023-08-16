import { CiSearch } from "react-icons/ci";
import dummy_notes from "../dummy_notes";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import NoteItem from "../components/NoteItem";

const Notes = ({notes}) => {
  return (
    <section>
      <header className="notes__header">
        <h2>My Notes</h2>
        {/* <input type="text" autoFocus placeholder='keyword..'/> */}
        <button className="btn">
          <CiSearch />
        </button>
      </header>

      <div className="notes__container">
        {notes.map((note) => (
          <NoteItem key={note.id} eachNote={note}/>
        ))}
      </div>
      <Link className="btn add__btn">
        <BsPlusLg />
      </Link>
    </section>
  );
};
export default Notes;
