//WORKS pour GALERIE et MODAL GALEIRE
const reponseWorks = await fetch("http://localhost:5678/api/works");
const works = await reponseWorks.json();
console.log(works);
const reponseCategories = await fetch("http://localhost:5678/api/categories");
const categories = await reponseCategories.json();
//GALERIE
function genererWorks(works) {
  for (let j = 0; j < works.length; j++) {
    const figure = works[j];
    console.log(figure);
    const sectionWork = document.querySelector(".gallery");
    const elementWork = document.createElement("figure");
    elementWork.classList.add("galleryFigure");
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
}
genererWorks(works);

//CATEGORIES

for (let i = 0; i < categories.length; i++) {
  const categoriebtn = categories[i];
  const sectionCategorie = document.querySelector(".filtres");
  const btnCategorie = document.createElement("button");
  btnCategorie.setAttribute("id", "btnFiltre" + [i + 1]);
  btnCategorie.classList += "filtre";
  btnCategorie.innerText = categoriebtn.name;
  sectionCategorie.appendChild(btnCategorie);
}

const btnFilterObject = document.querySelector("#btnFiltre1");
btnFilterObject.addEventListener("click", function () {
  const objectFilter = works.filter(function (work) {
    return work.category.name == `object`;
  });
  document.querySelector(".galleryFigure").innerHTML = "";
  genererWorks(objectFilter);
});

//MODAL GALERIE
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
  //categoryId
  //userId
  //category: id + name
  const editWorkModal = document.createElement("a");
  editWorkModal.textContent = "éditer";
  sectionWorkModal.appendChild(elementWorkModal);
  elementWorkModal.appendChild(imageWorkModal);
  elementWorkModal.appendChild(editWorkModal);
}

//MODAL GALERIE Création boutons add et remove
const buttonWork = document.querySelector(".add-remove");
const addButton = document.createElement("button");
addButton.classList.add(`button-add`);
addButton.textContent = "Ajouter une photo";
buttonWork.appendChild(addButton);
const removeButton = document.createElement("button");
removeButton.classList.add(`button-remove`);
removeButton.textContent = "supprimer la galerie";
buttonWork.appendChild(removeButton);
