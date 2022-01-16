let user = [
    'Peter',
    'Dominic',
    'Florian',
    'Marvin'
];

let userjson = [
    {
        'name': 'Peter',
        'img': '',
        'email': 'perer@peter.de',
        'personalColor': 'orange'
    },
    {
        'name': 'Dominic',
        'img': 'img/dominic.png',
        'email': 'dominic@dominic.de',
        'personalColor': 'yellow'
    },
    {
        'name': 'Florian',
        'img': '',
        'email': 'florian@florian.de',
        'personalColor': 'green'
    },
    {
        'name': 'Marvin',
        'img': 'img/marvin.png',
        'email': 'marvin@marvin.de',
        'personalColor': 'red'
    }
]

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

let usersAssignedTo = [];

function showSelectionList() {
    let userAvailable = document.getElementById('selectUser');
    let userList = document.getElementById('selectUser');
    let userListHeight = userList.style.height;

    /**
     * fill userlist
     */

    userAvailable.innerHTML = '';
    userjson.forEach(name => {
        userAvailable.innerHTML +=
            `
        <li onclick="addSelectedUser('${name.name}')">${name.name}</li>
        `;
    });


    /**
     * show userlist
     */
    if (userList.style.height == '0px' || !userListHeight) {
        userList.classList.toggle('dNone');
        setTimeout(() => {
            userList.style.height = '100px';
        }, 10);
    }
    else {
        userList.style.height = '0';
        setTimeout(() => {
            userList.classList.toggle('dNone');
        }, 100);
    }
}

/**
 * will push an User to the usersAssignedTo array and adds an image of the user to the HTML
 * @param {string} name the name of the selected user
 */
function addSelectedUser(name) {
    if (!usersAssignedTo.includes(name)) {
        usersAssignedTo.push(name);
    }

    let userImgList = document.getElementById('selectedUserImages');
    userImgList.innerHTML = '';
    for (let i = 0; i < usersAssignedTo.length; i++) {
        let name = usersAssignedTo[i];
        for (let j = 0; j < userjson.length; j++) {
            let userName = userjson[j].name;
            if (name == userName) {
                if (userjson[j].img) {
                    userImgList.innerHTML += `
                <div><img class="userImg" src="${userjson[j].img}" alt=""></div>
                `;
                }
                else {
                    userImgList.innerHTML += `
                    <div><img class="userImg" src="img/user.png" alt=""></div>
                    `;
                }
            }
        }
    }
}

function addTask() {
    let title = document.getElementById('title');
    let dueDate = document.getElementById('duedate');
    let category = document.getElementById('category');
    let urgency = document.getElementById('urgency');
    let description = document.getElementById('description');
    let assignedTo = usersAssignedTo;
    let img = [];
    let email = [];
    let personalColor = [];

    //console.log(title.value + dueDate.value + category.value + urgency.value + description.value);
    if (usersAssignedTo.length > 0) {
        /**
         * push img path of user in img array
         */
        for (let i = 0; i < usersAssignedTo.length; i++) {
            let name = usersAssignedTo[i];
            for (let j = 0; j < userjson.length; j++) {
                let userName = userjson[j].name;
                if (name == userName) {
                    if (userjson[j].img) {
                        img.push(userjson[j].img);
                    }
                    else {
                        img.push("img/user.png");
                    }
                }
            }
        }

        /**
         * push mail in email array
         */
        for (let i = 0; i < usersAssignedTo.length; i++) {
            let name = usersAssignedTo[i];
            for (let j = 0; j < userjson.length; j++) {
                let userName = userjson[j].name;
                if (name == userName) {
                    if (userjson[j].email) {
                        email.push(userjson[j].email);
                    }
                }
            }
        }

        /**
         * push personalColor
         */
        for (let i = 0; i < usersAssignedTo.length; i++) {
            let name = usersAssignedTo[i];
            for (let j = 0; j < userjson.length; j++) {
                let userName = userjson[j].name;
                if (name == userName) {
                    if (userjson[j].personalColor) {
                        personalColor.push(userjson[j].personalColor);
                    }
                }
            }
        }

        let newTask = {
            'title': title.value,
            'duedate': dueDate.value,
            'category': category.value,
            'urgency': urgency.value,
            'description': description.value,
            'assignedTo': assignedTo,
            'img': img,
            'email': email,
            'personalColor': personalColor
        }
        tasks.push(newTask);
        saveTasks();
        alert('Task has been created');
    }

    else {
        alert('Please assign your task to someone')
    }
}

function clearForm(){
    document.getElementById('myForm').reset();
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