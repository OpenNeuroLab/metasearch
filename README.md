# OpenNeuroLab MetaSearch App

There is a growing number of human brain imaging datasets shared online 
that have related metadata, such as demographic and phenotypic 
information. The [1000 Functional Connectomes Project (FCP) and International 
Neuroimaging Data-sharing Initiative (INDI)][fcp-indi] are great 
examples of openly available brain imaging datasets with corresponding
metadata. However, these data have diverse directory structures and
file formats that make cross-dataset queries a time intensive project.

The MetaSearch App provides an integrated view of the many projects 
organized under the FCP and INDI efforts (summarized below). MetaSearch 
accomplishes this by [extracting][extract] metadata for these projects 
from the AWS cloud, [transforming][xfm] it into a common data model, and 
the [loading][load] the integrated dataset into the MetaSearch app.

The MetaSearch app uses an implementation of [parallel coordinate 
charts][pcoord] written in [D3.js][d3] that allows for selecting subsets 
of multidimensional datasets that are also rendered in a tabular format 
using [SlickGrid][slick]. 

By using this app you can perform queries visually to select a cohort of 
participants with brain imaging data based on their demographics and 
phenotypic information and then link out to imaging measures. For 
example, you could select participants that are female between the ages 
of 20 to 30 with a Verbal IQ between 100 and 120.

Demo: http://openneu.ro/metasearch/

## Datasets and Licenses
Please refer to and follow the data licenses and use agreements listed
on the homepage of each of the datasets in the table below.

| Project Name | Link to Project | License Type |
| --- | --- | --- |
|corr | [Consortium for Reliability and Reproducibility][corr] | [Creative Commons Attribution NonCommercial][cc-nc] |
|gsp | [Brain Genomics Superstruct Project][gsp] | Open access. Data use terms available on the project page |
|abide_initiative | [Autism Brain Imaging Data Exchange][abide]| [Creative Commons Attribution NonCommercial][cc-nc] |
|rocklandsample | [Enhanced Nathan Kline Institute-Rockland Sample][rocklandsample] | [Creative Commons Attribution NonCommercial][cc-nc] |
|adhd200 | [The ADHD-200 Sample][adhd200] | [Creative Commons Attribution NonCommercial][cc-nc] |
|indi | [Southwest University Longitudinal Imaging Multimodal (SLIM) Brain Data Repository][indi] | [Creative Commons Attribution NonCommercial][cc-nc] |
|ixi | [IXI – Information eXtraction from Images][ixi] | [Creative Commons Attribution][cc-sa] |
|acpi | [Addiction Connectome Preprocessed Initiative (ACPI)][acpi] | [Creative Commons Attribution][cc-sa] |
|tumordetect | Currently only shared on MetaSearch |  |
|hbnss | [Healthy Brain Network Serial Scanning Initiative][hbnss]| |
 
 [fcp-indi]: http://fcon_1000.protjects.nitrc.org
 [extract]: https://github.com/OpenNeuroLab/metasearch/blob/master/crawler/fcp-indi/fcp-indi-extractor.ipynb
 [xfm]: https://github.com/OpenNeuroLab/metasearch/blob/master/crawler/transform.ipynb
 [load]: https://github.com/OpenNeuroLab/metasearch/blob/master/crawler/Load.ipynb
 [pcoord]: http://syntagmatic.github.io/parallel-coordinates
 [d3]: https://d3js.org/
 [slick]: https://github.com/mleibman/SlickGrid/wiki
 [corr]: http://fcon_1000.projects.nitrc.org/indi/CoRR/html/concept.html
 [cc-nc]:https://creativecommons.org/licenses/by-nc-sa/3.0/
 [gsp]: https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/25833
 [abide]:http://fcon_1000.projects.nitrc.org/indi/abide/abide_I.html
 [rocklandsample]:http://fcon_1000.projects.nitrc.org/indi/enhanced/access.html
 [adhd200]:http://fcon_1000.projects.nitrc.org/indi/adhd200/index.html
 [indi]:http://fcon_1000.projects.nitrc.org/indi/retro/southwestuni_qiu_index.html
 [ixi]:http://brain-development.org/ixi-dataset/
 [cc-sa]:https://creativecommons.org/licenses/by-sa/3.0/deed.en
 [acpi]:http://fcon_1000.projects.nitrc.org/indi/ACPI/html/index.html
 [hbnss]:http://fcon_1000.projects.nitrc.org/indi/hbn_ssi/

