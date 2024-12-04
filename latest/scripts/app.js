if()
localJsonFile = "data.json";
document.addEventListener("DOMContentLoaded", () => {
  fetch(localJsonFile)
    .then((response) => response.json())
    .then((data) => {
      /*nav*/
      document.querySelector(".nav-logo a").textContent = data.navigation.brand;
      const navLinks = document.querySelector(".nav-links");
      data.navigation.links.forEach((link) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.text;
        if (link.active) a.classList.add("active");
        if (link.isButton) a.classList.add("nav-button");
        li.appendChild(a);
        navLinks.appendChild(li);
      });
      /*banner*/
      document.querySelector(".main-banner h1").textContent = data.main-banner.title;
      document.querySelector(".main-banner p").textContent = data.main-banner.subtitle;
      /*stats*/
      document.querySelector(".content-section h2").textContent =
        data.statistics.title;
      const statBoxes = document.querySelectorAll(".info-box");
      data.statistics.stats.forEach((stat, index) => {
        statBoxes[index].querySelector("h3").textContent = stat.value;
        statBoxes[index].querySelector("p").textContent = stat.description;
      });
      /*goals*/
      const goalBoxes = document.querySelectorAll(".goal-box");
      data.targets.items.forEach((target, index) => {
        goalBoxes[index].querySelector("h3").textContent = target.title;
        goalBoxes[index].querySelector("p").textContent = target.description;
      });
      /*signup*/
      document.querySelector(".signup-section h2").textContent =
        data.signup.title;
      document.querySelector(".signup-section p").textContent =
        data.signup.description;
      document.querySelector(".signup-button").textContent =
        data.signup.buttonText;
      document.querySelector(".signup-button").href = data.signup.buttonUrl;
      /*footer*/
      const footerSections = document.querySelectorAll(".footer-section");

      // Loop through each footer section
      footerSections.forEach((section, index) => {
        // Add appropriate content based on section index
        if (index === 0) {
          // Contact section
          section.querySelector("h4").textContent = data.footer.contact.title;
          const paragraphs = section.querySelectorAll("p");
          paragraphs[0].textContent = `Email: ${data.footer.contact.email}`;
          paragraphs[1].textContent = `Phone: ${data.footer.contact.phone}`;
        } else if (index === 1) {
          // Quick Links section
          section.querySelector("h4").textContent =
            data.footer.quickLinks.title;
          const ul = section.querySelector("ul");
          data.footer.quickLinks.links.forEach((link) => {
            const li = section.querySelector(`li a[href="${link.url}"]`);
            if (li) li.textContent = link.text;
          });
        } else if (index === 2) {
          // Social Links section
          section.querySelector("h4").textContent = data.footer.social.title;
          const socialLinks = section.querySelectorAll(".social-link");
          data.footer.social.links.forEach((link, i) => {
            if (socialLinks[i]) socialLinks[i].textContent = link.platform;
          });
        }
        /*bottom of footer*/
        document.querySelector(".footer-bottom").textContent =
          data.footer.copyright;
      });
    });
});
