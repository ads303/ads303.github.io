/* The chart and publication list are rendered by Jekyll; this only opens details. */
(function () {
  'use strict';
  var details = document.getElementById('journey-publication-details');
  if (!details) return;

  function revealMonth(id, moveFocus) {
    if (id.indexOf('journey-month-') !== 0) return;
    var month = document.getElementById(id);
    if (!month || !details.contains(month)) return;
    details.open = true;
    if (moveFocus) month.focus();
  }

  document.querySelectorAll('[data-journey-month]').forEach(function (link) {
    link.addEventListener('click', function () {
      revealMonth(link.getAttribute('data-journey-month'), true);
    });
  });
  window.addEventListener('hashchange', function () {
    revealMonth(window.location.hash.slice(1), false);
  });
  revealMonth(window.location.hash.slice(1), false);
}());
