import { Link } from "react-router-dom";
const NoteItem = ({ eachNote }) => {
  const colors = [
    "#E6EE9B",
    "#FFAB91",
    "#80DEEA",
    "#F48FB1",
    "#80CBC4",
    "#FFCC80",
    "#CF93D9",
  ];

  // selecting random colors
  const random_color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <Link
      to={`/edit-note/${eachNote.id}`}
      className="note"
      style={{ background: random_color }}
    >
      <h4>
        {eachNote.title.length > 40
          ? eachNote.title.substr(0, 50) + "..."
          : eachNote.title}
      </h4>
      <p>{eachNote.date}</p>
    </Link>
  );
};

export default NoteItem;
