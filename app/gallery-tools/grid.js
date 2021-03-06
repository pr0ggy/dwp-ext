define(function (require) {

    const $ = require('lib/zepto-1.2.0');
    const R = require('lib/ramda');
    const dom = require('app/dom');


    function addFilterToGridWrapper(gridWrapper, searchPlaceholder) {
        const slideTitleContains = R.curry(function (filterString, slide) {
            return ($('.image-slide-title', slide).prop('innerText').toLowerCase().indexOf(filterString.toLowerCase()) > -1);
        });

        var filterTimer = null;

        const filterSlidesAfterInactivity = R.curry(function($slidesToFilter, e) {
            const $filterTextBox = $(e.target);
            clearTimeout(filterTimer);

            const filterSlides = function () {
                $slidesToFilter.forEach(R.ifElse(
                    slideTitleContains($filterTextBox.val()),
                    dom.showElement,
                    dom.hideElement
                ));
            };

            filterTimer = setTimeout(filterSlides, 500);
        });

        const $gridSlides = $('.slide', gridWrapper);
        const $searchBlock = dom.createSearchFilterBlock(searchPlaceholder);
        $('.search-filter-input', $searchBlock).on('input', filterSlidesAfterInactivity($gridSlides));

        $(gridWrapper).before($searchBlock);
    }


    return {
        addFilterToGridWrapper
    };

});
