const container = document.querySelector(".container");
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const checkbox = document.querySelector(".checkbox");
const button = document.querySelector(".btn");
const list = document.querySelector(".list");

const checkStatus = () => {
  if (checkbox.checked) {
    button.removeAttribute("disabled");
  }
};

const clearForm = () => {
  form.reset();
};

const addTask = () => {
  if (input.value.trim() !== "") {
    const listItem = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Видалити задачу";
    deleteButton.classList.add("deleteBtn");
    listItem.textContent = input.value;
    listItem.appendChild(deleteButton);
    list.prepend(listItem);
    button.setAttribute("disabled", false);

    deleteButton.addEventListener("click", () => {
      deleteTask(listItem);
    });

    const onNoteClick = () => {
      listItem.classList.toggle("line-through");
    };
    listItem.addEventListener("click", onNoteClick);
    clearForm();
  }
};

const deleteTask = (listItem) => {
  listItem.remove();
};

const pressEnter = (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    if (checkbox.checked) {
      addTask();
    }
  }
};

form.addEventListener("keydown", pressEnter);
checkbox.addEventListener("click", checkStatus);
button.addEventListener("click", addTask);
// button.addEventListener("click", clearForm);
