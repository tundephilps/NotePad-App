import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { v4 as uuid } from "uuid";
import CreateDate from "../components/CreateDate";

const CreateNote = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = CreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && details) {
      const note = { id: uuid(), title, details, date };
      //add this note to notes array
      setNotes((prevNotes) => [note, ...prevNotes]);
      console.log(note);

      // redirect to homepage
      navigate("/");
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleSubmit}>
          Save
        </button>
      </header>
      <form className="create-note__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          rows="28"
          placeholder="Note details..."
          onChange={(e) => setDetails(e.target.value)}
          value={details}
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
