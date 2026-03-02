document.addEventListener('DOMContentLoaded', function () {
  // update copyright year
  var y = new Date().getFullYear();
  var el = document.getElementById('year');
  if (el) el.textContent = y;

  // Accessibility / analytics hook (no external deps)
  document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      // placeholder: add analytics here if needed
      // console.log('Link clicked:', btn.href || btn.getAttribute('href'));
    });
  });
});
