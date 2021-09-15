const taskInput = document.getElementById("new");
const addButton = document.getElementById("add");
const tasks = document.getElementById("tasks");

addButton.addEventListener('click', addNewItem);
taskInput.addEventListener('keyup', processKeyPress);

const items = [];

for (let item of items) {
    const li = createElementForTask(item);
    tasks.appendChild(li);
}

function processKeyPress(e) {
    addButton.disabled = e.target.value.trim() === "";

    if (e.key === "Enter") {
        addNewItem();
    }
}

function createElementForTask(item) {
    const template = document.getElementById("taskTemplate");
    const newListItem = template.content.cloneNode(true);

    const checkbox = newListItem.querySelector(".item-check");
    const text = newListItem.querySelector(".item-text");
    const deleteButton = newListItem.querySelector(".delete");

    text.innerText = item.value;
    checkbox.checked = item.complete;

    checkbox.onchange = function (e) {
        item.complete = true;
    };

    deleteButton.onclick = function (e) {
        e.target.closest('li').remove();
        items.splice(items.indexOf(item), 1);
    };

    return newListItem;
}

function addNewItem() {
    const task = {
        value: taskInput.value,
        complete: false
    };

    items.push(task);

    let newItem = createElementForTask(task);
    tasks.appendChild(newItem);

    taskInput.value = "";
    taskInput.focus();
}
