const reviewCards = document.querySelectorAll('.review-card');

        function showCards() {
            reviewCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('show');
                }, 200 * index); 
            });
        }

        window.addEventListener('load', showCards);