const localJsonFile = "final.json";
const currentPage = window.location.pathname;

document.addEventListener("DOMContentLoaded", () => {
  fetch(localJsonFile)
    .then((response) => response.json())
    .then((responseData) => {
      /*global navbar*/
      const navLinks = document.querySelector(".final-nav-links");
      responseData.noPov.navigation.links.forEach((link) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        
        a.href = link.url;
        a.textContent = link.text;

        if (link.url === currentPage) {
          a.classList.add("final-active");
        } 
        
        if (link.isButton) {
          if (currentPage === "/public/noPov.html") {
            a.classList.add("final-nav-buttonNp");
          } else if (currentPage === "/public/zH.html") {
            a.classList.add("final-nav-buttonzH");
          } else if (currentPage === "/public/goodhealth.html") {
            a.classList.add("final-nav-buttongH");
          } else {
            a.classList.add("final-nav-buttonHome");
          }
        }

        li.appendChild(a);
        navLinks.appendChild(li);
      });

      // signup page fetch
      if (currentPage === "/public/newsletter.html") {
        const data = responseData.newsletter;
        console.log(data);
        const header = document.getElementById("newsletter-header").children;
        header[0].textContent = data.header.title;
        header[1].textContent = data.header.description;
        formElement = document.getElementById("signup-form").children;
        for (let i = 0; i < 5; i++) {
          if (i === 3) {
            inputElement = document.createElement("textarea");
            inputElement.name = data.inputs[i].name;
          } else {
            formElement[i].textContent = data.inputs[i].label;
            inputElement = document.createElement("input");
            inputElement.type = data.inputs[i].type;
            inputElement.name = data.inputs[i].name;
            inputElement.required = data.inputs[i].isRequired;
          }
          formElement[i].textContent = data.inputs[i].label;
          formElement[i].appendChild(inputElement);
        }

        formElement[3].classList.add("comment");
        formElement[4].classList.add("check-box");

        form.addEventListener("submit", (e) => {
          e.preventDefault();
          const formData = new FormData(form);
          const formBody = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            userEmail: formData.get("email"),
            userComments: formData.get("comments")
          };
          
          fetch('/signUp', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formBody)
          });
        });
      }

      /* unhardcoding each page*/
      if (currentPage === "/public/noPov.html") {
        const data = responseData;
        
        // Banner section
        const mainBanner = document.querySelector(".main-banner");
        mainBanner.querySelector("h1").textContent = data.noPov.mainbanner.title;
        mainBanner.querySelector("p").textContent = data.noPov.mainbanner.subtitle;

        /*stats*/
        const statsSection = document.querySelector(".content-section");
        statsSection.querySelector("h2").textContent = data.noPov.statistics.title;
        const statBoxes = statsSection.querySelectorAll(".info-box");
        data.noPov.statistics.stats.forEach((stat, index) => {
          statBoxes[index].querySelector("h3").textContent = stat.value;
          statBoxes[index].querySelector("p").textContent = stat.description;
        });

        /*goals*/
        const goalsSection = document.querySelector("#goals-section");
        goalsSection.querySelector("h2").textContent = data.noPov.targets.title;
        const goalBoxes = goalsSection.querySelectorAll(".goal-box");
        data.noPov.targets.items.forEach((box, index) => {
          goalBoxes[index].querySelector("h3").textContent = box.title;
          goalBoxes[index].querySelector("p").textContent = box.description;
        });

        /*signup*/
        const signupSection = document.querySelector(".signup-section");
        signupSection.querySelector("h2").textContent = data.noPov.signup.title;
        signupSection.querySelector("p").textContent = data.noPov.signup.description;
        const signupButton = signupSection.querySelector(".signup-button");
        signupButton.textContent = data.noPov.signup.buttonText;
        signupButton.href = data.noPov.signup.buttonUrl;
      }
      // noPov page fetch
      if ((currentPage === "/noPov.html")) {
      }
      // good health page fetch
      if ((currentPage === "/goodhealth.html")) {
      }
      // zero hunger page fetch
      if ((currentPage === "/zH.html")) {
      }

      /*global footer*/
      const footerSections = document.querySelectorAll(".footer-section");
      footerSections.forEach((section, index) => {
        const footerData = responseData.common.footer;
        
        if (index === 0) {
          section.querySelector("h4").textContent = footerData.contact.title;
          const paragraphs = section.querySelectorAll("p");
          paragraphs[0].textContent = footerData.contact.email;
          paragraphs[1].textContent = footerData.contact.phone;
        } 
        else if (index === 1) {
          section.querySelector("h4").textContent = footerData.quickLinks.title;
          const ul = section.querySelector("ul");
          footerData.quickLinks.links.forEach((link) => {
            const li = section.querySelector(`li a[href="${link.url}"]`);
            if (li) li.textContent = link.text;
          });
        } 
        else if (index === 2) {
          section.querySelector("h4").textContent = footerData.social.title;
          const socialLinks = section.querySelectorAll(".social-link");
          footerData.social.links.forEach((link, i) => {
            if (socialLinks[i]) socialLinks[i].textContent = link.platform;
          });
        }
      });
      

      document.querySelector(".footer-bottom").textContent = responseData.common.footer.copyright;
    })
    .catch(error => {
      console.error('Error loading data:', error);
    });
});