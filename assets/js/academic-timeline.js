/* The feature track and citations are server-rendered; JS only opens details. */
(function () {
  'use strict';
  var details = document.getElementById('journey-publication-details');
  if (!details) return;

  function revealWork(id, moveFocus) {
    if (id.indexOf('journey-work-') !== 0) return;
    var work = document.getElementById(id);
    if (!work || !details.contains(work)) return;
    details.open = true;
    if (moveFocus) work.focus();
  }

  document.querySelectorAll('[data-journey-work]').forEach(function (link) {
    link.addEventListener('click', function () {
      revealWork(link.getAttribute('data-journey-work'), true);
    });
  });
  window.addEventListener('hashchange', function () {
    revealWork(window.location.hash.slice(1), false);
  });
  revealWork(window.location.hash.slice(1), false);
}());
