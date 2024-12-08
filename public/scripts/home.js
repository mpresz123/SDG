/*var localJSONFile = "final.json";
var featuredgoals = document.querySelector("#home-featured-goals");
var article1 = document.querySelector("#home-article-1");
var article2 = document.querySelector("#home-article-2");
var article3 = document.querySelector("#home-article-3");
var ourteam = document.querySelector("#team-section");
var article1 = document.querySelector("#team-contributions-article");
var article2 = document.querySelector("#team-article");

if (document.getElementById("homepage")) {
    document.addEventListener('DOMContentLoaded', () => {
        fetch(localJSONFile)
            .then(response => response.json())
            .then(responseData => {
                // Access the 'home' object directly
                const homeData = responseData.home;

                const schedules_section = document.createElement("section");
                schedules_section.setAttribute("id", "home-featured-goals");

                // Create the heading for the main title
                const heading1 = document.createElement("h1");
                heading1.setAttribute("id", "home-main-title");
                heading1.textContent = homeData.main_title;

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


                const button2 = document.createElement("button");
                button2.setAttribute("id", "home-info-button");
                button2.textContent = homeData.button;

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

                const text3 = document.createElement("p");
                text3.textContent = homeData.text3;

                const heading4b = document.createElement("h4")
                heading4b.textContent = homeData.title3;


                schedules_section.appendChild(heading1);
                article1.appendChild(imageElement);
                article1.appendChild(heading4);
                article1.appendChild(text1);
                article1.appendChild(button);

                article2.appendChild(imageElementa);
                article2.appendChild(heading4a);
                article2.appendChild(text2);
                article2.appendChild(button2);

                article3.appendChild(imageElementb);
                article3.appendChild(heading4b);
                article3.appendChild(text3);
                article3.appendChild(button3);

                featuredgoals.appendChild(schedules_section);
            })
            .catch(error => console.error('Error loading JSON data:', error));
    });
}

if (document.getElementById("teampage")) {
    document.addEventListener('DOMContentLoaded', () => {
        fetch(localJSONFile)
            .then(response => response.json())
            .then(responseData => {
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


                ourteam.appendChild(article1);
                article1.appendChild(heading3);
                article1.appendChild(button1);
                ourteam.appendChild(article2);
                article1.appendChild(heading1);
                ourteam.appendChild(heading1);

                article2.appendChild(heading2);
                article2.appendChild(text1);
                article2.appendChild(text2);
                article2.appendChild(text3);
                article2.appendChild(text4);

            })
            .catch(error => console.error('Error loading JSON data:', error));
    });
}*/