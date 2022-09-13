const toggleEl = document.getElementById('toggle');
const openEl = document.getElementById('open');
const closeEl = document.getElementById('close');
const modalEl = document.getElementById('modal');

//toggle nav bar
toggleEl.addEventListener('click', () => document.body.classList.toggle('show-nav'));

//show modal
openEl.addEventListener('click', () => modalEl.classList.add('show-modal'));

//close modal
closeEl.addEventListener('click', () => modalEl.classList.remove('show-modal'));

//hide modal on clicking outside the modal
window.addEventListener('click', e => e.target == modalEl ? modalEl.classList.remove('show-modal') : false);