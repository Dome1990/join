let todoStatus = 'todo';
let todo = [];
let inProgressStatus = "inProgress";
let inProgress = [];
let testingStatus = "testing";
let testing = [];
let doneStatus = "done";
let done = [];

let plus = [];
let assignedPeople = [];

function init() {
    filterTasks();
}

async function filterTasks() {
    await loadTasks();
    if (tasks.length != 0) {
        todo = tasks.filter(d => d.status === todoStatus);
        let container1 = document.getElementById('todo__container');
        showTasks(todo, container1);
    }
    if (tasks.length != 0) {
        inProgress = tasks.filter(d => d.status === inProgressStatus);
        let container2 = document.getElementById('inProgress__container');
        showTasks(inProgress, container2);
    }
    if (tasks.length != 0) {
        testing = tasks.filter(d => d.status === testingStatus);
        let container3 = document.getElementById('testing__container');
        showTasks(testing, container3);
    }
    if (tasks.length != 0) {
        done = tasks.filter(d => d.status === doneStatus);
        let container4 = document.getElementById('done__container');
        showTasks(done, container4);
    }
}

function showTasks(task, container) {
    numberOfAssignedPeople(task );
    for (let i = 0; i < task.length; i++) {
        container.innerHTML += `
     <div draggable="true" ondragstart="startDragging(${task[i]['id']})"  id="task${i}" class="backlogDetail__container background__lightblue" style="border-left:16px solid ${task[i]['personalColor'][0]}">
         <div class="left__container">
         <div class="img__container">
              <img src=${task[i]['img'][0]} alt="./img/user.png ">
         </div>
         <div class="assignedTo "title="${task[i]['assignedTo']}">
             <p id="name" >${task[i]['assignedTo'][0]}  ${assignedPeople[i]}</p>
         </div>
     </div>
     <div class="category__container margin">
         <p>${task[i]['category']}</p>
     </div>
     <div class="details__container">
         <p>${task[i]['description']}</p>
      </div>
      `;
    }
}




function numberOfAssignedPeople(task) {
    for (let i = 0; i < task.length; i++) {
        if (task[i]['assignedTo'].length > 1) {
            assignedPeople[i] = task[i]['assignedTo'].length - 1;
            plus[i] = "+ ";
        } else {
            assignedPeople[i] = "";
            plus[i] = "";
        }
        assignedPeople[i] = plus[i] + assignedPeople[i];
    }
    return assignedPeople;
}


function updateStatusToBoard(id) {

    document.getElementById('todo__container').innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i]['id'] === id) {
            tasks[i]['status'] = 'todo';
        }
    }
    document.getElementById('inProgress__container').innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i]['id'] === id) {
            tasks[i]['status'] = 'inProgress';
        }
    }
    document.getElementById('testing__container').innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i]['id'] === id) {
            tasks[i]['status'] = 'testing';
        }
    }
    document.getElementById('done__container').innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i]['id'] === id) {
            tasks[i]['status'] = 'done';
        }
    }
    saveTasks();
    filterTasks();
}


let currentDraggedElement; // ?

function startDragging(id) {
    currentDraggedElement = id;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function moveTo(category) { // ?
    var index = tasks.findIndex(obj => obj.id== currentDraggedElement);
    tasks[index]['status'] = category; // ?
    updateStatusToBoard();

}