define(function (require) {

    const $ = require('lib/zepto-1.2.0');


    function createSearchFilterBlock(fieldPlaceholder) {
        return $('\
            <div class="search-filter-block">\
                <input type="text" class="search-filter-input" placeholder="'+fieldPlaceholder+'" />\
            </div>\
        ');
    }

    function hideElement(el) {
        $(el).hide();
    }

    function showElement(el) {
        $(el).show();
    }

    function toggleElement(shouldShow, el) {
        if (typeof shouldShow === 'Function')
            shouldShow = shouldShow();

        $(el).toggle(shouldShow);
    }


    return {
        createSearchFilterBlock,
        hideElement,
        showElement,
        toggleElement
    };

});
