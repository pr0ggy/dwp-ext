define(function (require) {

    const u = require('app/util');
    const dwpConfig = {};


    const pathForSwatch = u.jsDelivrAbsURL(['img', 'finish-swatches-small']);

    dwpConfig.finishOptionSwatchURLMap = {
        'Asian Night': pathForSwatch('asian-night.png'),
        'Cafelle': pathForSwatch('cafelle.png'),
        'Cafelle + Silver Oak Ply': pathForSwatch('cafelle__silver-oak-ply.png'),
        'Forged Steel + Silver Alchemy': pathForSwatch('forged-steel__silver-alchemy.png')
    };

    const dwpLaminateCollectionAbsURL = u.absPathGen('http://www.duboiswood.com/hospitality/laminate-collections', []);

    dwpConfig.laminateGroupAvailableFinishMap = {
        'urban-jazz': {
            'Asian Night': dwpLaminateCollectionAbsURL('urban-jazz-asian-night'),
            'Cafelle': dwpLaminateCollectionAbsURL('urban-jazz-cafelle'),
            'Cafelle + Silver Oak Ply': dwpLaminateCollectionAbsURL('urban-jazz-cafelle-silver-oak-ply'),
            'Forged Steel + Silver Alchemy': dwpLaminateCollectionAbsURL('urban-jazz-forged-steel-silver-alchemy')
        }
    };


    return dwpConfig;
});

