import { talent_antimage_shadow_dancer_bodyguard_of_shadows } from "./talents/talent_antimage_shadow_dancer_bodyguard_of_shadow";
import { talent_antimage_shadow_dancer_shadow } from "./talents/talent_antimage_shadow_dancer_shadow";
import { talent_antimage_shadow_dancer_zipzap } from "./talents/talent_antimage_shadow_dancer_zipzap";
import { talent_antimage_shadow_dancer_umbrageous_mana } from "./talents/talent_antimage_shadow_dancer_umbrageous_mana";


export const ShadowDancer = {
    heroName: "antimage",
    name: "shadow_dancer",
    talents: {
        shadow: talent_antimage_shadow_dancer_shadow,
        bodyguard_of_shadow: talent_antimage_shadow_dancer_bodyguard_of_shadows,
        zipzap: talent_antimage_shadow_dancer_zipzap,
        umbrageous_mana: talent_antimage_shadow_dancer_umbrageous_mana
    },
    increments: {
    }
}

export default ShadowDancer;