let cats = ['own', 'inv', 'ear', 'pro'];
let select = document.getElementById('shares-select');
let head = document.getElementById('head');
let currentActive = 0;
let tableItems = [];

//head.removeChild(select);

for (let i = 0; i < cats.length; i++) {
    let current = document.getElementsByClassName(cats[i]);
    tableItems.push(current);
}

function updateTable() {
    resetTable();
    currentActive = select.options[select.selectedIndex].value;
    for (let i = 0; i < tableItems[currentActive].length; i++) {
        tableItems[currentActive][i].classList.add("active");
    }
}

function resetTable() {
    for (let i = 0; i < tableItems[currentActive].length; i++) {
        tableItems[currentActive][i].classList.remove("active");
    }
}

updateTable();
