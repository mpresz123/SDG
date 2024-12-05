const localJsonFile = "final.json";
const currentPage = document.querySelector("body").id;
document.addEventListener("DOMContentLoaded", ()=>{
    fetch(localJsonFile)
    .then(resopnse => response.json())
    .then(resopnseData =>{
        // sign up page fetch
        if (currentPage = "signUp"){

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