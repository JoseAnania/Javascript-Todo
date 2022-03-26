// Métodos del HTML y Referencias

import { todoList } from ".."; // Se crea automático al Instanciar el TODO List
import { Todo, TodoList } from "../classes"; // Se crea automático al Instanciar el TODO

const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFitros = document.querySelector('.filters');
const anchrFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = (todo) => { // En base al parámetro que recibimos construimos el HTML

    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div'); // Creamos un div que contiene la Lista anterior
    div.innerHTML = htmlTodo;

    divTodoList.append (div.firstElementChild);

    return div.firstElementChild;
}  

// Eventos
txtInput.addEventListener('keyup', (event) => {

    if (event.keyCode === 13 && txtInput.value.length > 0) { // Si se presiona Enter (13) y no está vacío
        
        const nuevoTodo = new Todo(txtInput.value);
        console.log(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);

        crearTodoHtml(nuevoTodo); // Incerta la nueva tarea en el HTML
        txtInput.value = ''; // Borra lo incertado y deja el TXT en blanco
    }
});

divTodoList.addEventListener('click', (event) => {
    
    const nombreElemento = event.target.localName; // Cuando hacemos click sabemos el nombre (button, label o input)
    const todoElemento = event.target.parentElement.parentElement; // Obtenemos el elemento HTML
    const todoId = todoElemento.getAttribute('data-id'); //Obtenemos el ID
    const ulFitros = document.querySelector('.filters');

    //Marcar el TODO como completado
    if(nombreElemento.includes('input')) { // Si hizo click en el CHECK
        
        todoList.marcarCompletado(todoId);

        todoElemento.classList.toggle('completed'); // Realizar el tachado
    } else if(nombreElemento.includes('button')){ // Si lo incluye, hay que borrar el TODO (la tarea)
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento); // Elimina la tarea del HTML
    }
});

btnBorrar.addEventListener('click', () => { // Borrar Completados

    todoList.eliminarCompletados();

    for (let i = divTodoList.children.length -1; i>=0; i--){ // Empieza de la última posición
        const elemento = divTodoList.children[i];
        
        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }
}); 

ulFitros.addEventListener('click', (event) => {

    const filtro = event.target.text;
    if (!filtro) {
        return;
    }

    anchrFiltros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for (const elemento of divTodoList.children) {
        
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch(filtro) {
            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden');
                }
                break;
        }
    }
});



