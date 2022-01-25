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

tasks =[];

let usersAssignedTo = [];

/**
 * change the date of the due date inputfield to todays date
 */
function pushDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById('duedate').value = today;
}

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
        let userfield = document.getElementById('checkUser');
        usersAssignedTo.push(name);
        document.getElementById('checkUser').value += name;
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
    if (!tasks){
        tasks = [];
    }
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
            'personalColor': personalColor,
            'status': 'backlog'
        }
        tasks.push(newTask);
        saveTasks();
        loadTasks();
        alert('Task has been created');
    }

    else {
        alert('Please assign your task to someone')
    }
}

function clearForm() {
    document.getElementById('myForm').reset();
}

