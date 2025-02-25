function addTask()
{
    var taskInput=document.getElementById("new-task")
    var taskList=document.getElementById("task-list")
    if(taskInput.value==="")
    {
        alert("Please enter the task")
        return
    }
}
var taskList=document.getElementById("l1")

var buttonContainer=document.createElement("div")
buttonContainer.className'task=button


var deletebuttom=document.createElement("button")
deletebutton.innerText='Delete'
deletebutton.onclick=function(){
    taskList.removeChild(listitem)
}


var competebutton=document.createElement("button")
completebutton.innerText='Complete'
completebutton.onclick=function(){
    listitem.classList.toggle('incomplete')
}
buttonContainer.append(deletebutton)
buttonContainer.append(completebutton)
listitem.appendChild(buttonContainer)
taskList.appendChild(listitem)

taskInput.value