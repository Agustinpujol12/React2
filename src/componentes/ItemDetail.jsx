import { useParams } from 'react-router-dom'; // Importa useParams para obtener el ID de la URL
import productMocks from '../assets/hooks/asyncMock'; // Importa los mocks de productos

function ItemDetail() {
  const { id } = useParams(); // Obtiene el ID de la URL

  // Encuentra el producto correspondiente según el ID de la URL
  const product = productMocks.find((product) => product.id === Number(id));

  if (!product) {
    // Si el producto no se encuentra, puedes mostrar un mensaje de error o redirigir a una página 404
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Descripción: {product.description}</p>
      <p>Precio: ${product.price}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
}

export default ItemDetail;
