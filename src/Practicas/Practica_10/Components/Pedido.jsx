import styles from '../../Practica_10/Components/Pedido.module.css'

/*
Componente pedido
El componente pedido debera mostrar el plato del pedido y un boton para eliminarlo.
*/

function Pedido(props) {
  function handleClick() {
    //Agregamos lo que necesitemos hacer antes de llamar a la función
    console.log('Click en eliminar')
    //Llamamos a la función que viene por props
    props.onDelete(props.id)
  }
  return (
    <div className={styles.card}>
      <h2>{props.descripcion}</h2>
      <button onClick={handleClick}>Eliminar</button>
    </div>
  )
}

export default Pedido
