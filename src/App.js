import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EditNote from "./Pages/EditNote";
import Note from "./Pages/Note";
//import "./App.scss";
import CreateNote from "./Pages/CreateNote";
//import dummyNotes from "./Dummynotes";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <main id="app">
      <Router>
        <Routes>
          <Route path="/" exact element={<Note notes={notes} />} />
          <Route
            path="/create-note"
            element={<CreateNote setNotes={setNotes} />}
          />
          <Route
            path="/edit-note/:id"
            element={<EditNote notes={notes} setNotes={setNotes} />}
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
