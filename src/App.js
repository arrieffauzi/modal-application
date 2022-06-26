import "./App.css";
import Modal from "./components/modal";
import { useEffect, useRef, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const modalRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!modalRef.current.contains(event.target)) {
        setIsOpen(false);
        setInput("");
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  document.addEventListener("keydown", function (e) {
    let key = e.key;
    if (key === "Escape") {
      setIsOpen(false);
    }
  });

  return (
    <div className={isOpen ? "App hide-overflow" : "App" }>
      <div className="content">
        <div className="input-container">
          <label style={{ marginBottom: 10 }} htmlFor="htmlInput">
            Create Your Modal Content :
          </label>
          <textarea
            style={{ width: 500 }}
            id="htmlInput"
            rows="10"
            cols="20"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          ></textarea>
        </div>

        <button
          className="button"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Show Modal
        </button>
      </div>

      {isOpen && (
        <Modal
          closeModal={setIsOpen}
          modalRef={modalRef}
          data={input}
          setData={setInput}
        />
      )}
    </div>
  );
}

export default App;
