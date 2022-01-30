let backlogstatus = "backlog";
let assignedPeople = [];
let backlog = [];
let plus = [];

function init() {
    filterTasksForBacklog();
}


/**
 * filters the correct task with status = "backlog" and renders them in backlog
 */
async function filterTasksForBacklog() {
    await loadTasks();
    if (tasks.length != 0) {
        backlog = tasks.filter(d => d.status === backlogstatus);
        showTasksInBacklog(backlog);
    }
}

/**
 * displays the task in backlog
 */

function showTasksInBacklog(backlog) {
    numberOfAssignedPeople(backlog);
    if(backlog.length == 0){
        document.getElementById('tasks').innerHTML = `<p>No task to show. Please add some task in "add task". If you need help, then change to "help".</p>`;
    }else{
        for (let i = 0; i < backlog.length; i++) {
            document.getElementById('tasks').innerHTML += `
         <div onclick="updateStatusToBoard(${backlog[i]['id']})" id="task${i}" class="backlogDetail__container background__lightblue" style="border-left:16px solid ${backlog[i]['personalColor'][0]}">
             <div id="mobile__left__container">
            <div class="left__container">
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
         </div>
         <div class="details__container">
             <p>${backlog[i]['description']}</p>
          </div>
     </div>`;
        }  
    }
    
}
/**
 * counts number of assigned People and returns it as string
 */
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


/**
 * 
 */
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
