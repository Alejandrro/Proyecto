import React from 'react';
import TarjetaBasica from './componentes/Tarjetas'

const products = [
  { id: 1, name: 'Producto 1', url: 'imagenes/ejemplo.png', descripcion: 'Descripción del producto 1' },
  { id: 2, name: 'Producto 2', url: 'imagenes/ejemplo.png', descripcion: 'Descripción del producto 2' },
  { id: 3, name: 'Producto 3', url: 'imagenes/ejemplo.png', descripcion: 'Descripción del producto 3' },
  { id: 4, name: 'Producto 4', url: 'imagenes/ejemplo.png', descripcion: 'Descripción del producto 4' },
  { id: 5, name: 'Producto 5', url: 'imagenes/ejemplo.png', descripcion: 'Descripción del producto 5' },
  { id: 6, name: 'Producto 6', url: 'imagenes/ejemplo.png', descripcion: 'Descripción del producto 6' },
  { id: 7, name: 'Producto 7', url: 'imagenes/ejemplo.png', descripcion: 'Descripción del producto 7' },
  { id: 8, name: 'Producto 8', url: 'imagenes/ejemplo.png', descripcion: 'Descripción del producto 8' }
  // Agrega más productos aquí
];

function App() {
  return (
    <div className='container'>
      <div className='row'>
        {products.map(producto => (
          <div className="col-md-4" key={producto.id}>
            <div className="product-card" style={{ height: '200px' }}> {/* Ajusta la altura aquí */}
              <TarjetaBasica producto={producto} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;