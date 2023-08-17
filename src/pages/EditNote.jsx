import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import useCreateDate from "../components/useCreateDate";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  //console.log(id);

  const note = notes.find((item) => item.id === id);

  //console.log(note);

  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const navigate = useNavigate();
  const date = useCreateDate();

  const saveEditHandler = (e) => {
    e.preventDefault();

    if (title && details) {
      const newNote = { ...note, title, details, date };

      const newNotes = notes.map((item) => {
        if (item.id === id) {
          item = newNote;
        }
        return item;
      });

      setNotes(newNotes);
    }

    // redirect to home page
    navigate("/");
  };

  // DELETE FUNCTIONALITY
  const handleDelete = () => {
    if (window.confirm("Are you sure you wanna delete ?")) {
      const newNotes = notes.filter((item) => item.id != id); // return all items that the id is not equals to this current one

      setNotes(newNotes);

      navigate("/");
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={saveEditHandler}>
          {" "}
          Save
        </button>
        <button className="btn danger" onClick={handleDelete}>
          <RiDeleteBin6Line />{" "}
        </button>
      </header>

      <form action="" className="create-note__form" onSubmit={saveEditHandler}>
        <input
          type="text"
          placeholder="Title"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="28"
          placeholder="Note details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
