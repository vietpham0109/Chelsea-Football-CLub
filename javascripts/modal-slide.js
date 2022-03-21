const fullbioBtns = document.querySelectorAll('.js-modal-text');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');

function showfullbio() {
  modal.classList.add("open");
}

for (const fullbioBtn of fullbioBtns) {
  fullbioBtn.addEventListener("click", showfullbio);
}

function hidefullbio() {
  modal.classList.remove("open");
}

modal.addEventListener("click", hidefullbio);

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
