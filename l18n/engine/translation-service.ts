import { Language, unwrap, ValueProvider } from "../ability.types";
import { translate, translateAll } from "../translate";
 
export class TranslationService {
  constructor() {}

  translate(
    source: Language,
    language: Language,
    value: ValueProvider[] | string,
    current_values: Record<string, string>
  ): Promise<string> {
    return translate(value, source, language, current_values);
  }

  translateAll(
    source: Language,
    value: ValueProvider[] | string,
    current_values: Record<Language, Record<string, string>>
  ): Promise<Record<Language, string>> {
 

    return translateAll(value, source, current_values);
  }
}
