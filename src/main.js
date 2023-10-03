const $addBtn = document.querySelector("#add-btn");
$addBtn.addEventListener("click", createTask);

function createTask() {
    const taskContent = document.querySelector("textarea").value;
    const list = document.querySelector("ul");

    if (!/^\s*$/.test(taskContent)) {
        const li = document.createElement("li");
        const deleteBtn = createDeleteBtn();
        li.textContent = taskContent;
        li.appendChild(deleteBtn);
        list.appendChild(li);
    } else {
        alert('Task is empty!')
    }
}

function createDeleteBtn() {
    const button = document.createElement("button");
    button.textContent = "x";
    button.className = "btn";
    button.addEventListener("click", e => deleteTask(e.target.parentElement));
    return button;
}

function deleteTask(item) {
    item.remove();
}