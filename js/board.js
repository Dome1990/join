function init() {
    loadTasks();
    showTasks();
}

function showTasks() {

    document.getElementById('todo__container').innerHTML = "";
    document.getElementById('inProgress__container').innerHTML = "";
    document.getElementById('testing__container').innerHTML = "";
    document.getElementById('done__container').innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        if(tasks[i]['status'] == 'todo'){
            document.getElementById('todo__container').innerHTML += `
            <div draggable="true" ondragstart="startDragging(${tasks[i]['id']})"  id="task${i}" class="backlogDetail__container background__lightblue" style="border-left:16px solid ${tasks[i]['personalColor'][0]}">
                <div class="left__container">
                <div class="img__container">
                     <img src=${tasks[i]['img'][0]} alt="./img/user.png ">
                </div>
                <div class="assignedTo "title="${tasks[i]['assignedTo']}">
                    <p id="name" >${tasks[i]['assignedTo'][0]}</p>
                </div>
            </div>
            <div class="category__container margin">
                <p>${tasks[i]['category']}</p>
            </div>
            <div class="details__container">
                <p>${tasks[i]['description']}</p>
             </div>
             `;
        }
        else if(tasks[i]['status'] == 'inProgress'){
            document.getElementById('inProgress__container').innerHTML += `
            <div draggable="true" ondragstart="startDragging(${tasks[i]['id']})"  id="task${i}" class="backlogDetail__container background__lightblue" style="border-left:16px solid ${tasks[i]['personalColor'][0]}">
                <div class="left__container">
                <div class="img__container">
                     <img src=${tasks[i]['img'][0]} alt="./img/user.png ">
                </div>
                <div class="assignedTo "title="${tasks[i]['assignedTo']}">
                    <p id="name" >${tasks[i]['assignedTo'][0]}</p>
                </div>
            </div>
            <div class="category__container margin">
                <p>${tasks[i]['category']}</p>
            </div>
            <div class="details__container">
                <p>${tasks[i]['description']}</p>
             </div>
             `;
        }
        else if(tasks[i]['status'] == 'testing'){
            document.getElementById('testing__container').innerHTML += `
            <div draggable="true" ondragstart="startDragging(${tasks[i]['id']})"  id="task${i}" class="backlogDetail__container background__lightblue" style="border-left:16px solid ${tasks[i]['personalColor'][0]}">
                <div class="left__container">
                <div class="img__container">
                     <img src=${tasks[i]['img'][0]} alt="./img/user.png ">
                </div>
                <div class="assignedTo "title="${tasks[i]['assignedTo']}">
                    <p id="name" >${tasks[i]['assignedTo'][0]}</p>
                </div>
            </div>
            <div class="category__container margin">
                <p>${tasks[i]['category']}</p>
            </div>
            <div class="details__container">
                <p>${tasks[i]['description']}</p>
             </div>
             `;
        }
        else if(tasks[i]['status'] == 'done'){
            document.getElementById('done__container').innerHTML += `
            <div draggable="true" ondragstart="startDragging(${tasks[i]['id']})"  id="task${i}" class="backlogDetail__container background__lightblue" style="border-left:16px solid ${tasks[i]['personalColor'][0]}">
                <div class="left__container">
                <div class="img__container">
                     <img src=${tasks[i]['img'][0]} alt="./img/user.png ">
                </div>
                <div class="assignedTo "title="${tasks[i]['assignedTo']}">
                    <p id="name" >${tasks[i]['assignedTo'][0]}</p>
                </div>
            </div>
            <div class="category__container margin">
                <p>${tasks[i]['category']}</p>
            </div>
            <div class="details__container">
                <p>${tasks[i]['description']}</p>
             </div>
             `;
        }
    }
}

let currentDraggedElement; // ?

function startDragging(id) {
    currentDraggedElement = id;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function moveTo(category) { // ?
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i]['id'] == currentDraggedElement){
            tasks[i]['status'] = category;
        }
    }
    saveTasks();
    init();
}