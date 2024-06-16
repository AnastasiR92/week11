const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

//Создаем функцию для поля ввода текста (для создания новой задачи)
function createTask() {
    const taskItem = document.createElement('li');
    const taskInputValue = taskInput.value;
    console.log(taskInputValue);
    //Тут пишем функцию, которая будет выводить текст из нашего input
    taskItem.textContent = taskInputValue;
    //Пишем функцию, которая будет добавлять наш текст друг за другом, а не заменять его
    taskList.appendChild(taskItem);
    //Очищаем поле ввода после отправки текста
    taskInput.value = "";
}

//Создаем функцию на то, чтобы текст перечеркивался при нажатии (отметка задачи как выполненная)
function checkTask(event) {
    const newElement = event.target;
    newElement.classList.toggle('completed');
}

//Добавляем функцию-обработчик к событию клика на кнопку 
addTaskButton.addEventListener('click', createTask);

//Добавляем функцию-обработчик к событию клика на список задач
taskList.addEventListener('click', checkTask);