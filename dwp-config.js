define(function (require) {

    const R = require('lib/ramda');
    const dwpConfig = {};


    const pathForFinishSwatchImage = R.concat(require.toUrl('img/finish-swatches-small/'));

    dwpConfig.finishOptionSwatchURLMap = {
        'Asian Night': pathForFinishSwatchImage('asian-night.png'),
        'Cafelle': pathForFinishSwatchImage('cafelle.png'),
        'Cafelle + Silver Oak Ply': pathForFinishSwatchImage('cafelle__silver-oak-ply.png'),
        'Forged Steel + Silver Alchemy': pathForFinishSwatchImage('forged-steel__silver-alchemy.png'),
        'Grey Elm': pathForFinishSwatchImage('grey-elm.png'),
        'Neowalnut': pathForFinishSwatchImage('neowalnut.png'),
        'Nightscape': pathForFinishSwatchImage('cafelle.png'),
        'Phantom Charcoal + White Driftwood': pathForFinishSwatchImage('phantom-charcoal__white-driftwood.png'),
        'Portico Teak': pathForFinishSwatchImage('portico-teak.png'),
        'Studio Teak': pathForFinishSwatchImage('studio-teak.png'),
        'White Cypress': pathForFinishSwatchImage('white-cypress.png')
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

