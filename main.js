// importing from the data module
import { repos, projects, packages, pinnedRepos } from "./data.js";

//************************************//
//************************************//
//**********OVERVIEW******************//
//************************************//
//************************************//

//************************************//
//************************************//
//**********REPOS*********************//
//************************************//
//************************************//

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
  <p><a class="link-offset-2 link-underline link-underline-opacity-0" href="#" id="pin--">⭐Pin (adding functionality later)</a></p>
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
const submitButton = document.querySelector("#submitButton");

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
const projectSubmitButton = document.querySelector("#submitButton");

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
    };
    //add new project to the projects array
    projects.push(newProject);
    //re-render  the cards on the DOM with the updated array
    projectsCardsOnDom(projects);
    //clear the form after submit
    projectForm.reset();
  });
}

//this logs the entire HTML after all dynamic rendering is complete. useful for debugging or seeing what our resulting html is. can delete later.
console.log(document.documentElement.outerHTML);
