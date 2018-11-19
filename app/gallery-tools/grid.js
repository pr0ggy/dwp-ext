define(function (require) {

    var ui = require('app/ui');
    var $ = require('lib/zepto-1.2.0');
    var R = require('lib/ramda');

    return {
        addFilterToGridWrapper(gridWrapper, searchPlaceholder) {
            const filterSlideBasedOnSearchTerm = R.curry(function (filterString, slide) {
                const $slide = $(slide);
                if ($('.image-slide-title', $slide).prop('innerText').toLowerCase().indexOf(filterString.toLowerCase()) > -1)
                    $slide.show();
                else
                    $slide.hide();
            });

            var filterTimer = null;

            const filterSlidesAfterInactivity = R.curry(function($slidesToFilter, e) {
                const $filterTextBox = $(e.target);
                clearTimeout(filterTimer);

                const filterSlides = function () {
                    $slidesToFilter.forEach(filterSlideBasedOnSearchTerm($filterTextBox.val()));
                };

                filterTimer = setTimeout(filterSlides, 500);
            });

            const $gridSlides = $('.slide', gridWrapper);
            const $searchBlock = ui.createSearchFilterBlock(searchPlaceholder);
            $('.search-filter-input', $searchBlock).on('input', filterSlidesAfterInactivity($gridSlides));

            $(gridWrapper).before($searchBlock);
        }
    };

});
