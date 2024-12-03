var localJSONFile = "data.json";
var scheduley = document.querySelector("#featured_goals");
document.addEventListener('DOMContentLoaded', () => {
    fetch(localJSONFile)
        .then(response => response.json())
        .then(responseData => {

            
            for (const item of responseData) {
                const schedules = document.createElement("section");
                schedules.setAttribute("id", "featured_goals");
                const heading1 = document.createElement("h1");
                heading1.setAttribute("id", "SDG")
                heading1.textContent = item.main_title;
                
                schedules.appendChild(heading1);

                scheduley.appendChild(schedules);
            }

            


            for (const item of responseData) {
                const schedules = document.createElement("article");
                schedules.setAttribute("id", "article");

                const imageElement = document.createElement("img");
                imageElement.src = item.imageURL;
                imageElement.alt = item.alt;
                imageElement.setAttribute("id", "no_poverty_pic")

                const heading4 = document.createElement("h4");
                heading4.textContent = item.title;

                const text1 = document.createElement("p");
                text1.textContent = item.text1;

                const button = document.createElement("button");
                button.setAttribute("id", "no_poverty_button");
                button.textContent = item.button;

                

                
                
                schedules.appendChild(imageElement);
                schedules.appendChild(heading4);
                schedules.appendChild(text1);
                schedules.appendChild(button);
            

                scheduley.appendChild(schedules);
            }
            for (const item of responseData) {
                const schedules = document.createElement("article");
                schedules.setAttribute("id", "article");
                const heading4 = document.createElement("h4");

                const imageElement = document.createElement("img");
                imageElement.src = item.imageURL2;
                imageElement.alt = item.alt;
                imageElement.setAttribute("id", "zero_hunger_pic")

                const button = document.createElement("button");
                button.setAttribute("id", "no_poverty_button");
                button.textContent = item.button;

                const text2 = document.createElement("p");
                text2.textContent = item.text2;

                heading4.textContent = item.title2;
                
                schedules.appendChild(imageElement);
                schedules.appendChild(heading4);
                schedules.appendChild(text2);
                schedules.appendChild(button);

                scheduley.appendChild(schedules);
            }
            for (const item of responseData) {
                const schedules = document.createElement("article");
                schedules.setAttribute("id", "article");
                const heading4 = document.createElement("h4");

                const imageElement = document.createElement("img");
                imageElement.src = item.imageURL3;
                imageElement.alt = item.alt;
                imageElement.setAttribute("id", "good_health_pic")

                const button = document.createElement("button");
                button.setAttribute("id", "no_poverty_button");
                button.textContent = item.button;

                const text3 = document.createElement("p");
                text3.textContent = item.text3;

                heading4.textContent = item.title3;

                schedules.appendChild(imageElement);
                schedules.appendChild(heading4);
                schedules.appendChild(text3);
                schedules.appendChild(button);
            

                scheduley.appendChild(schedules);
            }
        });

});