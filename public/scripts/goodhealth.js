// Hamburger menu
const hamburger = document.querySelector('#hamburger-icon');
const navLinks = document.querySelector('.final-nav-links');

function showNav() {
    navLinks.classList.toggle('shownav');
}

hamburger.addEventListener('click', showNav);

// Load content from JSON
document.addEventListener('DOMContentLoaded', () => {
    fetch('final.json')
        .then(response => response.json())
        .then((responseData) => {
          const data = responseData.goodHealth;
          console.log(data);
  
          /* get main title and introduction*/
          const mainSection = document.querySelector('.gH-Introduction');
          const mainTitle = mainSection.querySelector('.gH-h2');
          const introParagraph = mainSection.querySelector('p');
          mainTitle.textContent = data.pageTitle;
          introParagraph.textContent = data.introduction;
  
          /* initiatives*/
          const initiativesArticle = document.querySelector('.article');
          const initiativesTitle = initiativesArticle.querySelector('.gH-h2');
          const initiativesList = initiativesArticle.querySelector('ul');
          
          initiativesTitle.textContent = data.main[0].title;
          initiativesList.innerHTML = '';
          for(let i = 0; i < data.main[0].initiatives.length; i++) {
              const li = document.createElement('li');
              li.textContent = data.main[0].initiatives[i];
              initiativesList.appendChild(li);
          }
  
          /*challenges*/
          const challengesArticle = document.querySelector('.gH-overview-card');
          const challengesTitle = challengesArticle.querySelector('.gH-h2');
          const challengesList = challengesArticle.querySelector('.challenge-list');
          
          challengesTitle.textContent = data.main[1].title;
          challengesList.innerHTML = '';
          for(let i = 0; i < data.main[1].challenges.length; i++) {
              const li = document.createElement('li');
              li.textContent = data.main[1].challenges[i];
              challengesList.appendChild(li);
          }
  
          /*development*/
          const developmentArticle = document.querySelector('.gH-Development-plan');
          const developmentTitle = developmentArticle.querySelector('.gH-h2');
          const stepCards = developmentArticle.querySelectorAll('.gH-step-card');
          
          developmentTitle.textContent = data.main[2].title;
          for(let i = 0; i < stepCards.length; i++) {
              const card = stepCards[i];
              const step = data.main[2].steps[i];
              
              const stepNumber = card.querySelector('.step-number');
              const stepTitle = card.querySelector('.gH-h3');
              const stepDescription = card.querySelector('p');
              
              stepNumber.textContent = step.number + '.';
              stepTitle.textContent = step.title;
              stepDescription.textContent = step.description;
          }
  
          /*policies*/
          const policyArticle = document.querySelector('.gH-policy-recommendations');
          const policyTitle = policyArticle.querySelector('.gH-h2');
          const recommendationCards = policyArticle.querySelectorAll('.recommendation-card');
          
          policyTitle.textContent = data.main[3].title;
          for(let i = 0; i < recommendationCards.length; i++) {
              const card = recommendationCards[i];
              const rec = data.main[3].recommendations[i];
              
              const title = card.querySelector('.gH-h3');
              const description = card.querySelector('p');
              
              title.textContent = rec.title;
              description.textContent = rec.description;
          }
        })
        .catch(error => {
            console.log('Error loading content:', error);
        });
});