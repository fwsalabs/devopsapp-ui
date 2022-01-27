const taskList = [
    { id: 1, task: "Task 1" },
    { id: 2, task: "Task 2" },
    { id: 3, task: "Task 3" }
]

function getTasksFromURL() {
    return  taskList;
}


function renderList(taskList) {
    const noOfTask = taskList.length;

    let tasks = "";
    for (i = 0; i < noOfTask; i++) {
        const _task = taskList[i];
        let newTask = " <li class='list-group-item'> " + _task.task + " </li> ";
        tasks = tasks + newTask;
    }

    const ulTag = document.getElementById("taskLists");
    ulTag.innerHTML = tasks;
}

function submitHandler(event) {
    event.preventDefault();                                                         // to prevent page from reloading
    const newTask = document.getElementById("newTask").value;                       // get value from input field
    console.log(newTask);
}