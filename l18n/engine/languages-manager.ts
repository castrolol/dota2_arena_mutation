import path from "path";
import { Language, ValueProvider, plain } from "../ability.types";
import { transformString } from "../build_string";
import { TranslationService } from "./translation-service";
import { ValuesManager } from "./values-manager";
const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export class LanguagesManager {
  languages: Map<Language, ValuesManager>;

  translationService: TranslationService;

  constructor(languages: Language[]) {
    this.languages = new Map<Language, ValuesManager>();

    for (let language of languages) {
      this.languages.set(language, new ValuesManager(language));
    }

    this.translationService = new TranslationService();
  }

  async update(tokens: Record<Language, Record<string, string>>) {
    for (let language in tokens) {
      const manager = this.languages.get(language as Language)!;
      for (let key in tokens[language]) {
        const value = tokens[language][key];
        manager.update(key, value);
      }
    }
  }

  async consume(
    source: Language,
    key: string,
    wrappedValue: ValueProvider[] | string,
    modifier: boolean = false,
    skipTranslation: boolean = false
  ) {
    const sourceManager = this.languages.get(source)!;

    const value = transformString(
      plain(wrappedValue, sourceManager.values),
      modifier
    );

    if (!sourceManager.changed(key, value)) {
      return;
    }
    sourceManager.markForUpdate(key, value);

    const entries = [...this.languages.values()];

    for (let entry of entries) {
      if (entry === sourceManager) continue;
      let translated = "";
      if (skipTranslation) {
        translated = transformString(
          plain(wrappedValue, entry.values),
          modifier
        );
      } else {
        console.log(
          "Traduzindo ",
          key,
          " de ",
          source,
          " para ",
          entry.language
        );
        //await delay(1_000)
        translated = await this.translationService.translate(
          source,
          entry.language,
          wrappedValue,
          entry.values
        );

        console.log("Traduzido", entry.language);
      }
      const result = transformString(translated, modifier);
      entry.markForUpdate(key, result);
    }

    for (let entry of entries) {
      entry.commit();
    }
  }

  async consumeAllLangs(
    source: Language,
    key: string,
    wrappedValue: ValueProvider[] | string,
    modifier: boolean = false,
    skipTranslation: boolean = false
  ) {
    const sourceManager = this.languages.get(source)!;

    const value = transformString(
      plain(wrappedValue, sourceManager.values),
      modifier
    );

    if (!sourceManager.changed(key, value)) {
      return;
    }
    sourceManager.markForUpdate(key, value);

    const entries = [...this.languages.values()];

    let translated = "";
    if (skipTranslation) {
      for (let entry of entries) {
        const translated = transformString(
          plain(wrappedValue, entry.values),
          modifier
        );
        const result = transformString(translated, modifier);
        entry.markForUpdate(key, result);
      }
    } else {
      console.log("Traduzindo ", key, " de ", source); //, " para ", entry.language)
      //await delay(1_000)
      const translatedItems = await this.translationService.translateAll(
        source,
        wrappedValue,
        entries.reduce((acc, x) => {
          acc[x.language] = x.values;
          return acc;
        }, {} as Record<Language, Record<string, string>>)
      );

      for (let entry of entries) {
        if (entry === sourceManager) continue;

        const translated = translatedItems[entry.language];
        if (!translated) {
          console.log("Nao encontrou tradução para " + entry.language);
          continue;
        }

        console.log("Traduzido", entry.language);
        const result = transformString(translated, modifier);

        entry.markForUpdate(key, result);
      }
    }

    for (let entry of entries) {
      entry.commit();
    }
  }

  saveRaw() {
    const entries = [...this.languages.values()];

    for (let entry of entries) {
      entry.save();
    }
  }

  compile(basePath: string, filenameTemplate: string) {
    const entries = [...this.languages.values()];

    for (let entry of entries) {
      entry.compile(path.join(__dirname, "..", basePath), filenameTemplate);
    }
  }
}
