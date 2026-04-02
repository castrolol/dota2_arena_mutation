import { z } from "zod";
import { OpenAI } from "openai";
import { zodToJsonSchema } from "zod-to-json-schema";
import { readFileSync } from "fs";
import path from "path";
const glossario = readFileSync(path.join(__dirname, "glossario.txt"), "utf8");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const TranslationManySchema = z.object({
  translations: z.object({
    "pt-BR": z.string().describe("O texto traduzido em português brasileiro"),
    es: z.string().describe("O texto traduzido em espanhol"),
    ru: z.string().describe("O texto traduzido em russo"),
    "zh-CN": z.string().describe("O texto traduzido em mandarim"),
    "en-US": z.string().describe("O texto traduzido em inglês"),
  }),
});

export async function translateAllAI(
  text: string,
  sourceLang: string,
  targetLangs: string[]
): Promise<Record<string, string>> {
  const system = `
Você é um tradutor profissional de jogos. Use sempre o glossário abaixo para manter consistência terminológica:

${glossario}

Quando receber um pedido de tradução, siga estritamente estas regras:

1. **Formato de entrada:**  
   Receberá um JSON assim:  
   \`\`\`
   {
     "text": "…",
     "sourceLanguage": "pt-BR",
     "targetLanguages": ["en-US","es","ru","zh-CN"]
   }
   \`\`\`

2. **Formato de saída:**  
   Retorne **apenas** um objeto JSON com esta estrutura **sem texto adicional**:  
   \`\`\`
   {
     "translations": {
       "pt-BR": "…",
       "en-US": "…",
       "es": "…",
       "ru": "…",
       "zh-CN": "…"
     }
   }
   \`\`\`

3. **Regras de tradução:**  
   - Variáveis entre chaves '{}': **não traduzir, manter exatamente como aparecem** (entre chaves e com o mesmo nome).  
   - Case-sensitive: preserve **maiúsculas**, **minúsculas** e **Title Case** do original.  
   - Use o glossário para termos específicos do jogo.  
   - Não acrescente, remova ou renomeie nenhuma chave do JSON.

4. **Saída estrita:**  
   - **NÃO** explique, **NÃO** comente, **NÃO** responda em texto livre.  
   - **APENAS** retorne o JSON acima.

EXEMPLO DE USO  
Entrada:
\`\`\`
{ 
  "text": "testando {color#ff00aa} e {endcolor}", 
  "sourceLanguage": "pt-BR", 
  "targetLanguages": ["en-US","es","ru","zh-CN"] 
}
\`\`\`

Saída esperada:
\`\`\`
{
  "translations": {
    "pt-BR": "testando {color#ff00aa} e {endcolor}",
    "en-US": "testing {color#ff00aa} and {endcolor}",
    "es": "probando {color#ff00aa} y {endcolor}",
    "ru": "тестирование {color#ff00aa} и {endcolor}",
    "zh-CN": "测试 {color#ff00aa} 和 {endcolor}"
  }
}
\`\`\`
`;
  const response = await openai.chat.completions.create({
    model: "gpt-5-nano",
    messages: [
      { role: "system", content: system },
      {
        role: "user",
        content: JSON.stringify({
          text,
          sourceLanguage: sourceLang,
          targetLanguages: targetLangs,
        }),
      },
    ],
    tools: [
      {
        type: "function",
        function: {
          name: "translated_text",
          description: "Recebe os textos traduzidos",
          parameters: zodToJsonSchema(TranslationManySchema),
        },
      },
    ],
  });

  const result = JSON.parse(
    response.choices?.[0].message.content ?? "{}"
    // response.choices?.[0].message.tool_calls?.[0].function.arguments ?? "{}"
  );

  return result.translations;
}
