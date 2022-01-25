let todoStatus = "todo";
let todo= [];
let inProgressStatus = "inProgress";
let inProgress= [];
let testingStatus = "testing";
let testing= [];
let doneStatus = "done";
let done= [];



function filterTasksForToDo() {
    loadTasks();
    if (window.localStorage.length != 0) {
        todo = tasks.filter(d => d.status === todoStatus);
        showTasksInToDo(todo);
    }
}

function showTasksInToDo(todo) {
    numberOfAssignedPeople(todo);
    for (let i = 0; i < todo.length; i++) {
        document.getElementById('tasks').innerHTML += `
     <div onclick="updateStatusToBoard(${todo[i]['id']})" id="task${i}" class="backlogDetail__container background__lightblue">
         <div class="left__container">
              <span  class="personalColor" style="background-color:${todo[i]['personalColor'][0]}"></span>
         <div class="img__container">
              <img src=${todo[i]['img'][0]} alt="./img/user.png ">
         </div>
         <div class="assignedTo "title="${todo[i]['assignedTo']}">
             <p id="name" >${todo[i]['assignedTo'][0]}  ${assignedPeople[i]}</p>
             <p id="email" class="blue">${todo[i]['email'][0]}</p>
         </div>
     </div>
     <div class="category__container">
         <p>${todo[i]['category']}</p>
     </div>
     <div class="details__container">
         <p>${todo[i]['description']}</p>
      </div>
 </div>`;
    }
}