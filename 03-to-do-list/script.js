let numOfTasks = 0;

const textBoxElem = document.querySelector(".input-box");
const addButtonElem = document.querySelector(".add-btn");
const unorderListElem = document.querySelector(".list-items");
const clearBtnElem = document.querySelector(".clear-tasks");


for (let i=0;i<localStorage.length;i++) {
    let key = localStorage.key(i);
    const taskElem = addTaskToPage(key);
    if (localStorage.getItem(key) === "true") {
        taskElem.classList.add("checked");
    }
}

addButtonElem.addEventListener("click", () => {
    const task = textBoxElem.value
    textBoxElem.value = '';
    if (!task) return;
    if (localStorage.length == 10) {
        alert("You have to many tasks! do other tasks before adding more.");
        return;
    }
    localStorage.setItem(task, "false");
    addTaskToPage(task);
});

clearBtnElem.addEventListener("click", () => {
    clearTasks();
    localStorage.clear();
})

function addTaskToPage(task) {
    const tempElem = document.createElement("li");
    tempElem.textContent = task;
    tempElem.addEventListener("click", () => {
        tempElem.classList.toggle("checked");
        if (tempElem.classList.contains("checked")) {
            localStorage.setItem(task, "true");
        } 
        else {
            localStorage.setItem(task, "false");
        }
    });
    
    unorderListElem.append(tempElem);
    return tempElem;
}

for (let i=0;i<localStorage.length;i++) {
    let key = localStorage.key(i);
}

function clearTasks() { 
    unorderListElem.innerHTML = '';
    localStorage.clear();
}

