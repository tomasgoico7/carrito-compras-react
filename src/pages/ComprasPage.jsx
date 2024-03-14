import { CarritoContext } from "../context/CarritoContext";
import { ProductosContext } from "../context/ProductosContext";
import { Card } from "./../components/Card";
import { useContext } from "react";

export const ComprasPage = () => {
  const { productos } = useContext(ProductosContext);
  const { agregarCompra, eliminarCompra } = useContext(CarritoContext);

  const handleAgregar = (compra) => {
    agregarCompra(compra);
  };
  const handleQuitar = (id) => {
    eliminarCompra(id);
  };

  return (
    <>
      <h1>Compras:</h1>
      <hr />
      {productos.map((producto) => (
        <Card
          key={producto.id}
          imagen={producto.image}
          titulo={producto.title}
          descripcion={producto.description}
          precio={producto.price}
          handleAgregar={() => handleAgregar(producto)}
          handleQuitar={() => handleQuitar(producto.id)}
        ></Card>
      ))}
    </>
  );
};
