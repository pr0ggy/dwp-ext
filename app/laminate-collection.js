define(function (require) {

    const u = require('app/util');
    const $ = require('lib/zepto-1.2.0');
    const R = require('lib/ramda');
    const dwpConf = require('dwp-config');

    function addFinishOptionLinks(collectionHREF) {
        const currentGroupAvailableFinishURLMap = R.reduce(
            function (acc, groupSlug) {
                if (collectionHREF.includes(groupSlug))
                    return R.reduced(dwpConf.laminateGroupAvailableFinishMap[groupSlug]);
                return {};
            },
            {},
            Object.keys(dwpConf.laminateGroupAvailableFinishMap)
        );

        const availableFinishNamesForThisGroup = Object.keys(currentGroupAvailableFinishURLMap);
        if (availableFinishNamesForThisGroup.length <= 1) return;

        const finishOptionImageTagMap = R.map(function(imagePath) {
            return `<img class="collection-available-finish-swatch" src="${imagePath}" />`
        }, R.pick(availableFinishNamesForThisGroup, dwpConf.finishOptionSwatchURLMap));

        console.log(finishOptionImageTagMap);
        return;

        const $groupResourcesBlock = $('#page .col:first-child > div:last-child');
        const $finishOptionsBlock = $('\
            <div class="sqs-block html-block sqs-block-html" data-block-type="2" id="block-available-finishes">\
                <div class="sqs-block-content">\
                    <h2>Available Finishes</h2>\
                    <p><a href="#">'+'<img src="https://ofdist.com/wp-content/uploads/ultra-laminate-walnut-strand-swatch.jpg"/>'+'</a></p>\
                </div>\
            </div>').hide();

        $groupResourcesBlock.before($finishOptionsBlock);
        $finishOptionsBlock.show();
    }


    return {
        addFinishOptionLinks
    }

});
