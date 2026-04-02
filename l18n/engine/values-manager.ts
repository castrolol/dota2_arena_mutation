import path from "path";
import { Language } from "../ability.types";
import { existsSync, readFileSync, writeFileSync } from "fs";

export class ValuesManager {


    kvPath: string;
    values: Record<string, string>;
    dirty: boolean = false;

    constructor(public readonly language: Language) {
        this.kvPath = path.join(__dirname, "../raw-files", `${language}.raw.json`)
        if (!existsSync(this.kvPath)) {
            writeFileSync(this.kvPath, JSON.stringify({
                language,
                values: {}
            }))
        }

        const contents = readFileSync(this.kvPath, "utf8")
        const json = JSON.parse(contents);
        this.values = json.values;
    }

    changed(key: string, newValue: string) {
        if (key in this.values === false || !this.values[key]) return true;
        return this.values[key].trim().toLowerCase() !== newValue.trim().toLowerCase()
    }

    updates: Record<string, string> = {}

    markForUpdate(key: string, newValue: string) {
        this.updates[key] = newValue;
    }

    commit() {
        for (let key in this.updates) {
            this.update(key, this.updates[key])
        }
        this.save()
    }

    update(key: string, newValue: string) {
        if (!this.changed(key, newValue)) return;
        this.dirty = true;
        this.values[key] = newValue;
    }

    save() {
        if (!this.dirty) return;
        this.dirty = false;
        writeFileSync(this.kvPath, JSON.stringify({
            language: this.language,
            values: this.values
        }, null, 4))
    }

    compile(basePath: string, filenameTemplate: string) {
        const name = filenameTemplate.replace("{lang}", this.language)
        const finalPath = path.join(basePath, name);
        const values = this.values
        const lines: string[] = [];
        for (let key in values) {
            const value = values[key].split("\n").join("\\n").split('"').join('\\"')
            lines.push(`        "${key}"        "${value}"`)
        }

        let template = `"lang"
{
    "Language"    "${this.language}"
    "Tokens"
    {
${lines.join("\n")}
    }
}`

        writeFileSync(finalPath, template)
    }

}