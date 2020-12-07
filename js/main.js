// Hide Navbar

let principalUbication = window.pageYOffset,
    navbar = document.getElementById("nav"),
    hNavbar = navbar.offsetHeight,
    fean = document.getElementById("fean")
window.onscroll = () => {
    let actualMove = window.pageYOffset
    if(principalUbication >= actualMove){
        navbar.style.top = '0';
    } else{
        navbar.style.top = '-100px';
    }
    principalUbication = actualMove;
}

console.log(hNavbar)

fean.style.marginTop = `calc(${hNavbar}px + .6rem)`

// FAQs Card

let btnItems = document.querySelectorAll(".btnItem")
if (btnItems) {
    for (let i = 0; i < btnItems.length; i++){
        btnItems[i].addEventListener("click", e => {
            let et = e.target
            if (et.className == "btnItem active") {
                removeClass();
            } else {
                removeClass();
                btnItems[i].classList.add("active")
            }
        })
    }
    let removeClass = () => {
        for (let i = 0; i < btnItems.length; i++){
            btnItems[i].classList.remove("active")
        }
    }
}

// Procces

let linkM = document.getElementById("linkM")
let link = linkM.dataset.link

linkM.addEventListener("click", () => {
    console.log("Here you go to marketplace")
})