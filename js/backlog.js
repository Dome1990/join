let backlogstatus = "backlog";
let assignedPeople = [];
let backlog = [];
let plus = [];

function init() {
    filterTasksForBacklog();
}



function filterTasksForBacklog() {
    loadTasks();
    if (window.localStorage.length != 0) {
        backlog = tasks.filter(d => d.status === backlogstatus);
        showTasksInBacklog(backlog);
    }
}



function showTasksInBacklog(backlog) {
    numberOfAssignedPeople(backlog);
    for (let i = 0; i < backlog.length; i++) {
        document.getElementById('tasks').innerHTML += `
     <div onclick="updateStatusToBoard(${backlog[i]['id']})" id="task${i}" class="backlogDetail__container background__lightblue">
         <div class="left__container">
              <span  class="personalColor" style="background-color:${backlog[i]['personalColor'][0]}"></span>
         <div class="img__container">
              <img class="images" src=${backlog[i]['img'][0]} alt="./img/user.png ">
         </div>
         <div class="assignedTo "title="${backlog[i]['assignedTo']}">
             <p id="name" >${backlog[i]['assignedTo'][0]}  ${assignedPeople[i]}</p>
             <p id="email" class="blue">${backlog[i]['email'][0]}</p>
         </div>
     </div>
     <div class="category__container">
         <p>${backlog[i]['category']}</p>
     </div>
     <div class="details__container">
         <p>${backlog[i]['description']}</p>
      </div>
 </div>`;
    }
}

function numberOfAssignedPeople(backlog) {
    for (let i = 0; i < backlog.length; i++) {
        if (backlog[i]['assignedTo'].length > 1) {
            assignedPeople[i] = backlog[i]['assignedTo'].length - 1;
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
    document.getElementById('tasks').innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        if(tasks[i]['id'] === id){
            tasks[i]['status'] = 'todo';
        } 
    }
    saveTasks();
    filterTasksForBacklog();

}
