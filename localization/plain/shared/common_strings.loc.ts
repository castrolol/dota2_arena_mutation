import { L, Language, PlainLocalizationMounted } from '../../loc_utils';

export default function plainLocs(): PlainLocalizationMounted[] {
    return [
        {
            source: Language.English,
            items: [
                { key: 'CUSTOM_path_of', value: L`Path of` }, 
            ],
        }, 
    ];
}
