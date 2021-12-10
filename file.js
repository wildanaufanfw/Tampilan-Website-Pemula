document.getElementsByTagName("h1")[0].style.fontSize = "4vw";
document.getElementsByTagName("h2")[0].style.fontSize = "2vw"
document.getElementsByTagName("p")[0].style.fontSize = "2vw"
document.getElementsByTagName("h2")[1].style.fontSize = "4vw"
document.getElementsByTagName("p")[1].style.color = "black"
document.getElementsByTagName("p")[2].style.color = "black"
document.getElementsByTagName("p")[3].style.color = "black"
document.getElementsByTagName("p")[4].style.color = "black"
document.getElementsByTagName("p")[5].style.color = "black"
document.getElementsByTagName("p")[6].style.color = "black"
document.getElementsByTagName("p")[7].style.color = "black"
document.getElementsByTagName("p")[8].style.color = "black"

const text = document.querySelector(".container h1");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null
}

