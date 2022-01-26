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

tasks = [];

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

    userAvailable.innerHTML = '';
    userjson.forEach(name => {
        if (usersAssignedTo.includes(name['name'])) {
            userAvailable.innerHTML +=
                `
            <div>
            <input checked onchange="addSelectedUser('${name.name}')" type="checkbox" id="${name.name}" name="${name.name}">
            <label for="${name.name}">${name.name}</label>
        </div>
        `;
        }
        else {
            userAvailable.innerHTML +=
                `
            <div>
            <input onchange="addSelectedUser('${name.name}')" type="checkbox" id="${name.name}" name="${name.name}">
            <label for="${name.name}">${name.name}</label>
        </div>
        `;
        }
    });

    /**
     * show userlist
     */
    if (userList.style.height == '0px' || !userListHeight) {
        userList.classList.toggle('dNone');
        setTimeout(() => {
            userList.style.height = '110px';
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
        document.getElementById('checkUser').value += name;
        showSelectionList();
    }
    /**
     * if the user is already selected -> remove
     */
    else {
        const index = usersAssignedTo.indexOf(name);
        if (index > -1) {
            usersAssignedTo.splice(index, 1);
        }
        showSelectionList();
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
                <div onclick="addSelectedUser('${name}')"><img class="userImg" src="${userjson[j].img}"  title="${name}" alt=""></div>
                `;
                }
                else {
                    userImgList.innerHTML += `
                    <div onclick="addSelectedUser('${name}')"><img class="userImg" src="img/user.png" title="${name}" alt=""></div>
                    `;
                }
            }
        }
    }
}

function addTask() {
    if (!tasks) {
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
            'status': 'backlog',
            'id': new Date().getTime()
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
    usersAssignedTo = [];
    let userImgList = document.getElementById('selectedUserImages');
    userImgList.innerHTML = '';
    document.getElementById('myForm').reset();
}

