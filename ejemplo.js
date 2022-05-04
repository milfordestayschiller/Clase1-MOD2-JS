//clases se escriben con la primera letra en mayuscula
//nombre autor annioCreacion formato son atributos
class GatoAnimado {
    //constructor no es una funcion es un constructor
    constructor(nombre, autor, annioCreacion, formato) {
        this.nombre = nombre; //nombreC es el seteo
        this.autor = autor;
        this.annioCreacion = annioCreacion;
        this.formato = formato;
    }
    /*static mostrarBiografia() {
        console.log("la alalalalal")
    }
    
    static mostrarEpisosioMejorRankeado () {
        console.log("Novita le gana a Gigante")
    }
    */
    static mostrarBiografiaDoraemon() {
        console.log("Toda la historica aca")
    }
    mostrarDatos() {
        console.log(this.nombre + this.autor + this.annioCreacion + this.formato)

    }
}
// instancia de la clase gato animado u objeto
var doraemon = new GatoAnimado("Doaremon", "Fujiko", 1969, "Manga y Anime");
var gatofelix = new GatoAnimado("Felix", "Yup", 1970, "Manga")

doraemon.idioma = "Japones"
delete doraemon.idioma
console.log(doraemon)
console.log(new GatoAnimado)

//doraemon.mostrarEpisosioMejorRankeado()

doraemon.mostrarDatos();

//GatoAnimado.mostrarBiografiaDoraemon()
//doraemon.mostrarEpisosioPeorRankeado; function()
// automovil marca modelo annio color precio
//objeto yagan
/*class Automovil {
    constructor (marca, modelo, annio, color, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.annio = annio;
        this.color = color;
        this.precio = precio;

   }
}

var modeloYagan = new Automovil("Yagan", "Citroen", 1983, "Rojo" ,300000)
console.log(modeloYagan["marca"])
*/





