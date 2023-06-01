import '../../App.css'
import usuarios from '../../fakeApi/users.json'

function Practica_1() {
  console.log(
    '-------------------------- Listado usuarios --------------------------'
  )
  console.log(usuarios) 

  console.log(
    '-------------------------- Ejercicio 1 --------------------------'
  )
  console.log('El email del primer usuario es: ' + usuarios[0].email)
  console.log('El apodo del tercer usuario es: ' + usuarios[2].apodo)
  console.log(
    'El color de la segunda mascota del tercer usuario es: ' +
      usuarios[2].mascotas[1].color
  )

  console.log(
    '-------------------------- Ejercicio 2 --------------------------'
  )
  // Extrae el primer y cuarto elemento del array de usuarios
  const [primerElemento, , , cuartoElemento] = usuarios

  // Extrae el email y las mascotas del primer elemento
  const { email, mascotas } = primerElemento

  // Imprime los valores extraídos
  console.log('Primer elemento:', primerElemento)
  console.log('Cuarto elemento:', cuartoElemento)
  console.log('Email del primer elemento:', email)
  console.log('Mascotas del primer elemento:', mascotas)

  console.log(
    '-------------------------- Ejercicio 3 --------------------------'
  )

  // Extrae el primer elemento del array de usuarios
  // Extrae las mascotas del primer elemento

  // Crea una copia de las mascotas y agrega una nueva mascota
  const mascotasCopia = [
    ...mascotas,
    { nombre: 'Nami', edad: 2, color: 'negro' },
  ]

  // Imprime los arrays original y la copia para verificar que no se modificó el original
  console.log('Mascotas original:', mascotas)
  console.log('Mascotas copia:', mascotasCopia)

  console.log(
    '-------------------------- Ejercicio 4 --------------------------'
  )
  let { name, cantMascotas } = props;

  name = usuarios[0].apodo;

  cantMascotas = usuarios[0].mascotas.length;

  let formatString = `El Usuario ${name} tiene ${cantMascotas} mascotas`;

  console.log(formatString);


  console.log(
    '-------------------------- Ejercicio 5 --------------------------'
  )
  // Filtrar usuarios con más de 1 mascota
  const usuariosFiltrados = usuarios.filter(usuario => usuario.mascotas.length > 1);

  // Crear array de strings con nombre y cantidad de mascotas
  const usuariosStrings = usuariosFiltrados.map(usuario => `El Usuario ${usuario.apodo} tiene ${usuario.mascotas.length} mascotas`);

  // Calcular cantidad total de mascotas
  const cantidadTotalMascotas = usuarios.reduce((total, usuario) => total + usuario.mascotas.length, 0);

  console.log(usuariosStrings);
  console.log('Cantidad total de mascotas:', cantidadTotalMascotas);


  return null; // Renderiza el componente como nulo ya que solo estamos imprimiendo en la consola
}

export default Practica_1
