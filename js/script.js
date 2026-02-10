const params = new URLSearchParams(window.location.search);
const nama = params.get("to");

if (nama) {
  document.getElementById("namaTamu").innerText = nama;
}
const btnBuka = document.getElementById("btnBuka");
const cover = document.getElementById("cover");
const isi = document.getElementById("isi");

const musik = document.getElementById("musik");

btnBuka.addEventListener("click", function () {
  cover.style.display = "none";
  isi.classList.remove("hidden");
  musik.play();
});

const tanggalAcara = new Date("2026-07-20T10:00:00").getTime();

setInterval(function () {
  const sekarang = new Date().getTime();
  const selisih = tanggalAcara - sekarang;

  if (selisih <= 0) {
    document.getElementById("countdown").innerText =
      "Hari Bahagia Telah Tiba 🎉";
    return;
  }

  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih / (1000 * 60 * 60)) % 24);
  const menit = Math.floor((selisih / (1000 * 60)) % 60);
  const detik = Math.floor((selisih / 1000) % 60);

  document.getElementById("countdown").innerText =
    `${hari} Hari ${jam} Jam ${menit} Menit ${detik} Detik`;
}, 1000);

document.getElementById("rsvpForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("rsvpNama").value;
  const status = document.getElementById("rsvpStatus").value;
  const pesan = document.getElementById("rsvpPesan").value;

  const formURL =
    "https://forms.gle/Tyz36zER6Gq11TTy8" +
    `?entry.111111=${encodeURIComponent(nama)}` +
    `&entry.222222=${encodeURIComponent(status)}` +
    `&entry.333333=${encodeURIComponent(pesan)}`;

  window.open(formURL, "_blank");
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

document.getElementById("namaPengantin").innerText = CONFIG.namaPengantin;
document.getElementById("tanggalAcara").innerText =
  CONFIG.tanggal + " • " + CONFIG.waktu;

document.documentElement.style.setProperty(
  "--accent",
  CONFIG.warnaAksen
);

const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("active");
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

const storyItems = document.querySelectorAll(".story-item");

function revealStory() {
  const windowHeight = window.innerHeight;

  storyItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < windowHeight - 120) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealStory);
revealStory();
