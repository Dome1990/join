function showTasksInBacklog() {
    for (let i = 0; i < tasks.length; i++) {
        document.getElementById('tasks').innerHTML += `
        <div id="tasks" class="backlogDetail__container background__lightblue">
            <div class="left__container">
                 <span  class="personalColor" style="background-color:${tasks[i]['personalColor']}"></span>
            <div class="img__container">
                 <img src=${tasks[i]['img']} alt="">
            </div>
            <div class="assignedTo ">
                <p id="name">${tasks[i]['assignedTo']}</p>
                <p id="email" class="blue">${tasks[i]['email']}</p>
            </div>
        </div>
        <div class="category__container">
            <p>${tasks[i]['category']}</p>
        </div>
        <div class="details__container">
            <p>${tasks[i]['description']}</p>
         </div>
    </div>`;
    }

}

function filterTasksForBacklog(tasks, status){
    const backlog = tasks.filter(d => d['status'] === "backlog");
    console.log('arr1', arr1);
   }