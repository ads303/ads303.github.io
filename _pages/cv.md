---
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
excerpt: "Education, research appointments, honors, teaching, and service."
redirect_from:
  - /cvs
  - /cv
---

<link rel="stylesheet" href="{{ '/assets/css/cv.css' | relative_url }}">

<div class="cv-page">
  <div class="cv-intro">
    <p class="cv-name">Aditya D. Sriram</p>
    <p class="cv-position">Postdoctoral Fellow · Department of Neurology<br>University of California, San Francisco</p>
    <p>Causal inference, interpretable machine learning, and computational genomics for understanding complex disease.</p>
    <div class="cv-actions">
      <a class="cv-download" href="{{ '/assets/Aditya_Sriram_CV_updated10-01-2026.pdf' | relative_url }}" download>Download full CV <span>PDF</span></a>
      <a class="cv-open" href="{{ '/assets/Aditya_Sriram_CV_updated10-01-2026.pdf' | relative_url }}" target="_blank" rel="noopener">Open PDF in a new tab</a>
    </div>
  </div>

  <nav class="cv-navigation" aria-label="CV sections">
    <a href="#education">Education</a>
    <a href="#research">Research</a>
    <a href="#honors">Honors</a>
    <a href="#talks">Talks</a>
    <a href="#teaching">Teaching</a>
    <a href="#service">Service</a>
  </nav>

  <section class="cv-section" aria-labelledby="education">
    <h2 id="education">Education</h2>
    {% for item in site.data.cv.education %}
    <div class="cv-entry">
      <p class="cv-date">{{ item.dates }}</p>
      <div class="cv-detail">
        <h3>{{ item.degree }}</h3>
        <p class="cv-institution">{{ item.institution }}</p>
        {% if item.detail %}<p>{{ item.detail }}</p>{% endif %}
        {% if item.thesis %}<p class="cv-thesis"><span>Thesis</span> {{ item.thesis }}</p>{% endif %}
      </div>
    </div>
    {% endfor %}
  </section>

  <section class="cv-section" aria-labelledby="research">
    <h2 id="research">Research appointments</h2>
    {% for item in site.data.cv.research %}
    <div class="cv-entry">
      <p class="cv-date">{{ item.dates }}</p>
      <div class="cv-detail">
        <h3>{{ item.title }}</h3>
        <p class="cv-institution">{{ item.institution }}</p>
        <p>{{ item.description }}</p>
      </div>
    </div>
    {% endfor %}
    <p class="cv-publications-link">Research articles, preprints, and conference publications are collected in <a href="{{ '/publishedwork/' | relative_url }}">Published Work</a>.</p>
  </section>

  {% assign cv_sections = "honors,talks,teaching,service" | split: "," %}
  {% for section_id in cv_sections %}
  {% assign cv_section = site.data.cv[section_id] %}
  <section class="cv-section cv-section--compact" aria-labelledby="{{ section_id }}">
    <h2 id="{{ section_id }}">{{ cv_section.title }}</h2>
    {% for item in cv_section.entries %}
    <div class="cv-entry">
      <p class="cv-date">{{ item.dates }}</p>
      <div class="cv-detail">
        <h3>{{ item.title }}</h3>
        {% if item.detail %}<p>{{ item.detail }}</p>{% endif %}
      </div>
    </div>
    {% endfor %}
  </section>
  {% endfor %}
</div>
