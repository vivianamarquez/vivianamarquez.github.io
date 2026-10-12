(function () {
  document.querySelectorAll('.record-animation-toggle').forEach(function (animationToggle) {
    var animation = document.getElementById(animationToggle.getAttribute('aria-controls'));
    if (!animation) return;
    var poster = animation.getAttribute('data-poster') || animation.getAttribute('src');
    animationToggle.addEventListener('click', function () {
      var playing = animationToggle.getAttribute('aria-pressed') !== 'true';
      animation.src = playing ? animation.getAttribute('data-animation') : poster;
      animationToggle.setAttribute('aria-pressed', String(playing));
      animationToggle.textContent = playing ? 'Pause GIF' : 'Play GIF';
    });
  });

  var track = document.querySelector('.record-carousel-track');
  if (track) {
    var previous = document.querySelector('.record-carousel-prev');
    var next = document.querySelector('.record-carousel-next');
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function updateControls() {
      previous.disabled = track.scrollLeft <= 1;
      next.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 1;
    }
    function advance(direction) {
      var slides = track.querySelectorAll('.record-carousel-slide');
      var base = slides[0].offsetLeft;
      var current = 0;
      for (var i = 1; i < slides.length; i++) {
        if (Math.abs(slides[i].offsetLeft - base - track.scrollLeft) < Math.abs(slides[current].offsetLeft - base - track.scrollLeft)) current = i;
      }
      var target = Math.max(0, Math.min(slides.length - 1, current + direction));
      track.scrollTo({ left: slides[target].offsetLeft - base, behavior: reducedMotion ? 'auto' : 'smooth' });
    }
    previous.addEventListener('click', function () { advance(-1); });
    next.addEventListener('click', function () { advance(1); });
    track.addEventListener('scroll', updateControls, { passive: true });
    track.addEventListener('keydown', function (event) {
      if (event.target !== track || (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight')) return;
      event.preventDefault();
      advance(event.key === 'ArrowRight' ? 1 : -1);
    });
    window.addEventListener('resize', updateControls);
    updateControls();
  }

  var linkedInStage = document.querySelector('.record-carousel-linkedin');
  if (linkedInStage) {
    function fitLinkedIn() {
      linkedInStage.style.setProperty('--linkedin-scale', Math.min(linkedInStage.clientWidth / 504, linkedInStage.clientHeight / 399));
    }
    new ResizeObserver(fitLinkedIn).observe(linkedInStage);
    fitLinkedIn();
  }

  var postStage = document.querySelector('.record-carousel-social');
  var postContent = document.querySelector('.record-post-content');
  var postDialog = document.querySelector('.record-post-dialog');
  if (postStage && postContent && postDialog) {
    var postView = postDialog.querySelector('.record-post-view');
    var expandPost = postStage.querySelector('.record-post-expand');
    function fitPost() {
      var width = postContent.offsetWidth;
      var height = postContent.offsetHeight;
      if (!width || !height) return;
      var expanded = postDialog.open;
      var scale = expanded ? Math.min(1, postView.clientWidth / width) : Math.min(1, postStage.clientWidth / width, postStage.clientHeight / height);
      postContent.style.setProperty('--post-scale', scale);
      if (expanded) postView.style.height = (height * scale) + 'px';
    }
    var postObserver = new ResizeObserver(fitPost);
    postObserver.observe(postContent);
    postObserver.observe(postStage);
    postObserver.observe(postView);
    expandPost.addEventListener('click', function () {
      postView.appendChild(postContent);
      postDialog.showModal();
      fitPost();
    });
    postDialog.querySelector('.record-post-close').addEventListener('click', function () { postDialog.close(); });
    postDialog.addEventListener('close', function () {
      postStage.insertBefore(postContent, expandPost);
      fitPost();
      expandPost.focus();
    });
    fitPost();
  }

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
      caption.hidden = Boolean(button.closest('.record-carousel'));
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
