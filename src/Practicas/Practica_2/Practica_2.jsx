import List from './List'
import Title from './Title'
import movies from './../../fakeApi/movies.json'
import { Fragment } from 'react';

function Practica_2(props) {

  function like() {
    return console.log("Le diste like a esta película");
  }
  console.log(movies);
  return (
    <>
    <div>
      <h1>{movies[0].nombre}</h1>
      <p>flkdsjflsdfjjdfdsfjlajdf</p>
      <button onClick = {like}>Hacer click!</button>
    </div>

    <div>
      <Title title='Generos' />
      <List>
        <li>Accion</li>
        <li>Romance</li>
        <li>drama</li>
      </List>

      <Title title='Actores' />
      <List>
        <li>Leonardo DiCaprio</li>
        <li>Brad Pitt</li>
        <li>Tom Cruise</li>
        <li>Will Smith</li>
        <li>Julia Roberts</li>
        <li>Angelina Jolie</li>
        <li>Meryl Streep</li>
        <li>Scarlett Johansson</li>
      </List>
    </div>
    </>
  )
}

export default Practica_2
