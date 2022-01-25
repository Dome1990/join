let backlogstatus = "backlog";

function init(){
    filterTasksForBacklog();
}



function filterTasksForBacklog(){
    loadTasks();
    const backlog = tasks.filter(d => d.status === backlogstatus);
    console.log('gefiltert', backlog);
    showTasksInBacklog(backlog);
   }



   function showTasksInBacklog(backlog) {
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
    tasks[i]['status']="toDo";
    filterTasksForBacklog(tasks);
    saveTasks();
}
