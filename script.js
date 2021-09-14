const taskInput = document.getElementById("new");
const addButton = document.getElementById("add");
const tasks = document.getElementById("tasks");

addButton.addEventListener('click', addNewItem);

const items = [
    { value: "my item", complete: false }
];

function addNewItem() {
    console.log("Add new item!");
}