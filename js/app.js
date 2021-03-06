document.addEventListener("DOMContentLoaded", function () {


// All variables are here
    var hamburger = document.querySelector(".hamb");
    var menuToggle = document.getElementsByClassName("menu-list");
    var todayBtn = document.querySelector("#todayBtn");         // TODAY <button>
    var tomorrowBtn = document.querySelector("#tomorrowBtn");   // TOMORROW <button>
    var weekBtn = document.querySelector("#weekBtn");           // WEEK <button>
    var allBtn = document.querySelector("#allBtn");             // ALL <button>
    var tasksToDo = document.querySelector(".tasks-to-do");     // TASKS TO DO <ul>

// all required arrays
    var all = [
        {
            name: "umyj naczynia",
            date: "2018-04-10",
            priority: 3
        },
        {
            name: "ustaw nowe zadanie",
            date: "2018-04-09",
            priority: 4
        },

        {
            name: "ustaw tez nowe zadanie",
            date: "2018-04-12",
            priority: 4
        },
        {
            name: "ustaw nowe zadanie",
            date: "2018-07-06",
            priority: 5
        }];
    var today = [];
    var tomorrow = [];
    var week = [];
    var userCats = [];

// HAMBURGER

    hamburger.addEventListener("click", function () {
        for (var i = 0; i < menuToggle.length; i++) {
            menuToggle[i].classList.toggle("wide-menu");
        }
    });

// Button "ALL" functionality
    allBtn.addEventListener("click", function () {

        // clearing <ul>
        while (tasksToDo.firstChild) {
            tasksToDo.removeChild(tasksToDo.firstChild);
        }

        // creating <li>, <div> inside and pushing elements into them.
        for (var i = 0; i < all.length; i++) {

            // creating new element <li>
            var newLi = document.createElement("li");
            // taking elements from object sent by user (name, date, priority)
            var allElements = Object.values(all[i]);
            // assigning new <li> to <ul>
            tasksToDo.appendChild(newLi);

            // creating new divs in <li> and putting user information in divs
            for (var j = 0; j < 4; j++) {
                var newDiv = document.createElement("div");
                tasksToDo.children[i].append(newDiv);
                if (j !== 0) {
                    newDiv.innerText = (allElements[j - 1]);
                }
            }
        }
    });


// Button "TODAY" functionality
    todayBtn.addEventListener("click", function () {
        // executing 'today task check' function
        checkTodayArray();
        // clearing <ul>
        while (tasksToDo.firstChild) {
            tasksToDo.removeChild(tasksToDo.firstChild);
        }

        // creating <li>, <div> inside and pushing elements into them.
        for (var i = 0; i < today.length; i++) {

            // creating new element <li>
            var newLi = document.createElement("li");
            // taking elements from object sent by user (name, date, priority)
            var todayElements = Object.values(today[i]);
            // assigning new <li> to <ul>
            tasksToDo.appendChild(newLi);

            // creating new divs in <li> and putting user information in divs
            for (var j = 0; j < 4; j++) {
                var newDiv = document.createElement("div");
                tasksToDo.children[i].append(newDiv);
                if (j !== 0) {
                    newDiv.innerText = (todayElements[j - 1]);
                }
            }
        }
    });


// Button "TOMORROW" functionality
    tomorrowBtn.addEventListener("click", function () {
        // executing 'today task check' function
        checkTomorrowArray();
        // clearing <ul>
        while (tasksToDo.firstChild) {
            tasksToDo.removeChild(tasksToDo.firstChild);
        }

        // creating <li>, <div> inside and pushing elements into them.
        for (var i = 0; i < tomorrow.length; i++) {

            // creating new element <li>
            var newLi = document.createElement("li");
            // taking elements from object sent by user (name, date, priority)
            var tommorowElements = Object.values(tomorrow[i]);
            // assigning new <li> to <ul>
            tasksToDo.appendChild(newLi);

            // creating new divs in <li> and putting user information in divs
            for (var j = 0; j < 4; j++) {
                var newDiv = document.createElement("div");
                tasksToDo.children[i].append(newDiv);
                if (j !== 0) {
                    newDiv.innerText = (tommorowElements[j - 1]);
                }
            }
        }
    });

// Button "WEEK" functionality
    weekBtn.addEventListener("click", function () {
        // executing 'week task check' function
        checkWeekArray();
        // clearing <ul>
        while (tasksToDo.firstChild) {
            tasksToDo.removeChild(tasksToDo.firstChild);
        }

        // creating <li>, <div> inside and pushing elements into them.
        for (var i = 0; i < week.length; i++) {

            // creating new element <li>
            var newLi = document.createElement("li");

            // taking elements from object sent by user (name, date, priority)
            var weekElements = Object.values(week[i]);

            // assigning new <li> to <ul>
            tasksToDo.appendChild(newLi);

            // creating new divs in <li> and putting user information in divs
            for (var j = 0; j < 4; j++) {
                var newDiv = document.createElement("div");
                tasksToDo.children[i].append(newDiv);
                if (j !== 0) {
                    newDiv.innerText = (weekElements[j - 1]);
                }
            }
        }
    });


// Today Array filling
    function checkTodayArray() {

        // getting current date/time
        var currentDate = new Date();

        // day variable (need to add "0" if day is less than 10)
        var dd = "";
        if (currentDate.getDate() < 10) {
            dd = "0" + currentDate.getDate();
        } else {
            dd = currentDate.getDate();
        }

        // month variable (need to add "0" if month is less than 10)
        var mm = "";
        if (currentDate.getMonth() + 1 < 10) {
            mm = "0" + (currentDate.getMonth() + 1);
        } else {
            mm = currentDate.getMonth();
        }

        // year variable
        var yyyy = currentDate.getFullYear();

        // our date combined
        var todayDate = (yyyy + "-" + mm + "-" + dd);

        // clearing array before filling it
        today = [];
        // looping through ALL array to find today's tasks
        for (var i = 0; i < all.length; i++) {
            if (all[i].date === todayDate) {
                today.push(all[i]);
            }
        }
    }


// Tomorrow Array filling
    function checkTomorrowArray() {

        // getting current date/time
        var currentDate = new Date();
        // switching date + 24hours
        currentDate.setDate(currentDate.getDate() + 1);

        // day variable (need to add "0" if day is less than 10)
        var dd = "";
        if (currentDate.getDate() < 10) {
            dd = "0" + currentDate.getDate();
        } else {
            dd = currentDate.getDate();
        }

        // month variable (need to add "0" if month is less than 10)
        var mm = "";
        if (currentDate.getMonth() + 1 < 10) {
            mm = "0" + (currentDate.getMonth() + 1);
        } else {
            mm = currentDate.getMonth();
        }

        // year variable
        var yyyy = currentDate.getFullYear();

        // our date combined
        var todayDate = (yyyy + "-" + mm + "-" + dd);

        // clearing array before filling it
        tomorrow = [];
        // looping through ALL array to find today's tasks
        for (var i = 0; i < all.length; i++) {
            if (all[i].date === todayDate) {
                tomorrow.push(all[i]);
            }
        }
    }


// Week Array filling
    function checkWeekArray() {

        // getting current date/time
        var currentDate = new Date();
        var sevenDays = [];

        // this for loop creates an array with next seven days date
        for (var k = 0; k < 7; k++) {

            // day variable (need to add "0" if day number is less than 10)
            var dd = "";
            if (currentDate.getDate() < 10) {
                dd = "0" + currentDate.getDate();
            } else {
                dd = currentDate.getDate();
            }

            // month variable (need to add "0" if month number is less than 10)
            var mm = "";
            if (currentDate.getMonth() + 1 < 10) {
                mm = "0" + (currentDate.getMonth() + 1);
            } else {
                mm = currentDate.getMonth();
            }

            // year variable
            var yyyy = currentDate.getFullYear();

            // our date combined
            var todayDate = (yyyy + "-" + mm + "-" + dd);

            sevenDays.push(todayDate);

            // Next day date for next loop
            currentDate.setDate(currentDate.getDate() + 1);
        }

        // clearing array before filling it
        week = [];

        // looping through ALL array to find next 7 days tasks
        for (var i = 0; i < all.length; i++) {

            //looping through SEVENDAYS array
            for (var h = 0; h < sevenDays.length; h++) {

                if (all[i].date === sevenDays[h]) {

                    week.push(all[i]);

                }

            }

        }
    }


// PRIORITY
// ---------TO BE DONE------------


//--------------------ADD CATEGORY------------------

    var addCategory = document.querySelector('.add-category');

    addCategory.addEventListener('click', function () {
        var parent = document.querySelector(".header-add-category");
        var element = document.createElement("div");
        if (document.querySelector(".window") === null) {
            element.classList.add("window");
            element.innerHTML =
                '<input type="text" id="input-category" placeholder="Kategoria">' +
                '<button id="btn-category">Dodaj Kat</button>' +
                '<button id="cancel">Zakończ</button>';

            parent.appendChild(element);

            var btnCategory = document.querySelector("#btn-category");
            var inputCategory = document.querySelector("#input-category");
            var categList = document.querySelector("#categ");

            btnCategory.addEventListener('click', function () {

                    if (inputCategory.value !== "") {
                        var newCategory = document.createElement("li");
                        var newButton = document.createElement('button');
                        newButton.innerText = inputCategory.value[0];
                        newButton.classList.add("categ-list");
                        newCategory.appendChild(newButton);
                        //categList.append(newCategory);
                        //inputCategory.value="";

                        categList.insertBefore(newCategory, categList.firstChild);

                        parent.removeChild(element);
                    }


                }
            );


            var cancel = document.querySelector("#cancel");

            cancel.addEventListener('click', function () {
                parent.removeChild(element);
            });
        }


    });

//---------ADD CATEGORY--------FINISH----------------

// Task adding feature WORK IN PROGRESS

    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementById("myUL");
    for (var q = 0; q < myNodelist.length; q++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[q].appendChild(span);
    }

// Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

// Add a "checked" symbol when clicking on a list item
    var list = document.querySelector('ul');
    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);

// MAIN ADD TASK button

    var mainAddTaskBtn = document.querySelector('.addTaskButton');
    var toggledSection = document.querySelector('.sectionAddTask');
    mainAddTaskBtn.addEventListener("click", function() {
        toggledSection.classList.toggle('invisible');
    });


// Create a new list item when clicking on the "Add" button
    var addTaskBtn = document.querySelector('.addBtn');
    addTaskBtn.addEventListener('click', newElement);
    function newElement() {
        var li = document.createElement("li");
        var liDiv1 = document.createElement('div');
        var liDiv2 = document.createElement('div');
        var liDiv3 = document.createElement('div');
        var liDiv4 = document.createElement('div');

        liDiv1.innerText = document.getElementById("myInput").value;
        liDiv2.innerText = document.getElementById("date").value;
        var options = document.getElementsByName("kolor");
        var priorityValue = 1;

        if (options) {
            for (var i = 0; i < options.length; i++) {
                if (options[i].checked) {
                    priorityValue = options[i].value;
                }
            }
        }
        liDiv3.innerText = priorityValue;

        li.appendChild(liDiv4);
        li.appendChild(liDiv1);
        li.appendChild(liDiv2);
        li.appendChild(liDiv3);
        if (liDiv1.innerText === '' || liDiv2.innerText === '') {
            alert("You must write something!");
        } else {
            document.querySelector(".tasks-to-do").appendChild(li);
        }
        document.getElementById("myInput").value = "";

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";

        };

        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        toggledSection.classList.toggle('invisible');
    }
});