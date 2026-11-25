# Publication data

`_data/publications.yml` is the single source for the publication library, bibliography, and homepage publications-and-contributions track. `_data/citations.csv` is retained as the original Scholar export, but is no longer rendered directly.

## Updating a record

- Give every work a stable, unique `id` (also its citation anchor).
- Set `status` to `published`, `preprint`, `in-press`, `abstract`, or `contribution`. Use `type` to identify datasets, dissertations, and other contributions; these are not presented as peer-reviewed articles. Pending manuscripts without a public preprint are not included.
- `year` is the citation's bibliographic year. `date` is a quoted ISO date for the first online release of the listed version, with `date_source` pointing to the publisher, PubMed, or Crossref record. Keep `date: null` when a day/month has not been verified; never substitute January 1 for an unverified month and day.
- For a preprint that becomes a paper, update the same record. Retain `preprint_url` as an optional secondary link rather than adding a duplicate work. An accepted manuscript can be `in-press` with a null publication date and a link explicitly labeled as the earlier preprint.
- `authors` is plain citation text; the template highlights `Sriram A` / `Sriram AD`. Use `et al.` explicitly for shortened author lists.
- `image` and `image_alt` preserve existing journal-cover artwork. `cover_label` and optional `cover_subtitle` provide a typeset library cover when no original image exists. `short_title` can be used for cover captions. The compact preprint, in-press, and contribution library lists and the bibliography always show the full `title`.
- `library_source` selects the small source logo from `_data/publication_sources.yml` for compact library listings. Use the actual preprint host (bioRxiv, medRxiv, or Research Square), or the relevant repository/institution for other contributions.
- Optional links: `pdf_url`, `resource_url` + `resource_label`, and `preprint_url`.

The timeline shows one horizontal feature block per canonical work, including conference abstracts, datasets, and dissertations. Each block links to its details and represents a work, not its duration. Published versions replace preprints; previous versions are not additional works. In-press records without a final release date use a separately sourced `preprint_date`, labeled as the public preprint. Records without a verified month use an outlined block spanning the recorded year; no month is invented. Three works currently have no verified release month: the 2013 and 2014 AGU abstracts and the 2026 dissertation. The axis expands to include early contributions before the undergraduate timeline.

## Reconciliation on 2026-11-24

The October 2026 CV, existing image library, original Scholar CSV, and all 21 entries on the [live Google Scholar profile](https://scholar.google.com/citations?user=i24X9hkAAAAJ&hl=en) were reconciled with these public records. The curated collection contains 18 distinct works: eight published articles/conference papers, four preprints, one in-press article, three conference abstracts, and two other contributions.

| Work | Current classification / first-online date | Source |
| --- | --- | --- |
| Prediction transfer / single-cell foundation models | Preprint; 2026-10-26 (the DOI contains an earlier date) | [bioRxiv](https://www.biorxiv.org/content/10.64898/2026.10.21.760716v1) |
| Carbohydrate metabolism / pediatric sepsis | Preprint; 2026-09-01 | [PubMed](https://pubmed.ncbi.nlm.nih.gov/42922814/) |
| Precision medicine doctoral dissertation | Doctoral dissertation; 2026, release month unverified | [ProQuest Dissertations & Theses](https://www.proquest.com/docview/3361177594), University of Pittsburgh, publication number 32743341; the [Pitt announcement](https://calendar.pitt.edu/event/advancing-methodological-foundations-in-precision-medicine-through-novel-causal-inference-machine-learning-and-artificial-intelligence-frameworks) supplies a June 12 defense date, not a repository release date |
| eQTM Atlas | Preprint; 2026-06-10 | [PubMed](https://pubmed.ncbi.nlm.nih.gov/42327319/) |
| Genetic anchors in asthma | Published; 2026-04-22 (issue date 2026-04-24) | [PubMed](https://pubmed.ncbi.nlm.nih.gov/42018614/) |
| Genetic anchors in asthma dataset | Dataset; 2026-03-25 | [Dryad](https://datadryad.org/dataset/doi:10.5061/dryad.rxwdbrvpq) |
| DeepDiff-SHAP | Published PSB 2026 conference paper; online 2025-12-14 | [PubMed citation year](https://pubmed.ncbi.nlm.nih.gov/41758180/), [Crossref online date](https://api.crossref.org/works/10.1142/9789819824755_0052) |
| DeepEXPOKE | In press at Genome Medicine, per supplied CV; no verified final publication date | CV and [public medRxiv version](https://doi.org/10.1101/2024.10.15.24315572) |
| EBV / pediatric sepsis | Published; 2025-08-19 | [JAMA](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2837768) |
| Gut microbiome network fingerprint | Preprint; 2024-10-21 | [Crossref](https://api.crossref.org/works/10.1101/2024.10.21.619471) |
| Mild hypoxia / CCM | Published; 2024-04-25 (June issue) | [PubMed](https://pubmed.ncbi.nlm.nih.gov/38660801/) |
| DAG-deepVASE | Published; 2023-07-03 | [Oxford Academic](https://academic.oup.com/gigascience/article/doi/10.1093/gigascience/giad044/7217083) |
| Refining pediatric sepsis subgroups | Published review; 2023-01-30 | [PubMed](https://pubmed.ncbi.nlm.nih.gov/36793336/) |
| SARS-CoV-2 genetic risk | Published; 2022-08-12 | [Publisher PDF, page 1](https://www.iomcworld.org/articles/genetic-risk-factors-associated-with-sarscov2-susceptibility-in-multiethnic-populations.pdf) |
| Lesion burden in CCM | Conference abstract; 2022-02-03 | [Stroke abstract](https://doi.org/10.1161/str.53.suppl_1.109); [publisher's indexed supplement contents](https://www.ahajournals.org/doi/10.1161/str.53.suppl_1.WP7) list the matching title and “Originally published February 3, 2022” |
| Zebrafish / autism | Published; 2020-11-23 | [PubMed](https://pubmed.ncbi.nlm.nih.gov/33330465/) |
| Marine body size / extinction | 2014 conference abstract; date not independently verified | [AGU program](https://studio.m-anage.com/agu/fm14/preliminaryview.cgi/Paper10788.html) |
| Ostracod biomass | 2013 conference abstract; date not independently verified | Original Scholar export; [coauthor's bibliography](https://sedpaleo.org/HeimCV.pdf) |

### Resolved differences

- DeepDiff-SHAP appeared twice as a preprint and proceedings paper. Only the published work is listed, using PubMed's 2026 volume year and Crossref's December 2025 online date. Its earlier bioRxiv version remains accessible from the citation.
- The CV labels DeepEXPOKE in press. It is shown in its own section, with the medRxiv image and a clear preprint link. Its timeline block uses the public preprint's October 16, 2024 release date, clearly labeled as such; it is not presented as a final published article.
- The CV's pending-manuscripts section repeats eQTM Atlas, but its complete public citation identifies a June 2026 bioRxiv preprint. The public record takes precedence for this work's status.
- The CV has inconsistent 2022/2023 dates for DAG-deepVASE. The publisher confirms July 2023.
- The existing Scholar export's SARS-CoV-2 thesis entry is represented by the published article in the CV/library, rather than counted twice.
- The PSB session introduction does not list Aditya Sriram as an author. The user confirmed that it mentions the DeepDiff-SHAP paper, so it does not represent an additional contribution.
- `Striped Tunnels` is absent from the current live Scholar profile. The [Stanford course-project paper](https://www.scs.stanford.edu/26wi-cs244c/proj/striped_tunnels.pdf) associates its Aditya Sriram with a Stanford email and affiliation, rather than the author's Pittsburgh/UCSF affiliations. It is not included. The raw historical CSV remains unchanged.
- The undated `Body Size Preference of Animals in Relation to Extinction Selectivity` entry is represented by the verified 2014 AGU abstract, rather than an additional undated publication.
- A related BRIDGE-KO paper appeared in searches but does not list Sriram as an author; it is not used to replace the microbiome preprint.
- The Dryad dataset is a separately citable research output with its own DOI and is retained as a contribution alongside its associated Science Advances article. The doctoral dissertation is likewise retained as a separate contribution, rather than treated as a duplicate of its component manuscripts.
- The ostracod abstract's author order follows the coauthor's bibliography: Pathi, Guo, Sriram, Heim, Payne. AGU presentation dates are not substituted for unverified online release dates.

### Live Scholar audit

The complete profile had 21 rows and no additional results after “Show more.” The following mapping accounts for every row in profile order:

| Scholar row | Work | Curated record / disposition |
| --- | --- | --- |
| 1 | Zebrafish / autism | `zebrafish-autism` |
| 2 | Mild hypoxia / CCM | `hypoxia-ccm` |
| 3 | Refining pediatric sepsis subgroups | `sepsis-subgroups` |
| 4 | DAG-deepVASE | `dag-deepvase` |
| 5 | EBV / pediatric sepsis | `ebv-pediatric-sepsis` |
| 6 | DeepDiff-SHAP preprint | Merged into published `deepdiff-shap`; preprint retained as a secondary link |
| 7 | DeepDiff-SHAP proceedings paper | `deepdiff-shap`; 2026 volume, December 2025 online date |
| 8 | Genetic anchors in asthma | `genetic-anchors-asthma` |
| 9 | eQTM Atlas | `eqtm-atlas` |
| 10 | Gut microbiome network fingerprint | `microbiome-network` |
| 11 | DeepEXPOKE preprint | `deepexpoke`; in-press status from CV, public preprint retained |
| 12 | Global carbohydrate metabolism / pediatric sepsis | `sepsis-carbohydrate-metabolism` |
| 13 | Dryad genetic anchors dataset | `genetic-anchors-asthma-dataset` |
| 14 | Prediction transfer / single-cell foundation models | `single-cell-reliability` |
| 15 | Precision medicine doctoral dissertation | `precision-medicine-dissertation` |
| 16 | PSB session introduction | Mentions DeepDiff-SHAP; no separate contribution, as confirmed by the user |
| 17 | Lesion burden in CCM | `lesion-burden-ccm` |
| 18 | SARS-CoV-2 genetic risk, UW thesis | Represented by published `sars-cov2-risk` |
| 19 | Marine body size / extinction, 2014 AGU | `marine-extinction` |
| 20 | Ostracod biomass, 2013 AGU | `ostracod-biomass` |
| 21 | Body size / extinction, undated | Duplicate of `marine-extinction` |
