const fs = require("fs/promises")
const { glob } = require("glob")
const path = require("path")

async function startAbilities() {
    const items = await glob("./res/**/*.loc.ts", { cwd: path.join(__dirname, "../localization") })

     // console.log(items)

    const contents = `
   import { AbilityLocalizationMounted } from "./loc_utils";
   ${items.map((item, index) => {
        return `import ${path.basename(item, ".loc.ts")}_${index} from "./${item.replace(/\\/gi, "/").replace(".loc.ts", ".loc")}"`
    }).join("\n")}
   
   export const items: Array<() => AbilityLocalizationMounted> = [
    ${items.map((item, index) => {
        return `${path.basename(item, ".loc.ts")}_${index}`
    }).join(",\n")}
   ]
       `

    await fs.writeFile(path.join(__dirname, "../localization/items.ts"), contents)
}

async function startModifiers() {
    let items = await glob("./**/*.loc.ts", { cwd: path.join(__dirname, "../localization/modifiers") })

     // console.log(items)

    const contents = `
import { ModifierLocalizationMounted } from '../loc_utils'

   ${items.map((item, index) => {
        return `import ${item.replace(".loc.ts", "").replace(/[^a-zA-Z0-9_]/gi, "_")}_${index} from "./${item.replace(/\\/gi, "/").replace(".loc.ts", ".loc")}"`
    }).join("\n")}
   
export const items: Array<() => ModifierLocalizationMounted[]> = [
    ${items.map((item, index) => {
        return `${item.replace(".loc.ts", "").replace(/[^a-zA-Z0-9_]/gi, "_")}_${index}`
    }).join(",\n")}
]`

    await fs.writeFile(path.join(__dirname, "../localization/modifiers/index.ts"), contents)
}

async function startPlains(){
    const items = await glob("./**/*.loc.ts", { cwd: path.join(__dirname, "../localization/plain") })

    // console.log(items)

   const contents = `
import { PlainLocalizationMounted } from '../loc_utils'

  ${items.map((item, index) => {
       return `import ${item.replace(".loc.ts", "").replace(/[^a-zA-Z0-9_]/gi, "_")}_${index} from "./${item.replace(/\\/gi, "/").replace(".loc.ts", ".loc")}"`
   }).join("\n")}
  
export const items: Array<() => PlainLocalizationMounted[]> = [
   ${items.map((item, index) => {
       return `${item.replace(".loc.ts", "").replace(/[^a-zA-Z0-9_]/gi, "_")}_${index}`
   }).join(",\n")}
]`

   await fs.writeFile(path.join(__dirname, "../localization/plain/index.ts"), contents)
}

async function start() {
    await startModifiers()
    await startAbilities()
    await startPlains()
}

 start()

module.exports = start;