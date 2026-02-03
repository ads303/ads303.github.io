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
    <td><a href="https://www.worldscientific.com/doi/10.1142/9789819824755_0052?srsltid=AfmBOorR7n7Kjfl0sr-UYOVmlmECvvyHwnEhPiNiCU95VT7JG2j5rZMd"><img src="https://github.com/user-attachments/assets/c296bcd8-7cc5-4e89-b937-b4e1b39bf824" width="192" height="300"></a></td>
    <td><a href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2837768"><img src="https://github.com/user-attachments/assets/3ba46f11-0555-4069-9992-d2f3eddb3493" width="192" height="300"></a></td>    
    <td><a href="https://www.medrxiv.org/content/10.1101/2024.10.15.24315572v1"><img src="https://github.com/user-attachments/assets/d08dec03-ee6a-4e1c-a04f-a215fc650619" width="192" height="300"></a></td>
    <td><a href="https://www.biorxiv.org/content/10.1101/2024.10.21.619471v1"><img src="https://github.com/user-attachments/assets/abf1ba4b-47e1-4afb-a86e-37a0061ab911" width="192" height="300"></a></td>
  </tr>
  <tr>
    <td><a href="https://www.ahajournals.org/doi/10.1161/ATVBAHA.123.320367"><img src="https://github.com/user-attachments/assets/49bf8a5d-dfec-4042-9bca-2f6181c63811" width="192" height="300"></a></td>
    <td><a href="https://www.ahajournals.org/doi/10.1161/str.53.suppl_1.109"><img src="https://github.com/user-attachments/assets/eb70be59-8024-479b-9446-b8358f0a68bb" width="192" height="300"></a></td>
    <td><a href="https://www.frontiersin.org/articles/10.3389/fped.2023.1035576/full"><img src="https://github.com/user-attachments/assets/0dbbcba7-d562-4bb1-bd01-86d526cf1b5a" width="192" height="300"></a></td>    
    <td><a href="https://academic.oup.com/gigascience/article/doi/10.1093/gigascience/giad044/7217083"><img src="https://github.com/user-attachments/assets/2270287e-6946-4ec1-81d6-38502bf66567" width="192" height="300"></a></td>
  </tr>
  <tr>
    <td><a href="https://www.iomcworld.org/articles/genetic-risk-factors-associated-with-sarscov2-susceptibility-in-multiethnic-populations-93385.html"><img src="https://github.com/user-attachments/assets/da36e6f0-25cf-4cb1-9499-858d04b7e28b" width="192" height="300"></a></td>
    <td><a href="https://www.frontiersin.org/articles/10.3389/fcell.2020.586296/full"><img src="https://github.com/user-attachments/assets/46f429da-f8b5-4f53-8155-002767545112" width="192" height="300"></a></td>
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
