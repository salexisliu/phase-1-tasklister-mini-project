document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
});

const tForm = document.getElementById("create-task-form");
const taskBox = document.querySelector("#tasks");
const descBox = document.querySelector("#new-task-description");
console.log(descBox);
///selector

//Create array of options to be added
function createList(e) {
  const array = ["high priority", "normal priority", "low priority"];
  //Create and append select list
  const selectList = document.createElement("select");
  selectList.id = "mySelect";
  tForm.appendChild(selectList);
  //Create and append the options //ITERATOR
  for (let i = 0; i < array.length; i++) {
    let option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    selectList.appendChild(option);
  }
}
createList();

///task

function renderTask(e, color) {
  const li = document.createElement("li");
  const bttn = document.createElement("button");

  bttn.id = "xButton";
  bttn.textContent = "x";
  li.textContent = `${e} `; //this toDo  is the value of the e.target on new task desc, also makes a space
  li.classList.add(color); //adds color

  bttn.addEventListener("click", removeTask);
  taskBox.append(li);
  li.appendChild(bttn);
}

function createTask(e) {
  e.preventDefault();
  const task = e.target.querySelector("#new-task-description").value;
  const sel = document.getElementById("mySelect");
  opt = sel.options[sel.selectedIndex];

  if (opt.value == "high priority" && task !== "") {
    renderTask(task, "red");
    tForm.reset();
    /// make text red ?????
  } else if (opt.value == "normal priority" && task !== "") {
    renderTask(task, "green");
    tForm.reset();
  } else if (opt.value == "low priority" && task !== "") {
    renderTask(task, "blue");
    tForm.reset();
  } else {
    alert("please enter a task");
  }
}

function removeTask(e) {
  e.target.parentNode.remove(); ///grabs parent node of button
}

function init() {
  tForm.addEventListener("submit", createTask);
}

init();
