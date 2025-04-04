const birthdayName = "Kynes Joy Vasquez";

function createDecorations() {
    const body = document.querySelector('body');

    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';

        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.top = `${Math.random() * 50}%`;
        balloon.style.animationDelay = `${Math.random() * 5}s`;

        const colors = ['#ff4d94', '#9c27b0', '#ff80ab', '#f8bbd0', '#e91e63'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.backgroundColor = randomColor;

        body.appendChild(balloon);
    }

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.top = `-10px`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;

        const colors = ['#ff4d94', '#9c27b0', '#ff80ab', '#f8bbd0', '#e91e63', '#ffd54f', '#81c784'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.backgroundColor = randomColor;

        const shapes = ['circle', 'square', 'triangle'];
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];

        if (randomShape === 'circle') {
            confetti.style.borderRadius = '50%';
        } else if (randomShape === 'triangle') {
            confetti.style.width = '0';
            confetti.style.height = '0';
            confetti.style.backgroundColor = 'transparent';
            confetti.style.borderLeft = '5px solid transparent';
            confetti.style.borderRight = '5px solid transparent';
            confetti.style.borderBottom = `10px solid ${randomColor}`;
        }

        body.appendChild(confetti);
    }
}

function updateCountdown() {
    const birthdayDate = new Date('April 14, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').innerHTML = "🎉 It's Your Birthday! 🎉";
    }
}

document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', function () {
        const modal = new bootstrap.Modal(document.getElementById('birthdayModal'));
        document.querySelector('.confetti-container img').src = this.src;
        modal.show();
    });
});

document.getElementById('playMusic').addEventListener('click', function () {
    const song = document.getElementById('birthdaySong');
    if (song.paused) {
        song.play();
        this.innerHTML = '<i class="fas fa-pause"></i> Pause Music';
    } else {
        song.pause();
        this.innerHTML = '<i class="fas fa-music"></i> Play Birthday Song';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    createDecorations();
    updateCountdown();

    window.countdownTimer = setInterval(updateCountdown, 1000);

    var carousel = new bootstrap.Carousel(document.getElementById('birthdayCarousel'), {
        interval: 3000
    });

    document.title = `Happy 19th Birthday ${birthdayName}!`;
});