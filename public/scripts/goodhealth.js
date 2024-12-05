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
// This straightforwardly adds a clicl event listener so that when the hamburger icon is clicked it outputs the shownav function



let localJsonFile = "final.json";

document.addEventListener('DOMContentLoaded', () => {
    fetch(localJsonFile)
        .then(response => response.json())
        .then((data) => { 
            console.log(data);


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
                } else if (i === 1) {

                }


                if(i === 2) {
                    const challenges = item.challenges
                    const ul = element.querySelector('ul')
                    for (const i of challenges) {
                        const li = document.createElement('li')
                        li.textContent = i 
                        ul.appendChild(li)
                    }
                 } else if (i === 3) {

                 }



            }


            
            // const mainInitiatives = document.querySelector('article');

            // const initiativesList = mainInitiatives.querySelectorAll('li');
            // const localChallenges = document.querySelector('article.gH-overview-card');
            // const challengesList = localChallenges.querySelectorAll('li');
            // const developmentplan = document.querySelector('article.Development-plan');
            // const developmentsteps = developmentplan.querySelectorAll('li');
            // const policyrecommendations = document.querySelector('article.policy-recommendations');
            // const recommendations = policyrecommendations.querySelectorAll('li');
            
        //     const footer = document.getElementById('footer');
        //     (footer.querySelector('h2')).textContent = data.footer.title
        //      const footerDescription = footer.querySelector('p');
        //      footerDescription.textContent = data.footer.description
        //      const footerContact = footer.querySelector('.contact');
        //      footerContact.textContent = data.footer.contact
        //      const footerPhone = footerContact.querySelector('.phone');
        //      footerPhone.textContent = data.footer.contact.phone
        //      const footerEmail = footerContact.querySelector('.email');
        //      footerEmail.textContent = data.footer.contact.email
        // })
        //.catch(error => console.error("Error fetching JSON data:", error));

})})
