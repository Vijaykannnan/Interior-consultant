let add = document.querySelector("nav ul");
let remove = document.querySelector("header em");
let assume = document.querySelector("header span i");
assume.onclick = function () {
  add.style.display = "block";
  remove.style.display = "block";
};
remove.onclick = function () {
  add.style.display = "none";
  remove.style.display = "none";
};
