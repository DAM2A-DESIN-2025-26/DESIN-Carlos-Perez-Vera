const libro1 = {
  nombre: "Alberto y su Pez",
  color: "Marrón",
  autor: "Juan Garcia",
  nPaginas: 250,
  editorial: "Anaya",
  forrado: true,
  coverURL: "https://libros.com/albertoysupez.jpg",
  comprar: function() {
    console.log(`Libro del autor ${this.autor} comprado`);
  }
};

const libro2 = {
  nombre: "Juanito maravilla",
  color: "Azul",
  autor: "Federico Guzman",
  nPaginas: 120,
  editorial: "Salamandra",
  forrado: false,
  coverURL: "https://libros.com/juanitomaravilla.jpg",
  comprar: function() {
    console.log(`Libro  de aventuras del autor ${this.autor} comprado`);
  }
};

const libro3 = {
  nombre: "Moby Dick",
  color: "Blanco",
  autor: "Herman Melville",
  nPaginas: 600,
  editorial: "Anaya",
  forrado: true,
  coverURL: "https://example.com/mobydick.jpg",
  comprar: function() {
    console.log(`Libro de aventuras del autor ${this.autor} comprado`);
  }
};

const libro4 = {
  nombre: "Julia la enana de 2 metros",
  color: "Rosa",
  autor: "Marta Martinez",
  nPaginas: 200,
  editorial: "Planeta",
  forrado: false,
  coverURL: "https://libros.com/julialaenanade2metros.jpg",
  comprar: function() {
    console.log(`Libro de aventuras del autor ${this.autor} comprado`);
  }
};

const biblioteca = [libro1,libro2,libro3];

const checkPages = ({ nPaginas }) => nPaginas > 150;

const checkLibro = (biblioteca, libro) => 
  biblioteca.some(b => b.nombre === libro.nombre);

console.log(checkLibro(biblioteca, libro1));
console.log(checkLibro(biblioteca, libro4));

libro1.comprar();