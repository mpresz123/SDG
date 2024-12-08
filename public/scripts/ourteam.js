/*var localJSONFile = "final.json";
var ourteam = document.querySelector("#team-section");
var article1 = document.querySelector("#team-contributions-article");
var article2 = document.querySelector("#team-article");


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