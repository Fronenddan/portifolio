

const r = Math.floor(Math.random() * 257)
const g = Math.floor(Math.random() * 257)
const b = Math.floor(Math.random() * 257)
const a = Math.random();

const rc = Math.floor(Math.random() * 95)
const gc = Math.floor(Math.random() * 95)
const bc = Math.floor(Math.random() * 95)
const ac = 1

const re = 160 + Math.floor(Math.random() * 95)
const ge = 160 + Math.floor(Math.random() * 95)
const be = 160 + Math.floor(Math.random() * 95)
const ae = 0.3

const body = document.querySelector("body");
const back = document.querySelector("#top");
const title = document.querySelectorAll("#top h1");
const paragraph = document.querySelector("#top p");
const ul = document.querySelectorAll("#nav li p")


body.addEventListener("click", changeColor());


// const tl = new TimelineMax();
// tl.fromTo(back,1, {heigth: "1"}, {heigth: "100vh"});



function changeColor(){
    back.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    if(r + g + b < 500){
            title[0].style.color = `rgb(${rc}, ${g}, ${be})`;
            paragraph.style.color = "white";
            ul[0].style.color = "white";
            ul[0].style.textDecoration = "underline";
            ul[1].style.color = "white";
            ul[1].style.textDecoration = "underline";
            ul[2].style.color = "white";
            ul[2].style.textDecoration = "underline";
            ul[3].style.color = "white";
            ul[3].style.textDecoration = "underline";
    } else if (r + g + b > 400) {
            title[0].style.color = `rgb(${re}, ${gc}, ${be})`;
            paragraph.style.color = "black";
            ul[0].style.color = "black";
            ul[0].style.textDecoration = "underline";
            ul[1].style.color = "black";
            ul[1].style.textDecoration = "underline";
            ul[2].style.color = "black";
            ul[2].style.textDecoration = "underline";
            ul[3].style.color = "black";
            ul[3].style.textDecoration = "underline";
    }
    if(r + g + b < 500){
        title[1].style.color = `rgb(${re}, ${gc}, ${bc})`;
        paragraph.style.color = "white";
        ul[0].style.color = "white";
        ul[0].style.textDecoration = "underline";
        ul[1].style.color = "white";
        ul[1].style.textDecoration = "underline";
        ul[2].style.color = "white";
        ul[2].style.textDecoration = "underline";
        ul[3].style.color = "white";
        ul[3].style.textDecoration = "underline";
    } else if (r + g + b > 400) {
        title[1].style.color = `rgb(${re}, ${ge}, ${be})`;
        paragraph.style.color = "black";
        ul[0].style.color = "black";
        ul[0].style.textDecoration = "underline";
        ul[1].style.color = "black";
        ul[1].style.textDecoration = "underline";
        ul[2].style.color = "black";
        ul[2].style.textDecoration = "underline";
        ul[3].style.color = "black";
        ul[3].style.textDecoration = "underline";
    }
   if(r + g + b < 500){
    title[2].style.color = `rgb(${re}, ${ge}, ${bc})`;
    paragraph.style.color = "white";
    ul[0].style.color = "white";
    ul[0].style.textDecoration = "underline";
    ul[1].style.color = "white";
    ul[1].style.textDecoration = "underline";
    ul[2].style.color = "white";
    ul[2].style.textDecoration = "underline";
    ul[3].style.color = "white";
    ul[3].style.textDecoration = "underline";
    }  else if (r + g + b > 400) {
    title[2].style.color = `rgb(${re}, ${ge}, ${c})`;
    paragraph.style.color = "black";
    ul[0].style.color = "black";
    ul[0].style.textDecoration = "underline";
    ul[1].style.color = "black";
    ul[1].style.textDecoration = "underline";
    ul[2].style.color = "black";
    ul[2].style.textDecoration = "underline";
    ul[3].style.color = "black";
    ul[3].style.textDecoration = "underline";
    }
    
}

