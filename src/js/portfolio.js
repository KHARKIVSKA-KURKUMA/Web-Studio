const posters = document.querySelectorAll('.posters__item');
const container = document.querySelector('.content__menu');
let selectedTag = '';

container.addEventListener('click', onChooseBtn);

function onChooseBtn(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const currentActiveBtn = document.querySelector('.menu__active--btn');
  currentActiveBtn?.classList.remove('menu__active--btn');
  //   currentActiveBtn.classList.remove('menu__active--btn');
  const nextActiveBtn = e.target;
  nextActiveBtn.classList.add('menu__active--btn');
  selectedTag = nextActiveBtn.value;

  posters.forEach(poster => {
    const posterTxt = poster.querySelector('.posters__subtitle').textContent;
    if (posterTxt !== selectedTag && selectedTag !== 'Усі') {
      poster.style.display = 'none';
    } else {
      poster.style.display = 'block';
    }
  });
}
