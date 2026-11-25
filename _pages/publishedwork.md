---
title: "Published Work"
permalink: /publishedwork/
author_profile: true
redirect_from:
  - /publications
---

<link rel="stylesheet" href="{{ '/assets/css/publications.css' | relative_url }}?v={{ site.time | date: '%s' }}">

{% assign publications = site.data.publications %}
{% assign published = publications | where: 'status', 'published' %}
{% assign preprints = publications | where: 'status', 'preprint' %}
{% assign in_press = publications | where: 'status', 'in-press' %}
{% assign abstracts = publications | where: 'status', 'abstract' %}
{% assign contributions = publications | where: 'status', 'contribution' %}

<div class="publications-page">
<p class="publications-intro">Research in statistical genetics, causal inference, and interpretable machine learning.</p>
<nav class="publication-nav" aria-label="Publication sections">
  <a href="#library">Library</a>
  <a href="#preprints">Preprints</a>
  <a href="#in-press">In press</a>
  <a href="#published-papers">Published papers</a>
  <a href="#conference-abstracts">Conference abstracts</a>
  <a href="#contributions">Other contributions</a>
</nav>

<section id="library" class="publication-library" aria-labelledby="library-title">
  <h2 id="library-title">Library</h2>
  <p class="publication-section-note">Select a work to view its citation and links.</p>
  <h3>Published papers</h3>
  {% include publication-covers.html publications=published %}
  <h3>Preprints</h3>
  {% include publication-items.html publications=preprints %}
  <h3>In press</h3>
  {% include publication-items.html publications=in_press %}
  <h3>Conference abstracts</h3>
  {% include publication-covers.html publications=abstracts %}
  <h3>Other contributions</h3>
  {% include publication-items.html publications=contributions %}
</section>

<section id="preprints" class="publication-section" aria-labelledby="preprints-title">
  <h2 id="preprints-title">Preprints</h2>
  <p class="publication-section-note">Manuscripts shared before journal peer review.</p>
  {% include publication-years.html publications=preprints %}
</section>

<section id="in-press" class="publication-section" aria-labelledby="in-press-title">
  <h2 id="in-press-title">In press</h2>
  {% include publication-years.html publications=in_press %}
</section>

<section id="published-papers" class="publication-section" aria-labelledby="published-papers-title">
  <h2 id="published-papers-title">Published papers</h2>
  {% include publication-years.html publications=published %}
</section>

<section id="conference-abstracts" class="publication-section" aria-labelledby="conference-abstracts-title">
  <h2 id="conference-abstracts-title">Conference abstracts</h2>
  {% include publication-years.html publications=abstracts %}
</section>
<section id="contributions" class="publication-section" aria-labelledby="contributions-title">
  <h2 id="contributions-title">Other contributions</h2>
  <p class="publication-section-note">Research datasets and dissertations.</p>
  {% include publication-years.html publications=contributions %}
</section>
<p class="publication-footer">For citation metrics, visit <a href="{{ site.author.googlescholar }}">Google Scholar</a>.</p>
</div>
