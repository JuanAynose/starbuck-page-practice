const modal__more__info = document.getElementById("modal__more__info");
const content__rate = document.getElementById("content__rate");
const mobileNav = document.getElementById("mobile__nav");
const mobileButtonNav = document.getElementById("mobile__button__nav");
const modalBttnBenefits = document.querySelectorAll(".container__benefits");
const carrouselContainer = document.querySelectorAll(".modal__benefits_content");
const cookieModal = document.getElementById("cookie");
const form = document.getElementById("form");

let count,count2=0;
let coorX =0;

let allCarrouselArr=[...carrouselContainer];
allCarrouselArr.forEach(modal__beneftist_content =>{
    modal__beneftist_content.addEventListener("click", (e)=>{
        let totalChild;
        let containerBox;
        let flagMark;
        if(e.target.classList[0]=="close__modal") e.target.parentElement.parentElement.classList.add("hidden")

        if(e.target.classList[0]=="arrow_control"){
            containerBox=e.target.parentElement.parentElement.previousElementSibling;
            totalChild=e.target.parentElement.parentElement.previousElementSibling.children.length;
            coorActual=containerBox;
            for(let i=0; i<e.target.parentElement.parentElement.children[1].children.length; i++){
                if(e.target.parentElement.parentElement.children[1].children[i].classList[1]=="active") count=i;
            }

            if(e.target.classList[1]=="right"){
                let arrowRight = e.target.parentElement.parentElement.children[2];
                if(count==1) arrowRight.classList.add("hidden")
                else arrowRight.classList.remove("hidden")
                if(e.target.parentElement.previousElementSibling.children.length==2){
                    if(count==0) arrowRight.classList.add("hidden")
                    else arrowRight.classList.remove("hidden")
                }
                e.target.parentElement.parentElement.children[0].classList.remove("hidden")
                e.target.parentElement.parentElement.children[1].children[count].classList.remove("active")
                e.target.parentElement.parentElement.children[1].children[count+1].classList.add("active")
                modal__beneftist_content.children[1].style.transform = `translateX(${coorX-=(Math.round(100/totalChild))}%)`;
            }else if(e.target.classList[1]=="left"){
                let arrowLeft = e.target.parentElement.parentElement.children[0];
                if(count==1) arrowLeft.classList.add("hidden")
                else arrowLeft.classList.remove("hidden")
                e.target.parentElement.parentElement.children[2].classList.remove("hidden")
                e.target.parentElement.parentElement.children[1].children[count].classList.remove("active")
                e.target.parentElement.parentElement.children[1].children[count-1].classList.add("active")
                modal__beneftist_content.children[1].style.transform = `translateX(${coorX+=(Math.round(100/totalChild))}%)`;            
            }
        }
    })
})

form.addEventListener("submit", (e)=>{
    e.preventDefault();
});

modal__more__info.addEventListener("click", (e)=>{
    if(e.target.classList[0]=="enable__modal"){
        e.target.nextElementSibling.classList.toggle("active")
        e.target.children[1].classList.toggle("active")
    }else if(e.target.tagName=="svg"){ 
        e.target.parentElement.parentElement.nextElementSibling.classList.toggle("active")
        e.target.parentElement.children[1].classList.toggle("active")
    }else if(e.target.tagName=="H3"){
         e.target.parentElement.nextElementSibling.classList.toggle("active")
        e.target.parentElement.children[1].classList.toggle("active")     
    }
})

content__rate.addEventListener("click", (e)=>{
    let pointTargetData = e.target.value;
        if(e.target.classList.length==1){
            for(const data of content__rate.children){
                if(data.classList[1]=="active"){
                    data.classList.remove("active");
                }
            }
            for(const dataAux of content__rate.nextElementSibling.children){
                if(dataAux.classList[1]=="active"){
                    dataAux.classList.replace("active", "inactive");
                }
            }
            content__rate.nextElementSibling.children[pointTargetData].classList.replace("inactive", "active");
            content__rate.children[pointTargetData].classList.add("active");
        }

})


let modalBenefistArr = [...modalBttnBenefits];
modalBenefistArr.forEach(container__benefits =>{
    container__benefits.addEventListener("click", (e)=>{
        if(e.target.classList[0]=="modal__info"){
            e.target.parentElement.nextElementSibling.classList.remove("hidden")
        }
        if(e.target.classList[0]=="close__modal"){
            e.target.parentElement.children[1].style.transform = `translateX(0%)`; 
            coorX=0;
        }
    })
})

cookieModal.addEventListener("click",()=>{
    cookieModal.nextElementSibling.classList.remove("hidden")
    const modalCookieControl = document.getElementById("container__cookie")
    modalCookieControl.addEventListener("click",(e)=>{
        if(e.target.classList[0]=="close__modal") cookieModal.nextElementSibling.classList.add("hidden")
        else if(e.target.classList[0]=="save__config") cookieModal.nextElementSibling.classList.add("hidden")
        else if(e.target.classList[1]=="close__modal") cookieModal.nextElementSibling.classList.add("hidden")


        if(e.target.classList[0]=="point") e.target.classList.toggle("active")
        else if( e.target.classList[0]=="circle") e.target.children[0].classList.toggle("active")
    })
})

mobileButtonNav.addEventListener("click", ()=>{
    mobileButtonNav.classList.toggle("active")
    mobileNav.classList.toggle("active");
    mobileNav.children[0].classList.toggle("active")
})