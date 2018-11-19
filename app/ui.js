define(function (require) {

    var $ = require('lib/zepto-1.2.0');

    return {
        createSearchFilterBlock(fieldPlaceholder) {
            return $('\
                <div class="search-filter-block">\
                    <input type="text" class="search-filter-input" placeholder="'+fieldPlaceholder+'" />\
                </div>\
            ');
        }
    };

});
