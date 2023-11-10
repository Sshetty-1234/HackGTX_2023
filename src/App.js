import React, { useState } from "react";
import Flashcard from "./Flashcard";
import "./App.css";

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [termInput, setTermInput] = useState("");
  const [definitionInput, setDefinitionInput] = useState("");
  const [mnemonicInput, setMnemonicInput] = useState("");

  const handleAddFlashcard = () => {
    if (termInput && definitionInput && mnemonicInput) {
      setFlashcards([
        ...flashcards,
        {
          term: termInput,
          definition: definitionInput,
          mnemonic: mnemonicInput,
        },
      ]);
      setTermInput("");
      setDefinitionInput("");
      setMnemonicInput("");
    }
  }

  const handleTermInputChange = (e) => {
    setTermInput(e.target.value);
  }

  const handleDefinitionInputChange = (e) => {
    setDefinitionInput(e.target.value);
  }

  const handleMnemonicInputChange = (e) => {
    setMnemonicInput(e.target.value);
  }

  const handleRefresh = () => {
    window.location.reload();
  }

  return (
    <div className="App">
      <h1>Funky Cards</h1>
      <h2>Fast | Easy | Funky</h2>
      
      <div className="flashcard-form">
        <input
          type="text"
          placeholder="Term"
          value={termInput}
          onChange={handleTermInputChange}
        />
        <input
          type="text"
          placeholder="Definition"
          value={definitionInput}
          onChange={handleDefinitionInputChange}
        />
        <input
          type="text"
          placeholder="Mnemonic"
          value={mnemonicInput}
          onChange={handleMnemonicInputChange}
        />
        <button onClick={handleAddFlashcard}>Add Flashcard</button>
        <button onClick={handleRefresh}>Delete All    </button>
      </div>
      <div className="flashcard-list">
        {flashcards.map((flashcard, index) => (
          <Flashcard
            key={index}
            term={flashcard.term}
            definition={flashcard.definition}
            mnemonic={flashcard.mnemonic}
          />
        ))}
      </div>
    </div>
  );
}



export default App;