
// Clase para manejar las tareas (ToDo)
// La hacemos para exportar porque la usaremos

export class TodoList {

    constructor() {
        this.todos = []; // Arreglo de Tareas (inicializa vaciío)
        
        this.cargarLocalStorage();
    }

// Métodos

    nuevoTodo( todo ) { // Recibe por parámetro una tarea y lo incerta en el arreglo de Tareas 
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo(id) { // Recibe el id de la tarea y elimina del Arreglo
       this.todos = this.todos.filter(todo => todo.id != id);
       this.guardarLocalStorage();
    }

    marcarCompletado(id) { // Busca la tarea por id en el arreglo y marca si está o no completado

        for(const todo of this.todos) { //Barremos el arreglo
            if (todo.id == id) { // Buscamos el ID
                todo.completado = !todo.completado; // Marcamos como completado
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados() { // Repasa el Arreglo y elimina los ToDo en estado TRUE
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify(this.todos) );
    }

    cargarLocalStorage() {

        if(localStorage.getItem('todo')) {

            this.todos = JSON.parse(localStorage.getItem('todo'));

        }else {
            this.todos = [];
        }
    }
}
