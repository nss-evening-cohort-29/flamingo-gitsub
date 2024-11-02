// importing from the data module
import { repos, projects, packages, pinnedRepos } from "./data.js";

//************************************//
//**********CARDS ON DOM**************//
//************************************//

//set location
const reposDynamicContainer = document.querySelector("#repos-dynamicContainer");

//use for loop to get the objects from our object arrays (repos, projects, packages) as cards and into our html
//reposCardsOnDom function. Eventually, this function will be executed when event listeners for pages buttons in the header are clicked
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

//will delete this later (todolist) and instead call it when repos button is pushed, but for now to see it on the DOM
reposCardsOnDom(repos);

//call reposCardsOnDom function with pinnedRepos obj array to be the default page (displays on loading website) (todolist)

//************************************//
//**********FORM *********************//
//************************************//
//set location
const reposDynamicForm = document.querySelector("#repos-dynamicForm");

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

//************************************//
//********** CREATE*******************//
//************************************//

//assign ids from the form to variables
const form = document.querySelector("#form");
const inputName = document.querySelector("#inputName");
const inputDescription = document.querySelector("#inputDescription");
const submitButton = document.querySelector("#submitButton");

//event listener for submit button click on the form
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

//this logs the entire HTML after all dynamic rendering is complete. useful for debugging or seeing what our resulting html is. can delete later.
console.log(document.documentElement.outerHTML);
