define(function (require) {

    const $ = require('lib/zepto-1.2.0');
    const R = require('lib/ramda');

    // dwpConfig is now a global declared in SquareSpace header code injection
    // const dwpConf = require('dwp-config');
    dwpConf = dwpConfig;

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
        if (availableFinishNamesForThisGroup.length <= 1) {
            console.log('No finish option data available for group: ', collectionHREF);
            return;
        }

        const finishOptionLinkElements = R.map(function(finishName) {
            return `
                    <a class="collection-finish-link" href="${currentGroupAvailableFinishURLMap[finishName]}">
                        <img src="${dwpConf.finishOptionSwatchURLMap[finishName]}" />
                        <span>${finishName}</span>
                    </a>
            `;
        }, availableFinishNamesForThisGroup);

        const $groupResourcesBlock = $('#page .col:first-child > div:last-child');
        const $finishOptionsBlock = $(`
            <div class="sqs-block html-block sqs-block-html" data-block-type="2" id="block-available-finishes">
                <div class="sqs-block-content">
                    <h2>Available Finishes</h2>
                    <div class="finish-option-links-wrapper">
                        ${finishOptionLinkElements.join("\n")}
                    </div>
                </div>
            </div>`);

        $groupResourcesBlock.after($finishOptionsBlock);
    }


    return {
        addFinishOptionLinks
    }

});
