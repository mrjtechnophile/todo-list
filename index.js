const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('list');

let todos = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  const todoText = input.value.trim();
  if (todoText === '') return;

  const todo = {
    id: Date.now(),
    text: todoText,
    completed: false
  };

  todos.push(todo);
  renderTodos();

  input.value = '';
  input.focus();
}

function renderTodos() {
  list.innerHTML = '';

  todos.forEach((todo) => {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.innerText = todo.text;
    if (todo.completed) {
      span.classList.add('completed');
    }
    span.addEventListener('click',
