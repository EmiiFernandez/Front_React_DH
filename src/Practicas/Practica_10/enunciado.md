# Pedi3 ya

Vamos a crear una applicacion que gestione una lista de pedidos de un restaurante.

## Funcionalidades

1. Crear un pedido

La app debera contener un formulario que permita crear un pedido. El pedido debera tener los siguientes campos:

- plato: string

Al hacer click en el boton de crear, se debera crear un pedido con los datos ingresados y agregarlo a la lista de pedidos.

2. Listar pedidos

La app debera mostrar una lista de todos los pedidos creados.

3. Componente pedido

El componente pedido debera mostrar el plato del pedido y un boton para eliminarlo.

## Página para ayudar a crear
https://legacy.reactjs.org/docs/thinking-in-react.html

## Recomendación
Crear:
1. Arranco con un mock up de arreglo de pedidos (ya creados), así después conectamos a través de props
1. Componente pedido
//-------------------------------------------------------------//
Mockups - Creamos lo que en futuro serían las props (Como nuestro JSON)
const pedido = {
    id: 1,
    descripcion: 'Milanesa',
  }
  
  //Props
  const pedidoProps = {
    pedido: pedido,
    //Función que vamos a llamar cuando se le hace click al botón
    onDelete: (id) => {
      console.log(id);
      console.log('Eliminar pedido')
    },
  }
  
  //-------------------------------------------------------------//
2. Formulario
3. Estado

En un comienzo, siempre tratar de armar de lo más chiquito para arriba, para saber de donde salen los errores