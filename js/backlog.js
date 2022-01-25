let backlogstatus = "backlog";

function init(){
    showDummyTasksInBacklog();
    filterTasksForBacklog();
}

function showDummyTasksInBacklog() {
    for (let i = 0; i < dummytasks.length; i++) {
        document.getElementById('tasks').innerHTML += `
        <div id="tasks" class="backlogDetail__container background__lightblue">
            <div class="left__container">
                 <span  class="personalColor" style="background-color:${dummytasks[i]['personalColor']}"></span>
            <div class="img__container">
                 <img src=${dummytasks[i]['img']} alt="./img/user.png ">
            </div>
            <div class="assignedTo ">
                <p id="name">${dummytasks[i]['assignedTo']}</p>
                <p id="email" class="blue">${dummytasks[i]['email']}</p>
            </div>
        </div>
        <div class="category__container">
            <p>${dummytasks[i]['category']}</p>
        </div>
        <div class="details__container">
            <p>${dummytasks[i]['description']}</p>
         </div>
    </div>`;
    }

}

function filterTasksForBacklog(){
    loadTasks();
    const backlog = tasks.filter(d => d.status === backlogstatus);
    console.log('gefiltert', backlog);
    showTasksInBacklog(backlog);
   }



   function showTasksInBacklog(backlog) {
    console.log('backlog2', backlog);
 for (let i = 0; i < backlog.length; i++) {
     document.getElementById('tasks').innerHTML += `
     <div onclick="updateStatusToBoard(${i})" id="task${i}" class="backlogDetail__container background__lightblue">
         <div class="left__container">
              <span  class="personalColor" style="background-color:${backlog[i]['personalColor'][0]}"></span>
         <div class="img__container">
              <img src=${backlog[i]['img'][0]} alt="./img/user.png ">
         </div>
         <div class="assignedTo ">
             <p id="name">${backlog[i]['assignedTo'][0]}</p>
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


function updateStatusToBoard(i){
    document.getElementById('tasks').innerHTML ="";
    showDummyTasksInBacklog();
    tasks[i]['status']="toDo";
    console.log('update',tasks);
    filterTasksForBacklog(tasks);
    saveTasks();
}
