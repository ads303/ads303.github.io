---
title: "Published Work"
permalink: /publishedwork/
author_profile: true
redirect_from:
  - /publications
---

{% include base_path %}

**Library**

<table>
  <tr>
    <td><a href="https://www.ahajournals.org/doi/10.1161/ATVBAHA.123.320367">![atvb](https://github.com/user-attachments/assets/0553dca0-e615-4854-b93a-fdb3659b0228)

    <td><a href="https://www.frontiersin.org/articles/10.3389/fped.2023.1035576/full"><img src="https://github.com/ads303/ads303.github.io/assets/108133717/978b1c1c-41b5-4c9a-ab84-223df51dd856" width="280" height="438"></a></td>
    <td><a href="https://academic.oup.com/gigascience/article/doi/10.1093/gigascience/giad044/7217083"><img src="https://github.com/ads303/ads303.github.io/assets/108133717/0d7d5f8c-774e-4ed9-83ba-3507b7218182" width="280" height="438"></a></td>
  </tr>
  <tr>
    <td><a href="https://www.iomcworld.org/articles/genetic-risk-factors-associated-with-sarscov2-susceptibility-in-multiethnic-populations-93385.html"><img src="https://github.com/ads303/ads303.github.io/assets/108133717/06935cf9-1af9-4339-af71-c64e6dfebc92" width="280" height="438"></a></td>
    <td><a href="https://www.frontiersin.org/articles/10.3389/fcell.2020.586296/full"><img src="https://github.com/ads303/ads303.github.io/assets/108133717/f7a99030-7a33-4777-84c2-4f47b308d7d4" width="280" height="438"></a></td>
    <td><a href="https://www.ahajournals.org/doi/10.1161/str.53.suppl_1.109"><img src="https://github.com/ads303/ads303.github.io/assets/108133717/1efc96f0-3ac3-49f5-b4c7-7a384c767857" width="280" height="438"></a></td>
  </tr>
</table>

## Publications

<style>
.pub-year{ margin-top: 26px; }
.pub-grid{ display:flex; flex-direction:column; gap:14px; margin-top:10px; }
.pub-card{
  border:1px solid rgba(0,0,0,.12);
  border-radius:14px;
  padding:14px 16px;
  box-shadow:0 6px 18px rgba(0,0,0,.06);
  background:rgba(255,255,255,.9);
}
.pub-title{ font-weight:800; line-height:1.25; margin:0 0 6px 0; }
.pub-meta{ opacity:.85; line-height:1.35; margin:0; }
.pub-links{ margin-top:10px; display:flex; flex-wrap:wrap; gap:8px; }
.pub-badge{
  font-size:.82rem;
  padding:4px 8px;
  border-radius:999px;
  border:1px solid rgba(0,0,0,.15);
  text-decoration:none;
}
</style>

{% if site.data.citations %}
{% assign pubs = site.data.citations | sort: "Year" | reverse %}
{% assign last_year = "" %}

{% for p in pubs %}
{% assign year_str = p.Year | default: "Other" %}

{% if year_str != last_year %}
{% if last_year != "" %}
</div></div>
{% endif %}
<div class="pub-year">
<h3>{{ year_str }}</h3>
<div class="pub-grid">
{% assign last_year = year_str %}
{% endif %}

{% capture scholar_q %}{{ p.Title | cgi_escape }}{% endcapture %}
{% assign scholar_url = "https://scholar.google.com/scholar?q=" | append: scholar_q %}

<div class="pub-card">
<p class="pub-title">{{ p.Title }}</p>
{% if p.Authors %}<p class="pub-meta">{{ p.Authors }}</p>{% endif %}

<p class="pub-meta">
{{ p.Publication }}
{% if p.Volume %} · {{ p.Volume }}{% endif %}
{% if p.Number %}({{ p.Number }}){% endif %}
{% if p.Pages %} · {{ p.Pages }}{% endif %}
{% if p.Year %} · {{ p.Year }}{% endif %}
</p>

<div class="pub-links">
<a class="pub-badge" href="{{ scholar_url }}">Google Scholar</a>
</div>
</div>

{% endfor %}

</div></div>
{% else %}
<p><em>No publications found. Make sure your CSV is at <code>_data/citations.csv</code>.</em></p>
{% endif %}
