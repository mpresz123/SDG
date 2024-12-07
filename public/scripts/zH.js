console.log("page running");
// fetch content of the website
const targets = document.getElementsByClassName("keyTargets");
const localJsonFile = "final.json";
console.log(localJsonFile);
document.addEventListener("DOMContentLoaded", ()=>{
    fetch(localJsonFile)
    .then(response => response.json())
    .then(responseData => {
        const data = responseData.zeroHunger;
        // adding the heading element 
        headerFigure = document.getElementById("headerLeft");
        img = document.createElement("img");
        img.src = data.header.imgURL;
        headerFigure.appendChild(img);
        headerContent = document.getElementById("headerRight").children;
        for (i = 0; i < 3; i++){
          headerContent[i].textContent = data.header.rightContent[i];
        }

      //   adding the target element
           
      //   for (item of responseData.targets){
      //       targetArticle = document.createElement("article");
      //       targetArticle.classList.add("target");
      //       targetElement = document.createElement("h3");
      //       targetElement.textContent = item.Title;
      //       targetArticle.appendChild(targetElement);
      //       targetElement = document.createElement("p");
      //       targetElement.textContent = item.Target;
      //       targetArticle.appendChild(targetElement);
      //       targetElement = document.createElement("img");
      //       targetElement.src = item.imgurl;
      //       targetElement.alt =item.source;
      //       targetFigure = document.createElement("figure");
      //       targetFigure.appendChild(targetElement);
      //       targetArticle.appendChild(targetFigure);
      //       document.getElementById("targets").appendChild(targetArticle);
      //   }
      //   /*footer*/
      // const footerSections = document.querySelectorAll(".footer-section");

      // // Loop through each footer section
      // footerSections.forEach((section, index) => {
      //   // Add appropriate content based on section index
      //   if (index === 0) {
      //     // Contact section
      //     section.querySelector("h4").textContent = data.footer.contact.title;
      //     const paragraphs = section.querySelectorAll("p");
      //     paragraphs[0].textContent = `Email: ${data.footer.contact.email}`;
      //     paragraphs[1].textContent = `Phone: ${data.footer.contact.phone}`;
      //   } else if (index === 1) {
      //     // Quick Links section
      //     section.querySelector("h4").textContent =
      //       data.footer.quickLinks.title;
      //     const ul = section.querySelector("ul");
      //     data.footer.quickLinks.links.forEach((link) => {
      //       const li = section.querySelector(`li a[href="${link.url}"]`);
      //       if (li) li.textContent = link.text;
      //     });
      //   } else if (index === 2) {
      //     // Social Links section
      //     section.querySelector("h4").textContent = data.footer.social.title;
      //     const socialLinks = section.querySelectorAll(".social-link");
      //     data.footer.social.links.forEach((link, i) => {
      //       if (socialLinks[i]) socialLinks[i].textContent = link.platform;
      //     });
      //   }
      //   /*bottom of footer*/
      //   document.querySelector(".footer-bottom").textContent =
      //     data.footer.copyright;
      // });
    })
    .catch(error => console.error("Error fetching JSON data:", error))
})

// test test