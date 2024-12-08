const localJsonFile = "final.json";
//get the current page
currentPage = window.location.pathname;
console.log(currentPage);
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
          if (currentPage === "/noPov.html") {
            a.classList.add("final-nav-buttonNp");
          } else if (currentPage === "/zH.html") {
            a.classList.add("final-nav-buttonzH");
          } else if (currentPage === "/goodhealth.html") {
            a.classList.add("final-nav-buttongH");
          } else {
            a.classList.add("final-nav-buttonHome");
          }
        }
        li.appendChild(a);
        navLinks.appendChild(li);
      });


      // sign up page fetch
      if ((currentPage = "/newsletter.html")) {
        const data = responseData.newsletter;
        console.log(data);
        header = document.getElementById("newsletter-header").children;
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
      }
      // index page fetch
      if ((currentPage === "/index.html")) {
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

      // Loop through each footer section
      footerSections.forEach((section, index) => {
        // Add appropriate content based on section index
        if (index === 0) {
          // Contact section
          section.querySelector("h4").textContent =
            responseData.common.footer.contact.title;
          const paragraphs = section.querySelectorAll("p");
          paragraphs[0].textContent = responseData.common.footer.contact.email;
          paragraphs[1].textContent = responseData.common.footer.contact.phone;
        } else if (index === 1) {
          // Quick Links section
          section.querySelector("h4").textContent =
            responseData.common.footer.quickLinks.title;
          const ul = section.querySelector("ul");
          responseData.common.footer.quickLinks.links.forEach((link) => {
            const li = section.querySelector(`li a[href="${link.url}"]`);
            if (li) li.textContent = link.text;
          });
        } else if (index === 2) {
          // Social Links section
          section.querySelector("h4").textContent =
            responseData.common.footer.social.title;
          const socialLinks = section.querySelectorAll(".social-link");
          responseData.common.footer.social.links.forEach((link, i) => {
            if (socialLinks[i]) socialLinks[i].textContent = link.platform;
          });
        }
        /*bottom of footer*/
        document.querySelector(".footer-bottom").textContent =
          responseData.common.footer.copyright;
      });
    });
});
