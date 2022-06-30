---
permalink: /papers/
title: "Papers"
excerpt: 
author_profile: true
redirect_from: 
  - /paper
---

**Articles I've read**

[Identification of unique neoantigen qualities in long-term survivors of pancreatic cancer](https://www.nature.com/articles/nature24462)
2/15/20

Summary: There are some rare pancreatic cancer patients who are long term survivors (LTSs). Great, but why? 

Greater T cell clonality in LTSs, greater numbers of CD8+ T cells, less CD4+ T cells. Exome sequencing on tumors. 38 neoantigens per tumor, on average. PAtients who were neoantigen high and CD3+CD8+ high or neoantigen high and polyclonal T cell repertoire high exhibited the longest survival. Seems like you need neoantigens and high cell number or clonality. I assume that cell number and clonality are probably linked. 

They then wanted to see which neoantigens were best. "The theory of molecular mimicry postulates that TCRs that can recognize pathogenic antigens can also recognize non-pathogenic antigens, which has been documented in autoimmunity but not in the cancer context." They looked how closely neoantigens aligned with sequences of common infectious diseases. Impressive! Higher neoantigen quality, as defined as that of higher immunogenicity determined by alignment to a pathogen AND HLA binding, was a prognosticator of survival.

Metastases underwent immunoediting and lost quantity of neoantigens. It seems like a catch-22; if you don't have a high quality neoantigen, then you die. If you do, it can be edited away during metastasis and you die. Anyways, their "quality model identifies bona fide neoantigens targeted by T cells, and that tumour-infiltrating T cells can cross-reactively recognize both cancer neoantigens and homologous non-cancer microbial antigens." Basically, they found a way to find neoantigens and then an assay to see perhaps if you'll live based on response to potential neoantigens and microbes. Cool how they link the two.

They find a hotspot in MUC16 in the short term survivors; not many LTSs had mutations in it. If they did, they had the CD8 response to back it up. "Supporting possible in vivo anti-MUC16 immunity, tumours in LTSs had lower levels of mRNA (6.6-fold), protein, and a lower mutant allele frequency (4-fold) in non-hypermutated tumours compared to short-term survivors." 

They end really weirdly. They say "Our results do not indicate causal associations of pre-existing microbial and anti-tumour immunity in LTSs. Instead, our data suggest that embedding microbial homology in the context of our neoantigen quality model can help to create an effective surrogate for immunogenic neoantigens. We posit two non-mutually exclusive mechanisms to explain these findings. The first is that although the naive human TCR repertoire is theoretically vast, the observed TCR recombination products are notably restricted17, possibly representing sculpting of the TCR recombination space under the evolutionary selection pressures of pathogens, thereby skewing the repertoire to recognize their common protein features. The second is that as microbial antigens are by definition non-self sequences, enriched with documented human T-cell clones surviving thymic selection, homologous tumour neoantigens are similarly non-self sequences enriched with bona fide human T-cell clones. However, given recent evidence of intratumoural bacterial polarization of T-cell phenotypes, and microbial dependence of immunotherapy efficacy, whether homology to patient-derived microbiomes enhances relevant neoantigen identification remains unknown yet timely."

Basically, maybe the T cell repertoire is heavily restricted or just because of thymic selection they then become restricted. But easily it could be due to microbiome influencing neoantigen recognition! Someone has to do that study. I'm sure they have.

[Multifaceted Effects of Antigen Valency on B Cell Response Composition and Differentiation In Vivo](https://www.sciencedirect.com/science/article/pii/S1074761320303344)

Summary: Antigen valency is key in vaccines, both for short-term B cell activation and for long-term plasma cell response. In a transgenic+polyclonal transfer model, HIV antigen (eOD-GT5) 60-mers elicit far greater initial responses (proliferation, B cell activation assessed via CCR7/CD44, CD69) in vivo as well as promote B cell migration to the T cell zone in lymph nodes. CD4 help is necessary for the maturation of these B cells into early germinal center B cells and plasma cells, but not for initial division and activation (though I wonder the absolute valency threshold for this; they only compared 4mers and 60mers).  

Interestingly, valency seems to play a larger role in than affinity in establishing robust humoral immunological memory. Low affinity, high valency complexes were far more similar to high affinity, high valency complexes than high affinity, low valency complexes in establishing the aforementioned immunity measured by B cell activation and plasma cell/germinal center B cell formation. Some pretty convincing work here showing that even low affinity, high avidity targets will cause T cell-B cell interactions and initial B cell division, though slower. They used a transfer model of HIV antigen specific B cells, and SMARTA (LCMV gp61-80 specific) T cells and vaccinated with an LCMV epitope (gp61-80) threaded into the aforementioned eOD-GT2/5 (low/high affinity for the engineered B cells) HIV antigen. 

They also found that higher valency vaccines recruit a broader repertoire of B cells with lower overall affinity to respond to antigenic challenge. That is, even with high affinity, lower antigen valency creates a competition where only highly specific B cells can respond. 

Thoughts: I would have been really interested in seeing some 10x BCR sequencing data on the B cells between high and low valency. That could have driven home the point that there is increased clonality of B cells in high valency vaccinations. Overall, super cool work and it shows how important a thorough understanding of the physical landscape of antigens are in both initial and memory immune response. 

[Functional HPV-specific PD-1+ stem-like CD8 T cells in head and neck cancer](https://www.nature.com/articles/s41586-021-03862-z)
9/2/21 (after a hiatus–not of reading papers but of summarizing them!)

Summary: By using tetramer staining and cell sorting, this paper is able to find HPV-specific CD8 TILs in head and neck cancer. This is somewhat unsurprising, as HPV is known to cause otolaryngological cancers; additionally, these viruses persist as episomes in our squamous epithelia. 
Interestinly, it seems that around 1/2 of CD8s in the TME (both primary and metastatic) are PD-1+, suggesting persistent antigen exposure. Of those, ~20% are TCF-1+ (stem-like) and ~40% are TIM-3+ (a marker of terminal differentiation). They don't find the same populations, or really almost any HPV-specific T cells in the blood. 

The authors then use scRNAseq and find three groups of HPV-specific T cells: stem-like (characterized by TCF7, LEF1, IL7R), transitory (characterized by PRDM1, FOS, JUN, IFNG), and terminally differentiated (characterized by HAVCR2 (TIM-3) and ENTPD1 (CD39)). All clusters expressed TOX, PDCD1, CTLA4, TIGIT.

They then go to show that the stem-like have the capacity to proliferate and perform effector functions in response to antigen, while the terminally differentiated cells are moot.

Thoughts: What *is* T cell exhaustion? It seems that this study shows a subset of exhausted T cells aren't really "exhausted" at all! They do express PD-1, so they must have seen antigen (or did they express it before?). I wonder if there is an upstream trajectory that controls whether or not a T cell will become stem-like. Did these stem-like cells express effector molecules and then quickly contract? Or have they simply delayed their effector response to future antigenic exposure? What transcriptional changes are associated with stem-like T cell activation Fig. 5 (ie, do they keep expressing TCF7 or do they lose it)? 
