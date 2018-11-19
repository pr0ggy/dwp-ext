define(function (require) {

    const $ = require('lib/zepto-1.2.0');
    const R = require('lib/ramda');
    const ui = require('app/ui');


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
                    ui.showElement,
                    ui.hideElement
                ));
            };

            filterTimer = setTimeout(filterSlides, 500);
        });

        const $gridSlides = $('.slide', gridWrapper);
        const $searchBlock = ui.createSearchFilterBlock(searchPlaceholder);
        $('.search-filter-input', $searchBlock).on('input', filterSlidesAfterInactivity($gridSlides));

        $(gridWrapper).before($searchBlock);
    }


    return {
        addFilterToGridWrapper
    };

});
