
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



// 객체 다루기, class를 이용하여 객체 만들기

const studentArray = [
    {
        name: '김창완',
        korean: 95,
        english: 89,
        math: 2,
        science: 78
    }
];

let printOut = '이름\t총점\t평균점수\n------------------------------\n';

function getSumOf(person) {
    return person.korean + person.english + person.math + person.science;
}

function getAverageOf(person) {
    return getSumOf(person) / 4;
}

for (const person of studentArray) {
    printOut += `${person.name}\t${getSumOf(person)}점\t${getAverageOf(person)}점\n`
}

console.log(printOut);

class makeStudents {
    constructor(stName, stKorean, stEnglish, stMath, stScience) {
        this.name = stName,
        this.ptKorean = stKorean,
        this.ptEnglish = stEnglish,
        this.ptMath = stMath,
        this.ptScience = stScience
    }

    print() {
        let printOut = '이름\t총점\t평균점수\n------------------------------\n';
        let totalPoints = this.ptKorean + this.ptEnglish + this.ptMath + this.ptScience

        printOut += `${ this.name }\t${ totalPoints }점\t${ Math.floor(totalPoints / 4) }점`;

        console.log(printOut);
    }
}

const normalMan = new makeStudents('김창완', 95, 89, 2, 75);

normalMan.print();