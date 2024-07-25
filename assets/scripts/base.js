
const txtTodoInput = document.getElementById('txtTodoInput');
const todoList = document.getElementById('todoList');
const btnEnter = document.getElementById('btnEnter');
const todoPlaceholder = document.querySelector('.todo-placeholder');

let itemKeyCount = 0;

const addTodo = () => {
    if (!!txtTodoInput.value.trim() === false) {
        alert('아무것도 입력되지 않았습니다.');

        return;
    }

    if (itemKeyCount === 0 || todoList.childElementCount === 1) {
        todoPlaceholder.classList.add('hide');
    }

    const todoItem = document.createElement('article');
    const chkItem = document.createElement('input');
    const todoLabel = document.createElement('p');
    const btnDelete = document.createElement('button');

    const currentItemKey = itemKeyCount;

    itemKeyCount += 1;

    todoItem.dataset.key = currentItemKey;
    todoItem.classList.add('todo-item');
    todoItem.appendChild(chkItem);
    todoItem.appendChild(todoLabel);
    todoItem.appendChild(btnDelete);

    todoList.appendChild(todoItem);

    chkItem.type = 'checkbox';

    chkItem.addEventListener('change', (e) => {
        todoItem.classList.add(e.target.checked ? 'done' : '');
    });

    todoLabel.textContent = txtTodoInput.value;

    btnDelete.innerHTML = '<i class="fa-solid fa-delete-left"></i>';
    btnDelete.addEventListener('click', () => {
        removeTodo(currentItemKey);
    });

    txtTodoInput.value = '';
}

const removeTodo = (itemKey) => {
    const targetItem = document.querySelector(`[data-key="${ itemKey }"]`);

    todoList.removeChild(targetItem);

    if (todoList.childElementCount === 1) {
        todoPlaceholder.classList.remove('hide');
    }
}

btnEnter.addEventListener('click', addTodo);
txtTodoInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});



// 로컬 스토리지에 저장

const txtStore = document.getElementById('txtLocalStore');
const btnClear = document.getElementById('btnClearStore');
const savedValue = localStorage.getItem('testText');

if (savedValue) {
    txtStore.value = savedValue;
}

txtStore.addEventListener('keyup', (e) => {
    const currentValue = e.currentTarget.value;

    localStorage.setItem('testText', currentValue);
});

btnClear.addEventListener('click', () => {
    localStorage.clear();
    txtStore.value = '';
})



// 예외처리

function exceptionTest() {
    try {
        alert('something');

        // throw '예외 강제 발생'; // throw 는 try - catch 과정의 내부에 있지 않아도 사용할 수 있다.
    } catch(exception) {
        alert(exception);

        return;
    }
}