import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// CORS support for web and mobile Android app clients
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
    return;
  }
  next();
});

// API Health Check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", app: "TANmz", version: "1.0.0" });
});

// AI Tutor endpoint (Pergunte ao Tutor TANmz)
app.post("/api/tutor", async (req, res) => {
  const { question, classLevel, subject, history } = req.body;

  if (!question || typeof question !== "string") {
    res.status(400).json({ error: "Pergunta inválida ou não informada." });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    // If API key is not configured, provide a curated educational response
    res.json({
      reply: `Olá! Eu sou o Tutor TANmz de ${subject || "Ciências"}. O serviço com inteligência artificial requer uma chave configurada, mas aqui está a orientação para a ${classLevel || "sua classe"}:\n\nPara explorar este conceito (${question}), consulte os módulos de ${subject || "Biologia e Química"} disponíveis no menu principal do TANmz. Lá você encontra definições, exemplos do dia a dia de Moçambique e exercícios com correção imediata!`,
      isFallback: true,
    });
    return;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `Você é o Tutor Inteligente TANmz, o tutor educativo oficial de Biologia e Química de Moçambique para o Ensino Secundário (7ª à 12ª classe).
Lema do TANmz: "Biologia e Química ao alcance de todos".
Contexto atual:
- Disciplina: ${subject || "Biologia e Química"}
- Nível de escolaridade: ${classLevel || "Ensino Secundário"}

Diretrizes pedagógicas rígidas:
1. Responda em Português claro, didático, acolhedor e progressivo.
2. Adapte a profundidade e o vocabulário à classe informada (${classLevel || "Ensino Secundário"}). Se for 7ª ou 8ª classe, utilize linguagem simples, acessível e exemplos práticos concretos. Se for 11ª ou 12ª classe, adote rigor científico, nomenclatura IUPAC correta para Química e precisão bioquímica/ecológica para Biologia.
3. Utilize sempre que oportuno exemplos contextualizados de Moçambique (biodiversidade como Gorongosa e Bazaruto, agricultura familiar como milho e mandioca, recursos naturais como gás de Cabo Delgado e carvão de Tete, conservação das águas e mangais, saúde pública e prevenção de malária/cólera).
4. ESTRUTURA DA RESPOSTA:
   - Explicação concisa e intuitiva (sem jargão vazio).
   - Exemplo prático ou aplicação no quotidiano.
   - Ponto de atenção (erro comum que os alunos costumam cometer).
   - Pergunta rápida de reflexão para o estudante testar o que aprendeu.
5. REGRA ABSOLUTA: NUNCA invente fórmulas, equações ou teorias falsas. Mantenha as equações químicas balanceadas e fórmulas corretas (ex: H₂O, CO₂, NaCl, C₆H₁₂O₆). Se uma informação não for comprovada cientificamente, declare com honestidade.`;

    const contents: any[] = [];
    if (Array.isArray(history) && history.length > 0) {
      for (const msg of history.slice(-6)) {
        contents.push({
          role: msg.role === "assistant" ? "model" : "user",
          parts: [{ text: msg.content }],
        });
      }
    }
    contents.push({
      role: "user",
      parts: [{ text: question }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.4,
        maxOutputTokens: 1000,
      },
    });

    const text = response.text || "Desculpe, não consegui formular a resposta neste momento. Tente novamente!";
    res.json({ reply: text, isFallback: false });
  } catch (error: any) {
    console.error("Erro no Tutor TANmz:", error?.message || error);
    res.status(500).json({
      reply: `Tivemos uma falha ao conectar com o serviço de IA online. Mas lembre-se: todos os conteúdos, exercícios e testes do TANmz continuam 100% disponíveis offline no seu dispositivo!`,
      isFallback: true,
      error: error?.message,
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`TANmz server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
