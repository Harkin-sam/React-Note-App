import { Link } from "react-router-dom";
const NoteItem = ({ eachNote }) => {
  return (
    <Link to={`/edit-note/${eachNote.id}`} className="note">
      <h4>{eachNote.title.length > 40 ? (eachNote.title.substr(0, 50)) + '...': eachNote.title}</h4>
      <p>{eachNote.date}</p>
    </Link>
  );
};

export default NoteItem;
