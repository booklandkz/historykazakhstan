function setLanguage(lang) {
    const kkText = document.getElementById("kk-text");
    const ruText = document.getElementById("ru-text");

    if (lang === "kk") {
        kkText.style.display = "block";
        ruText.style.display = "none";
    } else {
        kkText.style.display = "none";
        ruText.style.display = "block";
    }

    // Барлық тақырыптарды өзгерту
    document.querySelectorAll(".section-title").forEach(el => {
        el.innerText = el.dataset[lang];
    });
}
