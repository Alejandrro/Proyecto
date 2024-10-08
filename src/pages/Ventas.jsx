import React, { useState } from "react";

import TarjetaBasica from "../components/Tarjetas";
import Carrito from "../components/Carrito";

function Ventas() {
  const [products] = useState([
    {
      id: 1,
      name: "Producto 1",
      url: "imagenes/ejemplo.png",
      descripcion: "Descripción del producto 1",
      precio: 100,
      //cantidad: 1,
    },
    {
      id: 2,
      name: "Producto 2",
      url: "imagenes/ejemplo.png",
      descripcion: "Descripción del producto 2",
      precio: 100,
      //cantidad: 1,
    },
    {
      id: 3,
      name: "Producto 3",
      url: "imagenes/ejemplo.png",
      descripcion: "Descripción del producto 3",
      precio: 100,
      //cantidad: 1,
    },
    {
      id: 4,
      name: "Producto 4",
      url: "imagenes/ejemplo.png",
      descripcion: "Descripción del producto 4",
      precio: 100,
      //cantidad: 1,
    },
    {
      id: 5,
      name: "Producto 5",
      url: "imagenes/ejemplo.png",
      descripcion: "Descripción del producto 5",
      precio: 100,
      //cantidad: 1,
    },
    {
      id: 6,
      name: "Producto 6",
      url: "imagenes/ejemplo.png",
      descripcion: "Descripción del producto 6",
      precio: 100,
      //cantidad: 1,
    },
    {
      id: 7,
      name: "Producto 7",
      url: "imagenes/ejemplo.png",
      descripcion: "Descripción del producto 7",
      precio: 100,
      //cantidad: 1,
    },
    {
      id: 8,
      name: "Producto 8",
      url: "imagenes/ejemplo.png",
      descripcion: "Descripción del producto 8",
      precio: 100,
      //cantidad: 1,
    },
    // Agrega más productos aquí
  ]);

  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    console.log("Valor inicial del carro:::", JSON.stringify(carrito));

    console.log("Producto a Agregar::", JSON.stringify(producto));

    const existe = carrito.filter((map) => map.id === producto.id);

    console.log("Valor", existe);

    if (existe.length > 0) {
      console.log("Ya existe el producto", JSON.stringify(producto));

      //setCarrito([...carrito, producto]);
      setCarrito(
        carrito.map((item) => {
          console.log("item::", item);
          console.log("producto id", producto.id);

          if (item.id === producto.id) {
            return { ...item, cantidad: item.cantidad + 1 };
          } else {
            return item;
          }
        })
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }

    console.log("Contenido del carrito:::", JSON.stringify(carrito));
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <div className="row">
        {products.map((producto) => (
          <div className="col-md-4" key={producto.id}>
            <div className="product-card" style={{ height: "200px" }}>
              <TarjetaBasica
                key={producto.id}
                producto={producto}
                agregarProducto={agregarProducto}
              />
            </div>
          </div>
        ))}
      </div>
      <h1>Carrito de Compras</h1>
      <Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />
    </div>
  );
}

export default Ventas;
