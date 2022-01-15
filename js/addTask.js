user = ['Peter', 'Dominic', 'Florian', 'Marvin'];

tasks =
    [
        {
            'title': 'Do Tasks',
            'duedate': '02/07/2020',
            'category': 'Management',
            'urgency': 'high',
            'description': '    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint accusantium obcaecati at?',
            'assignedTo': 'Dominic',
            'img': 'img/dominic.png',
            'email': 'dominic@dominic.de',
            'personalColor': 'yellow'
        },
        {
            'title': 'Do more Tasks',
            'duedate': '03/07/2020',
            'category': 'Research',
            'urgency': 'middle',
            'description': '    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint accusantium obcaecati at?',
            'assignedTo': 'Marvin',
            'img': 'img/marvin.png',
            'email': 'marvin@marvin.de',
            'personalColor': 'red'
        },
        {
            'title': 'do some Tasks',
            'duedate': '05/02/2021',
            'category': 'Marketing',
            'urgency': 'low',
            'description': '    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint accusantium obcaecati at?',
            'assignedTo': 'Florian',
            'img': 'img/florian.png',
            'email': 'florian@florian.de',
            'personalColor': 'green'
        }

    ]

function addTask() {

}

function fillDummyTasks() {
    console.log("Dummytasks füllen");
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