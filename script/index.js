const filters = document.getElementById("filters");
const ToDo = document.getElementById("ToDo");
const filtersPopUp = document.getElementById("set-wrapp");
const ToDoPopUp = document.getElementById("ToDoPopUp");

filters.addEventListener("click", () => {
  filtersPopUp.classList.toggle("show");
});
