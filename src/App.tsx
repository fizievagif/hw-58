import React, {useState} from 'react';
import Modal from "./Components/Modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const modalIsOpen = () => setShowModal(true);
  const modalIsClose = () => setShowModal(false);

  return (
    <>
      <Modal
        show={showModal}
        title='Some kinda modal title'
        onClose={modalIsClose}
      >
        <div className="modal-body">
          This is a modal content
        </div>
      </Modal>

      <button
        className="btn btn-primary"
        onClick={modalIsOpen}
      >
        Show modal
      </button>

      <button
        className="btn btn-danger ms-4"
      >
        Show alert
      </button>
    </>
  );
}

export default App;
