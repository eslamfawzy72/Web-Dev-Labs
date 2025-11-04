let tasks = []
class Task {
    constructor(description) {
        this.description = description;
    }

}
document.getElementById("btn").addEventListener("click", () => {
    let description = document.getElementById("taskDescription").value;
    let task = new Task(description);
    tasks.push(task);
    document.getElementById("taskDescription").value = "";
    console.log("Task added:", task);
    console.log("Total tasks:", tasks.length);
    displayTasks();
})
function displayTasks() {
    const taskList = document.getElementById("List");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const sector = document.createElement("div")


        taskList.appendChild(sector);
        const listItem = document.createElement("li");
        let checkbox = document.createElement("input");
        let deletebtn = document.createElement("input");
        const markText = document.createElement("p");
        markText.textContent = "Mark as Complete:";
        deletebtn.type = "button";
        deletebtn.value = "Delete";
        deletebtn.addEventListener("click", (listItem) => {
            tasks.splice(index, 1);
            displayTasks();
        });
        checkbox.addEventListener("click", () => {
            if (checkbox.checked) {
                listItem.style.textDecoration = "line-through";
                listItem.style.color = "green";
            } else {
                listItem.style.textDecoration = "none";
                listItem.style.color = "black";
            }
        }
        );
        checkbox.type = "checkbox";
        checkbox.id = "task" + index;

        sector.appendChild(listItem);
        sector.appendChild(markText);
        sector.appendChild(checkbox);
        sector.appendChild(deletebtn);
        listItem.textContent = task.description;

    });
}
