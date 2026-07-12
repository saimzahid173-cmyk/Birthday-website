const hearts = document.querySelector(".hearts");

// Floating Hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (Math.random() * 20 + 15) + "px";

    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();
    }, 7000);

}

setInterval(createHeart,180);

// Open Memories Page
function nextPage() {

    window.location.href = "memories.html";

}
// Memories Animation

const images = document.querySelectorAll(".gallery img");

images.forEach((img,index)=>{

    img.style.opacity="0";

    setTimeout(()=>{

        img.style.transition="1s";
        img.style.opacity="1";

    },index*300);

});
const message = `

Happy Birthday, My Love ❤️

You are the best thing that has ever happened to me.

Every moment with you is a beautiful memory that I will always cherish.

Your smile brightens my darkest days, and your love makes my life complete.

I hope today brings you endless happiness, laughter, love, and every dream you've ever wished for.

Thank you for being such an amazing person.

I promise to always stand by your side, support you, and love you with all my heart.

Happy Birthday Once Again ❤️

`;

const typing = document.getElementById("typing");

if(typing){

let i = 0;

function type(){

if(i < message.length){

typing.innerHTML += message.charAt(i);

i++;

setTimeout(type,40);

}

}

type();

}
function showMessage(card){

const text = card.querySelector("p");

if(text.style.display=="block"){
    text.style.display="none";
}else{
    text.style.display="block";
}

}
function openGift(){

document.querySelector(".gift-box").style.display="none";

document.querySelector("h2").style.display="none";

document.getElementById("surprise").style.display="block";



}

function restartSite(){

window.location.href="index.html";

}




document.addEventListener("click", () => {
    const music = document.getElementById("bgMusic");

    if (music) {
        music.muted = false;
        music.play().catch(() => {});
    }
}, { once: true });

window.addEventListener("load", () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 1.2s";
        document.body.style.opacity = "1";
    }, 100);
});

// Background Music Continue
const bgMusic = document.getElementById("bgMusic");

if (bgMusic) {
    const savedTime = localStorage.getItem("musicTime");

    if (savedTime) {
        bgMusic.currentTime = parseFloat(savedTime);
    }

    bgMusic.play().catch(() => {});

    setInterval(() => {
        localStorage.setItem("musicTime", bgMusic.currentTime);
    }, 500);
}
