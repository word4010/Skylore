/* HERO SLIDER */
const slides = document.querySelectorAll('.slide');
let current = 0;

setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}, 4000);

/* MODAL */
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const form = document.getElementById("joinForm");
const statusText = document.getElementById("status");

/* 🔥 ВСТАВ СВІЙ WEBHOOK */
const webhookURL = "1415315857365663744";

openBtn.onclick = () => modal.style.display = "flex";
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
        content: `📥 Нова заявка в Skylore UA

👤 Нік: ${nickname.value}
🎮 Рівень: ${level.value}
📜 Інфо: ${about.value}`
    };

    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(() => {
            statusText.innerText = "✅ Заявку відправлено!";
            form.reset();
        })
        .catch(() => {
            statusText.innerText = "❌ Помилка відправки.";
        });
});