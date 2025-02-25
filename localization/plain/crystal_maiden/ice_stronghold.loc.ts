import { L, Language, PlainLocalizationMounted } from '../../loc_utils';

export default function plainLocs(): PlainLocalizationMounted[] {
    return [
        {
            source: Language.English,
            items: [
                { key: 'CUSTOM_crystal_maiden_ice_stronghold', value: L`Ice Stronghold` },
                { key: 'CUSTOM_crystal_maiden_ice_stronghold_frosty_fortress', value: L`Frosty Fortress` },
                { key: 'CUSTOM_crystal_maiden_frost_mage', value: L`Frost Mage` },
                { key: 'CUSTOM_crystal_maiden_frost_mage_sudden_freeze', value: L`Sudden Freeze` },
                { key: 'CUSTOM_crystal_maiden_frost_mage_frost_archmage', value: L`Frost Archmage` },
                { key: 'CUSTOM_crystal_maiden_snow_walker', value: L`Snow Walker` },
                { key: 'CUSTOM_crystal_maiden_snow_walker_snow_hawkeye', value: L`Snow Hawkeye` },
                { key: 'CUSTOM_crystal_maiden_snow_walker_snow_shade', value: L`Snow Shade` },
            ],
        },
        {
            source: Language.Brazilian,
            items: [{ key: 'CUSTOM_crystal_maiden_ice_stronghold_freezing_mountain', value: L`Montanha Gélida` }],
        },
    ];
}
