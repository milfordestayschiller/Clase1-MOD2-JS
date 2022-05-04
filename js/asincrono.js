class Libro {
  constructor(nombre, libro, autor, editorial, genero) {
    this.nombre = nombre;
    this.libro = libro;
    this.autor = autor;
    this.editorial = editorial;
    this.genero = genero;
  }
  mostrarLibro() {
    
    this.nombre, this.libro, this.autor, this.editorial, this.genero
  }

}

var libroUno = new Libro("Tomo 1", "El señor de los anillos", "Tolken", "Bookstore", "Ciencia Ficcion  - Aventura")

var libroDos = new Libro("Tomo 2", "El principito", "Antoine de Saint-Exupéry", "Bookstore", "Fantasia");

var libroTres = new Libro("Tomo3", "El Tunel", "Ernesto Sababto", "Bookstore", "Aventura");

//Descomentar para ver las prpiedades que posee el libro
//libroUno.mostrarLibro()


var libro = [libroUno, libroDos, libroTres];

//recorrer el arreglo y comparar el nombre del autor de cada uno de los objetos, compararlo con el autor que le han pasado por parametro y si es el autor se guarda el nombre del libro o nombre del libro

function filtrarPorAutor(autor) {
  // var libro = [libroUno,libroDos,libroTres];
  for (i = 0; i < libro.length; i++) {
    if (libro[i]["autor"] == autor) {
      alert("Si coincide el autor es " + libro[i]["autor"] + " y su libro " + libro[i]["libro"]);
    } else {
      alert("No es el autor de " + libro[i]["libro"])
    }

  }

}

filtrarPorAutor(prompt("Ingresa el autor : Ver codigo para coincidencias o no"))
