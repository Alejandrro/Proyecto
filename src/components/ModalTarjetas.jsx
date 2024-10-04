import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalTarjetas = ({ show, handleClose, producto }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      dialogClassName="modal-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>{producto.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={producto.url} alt="10%" style={{ width: "100%" }} />
        <p>{producto.descripcion}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalTarjetas;
