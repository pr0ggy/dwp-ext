define(function (require) {

    function onURLsMatching(urlRegEx, doFn) {
        if (urlRegEx.test(window.location.href) == false) return;
        doFn();
    }


    return {
        onURLsMatching
    };

});
