// Code Keypad Component Here
import React from "react";

function Keypad(){
  function handleEvent(){
    console.log("Entering password...")
  }

  return (
      <input type="password" onChange={handleEvent} placeholder = "ENTER PASSWORD" />
  );
}

export default Keypad;