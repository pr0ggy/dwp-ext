define(function (require) {

    const u = require('app/util');
    const dwpConfig = {};
    const jsdelivrVersion = 'e3e3b2891a33c9c4b0218ad7243c15fe219b3441';


    const pathForFinishSwatchImage = u.absPathGen(
        `https://cdn.jsdelivr.net/gh/pr0ggy/dwp-ext@${jsdelivrVersion}`,
        ['img', 'finish-swatches-small']
    );

    dwpConfig.finishOptionSwatchURLMap = {
        'Asian Night': pathForFinishSwatchImage('asian-night.png'),
        'Cafelle': pathForFinishSwatchImage('cafelle.png'),
        'Cafelle + Silver Oak Ply': pathForFinishSwatchImage('cafelle__silver-oak-ply.png'),
        'Forged Steel + Silver Alchemy': pathForFinishSwatchImage('forged-steel__silver-alchemy.png'),
        'Grey Elm': pathForFinishSwatchImage('grey-elm.png'),
        'Neowalnut': pathForFinishSwatchImage('neowalnut.png'),
        'Nightscape': pathForFinishSwatchImage('cafelle.png'),
        'Phantom Charcoal + White Driftwood': pathForFinishSwatchImage('phantom-charcoal__white-driftwood.png'),
        'Studio Teak': pathForFinishSwatchImage('studio-teak.png'),
        'White Cypress': pathForFinishSwatchImage('white-cypress.png')
    };

    const dwpLaminateCollectionAbsURL = u.absPathGen('http://www.duboiswood.com/hospitality/laminate-collections', []);

    dwpConfig.laminateGroupAvailableFinishMap = {
        'urban-jazz': {
            'Asian Night': dwpLaminateCollectionAbsURL('urban-jazz-asian-night'),
            'Cafelle': dwpLaminateCollectionAbsURL('urban-jazz-cafelle'),
            'Cafelle + Silver Oak Ply': dwpLaminateCollectionAbsURL('urban-jazz-cafelle-silver-oak-ply'),
            'Forged Steel + Silver Alchemy': dwpLaminateCollectionAbsURL('urban-jazz-forged-steel-silver-alchemy')
        },

        'independence': {
            'Grey Elm': dwpLaminateCollectionAbsURL('independence-grey-elm'),
            'Neowalnut': dwpLaminateCollectionAbsURL('independence-neowalnut'),
            'Nightscape': dwpLaminateCollectionAbsURL('independence-nightscape'),
            'Phantom Charcoal + White Driftwood': dwpLaminateCollectionAbsURL('independence-phantom-charcoal-white-driftwood'),
            'Studio Teak': dwpLaminateCollectionAbsURL('independence-studio-teak'),
            'White Cypress': dwpLaminateCollectionAbsURL('independence-white-cypress')
        }
    };


    return dwpConfig;
});

