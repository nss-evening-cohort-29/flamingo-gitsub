// importing from the data module
import { repos, projects, packages, pinnedRepos, randomData } from "./data.js";

//************************************//
//************************************//
//**********OVERVIEW******************//
//************************************//
//************************************//

//************************************//
//**********CARDS ON DOM**************//
//************************************//

//set location
const overviewDynamicContainer = document.querySelector(
  "#overview-dynamic-container"
);

//use for loop to get the objects from our pinnedRepos object array as cards and into our html
//overviewCardsOnDom function.
const overviewCardsOnDom = (array) => {
  let domString = "";
  for (const pinnedRepo of array) {
    domString +=
      //has pin button like the repo cards, but it's not clickable on these
      `<div class="card" id="dynamic-cards">
    <div class="card-body">
    <p><a class="link-offset-2 link-underline link-underline-opacity-0" href="#" id="pin--">⭐Pinned</a></p>
      <h5 class="card-title">${pinnedRepo.name}</h5>
      <p class="card-text">${pinnedRepo.description}</p>
      <a href="#" class="card-link">${pinnedRepo.primaryLanguage}</a>
      <a href="#" class="card-link">${pinnedRepo.publicOrPrivate}</a>
    </div>
  </div>`;
  }
  if (document.URL.includes("index.html")) {
    overviewDynamicContainer.innerHTML = domString;
  }
};

// call the function with the pinnedRepos array to paint the DOM
if (document.URL.includes("index.html")) {
  overviewCardsOnDom(pinnedRepos);
}

//************************************//
//**********FORM *********************//
//************************************//
//set location
const overviewDynamicForm = document.querySelector("#overview-dynamicForm");
if (document.URL.includes("index.html")) {
  overviewDynamicForm.innerHTML += `<form id="form">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Create New Pinned Repo</label>
            <input type="pinnedRepoName" class="form-control" id="inputName" placeholder="Example Name" style="background-color: #010409; border-color: #3d444d;" required>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Description (optional)</label>
            <textarea class="form-control" id="inputDescription" rows="3" style="background-color: #010409; border-color: #3d444d;"></textarea>
          </div>
          <button type="submit" class="btn btn-primary" id="submitButton">Submit</button>
        </form>`;
}

// ************************************
// ********** CREATE*******************
// ************************************

// assign ids from the form to variables
const pinnedRepoForm = document.querySelector("#form");
const pinnedRepoInputName = document.querySelector("#inputName");
const pinnedRepoInputDescription = document.querySelector("#inputDescription");

//event listener for submit button click on the form
if (document.URL.includes("index.html")) {
  pinnedRepoForm.addEventListener("submit", (e) => {
    //prevent default prevents reloading the page when the form is submitted
    e.preventDefault();
    const newPinnedRepo = {
      //this key value works bc above we used query selector to assign specific ids of form to variables (e.g. pinnedRepoInputName variable)
      name: pinnedRepoInputName.value,
      description: pinnedRepoInputDescription.value,
      id: pinnedRepos.length + 1,
      primaryLanguage:
        randomData[0].primaryLanguage[
          Math.floor(Math.random() * randomData[0].primaryLanguage.length)
        ], // assigns primary languge randomly
      publicOrPrivate:
        randomData[0].publicOrPrivate[Math.floor(Math.random() * 2)], // assigns public or private randomly
    };
    //add new project to the pinnedRepo array
    pinnedRepos.push(newPinnedRepo);
    //re-render  the cards on the DOM with the updated array
    overviewCardsOnDom(pinnedRepos);
    //clear the form after submit
    pinnedRepoForm.reset();
  });
}

//************************************//
//************************************//
//**********REPOS*********************//
//************************************//
//************************************//

//************************************//
//*********PINNED CARDS ON REPOS DOM**//
//************************************//

const pinnedReposCardsOnDom = (array) => {
  let pinnedDomString = "";
  for (const pinnedRepo of array) {
    pinnedDomString +=
      //has pin button like the repo cards, but it's not clickable on these
      `<div class="card" id="dynamic-cards">
    <div class="card-body">
    <p><a class="link-offset-2 link-underline link-underline-opacity-0" href="#" id="pin--">⭐Pinned</a></p>
      <h5 class="card-title">${pinnedRepo.name}</h5>
      <p class="card-text">${pinnedRepo.description}</p>
      <a href="#" class="card-link">${pinnedRepo.primaryLanguage}</a>
      <a href="#" class="card-link">${pinnedRepo.publicOrPrivate}</a>
    </div>
  </div>`;
  }
  if (document.URL.includes("repos.html")) {
    document.querySelector("#pinnedFromReposPage").innerHTML += pinnedDomString;
  }
};

//************************************//
//**********CARDS ON DOM**************//
//************************************//

//set location
const reposDynamicContainer = document.querySelector("#repos-dynamicContainer");

//use for loop to get the objects from our repos object array as cards and into our html
//reposCardsOnDom function.
const reposCardsOnDom = (array) => {
  let domString = "";
  for (const repo of array) {
    domString +=
      //"pin-button--" the -- is to add pinning functionality later, in a similar fashion to delete
      `<div class="card" id="dynamic-cards">
  <div class="card-body">
  <p><a class="link-offset-2 link-underline link-underline-opacity-0" href="#" id="pin--${repo.id}">Pin</a></p>
    <h5 class="card-title">${repo.name}</h5>
    <p class="card-text">${repo.description}</p>
    <a href="#" class="card-link">${repo.primaryLanguage}</a>
    <a href="#" class="card-link">${repo.publicOrPrivate}</a>
  </div>
</div>`;
  }
  reposDynamicContainer.innerHTML = domString;
};

// call the function with the repos array to paint the DOM
if (document.URL.includes("repos.html")) {
  reposCardsOnDom(repos);
}

//************************************//
//**********FORM *********************//
//************************************//
//set location
const reposDynamicForm = document.querySelector("#repos-dynamicForm");
if (document.URL.includes("repos.html")) {
  reposDynamicForm.innerHTML += `<form id="form">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Create New Repo</label>
            <input type="repoName" class="form-control" id="inputName" placeholder="Repo Example Name" style="background-color: #010409; border-color: #3d444d;" required>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Description (optional)</label>
            <textarea class="form-control" id="inputDescription" rows="3" style="background-color: #010409; border-color: #3d444d;"></textarea>
          </div>
          <button type="submit" class="btn btn-primary" id="submitButton">Submit</button>
        </form>`;
}

//************************************//
//********** CREATE*******************//
//************************************//

//assign ids from the form to variables
const form = document.querySelector("#form");
const inputName = document.querySelector("#inputName");
const inputDescription = document.querySelector("#inputDescription");

//event listener for submit button click on the form
if (document.URL.includes("repos.html")) {
  form.addEventListener("submit", (e) => {
    //prevent default prevents reloading the page when the form is submitted
    e.preventDefault();
    const newRepo = {
      //this key value works bc above we used query selector to assign specific ids of form to variables (e.g. inputName variable)
      name: inputName.value,
      description: inputDescription.value,
      id: repos.length + 1,
      primaryLanguage:
        randomData[0].primaryLanguage[
          Math.floor(Math.random() * randomData[0].primaryLanguage.length)
        ], // assigns primary languge randomly
      publicOrPrivate:
        randomData[0].publicOrPrivate[Math.floor(Math.random() * 2)], // assigns public or private randomly
    };
    //add new repo to the repos array
    repos.push(newRepo);
    //re-render  the cards on the DOM with the updated array
    reposCardsOnDom(repos);
    //clear the form after submit
    form.reset();
  });
}

//************************************//
//**********PINNING*******************//
//************************************//

//target the right div. above we assigned reposDynamicContainer to target our div with the id "#repos-dynamicContainer"
if (document.URL.includes("repos.html")) {
  reposDynamicContainer.addEventListener("click", (e) => {
    //check that e.target.id includes "pin", includes() method returns true if an array contains a specific value
    //target finds that specific delete button (since there are multiple on the page)
    if (e.target.id.includes("pin")) {
      //destructuring
      //const [, id]: the comma is a placeholder, indicating that the first value of the array is ignored. The second value (whatever is after the "--") is assigned to the const "id," which we are also delcaring here
      //above, in the cards, the pin button's ID is: id="pin--${repos.id}". with e.taget.id, we are retrieving that, and we are splitting it at the --, which gives us the array [expel, #].
      //we assign const id = #
      //we're basically just getting the # id of the card who's expel button we clicked, and assigning that to const id
      const [, id] = e.target.id.split("--");
      //The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
      //so here, we are finding the first instance that a repos id matches the const id that we assigned in the previous step. And we are assigning that to the const "index"
      //// Number() just makes sure id is converted to a number (if it's not already)
      //tldr: we're finding where the id of an obj in repos matches the id of where we clicked, and assigning that to const index
      const index = repos.findIndex((e) => e.id === Number(id));
      //remove index (which we just declared and assigned in the previous step) from the array, and assign it to const removed
      ////splice can do other things, but in this case (X, #) or for us (index, 1), X is the position of the item to remove, and # is the number of elements to remove, starting from X.
      //also we assign the thing that we removed to a const "removed", so that we can pass it into overviewCardsOnDom
      const removed = repos.splice(index, 1);
      reposCardsOnDom(repos);
      if (document.URL.includes("repos.html")) {
        // overviewCardsOnDom(pinnedRepos); not relevant since reloading (or clicking the overview page) doesn't retain data pushes. doing it within the same page now, to at least have something.
        pinnedReposCardsOnDom(removed);
      }
    }
  });
}

//************************************//
//************************************//
//**********PROJECTS******************//
//************************************//
//************************************//

//************************************//
//**********CARDS ON DOM**************//
//************************************//

//set location
const projectsDynamicContainer = document.querySelector(
  "#projects-dynamic-container"
);

//use for loop to get the objects from our projects object array as cards and into our html
//projectsCardsOnDom function.
const projectsCardsOnDom = (array) => {
  let domString = "";
  for (const project of array) {
    domString += `<div class="card" id="dynamic-cards">
  <div class="card-body">
    <h5 class="card-title">${project.name}</h5>
    <p class="card-text">${project.description}</p>
    <a href="#" class="card-link">${project.primaryLanguage}</a>
    <a href="#" class="card-link">${project.publicOrPrivate}</a>
  </div>
</div>`;
  }
  if (document.URL.includes("projects.html")) {
    projectsDynamicContainer.innerHTML = domString;
  }
};

// call the function with the projects array to paint the DOM
if (document.URL.includes("projects.html")) {
  projectsCardsOnDom(projects);
}

//************************************//
//**********FORM *********************//
//************************************//
//set location
const projectsDynamicForm = document.querySelector("#projects-dynamicForm");
if (document.URL.includes("projects.html")) {
  projectsDynamicForm.innerHTML += `<form id="form">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Create New Project</label>
            <input type="projectName" class="form-control" id="inputName" placeholder="Project Example Name" style="background-color: #010409; border-color: #3d444d;" required>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Description (optional)</label>
            <textarea class="form-control" id="inputDescription" rows="3" style="background-color: #010409; border-color: #3d444d;"></textarea>
          </div>
          <button type="submit" class="btn btn-primary" id="submitButton">Submit</button>
        </form>`;
}

// ************************************
// ********** CREATE*******************
// ************************************

// assign ids from the form to variables
const projectForm = document.querySelector("#form");
const projectInputName = document.querySelector("#inputName");
const projectInputDescription = document.querySelector("#inputDescription");

//event listener for submit button click on the form
if (document.URL.includes("projects.html")) {
  projectForm.addEventListener("submit", (e) => {
    //prevent default prevents reloading the page when the form is submitted
    e.preventDefault();
    const newProject = {
      //this key value works bc above we used query selector to assign specific ids of form to variables (e.g. inputName variable)
      name: projectInputName.value,
      description: projectInputDescription.value,
      id: projects.length + 1,
      primaryLanguage:
        randomData[0].primaryLanguage[
          Math.floor(Math.random() * randomData[0].primaryLanguage.length)
        ], // assigns primary languge randomly
      publicOrPrivate:
        randomData[0].publicOrPrivate[Math.floor(Math.random() * 2)], // assigns public or private randomly
    };
    //add new project to the projects array
    projects.push(newProject);
    //re-render  the cards on the DOM with the updated array
    projectsCardsOnDom(projects);
    //clear the form after submit
    projectForm.reset();
  });
}

//************************************//
//************************************//
//**********PACKAGES******************//
//************************************//
//************************************//

//************************************//
//**********CARDS ON DOM**************//
//************************************//

const packagesDynamicContainer = document.querySelector(
  "#packages-dynamic-container"
);

//use for loop to get the objects from our packages object array as cards and into our html
//projectsCardsOnDom function.
const packagesCardsOnDom = (array) => {
  let domString = "";
  for (const pack of array) {
    domString += `<div class="card" id="dynamic-cards">
  <div class="card-body">
    <h5 class="card-title">${pack.name}</h5>
    <p class="card-text">${pack.description}</p>
    <a href="#" class="card-link">${pack.publicOrPrivate}</a>
  </div>
</div>`;
  }
  if (document.URL.includes("packages.html")) {
    packagesDynamicContainer.innerHTML = domString;
  }
};

// call the function with the packages array to paint the DOM
if (document.URL.includes("packages.html")) {
  packagesCardsOnDom(packages);
}

//************************************//
//**********FORM *********************//
//************************************//
//set location
const packagesDynamicForm = document.querySelector("#packages-dynamicForm");
if (document.URL.includes("packages.html")) {
  packagesDynamicForm.innerHTML += `<form id="form">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Create New Package</label>
            <input type="projectName" class="form-control" id="inputName" placeholder="Package Example Name" style="background-color: #010409; border-color: #3d444d;" required>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Description (optional)</label>
            <textarea class="form-control" id="inputDescription" rows="3" style="background-color: #010409; border-color: #3d444d;"></textarea>
          </div>
          <button type="submit" class="btn btn-primary" id="submitButton">Submit</button>
        </form>`;
}

// ************************************
// ********** CREATE*******************
// ************************************

const packageForm = document.querySelector("#form");
const packageInputName = document.querySelector("#inputName");
const packageInputDescription = document.querySelector("#inputDescription");

//event listener for submit button click on the form
if (document.URL.includes("packages.html")) {
  packageForm.addEventListener("submit", (e) => {
    //prevent default prevents reloading the page when the form is submitted
    e.preventDefault();
    const newPackage = {
      //this key value works bc above we used query selector to assign specific ids of form to variables (e.g. inputName variable)
      name: packageInputName.value,
      description: packageInputDescription.value,
      id: packages.length + 1,
      publicOrPrivate:
        randomData[0].publicOrPrivate[Math.floor(Math.random() * 2)], // assigns public or private randomly
    };
    //add new project to the projects array
    packages.push(newPackage);
    //re-render  the cards on the DOM with the updated array
    packagesCardsOnDom(packages);
    //clear the form after submit
    packageForm.reset();
  });
}

//this logs the entire HTML after all dynamic rendering is complete. useful for debugging or seeing what our resulting html is. can delete later.
// console.log(document.documentElement.outerHTML);
