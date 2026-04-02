import { z } from "zod";
import { Ollama } from "ollama";
import { zodToJsonSchema } from "zod-to-json-schema";

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

async function translate(text: string, sourceLang: string, targetLang: string) {
  const system = `-Goal-
Translate the following text from ${sourceLang} to ${targetLang}.

-Steps-
1. Determine the target language given by its language code.
2. Translate the given text using the rules below.

-Rules-
CRITICAL: Code variables in curly braces like {field}, {min}, {max} must:
1. Stay in the input language - never translate the text inside braces
2. Remain exactly as they are with the same name
3. Keep the curly braces intact
4. Be placed in a grammatically correct position
5. Just Answer with the translated content


 `;

  const response = await ollama.chat({
    model: "aya-expanse:32b",
    messages: [
      { role: "system", content: system },
      { role: "user", content: `${text}` },
    ],
    format: zodToJsonSchema(TranslationSchema),
    options: {
      temperature: 0, // make the result more deterministic
    },
  });

  console.log({ response });
  const result = TranslationSchema.parse(JSON.parse(response.message.content));

  return result.translation;
}

(async () => {
  const result = await translate("hello", "en", "es");
  console.log({ result });
})();
