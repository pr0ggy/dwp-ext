define(function (require) {

    const R = require('lib/ramda');
    const dwpConfig = {};


    // const pathForFinishSwatchImage = R.concat(require.toUrl('img/finish-swatches-small/'));
    const pathForFinishSwatchImage = R.concat('https://static1.squarespace.com/static/54cfcf42e4b00391681fd6da/5c361bd3562fa789817c4ac4/');

    dwpConfig.finishOptionSwatchURLMap = {
        'Asian Night': pathForFinishSwatchImage('5c361bf04ae2378354d1535b/1547050048732/asian-night.png'),
        'Cafelle': pathForFinishSwatchImage('5c361bf04d7a9cf0c1529ffe/1547050064040/cafelle.png'),
        'Cafelle + Silver Oak Ply': pathForFinishSwatchImage('5c361bf12b6a2881c80b9ca9/1547050075139/cafelle__silver-oak-ply.png'),
        'Forged Steel + Silver Alchemy': pathForFinishSwatchImage('5c361bf1758d460f9f45e139/1547050133160/forged-steel__silver-alchemy.png'),
        'Grey Elm': pathForFinishSwatchImage('5c361bf103ce64d25d124f6c/1547050142684/grey-elm.png'),
        'Neowalnut': pathForFinishSwatchImage('5c361bf1562fa789817c4cf6/1547050186332/neowalnut.png'),
        'Nightscape': pathForFinishSwatchImage('5c361bf04d7a9cf0c1529ffe/1547050064040/cafelle.png'),
        'Phantom Charcoal': pathForFinishSwatchImage('5c361bf2aa4a99f34b20722a/1547050194114/phantom-charcoal.png'),
        'Phantom Charcoal + White Driftwood': pathForFinishSwatchImage('5c361bf2575d1f4897255058/1547050208299/phantom-charcoal__white-driftwood.png'),
        'Portico Teak': pathForFinishSwatchImage('5c361bf24ae2378354d15397/1547050218138/portico-teak.png'),
        'Studio Teak': pathForFinishSwatchImage('5c361bf24d7a9cf0c152a00d/1547050353004/studio-teak.png'),
        'White Cypress': pathForFinishSwatchImage('5c361bf2758d460f9f45e169/1547050359413/white-cypress.png')
    };

    const dwpLaminateCollectionAbsURL = R.concat('http://www.duboiswood.com/hospitality/laminate-collections/');

    dwpConfig.laminateGroupAvailableFinishMap = {

        'daniel': {
            'Portico Teak': dwpLaminateCollectionAbsURL('daniel-portico-teak'),
            'Studio Teak': dwpLaminateCollectionAbsURL('daniel-studio-teak')
        },

        'independence': {
            'Grey Elm': dwpLaminateCollectionAbsURL('independence-grey-elm'),
            'Neowalnut': dwpLaminateCollectionAbsURL('independence-neowalnut'),
            'Nightscape': dwpLaminateCollectionAbsURL('independence-nightscape'),
            'Phantom Charcoal + White Driftwood': dwpLaminateCollectionAbsURL('independence-phantom-charcoal-white-driftwood'),
            'Studio Teak': dwpLaminateCollectionAbsURL('independence-studio-teak'),
            'White Cypress': dwpLaminateCollectionAbsURL('independence-white-cypress')
        },

        'urban-jazz': {
            'Asian Night': dwpLaminateCollectionAbsURL('urban-jazz-asian-night'),
            'Cafelle': dwpLaminateCollectionAbsURL('urban-jazz-cafelle'),
            'Cafelle + Silver Oak Ply': dwpLaminateCollectionAbsURL('urban-jazz-cafelle-silver-oak-ply'),
            'Forged Steel + Silver Alchemy': dwpLaminateCollectionAbsURL('urban-jazz-forged-steel-silver-alchemy')
        }

    };


    return dwpConfig;

});

