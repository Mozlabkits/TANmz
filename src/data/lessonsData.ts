import { Lesson, ClassLevel, Subject } from '../types';
import { CURRICULUM_UNITS } from './curriculumData';

/**

* ============================================================
* TANmz — SISTEMA DE AULAS
* ============================================================
*
* Este arquivo usa o currículo oficial definido em
* curriculumData.ts como fonte dos tópicos.
*
* Cada tópico recebe uma estrutura pedagógica própria.
* Os conteúdos detalhados podem ser enriquecidos sem alterar
* a arquitetura do aplicativo.
* ============================================================
  */

export const DETAILED_LESSONS: Lesson[] = [];

/**

* Cria um ID seguro para uma aula.
  */
  function createLessonId(unitId: string, topicTitle: string): string {
  const slug = topicTitle
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '')
  .slice(0, 50);

return `${unitId}-${slug}`;
}

/**

* Determina a área de aplicação em Moçambique.
  */
  function getContextArea(
  subject: Subject,
  topicTitle: string
  ): Lesson['mozambiqueApplication']['contextArea'] {
  const text = topicTitle.toLowerCase();

if (
text.includes('ambiente') ||
text.includes('ecologia') ||
text.includes('biodivers') ||
text.includes('conserv')
) {
return 'ambiente';
}

if (
text.includes('saúde') ||
text.includes('doença') ||
text.includes('corpo') ||
text.includes('sangue') ||
text.includes('digest') ||
text.includes('respira')
) {
return 'saúde';
}

if (
text.includes('agric') ||
text.includes('planta') ||
text.includes('solo') ||
text.includes('cultura')
) {
return 'agricultura';
}

if (
text.includes('energia') ||
text.includes('combust') ||
text.includes('reação')
) {
return 'energia';
}

if (subject === 'Biologia') {
return 'biodiversidade';
}

return 'recursos_naturais';
}

/**

* Gera uma explicação pedagógica inicial.
*
* IMPORTANTE:
* Esta função NÃO substitui o desenvolvimento científico
* definitivo de cada conteúdo. Ela garante que todos os
* tópicos do currículo tenham uma aula funcional enquanto
* os conteúdos detalhados são incorporados.
  */
  function createCurriculumLesson(
  unitId: string,
  topicTitle: string,
  classLevel: ClassLevel,
  subject: Subject,
  unitTitle: string,
  lessonNumber: number
  ): Lesson {
  const isBiology = subject === 'Biologia';

const contextArea = getContextArea(subject, topicTitle);

return {
id: createLessonId(unitId, topicTitle),
unitId,
classLevel,
subject,
theme: topicTitle,
lessonNumber,
title: topicTitle,

```
objectives: [
  `Compreender o significado e os conceitos fundamentais relacionados com "${topicTitle}".`,
  `Explicar os principais processos, estruturas ou princípios envolvidos em "${topicTitle}".`,
  `Relacionar o conteúdo estudado com situações do quotidiano e com o contexto de Moçambique.`,
],

content: {
  definition:
    isBiology
      ? `"${topicTitle}" é um conteúdo de Biologia que permite compreender fenómenos relacionados com os seres vivos, a sua organização, funcionamento, diversidade, evolução ou relação com o ambiente.`
      : `"${topicTitle}" é um conteúdo de Química que permite compreender a constituição, propriedades, transformações e aplicações da matéria.`,

  explanation: [
    `O estudo de "${topicTitle}" começa pela compreensão dos conceitos fundamentais. Antes de memorizar termos, o estudante deve perceber o que cada conceito significa e qual problema científico procura explicar.`,

    isBiology
      ? `Na Biologia, este conteúdo deve ser analisado relacionando estrutura e função, organização dos seres vivos, processos vitais e relações com o ambiente sempre que esses aspetos forem relevantes.`
      : `Na Química, é importante relacionar partículas, propriedades da matéria, transformações químicas, linguagem simbólica, cálculos e observações experimentais quando forem aplicáveis ao tema.`,

    `A aprendizagem torna-se mais significativa quando o estudante consegue relacionar o conteúdo com exemplos observáveis na sua comunidade, na escola, na agricultura, na saúde, no ambiente ou em outras atividades do quotidiano.`,

    `Ao estudar este tema, o estudante deve distinguir conceitos semelhantes, identificar relações de causa e efeito e utilizar corretamente a linguagem científica.`,
  ],

  diagramOrFormula:
    isBiology
      ? `Observação → Conceito → Explicação biológica → Aplicação`
      : `Matéria → Propriedades → Transformação → Aplicação`,
},

example: {
  title: `Exemplo de aplicação de "${topicTitle}"`,
  description:
    `Imagine uma situação do quotidiano em que seja necessário compreender "${topicTitle}". O conhecimento científico permite observar o fenómeno, identificar os conceitos envolvidos e explicar racionalmente o que está a acontecer.`,
  solution:
    `A solução deve partir da definição dos conceitos fundamentais, seguida da identificação das relações científicas relevantes para a situação apresentada.`,
},

mozambiqueApplication: {
  title: `"${topicTitle}" no contexto de Moçambique`,
  description:
    isBiology
      ? `O conhecimento de Biologia pode ser relacionado com a saúde das comunidades, agricultura, biodiversidade, conservação dos ecossistemas e utilização sustentável dos recursos naturais existentes em Moçambique.`
      : `O conhecimento de Química pode ser relacionado com água, agricultura, mineração, energia, indústria, conservação de alimentos e utilização responsável dos recursos naturais de Moçambique.`,
  contextArea,
},

attention: {
  commonError:
    `Um erro frequente é tentar memorizar "${topicTitle}" sem compreender os conceitos e as relações entre eles.`,

  correctUnderstanding:
    `O estudante deve primeiro compreender o conceito, depois observar exemplos e finalmente aplicar o conhecimento em exercícios e situações práticas.`,
},

summaryPoints: [
  `"${topicTitle}" pertence à unidade "${unitTitle}".`,
  `Os conceitos fundamentais devem ser compreendidos antes da memorização.`,
  `A aplicação a situações reais ajuda a consolidar a aprendizagem.`,
  `A linguagem científica deve ser utilizada com precisão.`,
],

quickChecks: [
  {
    id: `${unitId}-qc-1`,
    question: `Qual é o principal objetivo de estudar "${topicTitle}"?`,
    options: [
      `Compreender os conceitos e saber aplicá-los`,
      `Memorizar palavras sem compreender o significado`,
      `Ignorar exemplos práticos`,
      `Responder apenas por tentativa`,
    ],
    correctAnswerIndex: 0,
    explanation:
      `A aprendizagem científica procura desenvolver compreensão e capacidade de aplicação dos conceitos.`,
  },

  {
    id: `${unitId}-qc-2`,
    question: `Qual estratégia ajuda mais a compreender "${topicTitle}"?`,
    options: [
      `Relacionar conceitos, exemplos e aplicações`,
      `Decorar respostas sem estudar o conteúdo`,
      `Evitar exercícios`,
      `Ignorar definições científicas`,
    ],
    correctAnswerIndex: 0,
    explanation:
      `Relacionar conceitos com exemplos e aplicações permite construir uma compreensão mais sólida.`,
  },
],

exercises: [
  {
    id: `${unitId}-ex-1`,
    statement:
      `Qual afirmação representa melhor uma abordagem científica ao estudar "${topicTitle}"?`,
    difficulty: 'Fácil',
    type: 'multiple_choice',
    options: [
      `Compreender os conceitos e relacioná-los com exemplos`,
      `Memorizar palavras sem compreender`,
      `Escolher respostas aleatoriamente`,
      `Ignorar a explicação científica`,
    ],
    correctAnswer: 0,
    explanation:
      `A compreensão científica exige domínio dos conceitos e capacidade de relacioná-los com situações concretas.`,
  },

  {
    id: `${unitId}-ex-2`,
    statement:
      `Verdadeiro ou Falso: compreender um conceito científico é mais importante do que simplesmente memorizar a sua definição.`,
    difficulty: 'Médio',
    type: 'true_false',
    options: ['Verdadeiro', 'Falso'],
    correctAnswer: 0,
    explanation:
      `Verdadeiro. A definição é importante, mas o estudante deve também compreender o significado, as relações e as aplicações do conceito.`,
  },
],
```

};
}

/**

* ============================================================
* CONSTRUÇÃO AUTOMÁTICA DAS AULAS
* ============================================================
*
* O currículo continua a ser a fonte de verdade.
* Cada tópico recebe uma aula estruturada.
  */

function buildCurriculumLessons(): Lesson[] {
const lessons: Lesson[] = [];

for (const unit of CURRICULUM_UNITS) {
unit.lessonTopics.forEach((topicTitle, index) => {
lessons.push(
createCurriculumLesson(
unit.id,
topicTitle,
unit.classLevel,
unit.subject,
unit.title,
index + 1
)
);
});
}

return lessons;
}

/**

* Todas as aulas disponíveis no TANmz.
  */
  export const ALL_LESSONS: Lesson[] = buildCurriculumLessons();

/**

* ============================================================
* BUSCA DE AULA
* ============================================================
  */

export function getLessonForTopic(
unitId: string,
topicTitle: string,
classLevel: ClassLevel,
subject: Subject,
unitTitle: string
): Lesson {
const normalizedTopic = topicTitle.trim().toLowerCase();

const existing = ALL_LESSONS.find(
(lesson) =>
lesson.unitId === unitId &&
(
lesson.theme.trim().toLowerCase() === normalizedTopic ||
lesson.title.trim().toLowerCase() === normalizedTopic
)
);

if (existing) {
return existing;
}

/**

* Segurança adicional caso o tópico seja chamado diretamente
* sem estar previamente encontrado no currículo.
  */
  return createCurriculumLesson(
  unitId,
  topicTitle,
  classLevel,
  subject,
  unitTitle,
  1
  );
  }
