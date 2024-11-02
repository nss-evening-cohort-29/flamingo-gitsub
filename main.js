// importing from the data module
import { repos, projects, packages } from "./data.js";

//************************************//
//**********CARDS ON DOM**************//
//************************************//

//set location
const dynamicContainer = document.querySelector("#dynamic-container");
dynamicContainer.innerHTML = "";

//cardsOnDom function. Eventually, this function will be executed when event listeners for pages buttons in the header are clicked
const cardsOnDom = (array) => {
  let domString = "";
  for (const repo of array) {
    domString +=
      //"pin-button--" the -- is to add pinning functionality later, in a similar fashion to delete
      `<div class="card" id="dynamic-cards">
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

//will delete this later and instead call it when repos button is pushed, but for now to see it on the DOM
cardsOnDom(repos);
//use for loop to get the objects from our object arrays (repos, projects, packages) as cards and into our html

//call cardsOnDom function with pinnedRepos obj array to be the default page (displays on loading website)
