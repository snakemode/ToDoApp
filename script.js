const taskInput = document.getElementById("new");
const addButton = document.getElementById("add");
const tasks = document.getElementById("tasks");

addButton.addEventListener('click', addNewItem);

const items = [
    { value: "my item", complete: false }
];

for (let item of items) {
    createElementForTask(item);
}

function createElementForTask(item) {
    const template = document.getElementById("taskTemplate");
    const newListItem = template.content.cloneNode(true);

    const checkbox = newListItem.querySelector(".item-check");
    const text = newListItem.querySelector(".item-text");

    text.innerText = item.value;
    checkbox.checked = item.complete;

    return newListItem;
}

function addNewItem() {
    console.log("Add new item!");
}
