// Carrito.js
import React from "react";
import { Button } from "react-bootstrap";

const Carrito = ({ carrito, eliminarDelCarrito }) => {
  const total = carrito.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0
  );

  return (
    <div>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {carrito.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.precio} x {item.cantidad}
                <Button
                  variant="danger"
                  onClick={() => eliminarDelCarrito(item.id)}
                >
                  Eliminar
                </Button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
        </div>
      )}
    </div>
  );
};

export default Carrito;
