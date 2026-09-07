import { Lesson, ClassLevel, Subject } from '../types';
import { CURRICULUM_UNITS } from './curriculumData';

/**
 * ============================================================
 * TANmz — SISTEMA DE AULAS CURRICULARES
 * ============================================================
 *
 * A fonte dos tópicos curriculares é curriculumData.ts.
 *
 * Este arquivo transforma cada tópico curricular numa Lesson
 * compatível com o sistema do TANmz.
 * ============================================================
 */

export const DETAILED_LESSONS: Lesson[] = [];

/**
 * Normaliza texto para facilitar a comparação dos tópicos.
 */
function normalizeText(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase();
}

/**
 * Cria um identificador seguro para cada aula.
 */
function createLessonId(
  unitId: string,
  topicTitle: string
): string {
  const slug = normalizeText(topicTitle)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);

  return `${unitId}-${slug}`;
}

/**
 * Determina a área de aplicação do conteúdo em Moçambique.
 */
function getContextArea(
  subject: Subject,
  topicTitle: string
): Lesson['mozambiqueApplication']['contextArea'] {
  const text = normalizeText(topicTitle);

  if (
    text.includes('ecologia') ||
    text.includes('ambiente') ||
    text.includes('conservacao') ||
    text.includes('poluicao') ||
    text.includes('biodiversidade') ||
    text.includes('ecossistema')
  ) {
    return 'ambiente';
  }

  if (
    text.includes('saude') ||
    text.includes('doenca') ||
    text.includes('sangue') ||
    text.includes('coracao') ||
    text.includes('respir') ||
    text.includes('digest') ||
    text.includes('reproduc')
  ) {
    return 'saúde';
  }

  if (
    text.includes('agric') ||
    text.includes('planta') ||
    text.includes('solo') ||
    text.includes('semente') ||
    text.includes('cultivo')
  ) {
    return 'agricultura';
  }

  if (
    text.includes('energia') ||
    text.includes('combust') ||
    text.includes('eletric') ||
    text.includes('reacao')
  ) {
    return 'energia';
  }

  if (subject === 'Biologia') {
    return 'biodiversidade';
  }

  return 'recursos_naturais';
}

/**
 * Cria uma aula curricular estruturada.
 */
function createLesson(
  unitId: string,
  topicTitle: string,
  classLevel: ClassLevel,
  subject: Subject,
  unitTitle: string,
  lessonNumber: number
): Lesson {
  const isBiology = subject === 'Biologia';

  const definition = isBiology
    ? `O tema "${topicTitle}" faz parte do estudo da Biologia e permite compreender fenómenos relacionados com os seres vivos, a sua organização, funcionamento, diversidade, evolução e relação com o ambiente.`
    : `O tema "${topicTitle}" faz parte do estudo da Química e permite compreender a constituição, as propriedades, as transformações e as aplicações da matéria.`;

  const explanation = isBiology
    ? [
        `Para compreender "${topicTitle}", o primeiro passo é identificar os conceitos científicos fundamentais associados ao tema.`,
        `Na Biologia, os fenómenos devem ser analisados procurando estabelecer relações entre estruturas, funções, processos e condições ambientais.`,
        `O estudante deve evitar a simples memorização de palavras. É importante compreender o significado dos conceitos e conseguir explicá-los utilizando exemplos.`,
        `A observação, a comparação, a interpretação de informações e a resolução de problemas são formas importantes de construir conhecimento biológico.`,
      ]
    : [
        `Para compreender "${topicTitle}", é necessário começar pelos conceitos fundamentais da Química relacionados com a matéria e as suas transformações.`,
        `A Química procura explicar as propriedades e transformações da matéria considerando partículas, composição, estrutura e energia.`,
        `O estudante deve aprender a relacionar aquilo que observa no laboratório ou no quotidiano com uma explicação científica.`,
        `Sempre que existirem fórmulas, símbolos, equações ou cálculos, estes devem ser interpretados e não apenas memorizados.`,
      ];

  return {
    id: createLessonId(unitId, topicTitle),
    unitId,
    classLevel,
    subject,
    theme: topicTitle,
    lessonNumber,
    title: topicTitle,

    objectives: [
      `Definir e compreender os principais conceitos relacionados com "${topicTitle}".`,
      `Explicar os principais princípios, processos ou características associados ao tema.`,
      `Aplicar o conhecimento adquirido na interpretação de situações científicas e do quotidiano.`,
      `Relacionar o conteúdo com exemplos e situações encontradas em Moçambique.`,
    ],

    content: {
      definition,

      explanation,

      diagramOrFormula: isBiology
        ? `Observação → Conceito → Explicação biológica → Aplicação`
        : `Matéria → Propriedades → Transformação → Aplicação`,
    },

    example: {
      title: `Exemplo: aplicação de ${topicTitle}`,
      description: `Considere uma situação do quotidiano em que seja necessário utilizar os conhecimentos sobre "${topicTitle}". O estudante deve identificar os conceitos envolvidos, explicar o fenómeno utilizando linguagem científica e relacionar a situação com aquilo que foi aprendido na aula.`,
      solution: `A resolução começa pela identificação dos conceitos fundamentais de "${topicTitle}". Em seguida, devem ser estabelecidas as relações científicas necessárias para explicar corretamente a situação.`,
    },

    mozambiqueApplication: {
      title: `${topicTitle} no contexto de Moçambique`,
      description: isBiology
        ? `O conhecimento de Biologia pode ser aplicado a situações relacionadas com saúde, agricultura, biodiversidade, conservação dos ecossistemas e utilização sustentável dos recursos naturais existentes em Moçambique.`
        : `O conhecimento de Química pode ser aplicado a situações relacionadas com água, agricultura, energia, indústria, mineração, conservação de alimentos e utilização responsável dos recursos naturais existentes em Moçambique.`,
      contextArea: getContextArea(subject, topicTitle),
    },

    attention: {
      commonError: `Um erro frequente ao estudar "${topicTitle}" é memorizar termos ou definições sem compreender o seu significado e sem conseguir aplicá-los a situações concretas.`,

      correctUnderstanding: `A compreensão correta exige conhecer a definição, compreender a explicação científica, observar exemplos e conseguir utilizar o conhecimento para interpretar novas situações.`,
    },

    summaryPoints: [
      `"${topicTitle}" é um tema da unidade "${unitTitle}".`,
      `Os conceitos fundamentais devem ser compreendidos antes de serem memorizados.`,
      `Exemplos ajudam a relacionar a teoria com situações concretas.`,
      `A aplicação prática permite verificar se o conteúdo foi realmente compreendido.`,
    ],

    quickChecks: [
      {
        id: `${unitId}-qc-1`,
        question: `Qual é a melhor forma de aprender "${topicTitle}"?`,
        options: [
          'Compreender os conceitos e aplicá-los em exemplos.',
          'Memorizar palavras sem compreender o significado.',
          'Evitar exercícios e aplicações práticas.',
          'Escolher respostas aleatoriamente.',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A aprendizagem científica exige compreensão dos conceitos e capacidade de aplicá-los em diferentes situações.',
      },

      {
        id: `${unitId}-qc-2`,
        question: `O que deve fazer um estudante quando encontra uma situação relacionada com o tema estudado?`,
        options: [
          'Identificar os conceitos científicos envolvidos e procurar explicá-los.',
          'Responder sem analisar a situação.',
          'Ignorar os conceitos estudados.',
          'Memorizar a situação sem procurar uma explicação.',
        ],
        correctAnswerIndex: 0,
        explanation:
          'A aplicação do conhecimento científico começa pela identificação dos conceitos relevantes e pela construção de uma explicação fundamentada.',
      },
    ],

    exercises: [
      {
        id: `${unitId}-ex-1`,
        statement: `Qual afirmação representa melhor uma aprendizagem adequada sobre "${topicTitle}"?`,
        difficulty: 'Fácil',
        type: 'multiple_choice',
        options: [
          'Compreender os conceitos e conseguir aplicá-los.',
          'Memorizar termos sem compreender.',
          'Evitar exemplos práticos.',
          'Responder apenas por tentativa.',
        ],
        correctAnswer: 0,
        explanation:
          'Uma aprendizagem científica adequada envolve compreensão dos conceitos e capacidade de aplicá-los.',
      },

      {
        id: `${unitId}-ex-2`,
        statement: `Verdadeiro ou Falso: compreender um conceito científico envolve mais do que simplesmente memorizar a sua definição.`,
        difficulty: 'Médio',
        type: 'true_false',
        options: [
          'Verdadeiro',
          'Falso',
        ],
        correctAnswer: 0,
        explanation:
          'Verdadeiro. Além da definição, o estudante precisa compreender o significado, as relações e as aplicações do conceito.',
      },
    ],
  };
}

/**
 * ============================================================
 * CONSTRUÇÃO DAS AULAS A PARTIR DO CURRÍCULO
 * ============================================================
 */

function buildCurriculumLessons(): Lesson[] {
  const lessons: Lesson[] = [];

  for (const unit of CURRICULUM_UNITS) {
    unit.lessonTopics.forEach(
      (topicTitle: string, index: number) => {
        lessons.push(
          createLesson(
            unit.id,
            topicTitle,
            unit.classLevel,
            unit.subject,
            unit.title,
            index + 1
          )
        );
      }
    );
  }

  return lessons;
}

/**
 * Todas as aulas curriculares do TANmz.
 */
export const ALL_LESSONS: Lesson[] =
  buildCurriculumLessons();

/**
 * ============================================================
 * BUSCA DE UMA AULA
 * ============================================================
 */

export function getLessonForTopic(
  unitId: string,
  topicTitle: string,
  classLevel: ClassLevel,
  subject: Subject,
  unitTitle: string
): Lesson {
  const normalizedTopic =
    normalizeText(topicTitle);

  const existing = ALL_LESSONS.find(
    (lesson) =>
      lesson.unitId === unitId &&
      (
        normalizeText(lesson.theme) === normalizedTopic ||
        normalizeText(lesson.title) === normalizedTopic
      )
  );

  if (existing) {
    return existing;
  }

  return createLesson(
    unitId,
    topicTitle,
    classLevel,
    subject,
    unitTitle,
    1
  );
}
