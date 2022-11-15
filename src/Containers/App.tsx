import React, {useState} from 'react';
import Modal from "../Components/Modal/Modal";
import AlertWin from "../Components/Alert/Alert";
import Button from "../Components/Button/Button";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const modalIsOpen = () => setShowModal(true);
  const modalIsClose = () => setShowModal(false);

  const alertIsClose = () => setShowAlert(false);
  const alertIsShow = () => setShowAlert(true);

  const continueBtn = () => alert('You clicked "Continue"');
  const cancelBtn = () => alert('You clicked "Close"');

  const buttons = [
    {type: 'primary', label: 'Continue', onClick: continueBtn},
    {type: 'danger', label: 'Close', onClick: cancelBtn}
  ];

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

        <div className="modal-footer">
          {buttons.map((item) => (
            <Button
              key={Math.random()}
              type={item.type}
              label={item.label}
              continueBtn={item.onClick}
              cancelBtn={item.onClick}
            />
          ))}
        </div>
      </Modal>

      <AlertWin
        show={showAlert}
        type="warning"
        onDismiss={alertIsClose}
      >This is a warning type alert</AlertWin>

      <AlertWin
        show={showAlert}
        type="success"
      >This is a success type alert</AlertWin>
    </>
  );
}

export default App;
