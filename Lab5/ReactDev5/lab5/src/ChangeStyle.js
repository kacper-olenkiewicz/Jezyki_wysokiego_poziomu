import { useState } from "react";

function ChangeStyle() {
  const [isBlue, setIsBlue] = useState(false);

  function changeStyle() {
    setIsBlue(!isBlue); // zamiana true/false
  }

  return (
    <div>
      <p style={{ color: isBlue ? "blue" : "black" }}>
        Tekst ze zmienianym kolorem
      </p>
      <button onClick={changeStyle}>Zmień kolor</button>
    </div>
  );
}

export default ChangeStyle;
