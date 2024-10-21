// tab menu
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        tabContents.forEach(content => content.style.display = 'none');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).style.display = 'block';
    });
});
 // Product Details
document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const largePhoto = document.getElementById('main-photo');
        largePhoto.src = this.src;
    });
});


let counterValue = 1;
const counterDisplay = document.getElementById('counter-value');
const increaseButton = document.getElementById('increase-btn');
const decreaseButton = document.getElementById('decrease-btn');

increaseButton.addEventListener('click', function() {
    counterValue++;
    counterDisplay.textContent = counterValue;
});

decreaseButton.addEventListener('click', function() {
    if (counterValue > 1) {
        counterValue--;
        counterDisplay.textContent = counterValue;
    }
});
