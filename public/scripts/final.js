const localJsonFile = "final.json";
//get the current page
currentPage = window.location.pathname;
console.log(currentPage);
document.addEventListener("DOMContentLoaded", ()=>{
    fetch(localJsonFile)
    .then(response => response.json())
    .then(resopnseData =>{
        // sign up page fetch
        if (currentPage = "/newsletter.html"){
            const data = resopnseData.newsletter;
            console.log(data);
            header = document.getElementById("newsletter-header").children;
            header[0].textContent = data.header.title;
            header[1].textContent = data.header.description;
            formElement = document.getElementById("signup-form").children;
            for(let i = 0; i < 4; i++){
                formElement[i].textContent = data.inputs[i].label;
                inputElement = document.createElement("input");
                inputElement.type = data.inputs[i].type;
                inputElement.name = data.inputs[i].name;
                formElement[i].textContent = data.inputs[i].label;
                formElement[i].appendChild(inputElement);
            }
        }
        // index page fetch
        if (currentPage = "/index.html"){

        }
        // noPov page fetch
        if (currentPage = "/noPov.html"){

        }
        // good health page fetch
        if (currentPage = "/goodhealth.html"){

        }
        // zero hunger page fetch
        if (currentPage = "/zH.html"){

        }
    })
})