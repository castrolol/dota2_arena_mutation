import { OpenAI } from "openai";

const openai = new OpenAI({
  baseURL: process.env.DEEPSEEK_BASE_URL ?? "https://api.deepseek.com/v1",
  apiKey: process.env.DEEPSEEK_API_KEY,
});

// Definição da ferramenta de tradução com tipagem correta
const tools = [
  {
    type: "function" as const, // Define explicitamente o tipo
    function: {
      name: "translated_text",
      description: "Recebe o texto traduzido",
      parameters: {
        type: "object",
        properties: {
          translatedText: { type: "string", description: "O texto a já traduzido" },
        },
        required: ["text", "targetLanguage"],
      },
    },
  },
];

async function translateText(text: string, targetLanguage: string, params: Record<string, string>) {
  try {
    const response = await openai.chat.completions.create({
      model: "deepseek-chat",
      messages: [
        {
          role: "system",
          content:
            `
Você é um tradutor profissional que localiza games, você usa a função translated_text para devolver o texto traduzido NA LINGUAGE SOLICITADA.
Você recebera o contedo da seguinte forma.
Idioma Alvo: "Aqui vai o idioma pra qual será traduzido";
Conteudo: "Aqui vai o texto original";
Parametros: 
   - Param1: "Aqui vai o parametro 1 que sera colocado no texto final APÓS a tradução";
  
Você de hipotese alguma deve traduzir os parametros, somente substituir ele APÓS a tradução e passar substituido para a função.
Caso existe texto entre colchetes que não tem parametros, apenas *REMOVA OS COLCHETES* e *NÃO TRADUZA*.

Siga os moldes do exemplo abaixo, fielmente:

Idioma Alvo: "en";
Conteudo: "Digá ola para [param1], veja através da [Pentana]";
Parametros: 
   - Param1: "O Mundo";

Resultado: "Say hello to O Mundo, see throught the Pentana";

COISAS IMPORTANTES: Traduzir, trocar os parametros e remover os parenteses quando necessário!
`,
        },
        {
          role: "user",
          content: `
Idioma Alvo: "${targetLanguage}";
Conteudo: "${text}";
Parametros: 
${Object.entries(params).map(([index, value]) => `  - Param${index}: "${value}"`).join("\n")} 
`,
        },
      ],
      tools,
      tool_choice: { type: "function", function: { name: "translated_text" } },
    });

    const toolCall = response.choices[0]?.message?.tool_calls?.[0];

    if (toolCall) {
      const args = JSON.parse(toolCall.function.arguments);
      return args;
    }

    return "Erro ao obter tradução.";
  } catch (error) {
    console.error("Erro ao traduzir:", error);
    return null;
  }
}

// Exemplo de uso
(async () => {
  const text = "[Phantom Assassin] blurs her body, disjointing incoming projectiles, increasing her movement speed, causing her to be impossible to see until she comes near enemy heroes, towers, or outposts.";
  const targetLanguage = "portugues"; // Pode ser "francês", "espanhol", etc.

  const translatedText = await translateText(text, targetLanguage, {
 
  });
  console.log("Texto traduzido:", translatedText);
})();
