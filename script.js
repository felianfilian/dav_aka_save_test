heroes = [];

function init() {}

function addTask() {
  let in_name = document.querySelector("#name").value;
  let in_prof = document.querySelector("#profession").value;

  console.log(in_name + " - " + in_prof);

  let hero = {
    name: in_name,
    profession: in_prof,
  };

  heroes.push(hero);

  console.log(heroes);

  let heroString = JSON.stringify(heroes);
  localStorage.setItem("heroes", heroString);
}
