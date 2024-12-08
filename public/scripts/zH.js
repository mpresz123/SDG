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
    })
    .catch(error => console.error("Error fetching JSON data:", error))
})

// test test