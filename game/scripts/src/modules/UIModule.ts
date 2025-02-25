let _sequenceNumber = 0;

export const ErrorMessages = {
    Talents: {
        NotFound: 'Talent not found',
        NotAvailable: 'Talent not available',
        InvalidTalentType: 'Invalid talent type',
        MaxLevel: 'Talent is already at max level',
    }
}
type ErrorMessages = typeof ErrorMessages;

export class UIModule {
    notifyErrorRaw(message: string) {
        _sequenceNumber++;
        FireGameEvent('dota_hud_error_message', { message: message, reason: 80, sequenceNumber: _sequenceNumber });
    }

    notifyError<TKey extends keyof ErrorMessages>(containerKey: TKey, messageKey: keyof ErrorMessages[TKey]) {
     
        this.notifyErrorRaw(ErrorMessages[containerKey][messageKey] as string);
    }

    
}
