(function () {
  var dialog = document.querySelector('.record-lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  var image = dialog.querySelector('img');
  var caption = dialog.querySelector('p');
  var trigger;

  document.querySelectorAll('.liquid-record [data-image]').forEach(function (button) {
    button.addEventListener('click', function () {
      trigger = button;
      image.src = button.getAttribute('data-image');
      image.alt = button.querySelector('img').alt;
      caption.textContent = image.alt;
      dialog.showModal();
    });
  });
  dialog.querySelector('button').addEventListener('click', function () { dialog.close(); });
  dialog.addEventListener('click', function (event) {
    if (event.target !== dialog) return;
    var bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', function () {
    image.removeAttribute('src');
    if (trigger) trigger.focus();
  });
})();
