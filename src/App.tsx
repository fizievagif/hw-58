import React from 'react';
import Modal from "./Components/Modal/Modal";

function App() {
  return (
    <>
      <Modal/>

      <button className="btn btn-primary">Show modal</button>
      <button className="btn btn-danger ms-4">Show alert</button>
    </>
  );
}

export default App;
