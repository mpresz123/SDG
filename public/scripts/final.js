const localJsonFile = "final.json";
// get the id of the body element to get the current page
currentPage = document.getElementsByTagName("body").id;
console.log(currentPage);
document.addEventListener("DOMContentLoaded", ()=>{
    fetch(localJsonFile)
    .then(response => response.json())
    .then(resopnseData =>{
        // sign up page fetch
        if (currentPage = "signUp"){
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
        if (currentPage = "homepage"){

        }
        // noPov page fetch
        if (currentPage = "nopov-body"){

        }
        // good health page fetch
        if (currentPage = "gH-body"){

        }
        // zero hunger page fetch
        if (currentPage = "zerohunger"){

        }
    })
})