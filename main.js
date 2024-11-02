// importing from the data module
import { repos, projects, packages } from "./data.js";

//************************************//
//**********CARDS ON DOM**************//
//************************************//

//set location
const dynamicContainer = document.querySelector("#dynamic-container");

//cardsOnDom function. Eventually, this function will be executed when event listeners for pages buttons in the header are clicked
const cardsOnDom = (array) => {
  let domString = "";
  for (const repo of array) {
    domString +=
      //"pin-button--" the -- is to add pinning funcntionality later, in a similar fashion to delete
      `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <button class="btn btn-primary" id="pin-button--">Pin (adding functionality later)</button>
    <h5 class="card-title">${repo.name}</h5>
    <p class="card-text">${repo.description}</p>
    <a href="#" class="card-link">${repo.primaryLanguage}</a>
    <a href="#" class="card-link">${repo.publicOrPrivate}</a>
  </div>
</div>`;
  }
  dynamicContainer.innerHTML = domString;
};

//will delete this later (todolist) and instead call it when repos button is pushed, but for now to see it on the DOM
cardsOnDom(repos);

//call cardsOnDom function with pinnedRepos obj array to be the default page (displays on loading website) (todolist)

//************************************//
//**********FORM *********************//
//************************************//
//set location
const dynamicForm = document.querySelector("#dynamicForm");

dynamicForm.innerHTML += `<form id="form">
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
  cardsOnDom(repos);
  //clear the form after submit
  form.reset();
});

//this logs the entire HTML after all dynamic rendering is complete. useful for debugging or seeing what our resulting html is. can delete later.
console.log(document.documentElement.outerHTML);
