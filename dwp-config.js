define(function (require) {

    const u = require('app/util');
    const dwpConfig = {};
    const jsdelivrVersion = '7ea975fa28b026999fa1c5f724426de3014123c2';

    const pathForFinishSwatchImage = u.absPathGen(
        `https://cdn.jsdelivr.net/gh/pr0ggy/dwp-ext@${jsdelivrVersion}`,
        ['img', 'finish-swatches-small']
    );

    dwpConfig.finishOptionSwatchURLMap = {
        'Asian Night': pathForFinishSwatchImage('asian-night.png'),
        'Cafelle': pathForFinishSwatchImage('cafelle.png'),
        'Cafelle + Silver Oak Ply': pathForFinishSwatchImage('cafelle__silver-oak-ply.png'),
        'Forged Steel + Silver Alchemy': pathForFinishSwatchImage('forged-steel__silver-alchemy.png')
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

