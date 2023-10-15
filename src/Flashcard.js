import React, { useState, useEffect } from "react";
 

const Flashcard = ({ term, definition, mnemonic }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    window.generate(mnemonic, term);
  }, []);

  return (
    <div className={`flashcard ${isFlipped ? "flipped" : ""}`} onClick={flipCard}>
      <div className="front">
        <div>
          <strong>{term}</strong>
          <img id = {term} src = ''></img>
        </div>
      </div>
      <div className="back" >
        <strong>{definition}</strong>
        <br />
        {mnemonic}
      </div>
    </div>
  );
};

export default Flashcard;

