const localJsonFile = "final.json";
//get the current page
currentPage = window.location.pathname;
console.log(currentPage);
document.addEventListener("DOMContentLoaded", () => {
  fetch(localJsonFile)
    .then((response) => response.json())
    .then((resopnseData) => {
      // sign up page fetch
      if ((currentPage = "/newsletter.html")) {
        const data = resopnseData.newsletter;
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
          }
          formElement[i].textContent = data.inputs[i].label;
          formElement[i].appendChild(inputElement);
        }
        formElement[3].classList.add("comment");
        formElement[4].classList.add("check-box");
      }
      // index page fetch
      if ((currentPage = "/index.html")) {
      }
      // noPov page fetch
      if ((currentPage = "/noPov.html")) {
        localJsonFile = "final.json";
        document.addEventListener("DOMContentLoaded", () => {
          fetch(localJsonFile)
            .then((response) => response.json())
            .then((data) => {
              /*nav*/
              const navLinks = document.querySelector(".final-nav-links");
              data.noPov.navigation.links.forEach((link) => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.href = link.url;
                a.textContent = link.text;
                if (link.active) a.classList.add("final-active");
                if (link.isButton) a.classList.add("final-nav-button");
                li.appendChild(a);
                navLinks.appendChild(li);
              });

              /*banner*/
              document.querySelector(".main-banner h1").textContent =
                data.noPov.mainbanner.title;
              document.querySelector(".main-banner p").textContent =
                data.noPov.mainbanner.subtitle;

              /*stats*/
              document.querySelector(".content-section h2").textContent =
                data.noPov.targets.title;
              const statBoxes = document.querySelectorAll(".info-box");
              data.noPov.statistics.stats.forEach((stat, index) => {
                statBoxes[index].querySelector("h3").textContent = stat.value;
                statBoxes[index].querySelector("p").textContent =
                  stat.description;
              });

              /*goals*/
              document.querySelector(".#goals-section").textContent =
                data.noPov.targets.title;
              const goalBoxes = document.querySelectorAll(".goal-box");
              data.noPov.targets.items.forEach((box, index) => {
                goalBoxes[index].querySelector("h3").textContent = box.title;
                goalBoxes[index].querySelector("p").textContent =
                  box.description;
              });

              /*signup*/
              document.querySelector(".signup-section h2").textContent =
                data.noPov.signup.title;
              document.querySelector(".signup-section p").textContent =
                data.noPov.signup.description;
              document.querySelector(".signup-button").textContent =
                data.noPov.signup.buttonText;
              document.querySelector(".signup-button").href =
                data.noPov.signup.buttonUrl;

              /*footer*/
              const footerSections =
                document.querySelectorAll(".footer-section");

              // Loop through each footer section
              footerSections.forEach((section, index) => {
                // Add appropriate content based on section index
                if (index === 0) {
                  // Contact section
                  section.querySelector("h4").textContent =
                    data.common.footer.contact.title;
                  const paragraphs = section.querySelectorAll("p");
                  paragraphs[0].textContent = data.common.footer.contact.email;
                  paragraphs[1].textContent = data.common.footer.contact.phone;
                } else if (index === 1) {
                  // Quick Links section
                  section.querySelector("h4").textContent =
                    data.common.footer.quickLinks.title;
                  const ul = section.querySelector("ul");
                  data.common.footer.quickLinks.links.forEach((link) => {
                    const li = section.querySelector(
                      `li a[href="${link.url}"]`
                    );
                    if (li) li.textContent = link.text;
                  });
                } else if (index === 2) {
                  // Social Links section
                  section.querySelector("h4").textContent =
                    data.common.footer.social.title;
                  const socialLinks = section.querySelectorAll(".social-link");
                  data.common.footer.social.links.forEach((link, i) => {
                    if (socialLinks[i])
                      socialLinks[i].textContent = link.platform;
                  });
                }
                /*bottom of footer*/
                document.querySelector(".footer-bottom").textContent =
                  data.common.footer.copyright;
              });
            });
        });
      }
      // good health page fetch
      if ((currentPage = "/goodhealth.html")) {
      }
      // zero hunger page fetch
      if ((currentPage = "/zH.html")) {
      }
    });
});
