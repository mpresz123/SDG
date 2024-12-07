const localJsonFile = "final.json";
var localJSONFile = "final.json";

const currentPage = window.location.pathname.split("/").pop();

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
          if (currentPage === "noPov.html") {
            a.classList.add("final-nav-buttonNp");
          } else if (currentPage === "zH.html") {
            a.classList.add("final-nav-buttonzH");
          } else if (currentPage === "goodhealth.html") {
            a.classList.add("final-nav-buttongH");
          } else {
            a.classList.add("final-nav-buttonHome");
          }
        }

        li.appendChild(a);
        navLinks.appendChild(li);
      });

      // home page fetch
      if(currentPage === "index.html"){

        // Get references to existing DOM elements
        const featuredgoals = document.querySelector("#home-featured-goals");
        const overlayclass = document.querySelector(".overlay");
        
        // Create article elements
        const article1 = document.createElement("article");
        article1.id = "home-article-1";
        
        const article2 = document.createElement("article");
        article2.id = "home-article-2";
        
        const article3 = document.createElement("article");
        article3.id = "home-article-3";
        
        const article6 = document.createElement("article");
        article6.id = "team";

        // Access the 'home' object directly
        const homeData = responseData.home;
        const lineBreak = document.createElement("br");
        const lineBreak2 = document.createElement("br");
        const lineBreak3 = document.createElement("br");
        const lineBreak4 = document.createElement("br");
        const lineBreak5 = document.createElement("br");
        const lineBreak6 = document.createElement("br");
        const lineBreak7 = document.createElement("br");

        const schedules_section = document.createElement("section");
        schedules_section.setAttribute("id", "home-featured-goals");

        // Create the heading for the main title
        const heading1 = document.createElement("h1");
        heading1.setAttribute("id", "home-main-title");
        heading1.textContent = homeData.main_title;

        const mainheading1 = document.createElement("h1");
        mainheading1.textContent = homeData.mainheading1;
        mainheading1.setAttribute("id", "home-h1");

        const mainheading2 = document.createElement("h1");
        mainheading2.textContent = homeData.mainheading2;
        mainheading2.setAttribute("id", "home-h2");

        const check_team = document.createElement("h4");
        check_team.textContent = homeData.team_heading;
        check_team.setAttribute("id", "check-out-team-heading");

        

        // Create the image element
        const imageElement = document.createElement("img");
        imageElement.src = homeData.imageURL;
        imageElement.alt = homeData.alt;
        imageElement.setAttribute("id", "home-info-pic");

        const heading4 = document.createElement("h4");
        heading4.textContent = homeData.title;

        const text1 = document.createElement("p");
        text1.textContent = homeData.text1;

        const button = document.createElement("button");
        button.setAttribute("id", "home-info-button");
        button.textContent = homeData.button;
        button.onclick = () => {
          window.location.href = "/noPov.html";
        };


        const button2 = document.createElement("button");
        button2.setAttribute("id", "home-info-button");
        button2.textContent = homeData.button;
        button2.onclick = () => {
          window.location.href = "/zH.html";
        };

       const team_button = document.createElement("button");
       team_button.setAttribute("id", "home-info-button");
       team_button.textContent = homeData.button3;
       team_button.onclick = () => {
          window.location.href = "/ourteam.html";
        };
      

        const heading4a = document.createElement("h4");
        heading4a.textContent = homeData.title2;

        const imageElementa = document.createElement("img");
        imageElementa.src = homeData.imageURL2;
        imageElementa.alt = homeData.alt;
        imageElementa.setAttribute("id", "home-info-pic")

        const text2 = document.createElement("p");
        text2.textContent = homeData.text2;

        const imageElementb = document.createElement("img");
        imageElementb.src = homeData.imageURL3;
        imageElementb.alt = homeData.alt;
        imageElementb.setAttribute("id", "home-info-pic")

        const button3 = document.createElement("button");
        button3.setAttribute("id", "home-info-button");
        button3.textContent = homeData.button;
        button3.onclick = () => {
          window.location.href = "/goodhealth.html";
        };

        const text3 = document.createElement("p");
        text3.textContent = homeData.text3;

        const heading4b = document.createElement("h4")
        heading4b.textContent = homeData.title3;


        schedules_section.appendChild(heading1);
        
        if (overlayclass) {
          overlayclass.appendChild(mainheading1);
          overlayclass.appendChild(mainheading2);
        }

        schedules_section.appendChild(article1);
        schedules_section.appendChild(article2);
        schedules_section.appendChild(article3);


        article1.appendChild(imageElement);
        article1.appendChild(heading4);
        article1.appendChild(lineBreak);
        article1.appendChild(text1);
        article1.appendChild(lineBreak2);
        article1.appendChild(button);

        article2.appendChild(imageElementa);
        article2.appendChild(heading4a);
        article2.appendChild(lineBreak3);
        article2.appendChild(text2);
        article2.appendChild(lineBreak4);
        article2.appendChild(button2);

        article3.appendChild(imageElementb);
        article3.appendChild(heading4b);
        article3.appendChild(lineBreak5);
        article3.appendChild(text3);
        article3.appendChild(lineBreak6);
        article3.appendChild(button3);

        article6.appendChild(check_team);
        article6.appendChild(lineBreak7);
        article6.appendChild(team_button);

        if (featuredgoals) {
          featuredgoals.appendChild(schedules_section);
          featuredgoals.appendChild(article6);
        }
      }
      // signup page fetch
      if (currentPage === "newsletter.html") {
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
      if (currentPage === "noPov.html") {
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
      // ourteam page fetch
      if ((currentPage === "/ourteam.html")) {
        var featuredgoals = document.querySelector("#home-featured-goals");
        var overlayclass = document.querySelector(".overlay");
        var article1 = document.querySelector("#home-article-1");
        var article2 = document.querySelector("#home-article-2");
        var article3 = document.querySelector("#home-article-3");
        var article6 = document.querySelector("#team");
        var ourteam = document.querySelector("#team-section");
        var article4 = document.querySelector("#team-contributions-article");
        var article5 = document.querySelector("#team-article");
      
        const teamData = responseData.ourteam;

      

        const heading1 = document.createElement("h1");
        heading1.textContent = teamData.main_heading;
        heading1.setAttribute("id", "home-main-title");

        const heading2 = document.createElement("h1");
        heading2.setAttribute("id", "team-heading");
        heading2.textContent = teamData.team_heading;

        const heading3 = document.createElement("h1");
        heading3.setAttribute("id", "contributions-heading");
        heading3.textContent = teamData.contributions;

        const button1 = document.createElement("button");
        button1.setAttribute("class", "trello-button");
        button1.textContent = teamData.button1;
        button1.onclick = () => {
            window.location.href = "https://trello.com/b/ceSVFrIr/web-based-project";
        };

        const text1 = document.createElement("p")
        text1.textContent = teamData.bio1;
        const text2 = document.createElement("p")
        text2.textContent = teamData.bio2;
        const text3 = document.createElement("p")
        text3.textContent = teamData.bio3;
        const text4 = document.createElement("p")
        text4.textContent = teamData.bio4;

        


        ourteam.appendChild(article4);
        article4.appendChild(heading3);
        article4.appendChild(button1);
        ourteam.appendChild(article5);
        article4.appendChild(heading1);
        ourteam.appendChild(heading1);

        article5.appendChild(heading2);
        article5.appendChild(text1);
        article5.appendChild(text2);
        article5.appendChild(text3);
        article5.appendChild(text4);
      }
      // good health page fetch
      if ((currentPage === "goodhealth.html")) {
      }
      // zero hunger page fetch
      if ((currentPage === "zH.html")) {
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

      //  adding the target element
        targetTitle = document.getElementById("targetTitle");
        targetTitle.textContent = data.targets.title;
        //get each target box
        tList = document.querySelectorAll(".target");
        // loop through each box and load contents
        for (i = 0; i < tList.length; i++){
          // create a list of the content elements of the box
          targetElement = tList[i].children;
          // h3
          targetElement[0].textContent = data.targets.items[i].Title;
          // p
          targetElement[1].textContent = data.targets.items[i].Target;
          //img create
          image = document.createElement("img");
          image.src = data.targets.items[i].imgurl;
          image.alt = data.targets.items[i].source;
          //append img into figure
          targetElement[2].appendChild(image);
        }
        // plans
        document.getElementById("plan").children[0].textContent = data.plans.title;
        planList = document.getElementsByClassName("planListBox");
        for (i = 0; i < planList.length; i++){
          boxContent = planList[i].children;
          boxContent[0].textContent = i+1;
          boxContent[1].textContent = data.plans.items[i].Title;
          boxContent[2].textContent = data.plans.items[i].Plan;
        }
        // plans
        document.getElementById("policy").children[0].textContent = data.policy.title;
        policyList = document.getElementsByClassName("policyListBox");
        for (i = 0; i < policyList.length; i++){
          boxContent = policyList[i].children;
          boxContent[0].textContent = i+1;
          boxContent[1].textContent = data.policy.items[i].Title;
          boxContent[2].textContent = data.policy.items[i].Plan;
        }
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
