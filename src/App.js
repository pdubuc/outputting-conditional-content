import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [isDeleting, setIsDeleting] = useState(false);

  let warningMessage;

  const submitHandler = (event) => {
    setIsDeleting(true);
  };

  const approveHandler = (event) => {
    setIsDeleting(false);
  };

  if (isDeleting) {
    warningMessage = (
      <div id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={approveHandler}>Proceed</button>
      </div>
    );
  }

  return (
    <div>
      {warningMessage}
      <button onClick={submitHandler}>Delete</button>
    </div>
  );
}
