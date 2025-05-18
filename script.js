const messages = [
    "Happy birthday Cute Girl Tasmia",
    "I have to say you something",
    "I Love You."
];

let currentPage = 0;
const animatedText = document.getElementById('animated-text');
const nextBtn = document.getElementById('next-btn');
const mainImg = document.getElementById('main-img');

function typeWriter(text, i, cb) {
    if (i < text.length) {
        animatedText.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
        setTimeout(() => typeWriter(text, i + 1, cb), 50);
    } else {
        animatedText.innerHTML = text;
        if (cb) cb();
    }
}

function showPage(page) {
    if (page === 0) {
        mainImg.style.display = 'block';
    } else {
        mainImg.style.display = 'none';
    }
    typeWriter(messages[page], 0);
    if (page === messages.length - 1) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'inline-block';
    }
}

nextBtn.addEventListener('click', () => {
    if (currentPage < messages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
});

// Initial load
showPage(currentPage); 