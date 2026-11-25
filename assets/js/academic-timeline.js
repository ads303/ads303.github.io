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

  var mentorCaption = document.getElementById('journey-mentor-caption');
  if (mentorCaption) {
    var mentorPortraits = document.querySelectorAll('[data-journey-mentor]');
    function showMentor(portrait) {
      mentorCaption.textContent = portrait.getAttribute('data-journey-mentor') + ' · ' + portrait.getAttribute('data-mentor-institution');
    }
    function clearMentor() {
      mentorCaption.textContent = '';
    }
    mentorPortraits.forEach(function (portrait) {
      portrait.addEventListener('pointerenter', function () { showMentor(portrait); });
      portrait.addEventListener('pointerleave', clearMentor);
      portrait.addEventListener('focus', function () {
        if (portrait.matches(':hover, :focus-visible')) showMentor(portrait);
      });
      portrait.addEventListener('blur', clearMentor);
    });
  }

  var mentorLinks = document.querySelector('.journey-mentor-links');
  if (mentorLinks) {
    var plot = mentorLinks.parentElement;
    var linkPaths = mentorLinks.querySelectorAll('path');
    var drawFrame = null;

    function drawMentorLinks() {
      drawFrame = null;
      var plotBox = plot.getBoundingClientRect();
      if (!plotBox.width || !plotBox.height) return;
      mentorLinks.setAttribute('viewBox', '0 0 ' + plotBox.width + ' ' + plotBox.height);
      linkPaths.forEach(function (path) {
        var work = document.getElementById(path.getAttribute('data-work-target'));
        var mentor = document.getElementById(path.getAttribute('data-mentor-target'));
        if (!work || !mentor) {
          path.removeAttribute('d');
          return;
        }
        var workBox = work.getBoundingClientRect();
        var mentorBox = mentor.getBoundingClientRect();
        var x1 = workBox.left + workBox.width / 2 - plotBox.left;
        // The colored feature is inset 6px inside its keyboard/touch target.
        var y1 = workBox.bottom - 6 - plotBox.top;
        var x2 = mentorBox.left + mentorBox.width / 2 - plotBox.left;
        var y2 = mentorBox.top - plotBox.top;
        // A right-edge anchor keeps the straight internship link clear of Kerr's portrait.
        if (mentor.getAttribute('data-link-anchor') === 'right') {
          x2 = mentorBox.right - 6 - plotBox.left;
        }
        path.setAttribute('d', 'M ' + x1 + ' ' + y1 + ' L ' + x2 + ' ' + y2);
      });
    }

    function scheduleMentorLinks() {
      if (drawFrame === null) drawFrame = window.requestAnimationFrame(drawMentorLinks);
    }

    scheduleMentorLinks();
    if ('ResizeObserver' in window) new ResizeObserver(scheduleMentorLinks).observe(plot);
    window.addEventListener('resize', scheduleMentorLinks);
    window.addEventListener('beforeprint', drawMentorLinks);
    window.addEventListener('afterprint', scheduleMentorLinks);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(scheduleMentorLinks);
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
