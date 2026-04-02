import { z } from "zod";
import { Ollama } from "ollama";
import { zodToJsonSchema } from "zod-to-json-schema";
import { readFileSync } from "fs";
const glossario = readFileSync("./glossario.txt", "utf8");
console.log(glossario);

const ollama = new Ollama({
  host: process.env.OLLAMA_HOST ?? "http://127.0.0.1:11434",
  fetch,
});
const TranslationSchema = z.object({
  translation: z
    .string()
    .describe(
      "The translated text without any escape characters or extra quotes"
    ),
});
const TranslationManySchema = z.object({
  translation: z.record(
    z.string().describe("The language target of the translation"),
    z
      .string()
      .describe(
        "The translated text without any escape characters or extra quotes"
      )
  ),
});
export async function translateAI(
  text: string,
  sourceLang: string,
  targetLang: string
) {
  const system = `-Goal-
Translate the following text from ${sourceLang} to ${targetLang}.

-Steps-
1. Determine the target language given by its language code.
2. Translate the given text using the rules below.

-Rules-
CRITICAL: Code variables in curly braces like {field}, {min}, {max} must:
1. Stay in the input language - never translate the text inside braces!!
2. Remain exactly as they are with the same name!!
3. Keep the curly braces intact!!
4. Be placed in a grammatically correct position!!
5. DON'T TRANSLATE CONTENT INSIDE THE CURLY BRACES!
example: testing {color#ff00aa} and {endcolor}
result: testando {color#ff00aa} e {endcolor}

CRITICAL: Just Answer with the translated content
MUST HAVE, CRITICAL: You NEED TO KEEP lowercase, uppercase or title case, for EVERY TIME that you see it in original language, put it on other languages too!

example: MANA Drain usage
result: 
{
  "pt-BR": "uso da Drenagem de MANA",
  // same pattern for other itens
}
MUST HAVE, CRITICAL: When you will translate, you MUST use this contexts:
${glossario}
 `;

  const response = await ollama.chat({
    model: "7shi/mistral-small:22b-instruct-2409-iq3_M",
    messages: [
      { role: "system", content: system },
      { role: "user", content: `${text}` },
    ],
    keep_alive: 10,
    format: zodToJsonSchema(TranslationSchema),
    options: {
      temperature: 0, // make the result more deterministic
    },
  });

  // console.log({ response });
  const result = TranslationSchema.parse(JSON.parse(response.message.content));

  return result.translation;
}

export async function translateAllAI(
  text: string,
  sourceLang: string,
  targetLangs: string[]
): Promise<Record<string, string>> {
  const system = `-Goal-
Translate the following text from ${sourceLang} to the languages ${targetLangs.join(
    ", "
  )}.

-Steps-
1. Determine the target language given by its language code.
2. Translate the given text using the rules below.

-Rules-
CRITICAL: Code variables in curly braces like {field}, {min}, {max} must:
1. Stay in the input language - never translate the text inside braces!!
2. Remain exactly as they are with the same name!!
3. Keep the curly braces intact!!
4. Be placed in a grammatically correct position!!
5. DON'T TRANSLATE CONTENT INSIDE THE CURLY BRACES!
example: testing {color#ff00aa} and {endcolor}
result: 
{
  "pt-BR": "testando {color#ff00aa} e {endcolor}",
  "es": "testando {color#ff00aa} e {endcolor}",
  "ru": "тестирование {color#ff00aa} и {endcolor}",
  "zh-CN": "测试 {color#ff00aa} 和 {endcolor}"
}

CRITICAL: Just Answer with the translated content
MUST HAVE, CRITICAL: You NEED TO KEEP lowercase, uppercase or title case, for EVERY TIME that you see it in original language, put it on other languages too!

example: MANA Drain usage
result: 
{
  "pt-BR": "uso da Drenagem de MANA",
  // same pattern for other itens
}
  
MUST HAVE, CRITICAL: When you will translate, you MUST use this contexts:
${glossario}
 `;

  const response = await ollama.chat({
    model: "7shi/mistral-small:22b-instruct-2409-iq3_M",
    keep_alive: 10,
    messages: [
      { role: "system", content: system },
      //       { role: "user", content: "%MOVE SPEED SLOW"},
      //       { role: "assistant", content: `{
      //   "pt-BR": "LENTIDÃO DE VELOCIDADE DE MOVIMENTO",
      //   "es": "lentitud en la velocidad de movimiento",
      //   "ru": "замедление скорости движения",
      //   "zh-CN": "移动速度减慢"
      // }`},
      //       { role: "user", content: `YOU FORGOT TO KEEP THE % IN THE RIGHT PLACE, YOU MUST DO IT, KEEP IT
      //         and KEEP THE CASE!
      //         AND DON'T ADD EXTRA SYMBOLS, I DON'T WANNA SEE % ON PLACES THAT DOESN'T EXIST ON ORIGINAL!

      //         example: %MOVE SPEED SLOW

      //         {
      //   "pt-BR": "%LENTIDÃO DE VELOCIDADE DE MOVIMENTO",
      //   "es": "%LENTITUD EN LA VELOCIDAD DE MOVIMIENTO",
      //   "ru": "%ЗАМЕДЛЕНИЕ СКОРОСТИ ДВИЖЕНИЯ",
      //   "zh-CN": "%移动速度减慢"
      // }

      // I'LL SEND ANOTHER TEXT, FOLLOW THE FUCKIN RULES!
      //         ` },
      { role: "user", content: `${text}` },
    ],
    format: zodToJsonSchema(TranslationManySchema),
    options: {
      temperature: 0, // make the result more deterministic
    },
  });

  console.log({ response });
  const result = TranslationManySchema.parse(
    JSON.parse(response.message.content)
  );

  return result.translation;
}
