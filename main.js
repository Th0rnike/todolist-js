let taskInput = document.getElementById("task-input")
let taskList = document.getElementById("task-list")



function addTask(){
    let deleteButton = document.createElement("button")
    deleteButton.classList.add("btn", "btn-dark")
    let li = document.createElement("li")

    li.innerText = taskInput.value
    deleteButton.innerText = "Delete"

    li.appendChild(deleteButton)

    taskList.appendChild(li)


    deleteButton.addEventListener('click', deleteTask)
}

function deleteTask(e){
    let listItem = e.target.parentElement
    taskList.removeChild(listItem)
}


taskInput.addEventListener("keyup", (e) => {
    if(e.key === 'Enter'){
        addTask()
        taskInput.value = ""
    }
})