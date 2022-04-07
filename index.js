const r = Math.floor(Math.random() * 257)
const g = Math.floor(Math.random() * 257)
const b = Math.floor(Math.random() * 257)
const a = Math.random();

const rc = Math.floor(Math.random() * 55)
const gc = Math.floor(Math.random() * 55)
const bc = Math.floor(Math.random() * 55)
const ac = 1

const re = 200 + Math.floor(Math.random() * 55)
const ge = 200 + Math.floor(Math.random() * 55)
const be = 200 + Math.floor(Math.random() * 55)
const ae = 0.3

const body = document.querySelector("body");
const back = document.querySelector("#top");
const title = document.querySelectorAll("#top h1");
const paragraph = document.querySelector("#top p");

body.addEventListener("click", changeColor());

let clara = Math.floor(Math.random() * 178)

function changeColor(){
    back.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    if(r + g + b < 500){
            title[0].style.color = `rgb(${rc}, ${g}, ${be})`;
            paragraph.style.color = "white";
    } else if (r + g + b > 400) {
            title[0].style.color = `rgb(${re}, ${gc}, ${be})`;
            paragraph.style.color = "black";
    }
    if(r + g + b < 500){
        title[1].style.color = `rgb(${re}, ${gc}, ${bc})`;
        paragraph.style.color = "white";
    } else if (r + g + b > 400) {
        title[1].style.color = `rgb(${re}, ${ge}, ${be})`;
        paragraph.style.color = "black";
   }
   if(r + g + b < 500){
    title[2].style.color = `rgb(${re}, ${ge}, ${bc})`;
    paragraph.style.color = "white";
}  else if (r + g + b > 400) {
    title[2].style.color = `rgb(${re}, ${ge}, ${c})`;
    paragraph.style.color = "black";
}
    
}