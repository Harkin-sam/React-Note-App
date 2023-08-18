import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import TransitionComponent from "./components/Transition";
import dummy_notes from "./dummy_notes";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  // since saving something in the localStorage is a side effect we are gonna use useEffect
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  console.log(notes);
  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <TransitionComponent>
                <Notes notes={notes} />
              </TransitionComponent>
            }
          />
          <Route
            path="/create-note"
            element={
              <TransitionComponent>
                <CreateNote setNotes={setNotes} />
              </TransitionComponent>
            }
          />
          <Route
            path="/edit-note/:id"
            element={<EditNote notes={notes} setNotes={setNotes} />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
