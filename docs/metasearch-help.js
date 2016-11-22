function startIntro(){
    var intro = introJs();
    intro.setOptions({
        steps: [
            {
                intro: "This tutorial will help you use metasearch, a search " +
                "tool intended to help you find MRI data shared publicly on " +
                "the Web. It is provided by the Open Neuroimaging Laboratory " +
                "project as a companion to the <a target='_blank' " +
                "style='text-decoration: none; color: red;' " +
                "href='http://brainbox.pasteur.fr'>BrainBox</a>, a brain " +
                "curation and annotation tool. " +
                "If you want to see your data on MetaSearch, please " +
                "<a target='_blank' " +
                "style='text-decoration: none; color: red;' " +
                "href='https://github.com/OpenNeuroLab/metasearch/issues/new'>" +
                "let us know</a>"
            },
            {
                element: "#filter",
                intro: "You can interactively filter your data using this " +
                "interactive parallel coordinates plot. You can drag along a " +
                "column to brush or select elements. Clicking anywhere " +
                "outside the selected area on the column will reset the " +
                "selection. Clicking on a column header will color the data " +
                "by z-score if the data are numeric. You can also reorder " +
                "columns by dragging a column header left or right.",
                position: 'bottom'
            },
            {
                element: '#keep-data',
                intro: "After you have created a selection, this button helps" +
                " reduce the data you are manipulating to just the selection.",
                position: 'bottom'
            },
            {
                element: '#exclude-data',
                intro: "This button is the reverse of keep and removes the " +
                "selection from dataset and draws the remaining data. You can" +
                "repeat this process to remove different sets of data at a time.",
                position: 'bottom'
            },
            {
                element: '#reset-data',
                intro: 'This button resets the data to the original dataset.',
                position: 'bottom'
            },
            {
                element: '#post-data',
                intro: 'This button uses the selected data to create a CSV ' +
                'table for use in BrainBox ' +
                'to generate a new project. <b>It limits the selection to ' +
                'participants with MRI data.</b>',
                position: 'bottom'
            },
            {
                element: '#grid',
                intro: 'This grid shows the selected data in tabular form. ' +
                'Each column can be sorted by clicking on the header. The ' +
                'BrainBox link under the MRI column will open the MRI using BrainBox when ' +
                'available. Hovering on any row shows the corresponding data ' +
                'on the parallel coordinate display as a line.',
                position: 'top'
            },
            {
                element: '#pager',
                intro: 'This displays the total number of data rows and ' +
                'allows paginating the display using the button on the right.',
                position: 'top'
            },
            {
                element: '#github',
                intro: 'Contribute data and code by joining the ' +
                '<a target="_blank" style="text-decoration: none; color: red;" ' +
                'href="https://github.com/OpenNeuroLab/metasearch">' +
                'MetaSearch Project!</a>',
                position: 'bottom'
            },
            {
                element: '#tutorial',
                intro: 'That\'s it for now. Please provide feedback using ' +
                '<a target="_blank" style="text-decoration: none; color: red;" ' +
                'href="https://neurostars.org">Neurostars!</a>',
                position: 'bottom'
            }
        ]
    });
    intro.start();
}
