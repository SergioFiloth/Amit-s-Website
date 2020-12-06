/* let ubicacionPrincipal  = window.pageYOffset;
window.onscroll = () => {
    let Desplazamiento_Actual = window.pageYOffset,
        navbar = document.getElementById("nav")
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        navbar.style.top = '0';
    }
    else{
        navbar.style.top = '-100px';
    }
    ubicacionPrincipal = Desplazamiento_Actual;
} */

// let menuT = document.getElementById("menuT")

let faqsT = () => {
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
}
faqsT();