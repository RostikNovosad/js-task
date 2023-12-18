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
    listItem.textContent = input.value;
    list.append(listItem);
    button.setAttribute("disabled", false);

    const onNoteClick = (event) => {
      listItem.style.textDecoration = "line-through";
    };
    listItem.addEventListener("click", onNoteClick);
  }
};

const enterInput = () => {
  if (e.key === "Enter") {
    addTask();
  }
};

input.addEventListener("keydown", enterInput);

checkbox.addEventListener("click", checkStatus);
button.addEventListener("click", addTask);
button.addEventListener("click", clearForm);
