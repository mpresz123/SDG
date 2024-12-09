
//This is a implementation of my hamburger icon for my websiet in which allows users to click the icon and get the different options within the navbar.
const hamburger = document.querySelector('#hamburger-icon');
const navLinks = document.querySelector('.final-nav-links');
//'#hamburger-icon' selects the element with the matching id
// on the other hand 'nav-links' selects the elemnt with the matching class
function showNav() {
   navLinks.classList.toggle('shownav');
}
// This toggle shownav fucntion allows it to toggle the css class 'shownav'
hamburger.addEventListener('click', showNav);
// This straightforwardly adds a click event listener so that when the hamburger icon is clicked it outputs the shownav function



let localJsonFile = "final.json";

document.addEventListener('DOMContentLoaded', () => {
   fetch(localJsonFile)
       .then(response => response.json())
       .then((responseData) => { 
           console.log(responseData);
           data = responseData.goodHealth;

           for (const i in data.main) {
               const item = data.main[i]
               const element = document.querySelector(item.Element)
               const h = element.querySelector('h2')
               h.textContent = item.title
               
               if (i === 0) {
                   const initiative = item.initiative
                   const ul = element.querySelector('ul')
                   for (const i of initiative) {
                       const li = document.createElement('li')
                       li.textContent = i 
                       ul.appendChild(li)
                   
               } 

               }


               if(i === 2) {
                   const challenges = item.challenges
                   const ul = element.querySelector('ul')
                   for (const i of challenges) {
                       const li = document.createElement('li')
                       li.textContent = i 
                       ul.appendChild(li)
                //  For this certain code this performs through the data.main object where each bit involved contains information and content about each specfic element and data. For each item within the data.main section this selects a DOM element which links with the content as shown by using the Element variable and updates the text content with the h2 tag to match the title.
                // the first index handles the iniatives by creating a li elemnt for each iniative and appends them to a ul within the existing content. 
                // Also in the same way the next index processes the challenges list by appending the li to the ul.
                } 

                }
       }
            for (const item of data.main){ 
            const element = document.querySelector(data.element);

            if (element) {
              // Sets the title of the article as per the JSON
              const title = document.createElement('h1');
              title.textContent = data.title;
              element.appendChild(title);
            
              // Creates a list to implement the development steps
              const ul = document.createElement('ul');
              element.appendChild(ul);
            
              // Performs through the development steps and adds them to the list
              data.steps.forEach((step, i) => {
                const li = document.createElement('li');
                if (i === 0) {
                    const initiative = step.title + ": " + step.description;
                    li.textContent = initiative;
                } else if (i === 1) {
                    li.textContent = step.title + ": " + step.description;
                } else {
                    li.textContent = step.title + ": " + step.description;
                }

                ul.appendChild(li);
                // this is used to handle the development steps, this creates a ul where each step is a list (li)
                // it formats the text which is within the JSON by implementing both the title and description and appends each list item to their ul parenting item.
              });
            } else {
              console.error(`Element with selector "${data.Element}" not found.`);
            }
        }

            const element = document.querySelector(data.element);

            if (element) {
              // Sets the title of the article as shown in the JSON
              const title = document.createElement('h1');
              title.textContent = data.title;
              element.appendChild(title);
            
              // Creates a list to hold the current policy recommendations
              const ul = document.createElement('ul');
              element.appendChild(ul);
            
              // performs through the policy recommendations and adds them to the list
              data.recommendations.forEach((recommendation, i) => {
                const li = document.createElement('li');
                li.textContent = recommendation.title + ": " + recommendation.description;
                ul.appendChild(li);
              });
            } else {
              console.error(`Element with selector "${data.Element}" not found.`);
            }
})});
