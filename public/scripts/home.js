var localJSONFile = "final.json";
var featuredgoals = document.querySelector("#home-featured-goals");
var article1 = document.querySelector("#home-article-1");

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

                schedules_section.appendChild(heading1);

                featuredgoals.appendChild(schedules_section);


                const schedules2 = document.createElement("article");
                schedules2.setAttribute("id", "home-article-1");

                const imageElement = document.createElement("img");
                imageElement.src = homeData.imageURL;
                imageElement.alt = homeData.alt;
                imageElement.setAttribute("id", "home-info-pic")

                schedules2.appendChild(imageElement);


                article1.appendChild(schedules2);

            })
    
    });
}

            


            for (const item of responseData) {
                

                

                const heading4 = document.createElement("h4");
                heading4.textContent = item.title;

                const text1 = document.createElement("p");
                text1.textContent = item.text1;

                const button = document.createElement("button");
                button.setAttribute("id", "home-info-button");
                button.textContent = item.button;

                

                
                
                schedules2.appendChild(heading4);
                schedules2.appendChild(text1);
                schedules2.appendChild(button);
            

            }
            for (const item of responseData) {
                const schedules = document.createElement("article");
                schedules.setAttribute("id", "article");
                const heading4 = document.createElement("h4");

                const imageElement = document.createElement("img");
                imageElement.src = item.imageURL2;
                imageElement.alt = item.alt;
                imageElement.setAttribute("id", "home-info-pic")

                const button = document.createElement("button");
                button.setAttribute("id", "home-info-button");
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
                imageElement.setAttribute("id", "home-info-pic")

                const button = document.createElement("button");
                button.setAttribute("id", "home-info-button");
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
        

