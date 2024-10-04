import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "../styles/Tarjetas.css";

import { useState } from "react";

import ModalTarjetas from "./ModalTarjetas";

const TarjetaBasica = ({ producto, agregarProducto }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [cantidad, setCantidad] = useState(1);

  // Función para manejar cambios en el input numérico
  const cambiarCantidad = (e) => {
    setCantidad(Number(e.target.value));
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={producto.url} />
        <Card.Body>
          <Card.Title>{producto.name}</Card.Title>
          <Card.Text>{producto.descripcion}</Card.Text>
          <Card.Text>Precio: ${producto.precio}</Card.Text>
          <input
            type="number"
            value={cantidad}
            onChange={cambiarCantidad}
            min="1"
            className="form-control mb-3"
          />
          <Button variant="primary" onClick={handleShow}>
            Ver Mas
          </Button>
          <Button variant="primary" onClick={() => agregarProducto(producto)}>
            Agregar al carrito
          </Button>
        </Card.Body>
      </Card>

      <ModalTarjetas
        show={show}
        handleClose={handleClose}
        producto={producto}
      />
    </>
  );
};

export default TarjetaBasica;
