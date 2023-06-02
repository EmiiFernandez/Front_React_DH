import { useState } from 'react'
import Pedido from './Components/Pedido'
import Form from './Form'

/*Mockups - Creamos lo que en futuro serían las props (Como nuestro JSON)*/
//Lista de pedidos
/*  const datosMockeados = [
  {
    id: 1,
    descripcion: 'Milanesa',
  },
  {
    id: 2,
    descripcion: 'Hamburguesa',
  },

  {
    id: 3,
    descripcion: 'Ensalada',
  },
] */
 
/* const pedidoProps = {
  pedido: pedido1,
  onDelete: (id) => {
    console.log(id)
    console.log('Pedido Eliminado')
  },
} */

//-------------------------------------------------------------//

//conecto a través de props el envio de formularios
//onPedido: props
//handlePedido: cuando se invoca la función onPedido llamamos a handlerPedido

const initialValues = []
let uniqueId = 0 //Variable global. No reactiva

function Practica_10() {
  
  const [pedidos, setPedidos] = useState(initialValues)

  function handlePedido(pedido) {
    const pedidoNuevo = {
      id: uniqueId++,
      descripcion: pedido,
    };
    const pedidosActualizados = [...pedidos, pedidoNuevo];
    setPedidos(pedidosActualizados);
  }

  const handleDelete = (id) => {
    setPedidos(pedidos.filter(pedido => pedido.id !== id))
    console.log(id);
  }


  return (
    <>
      <h1>App</h1>
      <Form onPedido={handlePedido} />
      {pedidos.map((pedido) => {
        return (
          <Pedido
            key={pedido.id}
            id={pedido.id}
            descripcion={pedido.descripcion}
            onDelete={handleDelete}
          />
        )
      })}
    </>
  )
}

export default Practica_10

/*
Estado:    
const [pedidos, setPedidos] = useState(datosMockeados)

El estado pedidos no se puede modificar directamente con un push

    function handlePedido(plato) {
        console.log(plato);
        //Es un objeto
        const pedidoNuevo = {
            id: uniqueId++, //Creamos una variable independiente e incremental
            descripcion: {plato}
        }
        //Queremos guardar un arreglo
        //Volcamos los datos de pedidos para no modificarlo directamente
        const pedidosActualizados = [...pedidos] //Creamos un arreglo nuevo
        pedidosActualizados.push(pedidoNuevo) //Creamos el pedido nuevo
        setPedidos(pedidosActualizados) //Modificamos el estado del pedido

*/
