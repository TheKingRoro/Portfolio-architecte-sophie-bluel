//WORKS & Galeries
const reponseWorks = await fetch("http://localhost:5678/api/works");
const works = await reponseWorks.json();
console.log(works);

function genererWorks(works) {
  for (let j = 0; j < works.length; j++) {
    const work = works[j];
    console.log(work);
    const sectionWork = document.querySelector(".gallery");
    const elementWork = document.createElement("figure");
    const idWork = elementWork.setAttribute("id", `${works[j].categoryId}`);
    console.log(idWork);
    const imageWork = document.createElement("img");
    imageWork.src = works[j].imageUrl;
    imageWork.alt = works[j].title;
    const titleWork = document.createElement("figcaption");
    titleWork.textContent = works[j].title;
    sectionWork.appendChild(elementWork);
    elementWork.appendChild(imageWork);
    elementWork.appendChild(titleWork);
  }

  for (let z = 0; z < works.length; z++) {
    const workModal = works[z];
    console.log(workModal);
    const sectionWorkModal = document.querySelector(".gallery-modal");
    const elementWorkModal = document.createElement("figure");
    //Id
    const idWorkModal = elementWorkModal.setAttribute(
      "id",
      `${works[z].categoryId}`
    );
    console.log(idWorkModal);
    //title
    const imageWorkModal = document.createElement("img");
    imageWorkModal.src = works[z].imageUrl;
    imageWorkModal.alt = works[z].title;
    const titleWorkModal = document.createElement("figcaption");
    titleWorkModal.textContent = works[z].title;
    //categoryId
    //userId
    //category: id + name
    sectionWorkModal.appendChild(elementWorkModal);
    elementWorkModal.appendChild(imageWorkModal);
    elementWorkModal.appendChild(titleWorkModal);
  }

  //Création bouton
  const buttonWork = document.querySelector(".add-remove");
  const addButton = document.createElement("button");
  addButton.classList.add(`button-add`);
  addButton.textContent = "Ajouter une photo";
  buttonWork.appendChild(addButton);
}

genererWorks(works);

//CATEGORIES & Filtres
const reponseCategories = await fetch("http://localhost:5678/api/categories");
const categories = await reponseCategories.json();
console.log(categories);
for (let i = 0; i < categories.length; i++) {
  const categorie = categories[i];
  const sectionCategorie = document.querySelector(".filtres");
  const btnCategorie = document.createElement("button");
  btnCategorie.classList += "filtre";
  btnCategorie.innerText = categorie.name;
  sectionCategorie.appendChild(btnCategorie);
}

//const { log } = require("console");
//const { response } = require("express");

//LOGIN
/*const reponseLogin = await fetch("http://localhost:5678/api/users/login");
const login = await reponseLogin.json();
console.log(login);
const emailLogin = document.loginForm.email.value;
const passwordLogin = document.loginForm.password.value;
const loginBanner = document.querySelector(".login-banner");
const btnLogin = document.querySelector(".connect");
btnLogin.addEventListener("click", () => {
  if (emailLogin === "p.a@gmail.com" && passwordLogin === "pa") {
    window.location = "index.html";
  }
});
console.log(btnLogin);*/
