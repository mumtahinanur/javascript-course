const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make bed',
  dueDate: '2022-12-22'
 }, {
  name: 'exercise',
  dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;
    const html = `
        <div>${name}</div> 
        <div>${dueDate}</div>
        <button onclick="
          todoList.splice(${index}, 1);
          renderTodoList();
          //Whenever we update the todo list, save in localStorage
          saveToStorage();
        " class="delete-todo-button">Delete</button>
      `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  
  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate
  });

  inputElement.value = '';

  renderTodoList();

  //Whenever we update the todo list, save in localStorage
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}