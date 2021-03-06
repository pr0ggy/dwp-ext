define(function (require) {

    const u = require('app/util');
    const onURLsMatching = u.onURLsMatching;
    const laminateCollection = require('app/laminate-collection');
    const grid = require('app/gallery-tools/grid');

    console.log('DWP EXT LOADED');

    /**
     * On the Laminate Collections list page, add a text filter to filter collections
     * based on name
     */
    onURLsMatching(/hospitality\/laminate-collections\/?$/, function () {
        console.log('DWP LAMINATE COLLECTIONS');

        grid.addFilterToGridWrapper(
            document.getElementById('block-yui_3_17_2_7_1478631096807_6085'),
            'Search Collections'
        );
    });

    /**
     * On any given Laminate Collection page, we may need to show links to multiple
     * finish options...
     */
    onURLsMatching(/hospitality\/[a-z\-]*laminate-collections\/.+$/, function () {
        console.log('DWP LAMINATE COLLECTION');

        // add 350ms delay to prevent the finish link block from rendering above the casegood 
        // unit gallery block
        // laminateCollection.addFinishOptionLinks(window.location.href);
        setTimeout(function () { laminateCollection.addFinishOptionLinks(window.location.href); }, 350);
    });

});
