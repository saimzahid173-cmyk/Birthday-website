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

Ap meri life ki sab sy beautiful nemat ho. ❤️ Ap k sath guzara hua har lamha mery liye ek anmol yaad hai, jisy main hamesha sambhal k rakhungi. Meri dua hai k ap hamesha khush rahen. Allah Tala apko apny hifz-o-aman mein rakhy. Allah Pak apko hidayat dy. Allah Tala apko har buri nazar aur har ghalat logo sy door rakhy. Apko sari larkiyan zehr lagen aur apko bas main hi achi lagun. ❤️ Allah Pak ap k sare dreams poore kare. Meri dua hai k ap jaldi sy apna goal achieve kar k wapis aa jao aur phir mujhy hamesha k liye apna bana lo. Allah Tala apko naik banaye. Ap mujhy hamesha khush rakho, mujh sy bohat zyada pyar karne ki tofeeq ata farmaye, aur Allah Pak apko mery nakhry uthane ki bhi tofeeq ata farmaye. 🤲❤️
Ameeeeeen Sum Ameeeeeen. ❤️
Once Again Happy Birthday Meri Jaaaan...!! 🎉💗

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
