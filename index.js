const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.nav-dot');
let currentIndex = 0;

// Переключение к предыдущему слайду
prevBtn.addEventListener('click', () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
  updateSlider();
});

// Переключение к следующему слайду
nextBtn.addEventListener('click', () => {
  currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
  updateSlider();
});

// Переключение к слайду по клику на точку
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider();
  });
});

// Функция обновления слайдера
function updateSlider() {
  // Удаление класса active у всех точек навигации
  dots.forEach(dot => dot.classList.remove('active'));
  // Добавление класса active текущей точке навигации
  dots[currentIndex].classList.add('active');
  // Перемещение слайдов в соответствии с текущим индексом
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
