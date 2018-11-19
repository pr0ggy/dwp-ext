define({

    onURLsMatching(urlRegEx, doFn) {
        if (urlRegEx.test(window.location.href) == false) return;
        doFn();
    }

});
