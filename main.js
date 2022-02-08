document.addEventListener("click", function(event){
    if(!event.target.closest(".content_button")) return;



    if(event.target.closest(".infoOne") ){

        let fixed = document.querySelector(".one");
        fixed.style.visibility = "visible";

    } else if(event.target.closest(".infoTwo") ){

        let fixed = document.querySelector(".two");
        fixed.style.visibility = "visible";

    } else if(event.target.closest(".infoThree") ){

        let fixed = document.querySelector(".three");
        fixed.style.visibility = "visible";

    } else if(event.target.closest(".infoFour") ){

        let fixed = document.querySelector(".four");
        fixed.style.visibility = "visible";

    } else if(event.target.closest(".infoFive") ){

        let fixed = document.querySelector(".five");
        fixed.style.visibility = "visible";

    } else if(event.target.closest(".infoSix") ){

        let fixed = document.querySelector(".six");
        fixed.style.visibility = "visible";

    }
})

document.addEventListener("click", function(event){
    if(!event.target.closest(".cross")) return;

    let fixed = document.querySelectorAll(".fixedBoard");
    for(elem of fixed){
        elem.style.visibility = "hidden";
    }
})


let fixedMenu = document.querySelector(".fixedMenu");
fixedMenu.classList.add("classHidden");

document.addEventListener("click", function(event){
    if( !event.target.closest(".burger") ) return;
    fixedMenu.classList.toggle("classHidden")
})



let inputSearch = document.querySelector(".inputSearch");
inputSearch.classList.add("classHidden");


document.addEventListener("click", function(event){
    if( !event.target.closest(".search") ) return;

    document.querySelector(".navOne").classList.toggle("classHidden");
    document.querySelector(".navTwo").classList.toggle("classHidden");
    document.querySelector(".navThree").classList.toggle("classHidden");
    document.querySelector(".navFour").classList.toggle("classHidden");
    document.querySelector(".navFive").classList.toggle("classHidden");
    document.querySelector(".navSix").classList.toggle("classHidden");


    inputSearch.classList.toggle("classHidden");
})