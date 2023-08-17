import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

// npm i uuid is used for generating unique ids
import { v4 as uuid } from "uuid";

import useCreateDate from "../components/useCreateDate";

const CreateNote = ({setNotes}) => {

  const [title, setTitle]=useState('');
  const [details, setDetails]=useState('');
  const date = useCreateDate();
  const navigate = useNavigate();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const onDetailsChange = (e) => {
    setDetails(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && details ){
      // console.log(title, details);
      const note = {id: uuid(), title, details, date}
      console.log(note);

      // add this notes to the notes array, appending the the previous state
      setNotes(prevNotes => [note, ...prevNotes ]);

      // redirect to homepage
      navigate('/')
    }
  }

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleSubmit}> Save</button>
      </header>

      <form action="" className="create-note__form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" autoFocus  onChange={onTitleChange}/>
        <textarea rows="28" placeholder="Note details..." onChange={onDetailsChange}></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
