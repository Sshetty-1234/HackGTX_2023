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
        <div class="container">
          <strong><h3>{term}</h3></strong>
          <img id = {term} src = ''></img>
        </div>
      </div>
      <div className="back" >
        <strong><h2>{definition}</h2></strong>
        <br />
       <p>Hint: {mnemonic}</p>
      </div>
    </div>
  );
};

export default Flashcard;

