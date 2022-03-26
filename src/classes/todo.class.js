
//Como esta clase la usaremos fuera de este archivo la hacemos EXPORT

export class Todo {

    //constructor
    constructor ( tarea ) {
        this.tarea = tarea;

        // Estas propiedades no se pasan por parámetro porque se crean automáticas con su propio método
        this.id = new Date().getTime(); // La fecha y hora lo hace único
        this.completado = false; // Nos dice si la tarea está completada o no
        this.crado = new Date(); // Cuando fue creada la tarea
    }
}