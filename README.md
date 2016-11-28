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

|Project Link to License|
|-----------------------|
|[Brain Genomics Superstruct Project][gsp]|
|[IXI – Information eXtraction from Images][ixi]| 
 
 [fcp-indi]: http://fcon_1000.projects.nitrc.org
 [extract]: https://github.com/OpenNeuroLab/metasearch/blob/master/crawler/extract/Extract.ipynb
 [xfm]: https://github.com/OpenNeuroLab/metasearch/blob/master/crawler/extract/Transform.ipynb
 [load]: https://github.com/OpenNeuroLab/metasearch/blob/master/crawler/extract/Load.ipynb
 [pcoord]: http://syntagmatic.github.io/parallel-coordinates
 [d3]: https://d3js.org/
 [slick]: https://github.com/mleibman/SlickGrid/wiki
 [gsp]: https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/25833
 [ixi]: http://brain-development.org/ixi-dataset/
 
 
