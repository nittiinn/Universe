document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.querySelector('.stars');
    const numberOfStars = 400; 

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Randomize star size and position
        const size = Math.random() * 0.15 + 0.05 + 'em';
        const top = Math.random() * 100 + '%';
        const left = Math.random() * 100 + '%';

        star.style.width = size;
        star.style.height = size;
        star.style.top = top;
        star.style.left = left;

        starsContainer.appendChild(star);
    }
});
