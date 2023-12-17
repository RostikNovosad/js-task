const container = document.querySelector(".container");
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const checkbox = document.querySelector(".checkbox");
const button = document.querySelector(".btn");

const checkStatus = () => {
  if (checkbox.checked) {
    button.removeAttribute("disabled");
  }
};

const clearForm = () => {
  form.reset();
};

const addTask = () => {
  const note = document.createElement("p");
  note.textContent = input.value;
  container.append(note);
};

const enterInput = () => {};

const changeNote = () => {
  note.style.textDecoration = "line-through";
};

checkbox.addEventListener("click", checkStatus);
button.addEventListener("click", addTask);
button.addEventListener("click", clearForm);
note.addEventListener("click", changeNote);
