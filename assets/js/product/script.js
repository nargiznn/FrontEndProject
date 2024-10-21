document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    const clickedElement = event.target;
    if (clickedElement.matches('.dropbtn')) {
        dropdowns.forEach(dropdown => {
        const dropdownContent = clickedElement.nextElementSibling;
        if (dropdownContent !== dropdown) {
          dropdown.parentElement.classList.remove('show'); 
        }
    });
        const currentDropdown = clickedElement.nextElementSibling;
        currentDropdown.parentElement.classList.toggle('show');
    } else {

        dropdowns.forEach(dropdown => dropdown.parentElement.classList.remove('show'));
    }
});
// range slider
const rangeMin = document.getElementById('range-min');
const rangeMax = document.getElementById('range-max');
const minValueDisplay = document.getElementById('min-value');
const maxValueDisplay = document.getElementById('max-value');
const priceRangeDisplay = document.getElementById('price-range'); // Yeni: h5 elementini seçtik

rangeMin.addEventListener('input', updateSliderValues);
rangeMax.addEventListener('input', updateSliderValues);

function updateSliderValues() {
    let minValue = parseInt(rangeMin.value);
    let maxValue = parseInt(rangeMax.value);

    if (minValue >= maxValue) {
        rangeMin.value = maxValue - 1;
        minValue = maxValue - 1;
    }

    if (maxValue <= minValue) {
        rangeMax.value = minValue + 1;
        maxValue = minValue + 1;
    }


    minValueDisplay.textContent = minValue;
    maxValueDisplay.textContent = maxValue;


    priceRangeDisplay.textContent = `Price: $${minValue} - $${maxValue}`;


    updateTrackStyle(minValue, maxValue);
}

function updateTrackStyle(minValue, maxValue) {
    const track = document.querySelector('.slider-track');
    const range = 480; 
    const minPercent = (minValue / range) * 100;
    const maxPercent = (maxValue / range) * 100;

    track.style.background = `linear-gradient(to right, #ddd ${minPercent}%, #bc8246 ${minPercent}%, #bc8246 ${maxPercent}%, #ddd ${maxPercent}%)`;
}


updateTrackStyle(rangeMin.value, rangeMax.value);

