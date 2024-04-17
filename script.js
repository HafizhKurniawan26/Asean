const toggle = document.getElementById('darkmode');
const body = document.body;

toggle.addEventListener('click', function() {
  body.classList.toggle('dark');
});