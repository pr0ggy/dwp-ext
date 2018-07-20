define(function (require) {

    var dom = require('dom');
    var $ = require('lib/jbone');
    var R = require('lib/ramda');

    var gallery = {};

    gallery.grid = (function() {
        //////////////////////////////////////////////////////////////////////////////
        // ========================== GRID GALLERY TOOLS ========================== //
        //////////////////////////////////////////////////////////////////////////////
        return {
            addFilterToGridWrapper: function (gridWrapper, searchPlaceholder) {
                const filterSlideBasedOnSearchTerm = R.curry(function (filterString, slide) {
                    const $slide = $(slide);
                    if ($('.image-slide-title', $slide).get('innerText').toLowerCase().indexOf(filterString.toLowerCase()) > -1)
                        $slide.show();
                    else
                        $slide.hide();
                });

                const filterSlidesAfterInactivity = R.curry(function($slidesToFilter, e) {
                    const $filterTextBox = $(e.target);
                    clearTimeout($filterTextBox.get('filterTimer'));

                    const doFilter = function () {
                        $slidesToFilter.each(filterSlideBasedOnSearchTerm($filterTextBox.get('value')));
                    };

                    $filterTextBox.set('filterTimer', setTimeout(doFilter, 500));
                });

                const $gridSlides = $('.slide', gridWrapper);
                const $searchBlock = dom.createSearchFilterBlock();
                $searchBlock.select('.search-filter-input').on('input', filterSlidesAfterInactivity($gridSlides));

                $(gridWrapper).addBefore($searchBlock);
            }
        };
    })();

    return gallery;

});
