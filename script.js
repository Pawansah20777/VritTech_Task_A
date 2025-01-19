let currentIndex = 0;

document.querySelector('.container').addEventListener('click', () => {
    const cards = document.getElementById('cards');
    const cardHeight = cards.firstElementChild.offsetHeight + 20; 
    const totalCards = cards.children.length;

    currentIndex = (currentIndex + 1) % totalCards;

    cards.style.transform = `translateY(-${currentIndex * cardHeight}px)`;
});
