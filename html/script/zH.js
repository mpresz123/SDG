console.log("page running");
// show and hide the sign up form with button press.
const signUpButton = document.getElementById("sBtn");
const signUp = document.getElementById("signup");

signUpButton.addEventListener("click", (e)=>{
    console.log("button clicked");
    signUp.classList.toggle("hidden");
    console.log(signUp.classList);
});

// fetch content of the website
const targets = document.getElementsByClassName("keyTargets");
const localJsonFile = "zH.json";
console.log(localJsonFile);

document.addEventListener("DOMContentLoaded", ()=>{
    fetch(localJsonFile)
    .then(response => response.json())
    .then(responseData => {
        console.log(responseData);
        console.log(responseData.header);
        // adding the heading element 
        let headerElement = document.createElement("img");
        imgURL = responseData.header.imgURL;
        headerElement.src = imgURL;
        document.getElementById("headerLeft").appendChild(headerElement);
        headerElement = document.createElement("h3");
        headerElement.textContent = responseData.header.h3Content;
        document.getElementById("headerRight").appendChild(headerElement);
        headerElement = document.createElement("h1");
        headerElement.textContent = responseData.header.h1Content;
        document.getElementById("headerRight").appendChild(headerElement);
        headerElement = document.createElement("p");
        headerElement.textContent = responseData.header.pContent;
        document.getElementById("headerRight").appendChild(headerElement);
        //adding the target element
        for (item of responseData.targets){
            console.log(item);
            targetArticle = document.createElement("article");
            targetArticle.classList.add("target");
            targetElement = document.createElement("h3");
            targetElement.textContent = item.Title;
            targetArticle.appendChild(targetElement);
            targetElement = document.createElement("p");
            targetElement.textContent = item.Target;
            targetArticle.appendChild(targetElement);
            targetElement = document.createElement("img");
            targetElement.src = item.imgurl;
            targetElement.alt =item.source;
            targetFigure = document.createElement("figure");
            targetFigure.appendChild(targetElement);
            targetArticle.appendChild(targetFigure);
            document.getElementById("targets").appendChild(targetArticle);
        }
        //create plan element
        count = 1;
        for (item of responseData.plans){
            planBox = document.createElement("li");
            planBox.classList.add("planListBox");
            planElement = document.createElement("div");
            planElemnt.textContent = count;
            planBox.appendChild(planElement);
            count += 1;
            planElement = doucment.createElement("h3");
            planElement.textContent = item.Title;
            planBox.appendChild(planElement);
            planElment = document.createElement("p");
            planElment.textContent = item.Plan;
            planBox.appendChild(planElement);
        }




        
    })
    .catch(error => console.error("Error fetching JSON data:", error))
})