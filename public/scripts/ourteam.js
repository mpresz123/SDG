var localJSONFile = "final.json";
var ourteam = document.querySelector("#team-section");
console.log("hello");

if (document.getElementById("teampage")) {
    document.addEventListener('DOMContentLoaded', () => {
        fetch(localJSONFile)
            .then(response => response.json())
            .then(responseData => {
                const teamData = responseData.ourteam;

                const ourteam2 = document.createElement("section");
                ourteam2.setAttribute("id", "team-section");

                const heading1 = document.createElement("h1");
                heading1.textContent = teamData.main_heading;

                team_section.appendChild(heading1);
                ourteam.appendChild(ourteam2);  
            })
            .catch(error => console.error('Error loading JSON data:', error));
    });
}