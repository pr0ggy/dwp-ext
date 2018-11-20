define(function (require) {

    const R = require('lib/ramda');


    const absPathGen = R.curry(function (pathRoot, dirSegmentsFromRoot, resource) {
        const relativePath = dirSegmentsFromRoot && dirSegmentsFromRoot.length ? `${dirSegmentsFromRoot.join('/')}/${resource}` : resource;
        return `${pathRoot}/${relativePath}`;
    });

    function onURLsMatching(urlRegEx, doFn) {
        if (urlRegEx.test(window.location.href) == false) return;
        doFn();
    }


    return {
        absPathGen,
        onURLsMatching
    };

});
