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
          <br />
          {definition}
        </div>
      </div>
      <div className="back" >
        <div>{mnemonic}</div>
        <img id = {term} src = ''></img>
      </div>
    </div>
  );
};

export default Flashcard;

