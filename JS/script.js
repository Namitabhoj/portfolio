const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");


const WebCifarIcon = document.querySelector("#webCifar-icon");
const WebCifarEl = document.querySelector("#webCifar");
const close = WebCifarEl.querySelector(".close");
const youtubeLink = document.querySelector(".youtubeLink");

hamburger.addEventListener('click', ()=>{
   //Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Animation
    hamburger.classList.toggle("toggle");
}

);

WebCifarIcon.addEventListener("click", () => {
  WebCifarEl.classList.add("active");
});
close.addEventListener("click", () => {
  WebCifarEl.classList.remove("active");
});

youtubeLink.setAttribute("href", "https://youtu.be/_HTL0XSMcRQ");

