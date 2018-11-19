define(function (require) {

    var $ = require('dwp-ext/lib/jbone');

    return {
        createSearchFilterBlock: function (fieldPlaceholder) {
            return $('\
                <div class="search-filter-block">\
                    <input type="text" class="search-filter-input" placeholder="'+fieldPlaceholder+'" />\
                </div>\
            ');
        }
    };

});
