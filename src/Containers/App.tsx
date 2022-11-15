import React, {useState} from 'react';
import Modal from "../Components/Modal/Modal";
import Alert from "../Components/Alert/Alert";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const modalIsOpen = () => setShowModal(true);
  const modalIsClose = () => setShowModal(false);

  const alertIsClose = () => setShowAlert(false);
  const alertIsShow = () => setShowAlert(true);

  return (
    <>
      <div className="m-5">
        <button
          className="btn btn-primary"
          onClick={modalIsOpen}
        >Show modal</button>

        <button
          className="btn btn-danger ms-4"
          onClick={alertIsShow}
        >Show alert</button>
      </div>

      <Modal
        show={showModal}
        title='Some kinda modal title'
        onClose={modalIsClose}
      >
        <div className="modal-body">
          This is a modal content
        </div>
      </Modal>

      <Alert
        show={showAlert}
        type="warning"
        onDismiss={alertIsClose}
      >This is a warning type alert</Alert>
      <Alert
        show={showAlert}
        type="success"
      >This is a success type alert</Alert>
    </>
  );
}

export default App;
