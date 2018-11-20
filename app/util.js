define(function (require) {

    const R = require('lib/ramda');


    const absPathGen = R.curry(function (pathRoot, dirSegmentsFromRoot, resource) {
        const relativePath = dirSegmentsFromRoot.join('/') + '/' + resource;
        return `${pathRoot}/${relativePath}`;
    });

    const jsDelivrAbsURL = absPathGen('https://cdn.jsdelivr.net/gh/pr0ggy/dwp-ext@7ea975fa28b026999fa1c5f724426de3014123c2');

    function onURLsMatching(urlRegEx, doFn) {
        if (urlRegEx.test(window.location.href) == false) return;
        doFn();
    }


    return {
        absPathGen,
        jsDelivrAbsURL,
        onURLsMatching
    }

});
