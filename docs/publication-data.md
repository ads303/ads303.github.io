# Publication data

`_data/publications.yml` is the single source for the publication library, bibliography, and homepage publication-density track. `_data/citations.csv` is retained as the original Scholar export, but is no longer rendered directly.

## Updating a record

- Give every work a stable, unique `id` (also its citation anchor).
- Set `status` to `published`, `preprint`, `in-press`, or `abstract`. Pending manuscripts without a public preprint are not included.
- `year` is the citation's bibliographic year. `date` is a quoted ISO date for the first online release of the listed version, with `date_source` pointing to the publisher, PubMed, or Crossref record. Keep `date: null` when a day/month has not been verified; never guess January 1 from a year-only record.
- For a preprint that becomes a paper, update the same record. Retain `preprint_url` as an optional secondary link rather than adding a duplicate work. An accepted manuscript can be `in-press` with a null publication date and a link explicitly labeled as the earlier preprint.
- `authors` is plain citation text; the template highlights `Sriram A` / `Sriram AD`. Use `et al.` explicitly for shortened author lists.
- `image` and `image_alt` preserve existing journal-cover artwork. `cover_label` provides a typeset library cover when no original image exists. `short_title` is only the library caption; the bibliography always shows the full title.
- Optional links: `pdf_url`, `resource_url` + `resource_label`, and `preprint_url`.

The timeline counts dated `published` and `preprint` records only. In-press records and conference abstracts are distinct from those counts. An article is counted once, in the month of its current version; previous preprint versions are not additional publications.

## Reconciliation on 2026-11-24

The October 2026 CV, existing image library, and original Scholar CSV were reconciled with these public records:

| Work | Current classification / first-online date | Source |
| --- | --- | --- |
| eQTM Atlas | Preprint; 2026-06-10 | [PubMed](https://pubmed.ncbi.nlm.nih.gov/42327319/) |
| Genetic anchors in asthma | Published; 2026-04-22 (issue date 2026-04-24) | [PubMed](https://pubmed.ncbi.nlm.nih.gov/42018614/) |
| DeepDiff-SHAP | Published PSB 2026 conference paper; online 2025-12-14 | [PubMed citation year](https://pubmed.ncbi.nlm.nih.gov/41758180/), [Crossref online date](https://api.crossref.org/works/10.1142/9789819824755_0052) |
| DeepEXPOKE | In press at Genome Medicine, per supplied CV; no verified final publication date | CV and [public medRxiv version](https://doi.org/10.1101/2024.10.15.24315572) |
| EBV / pediatric sepsis | Published; 2025-08-19 | [JAMA](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2837768) |
| Gut microbiome network fingerprint | Preprint; 2024-10-21 | [Crossref](https://api.crossref.org/works/10.1101/2024.10.21.619471) |
| Mild hypoxia / CCM | Published; 2024-04-25 (June issue) | [PubMed](https://pubmed.ncbi.nlm.nih.gov/38660801/) |
| DAG-deepVASE | Published; 2023-07-03 | [Oxford Academic](https://academic.oup.com/gigascience/article/doi/10.1093/gigascience/giad044/7217083) |
| Refining pediatric sepsis subgroups | Published review; 2023-01-30 | [PubMed](https://pubmed.ncbi.nlm.nih.gov/36793336/) |
| SARS-CoV-2 genetic risk | Published; 2022-08-12 | [Publisher PDF, page 1](https://www.iomcworld.org/articles/genetic-risk-factors-associated-with-sarscov2-susceptibility-in-multiethnic-populations.pdf) |
| Lesion burden in CCM | 2022 conference abstract; exact date not independently verified | [Stroke supplement](https://doi.org/10.1161/str.53.suppl_1.109) |
| Zebrafish / autism | Published; 2020-11-23 | [PubMed](https://pubmed.ncbi.nlm.nih.gov/33330465/) |
| Marine body size / extinction | 2014 conference abstract; date not independently verified | [AGU program](https://studio.m-anage.com/agu/fm14/preliminaryview.cgi/Paper10788.html) |
| Ostracod biomass | 2013 conference abstract; date not independently verified | Original Scholar export; [coauthor's bibliography](https://sedpaleo.org/HeimCV.pdf) |

### Resolved differences

- DeepDiff-SHAP appeared twice as a preprint and proceedings paper. Only the published work is listed, using PubMed's 2026 volume year and Crossref's December 2025 online date. Its earlier bioRxiv version remains accessible from the citation.
- The CV labels DeepEXPOKE in press. It is shown in its own section, with the medRxiv image and a clear preprint link; it is not presented as a final published article and is not counted in the monthly density.
- The CV's pending-manuscripts section repeats eQTM Atlas, but its complete public citation identifies a June 2026 bioRxiv preprint. The public record takes precedence for this work's status.
- The CV has inconsistent 2022/2023 dates for DAG-deepVASE. The publisher confirms July 2023.
- The existing Scholar export's SARS-CoV-2 thesis entry is represented by the published article in the CV/library, rather than counted twice.
- The PSB session introduction does not list Aditya Sriram as an author. The undated `Striped Tunnels` entry has no supporting citation in the supplied CV or library. Neither is included in the curated page. The raw CSV is unchanged so these can be reviewed later.
- The undated `Body Size Preference of Animals in Relation to Extinction Selectivity` entry is represented by the verified 2014 AGU abstract, rather than an additional undated publication.
- A related BRIDGE-KO paper appeared in searches but does not list Sriram as an author; it is not used to replace the microbiome preprint.
