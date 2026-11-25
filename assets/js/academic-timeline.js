/* Enhance the server-rendered track with a current UCSF date and work details. */
(function () {
  'use strict';
  var assemblyDate = document.getElementById('journey-assembly-date');
  if (assemblyDate) {
    var dateFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Los_Angeles',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });

    function updateAssemblyDate() {
      var dateParts = {};
      dateFormatter.formatToParts(new Date()).forEach(function (part) {
        dateParts[part.type] = part.value;
      });
      assemblyDate.textContent = dateParts.month + '-' + dateParts.day + '-' + dateParts.year;
      assemblyDate.setAttribute('datetime', dateParts.year + '-' + dateParts.month + '-' + dateParts.day);
    }

    updateAssemblyDate();
    window.setInterval(updateAssemblyDate, 60000);
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) updateAssemblyDate();
    });
  }

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
