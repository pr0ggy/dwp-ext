require(['config'], function (config) {

    define(function (require) {

        var u = require('util');
        var onURLsMatching = u.onURLsMatching;
        var grid = require('gallery-tools/grid');

        console.log('DWP EXT LOADED');

        // onURLsMatching(/hospitality\/laminate-collections\/?$/, function () {
        //     grid.addFilterToGridWrapper(
        //         document.getElementById('yui_3_17_2_1_1521151995485_175'),
        //         'Search Collections'
        //     );
        // });

    });

});
