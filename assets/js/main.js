// OPEN
document.getElementById("openBtn").onclick = () => {
  document.querySelector(".cover").style.display = "none";
  document.getElementById("content").style.display = "block";
  document.getElementById("bgm").play();
};

// FADE ON SCROLL
const fades = document.querySelectorAll(".fade");
window.addEventListener("scroll", () => {
  fades.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// COUNTDOWN
const target = new Date("2026-08-20").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;

  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor(diff / (1000*60*60) % 24);
  const m = Math.floor(diff / (1000*60) % 60);

  document.getElementById("timer").innerHTML =
    `${d} Hari ${h} Jam ${m} Menit`;
}, 1000);

function setTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

/* load theme */
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.setAttribute('data-theme', savedTheme);
}
