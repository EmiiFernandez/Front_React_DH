/*
1. Crear un pedido
La app debera contener un formulario que permita crear un pedido. El pedido debera tener los siguientes campos:
- plato: string
Al hacer click en el boton de crear, se debera crear un pedido con los datos ingresados y agregarlo a la lista de pedidos.
2. Listar pedidos
La app debera mostrar una lista de todos los pedidos creados.
*/

import { useState } from 'react'

//Escuchar el evento de Submit

function Form(props) {
  const [plato, setPlato] = useState('')

  const [error, setError] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    if (!plato) {
      console.error('El plato no puede estar vacío')
      setError('El plato no puede estar vacío')
      return;
    }
    setError()
    console.log('Form submited')
    props.onPedido(plato)
  }

  function handleChange(e) {
    console.log(e.target.value)
    setPlato(e.target.value)
  }

 // props.onPedido('holisssss')

  return (
    <>
      <h2>Elige tu pedido</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='pedido'>Plato</label>
        <input
          type='text'
          id='plato'
          value={plato || ''}
          onChange={handleChange}
        />
        {error ? <p>{error}</p> : undefined}
        <button type='submit'>Enviar</button>
      </form>
    </>
  )
}

export default Form

/* Quiero utilizar los valores del input en el handlerSubmit por eso agrego el handleChange (Componente controlado)
Tengo más control de lo que esta sucediendo en el input
Siempre que los forms esten aislados en su propio componente, ya que sino renderizaría cada vez y seria más lento
agregar en input required controla error 

function Form(props) {
   Estados:
    El input plato arranca vacío 
    const [plato, setPlato] = useState('')
      Para mostrar el error al usuario
      Vacio genera un undefined
    const [error, setError] = useState()
  
   Handlers:
      Es el evento del formulario
      Manejamos validaciones 
    function handleSubmit(e) {
    Para evitar que se recargue la pagina
     e.preventDefault()
      if (!plato) {
   plato vacío
  console.error('El plato no puede estar vacío')
        setError('El plato no puede estar vacío')
        return
      }
             paso todas las validaciones
     setError() 
      console.log('Form submited')
  {   
    Siempre la comunicación de padre a hijo
    Recibe una función del padre que tiene que invocar ocn ciertos datos
   props.onPedido(plato)
    }
  
   Parseamos datos
     function handleChange(e) {
         Me va a decir el valor que ingreso el usuario
       console.log(e.target.value)
      setPlato(e.target.value)
    }
  
 Cada vez que se renderize el formulario se va a mandar el mensaje
     props.onPedido('holisssss')
  
    return (
      <>
        <h2>Elige tu pedido</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='pedido'>Plato</label>
          <input
            type='text'
            id='plato'
            value={plato || ''}
            onChange={handleChange}
          />
          {error ? <p>{error}</p> : undefined}
          <button type='submit'>Enviar</button>
        </form>
      </>
    )
  }
  
  export default Form
*/
