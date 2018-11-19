define(function (require) {

    var u = require('dwp-ext/app/util');
    var onURLsMatching = u.onURLsMatching;
    var grid = require('dwp-ext/app/gallery-tools/grid');

    console.log('DWP EXT LOADED');

    onURLsMatching(/hospitality\/laminate-collections\/?$/, function () {
        console.log('DWP LAMINATE COLLECTIONS');
    //     grid.addFilterToGridWrapper(
    //         document.getElementById('block-yui_3_17_2_7_1478631096807_6085'),
    //         'Search Collections'
    //     );
    });

});
