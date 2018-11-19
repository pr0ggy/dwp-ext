<script src="//cdnjs.cloudflare.com/ajax/libs/ramda/0.25.0/ramda.min.js"></script>

<script data-main="https://cdn.jsdelivr.net/gh/pr0ggy/dwp-ext@HEAD/bootstrap.js" src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"></script>

<script> 
var select = function (selector, contextElement) {
    var context = contextElement || document;
    return context.querySelector(selector);
};

var selectAll = function (selector, contextElement) {
    var context = contextElement || document;
    return context.querySelectorAll(selector);
};

var element = document.getElementById.bind(document);

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

var setDisplay = R.curry(function(displayType, element) {
    element.style.display = displayType;
});

var titleContains = R.curry(function(filterString, slide) {
    return select('.image-slide-title', slide).innerText.toLowerCase().indexOf(filterString) > -1;
});

var doFilterAfterDelay = R.curry(function(slidesToFilter, e) {
    var filterTextBox = e.target;
    // alert('doing filter after delay');
    clearTimeout(filterTextBox.filterTimer);

    function doFilter() {
        var filterString = filterTextBox.value.toLowerCase();
        console.log('filtering on value: "'+filterString+'"');

        R.forEach(
            R.ifElse(
                titleContains(filterString),
                setDisplay('block'),
                setDisplay('none')
            ),
            slidesToFilter
        );
    }

    filterTextBox.filterTimer = setTimeout(doFilter, 500);
});

function addFilterTextBoxToURL(urlRegex) {
    if (urlRegex.test(window.location.href) == false) return;
    // quick/dirty skip of hampton-collections...stacked gallery format doesnt have same HTML structure
    // will have to revisit
    if (window.location.href.indexOf('hampton-collections') > -1) return;

    var slideNodeList = selectAll('.slide');
    // Ramda list fns don't play nicely with NodeList instances...convert to array
    var slides = [];
    for (var i = 0; i < slideNodeList.length; i++) slides.push(slideNodeList[i]);

    /*
        NOTE
        This is a fairly shaky way to grab header but not sure what choice we have at the moment...
        Block IDs vary between pages so no way to reliably grab the header by ID without injecting
        this JS into every page manually and hard-coding...may have to end up doing that but we'll
        try this first.
    */
    var headerBlock = select('#page .sqs-block.html-block.sqs-block-html');

    var searchBlock = document.createElement('div');
    searchBlock.className = 'search-filter-block';

    var searchTextBox = document.createElement('input');
    searchTextBox.type = 'text';
    searchTextBox.className = 'search-filter-input';
    searchTextBox.placeholder = 'Search Collections';
    searchTextBox.filterTimer = null;
    searchTextBox.oninput = doFilterAfterDelay(slides);

    searchBlock.appendChild(searchTextBox);

    insertAfter(headerBlock, searchBlock);
}

addFilterTextBoxToURL(/-collections\/?$/);

</script>
