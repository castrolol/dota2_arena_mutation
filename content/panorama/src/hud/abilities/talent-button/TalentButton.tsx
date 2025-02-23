import { useMemo, useState } from 'react';
import { useGameEvent } from 'react-panorama-x'; 
import { emitLocalEvent } from '../../../utils/event-bus';

export function TalentButton() {
    const hasAbilityPoints = true;
    const isMyHero = true;

    return (
        <Button
            onactivate={
                isMyHero
                    ? () => {
                          emitLocalEvent('talent_button_pressed', { player_id: Players.GetLocalPlayer() });
                      }
                    : undefined
            }
            className={`TalentButton ${hasAbilityPoints ? 'available_upgrade' : ''}`}
            style={{
                width: '62px',
                height: '62px' 
            }}
        >
            <Panel className="FacetBackground LabelBackground" hittest={false} />
            <Panel className="FacetContainer">
                <Panel className="FacetBackgroundContainer" hittest={false}>
                    <Panel className="FacetBackground" hittest={false} />
                    <Panel className="FacetBackgroundTexture" hittest={false} />
                </Panel>
                <Panel className="IconContainer" hittest={false}>
                    <Panel className="FacetIcon" />
                    <Panel className="FacetIconGlow" />
                    <Panel className="FacetIconDisabled" />
                </Panel>
            </Panel>

            {/* <Image
                className="TalentButtonBase"
                style={{ width: '62px', height: '62px' }}
                src="file://{images}/custom_game/talents_button_normal.png"
            />
            {hasTalent ? (
                <Image
                    className="TalentButtonGlow"
                    style={{ width: '62px', height: '62px' }}
                    src="file://{images}/custom_game/talents_button_glow.png"
                />
            ) : null} */}
        </Button>
    );
}
