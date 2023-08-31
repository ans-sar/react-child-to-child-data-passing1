import React from "react";
function Dice({ callback }) {
  return (
    <button onClick={() => callback(Math.floor(Math.random() * 6) + 1)}>
      Role Dice
    </button>
  );
}
export default Dice;
