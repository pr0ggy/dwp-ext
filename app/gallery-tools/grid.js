define(function (require) {

    var dom = require('app/dom');
    var $ = require('lib/jbone');
    var R = require('lib/ramda');

    return {
        addFilterToGridWrapper: function (gridWrapper, searchPlaceholder) {
            const filterSlideBasedOnSearchTerm = R.curry(function (filterString, slide) {
                const $slide = $(slide);
                if ($('.image-slide-title', $slide).get(0).innerText.toLowerCase().indexOf(filterString.toLowerCase()) > -1)
                    $slide.removeClass('yui3-widget-hidden');
                else
                    $slide.addClass('yui3-widget-hidden');
            });

            const filterSlidesAfterInactivity = R.curry(function($slidesToFilter, e) {
                const $filterTextBox = $(e.target);
                clearTimeout($filterTextBox.data('filterTimer'));

                const doFilter = function () {
                    $slidesToFilter.toArray().forEach(filterSlideBasedOnSearchTerm($filterTextBox.val()));
                };

                $filterTextBox.data('filterTimer', setTimeout(doFilter, 500));
            });

            const $gridSlides = $('.slide', gridWrapper);
            const $searchBlock = dom.createSearchFilterBlock(searchPlaceholder);
            $('.search-filter-input', $searchBlock).on('input', filterSlidesAfterInactivity($gridSlides));

            gridWrapper.parentNode.insertBefore($searchBlock.get(1), gridWrapper);
        }
    };

});
