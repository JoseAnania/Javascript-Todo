import './styles.css'; // Incluye nuestros estilos globales


//import { Todo } from './classes/todo.class'; // Se crea automaticamente al realizar la instancia
//import { TodoList } from './classes/todo-list.class'; // Se crea automaticamente al realizar la instancia
import { Todo, TodoList } from './classes'; // Reemplaza los anteriores que fueron movidos (a classes/index.js)
import { crearTodoHtml } from './js/componentes'; // Se crea automaticamente al realizar la instancia


export const todoList = new TodoList(); // Instancia del TodoList

const tarea = new Todo('Aprender JavaScript'); // Instancia Nueva tarea

todoList.nuevoTodo(tarea); // Insertamos una nueva Tarea a la Lista de Tareas (en este caso aprender JS)


console.log(todoList); // Imprimimos la Lista de Tareas

crearTodoHtml(tarea);


// Local Storage y Session Storage simulan una BD (sirve cuando trabajamos desde el Front)

// localStorage.setItem('mi-key', 'ABC123');
// sessionStorage.setItem('mi-key', 'ABC123');

todoList.todos.forEach(todo => crearTodoHtml(todo));


