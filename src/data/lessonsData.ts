import { Lesson, ClassLevel, Subject } from '../types';
import { CURRICULUM_UNITS } from './curriculumData';

/*
 * ============================================================
 * TANmz — CONTEÚDOS CURRICULARES
 * ============================================================
 *
 * Nesta versão:
 *
 * 7ª Classe — Biologia
 * 30 aulas desenvolvidas.
 *
 * Os restantes conteúdos curriculares continuam disponíveis
 * através de uma estrutura de segurança, enquanto cada classe
 * é desenvolvida com conteúdo científico próprio.
 * ============================================================
 */

function lessonId(unitId: string, number: number): string {
  return `${unitId}-l${number}`;
}

function makeQuestion(
  id: string,
  question: string,
  options: string[],
  correctAnswerIndex: number,
  explanation: string
) {
  return {
    id,
    question,
    options,
    correctAnswerIndex,
    explanation,
  };
}

function makeExercise(
  id: string,
  statement: string,
  options: string[],
  correctAnswer: number,
  explanation: string,
  difficulty: 'Fácil' | 'Médio' | 'Avançado' = 'Fácil'
) {
  return {
    id,
    statement,
    difficulty,
    type: 'multiple_choice' as const,
    options,
    correctAnswer,
    explanation,
  };
}

/*
 * ============================================================
 * 7ª CLASSE — BIOLOGIA
 * ============================================================
 */

const BIO_7_LESSONS: Lesson[] = [

  /* ==========================================================
     UNIDADE 1 — INTRODUÇÃO À BIOLOGIA
     ========================================================== */

  {
    id: lessonId('bio-7-u1', 1),
    unitId: 'bio-7-u1',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'O que é Biologia?',
    lessonNumber: 1,
    title: 'O que é Biologia?',

    objectives: [
      'Definir Biologia.',
      'Explicar o que a Biologia estuda.',
      'Reconhecer a importância do estudo dos seres vivos.',
    ],

    content: {
      definition:
        'Biologia é a ciência que estuda os seres vivos e os fenómenos relacionados com a vida.',

      explanation: [
        'A palavra Biologia vem de bios, que significa vida, e logos, que significa estudo ou conhecimento. Assim, Biologia significa estudo da vida.',
        'A Biologia procura compreender como os seres vivos são constituídos, como funcionam, como se reproduzem, como crescem, como interagem entre si e como se relacionam com o ambiente.',
        'O estudo da Biologia inclui organismos muito diferentes, desde microrganismos até plantas, animais e seres humanos.',
        'A Biologia utiliza observação, experimentação, comparação e outras formas de investigação científica para produzir conhecimentos sobre a vida.',
      ],
    },

    example: {
      title: 'Exemplo: uma planta de milho',
      description:
        'Ao observar uma planta de milho, o biólogo pode estudar as suas raízes, folhas, crescimento, reprodução, necessidades de água e nutrientes e relação com o ambiente.',
      solution:
        'Todas essas perguntas pertencem à Biologia porque procuram compreender características e processos relacionados com um ser vivo.',
    },

    mozambiqueApplication: {
      title: 'Biologia no quotidiano moçambicano',
      description:
        'A Biologia ajuda a compreender problemas relacionados com agricultura, saúde, alimentação, biodiversidade, conservação das florestas, recursos hídricos e doenças.',
      contextArea: 'biodiversidade',
    },

    attention: {
      commonError:
        'Pensar que a Biologia estuda apenas o corpo humano.',
      correctUnderstanding:
        'A Biologia estuda a vida de forma ampla, incluindo microrganismos, plantas, animais, seres humanos e as relações entre os seres vivos e o ambiente.',
    },

    summaryPoints: [
      'Biologia significa estudo da vida.',
      'É uma ciência dedicada ao estudo dos seres vivos e dos fenómenos da vida.',
      'A Biologia possui muitas áreas de estudo.',
      'O conhecimento biológico possui aplicações na saúde, agricultura e ambiente.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u1-l1-q1',
        'O que é Biologia?',
        [
          'Ciência que estuda os seres vivos e os fenómenos da vida.',
          'Ciência que estuda somente os minerais.',
          'Ciência que estuda somente os planetas.',
          'Ciência que estuda apenas as máquinas.',
        ],
        0,
        'A Biologia é a ciência que estuda os seres vivos e os fenómenos relacionados com a vida.'
      ),
      makeQuestion(
        'bio7-u1-l1-q2',
        'Qual destes temas pertence à Biologia?',
        [
          'Crescimento de uma planta.',
          'Movimento de um planeta.',
          'Funcionamento de uma máquina.',
          'Cálculo de uma área geométrica.',
        ],
        0,
        'O crescimento de uma planta é um fenómeno biológico.',
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u1-l1-e1',
        'Uma pessoa estuda como uma planta cresce e se reproduz. Qual ciência está diretamente envolvida?',
        ['Biologia', 'Geografia', 'Astronomia', 'Matemática'],
        0,
        'A Biologia estuda os seres vivos e processos como crescimento e reprodução.'
      ),
      makeExercise(
        'bio7-u1-l1-e2',
        'A Biologia estuda apenas seres humanos.',
        ['Verdadeiro', 'Falso'],
        1,
        'Falso. A Biologia estuda todos os tipos de seres vivos e os fenómenos relacionados com a vida.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u1', 2),
    unitId: 'bio-7-u1',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Importância da Biologia',
    lessonNumber: 2,
    title: 'Importância da Biologia',

    objectives: [
      'Explicar por que a Biologia é importante.',
      'Relacionar Biologia com saúde, agricultura e ambiente.',
      'Reconhecer aplicações do conhecimento biológico.',
    ],

    content: {
      definition:
        'A importância da Biologia está na utilização do conhecimento sobre a vida para compreender, prevenir e resolver problemas relacionados com seres vivos e ambiente.',

      explanation: [
        'Na saúde, a Biologia ajuda a compreender o funcionamento do organismo, as doenças, os microrganismos e as formas de prevenção.',
        'Na agricultura, permite compreender as plantas, o solo, pragas, doenças, reprodução e condições necessárias para melhorar a produção.',
        'Na conservação ambiental, ajuda a compreender a biodiversidade, os ecossistemas e os impactos das atividades humanas.',
        'Na alimentação, contribui para compreender nutrientes, conservação dos alimentos e problemas relacionados com deficiências nutricionais.',
      ],
    },

    example: {
      title: 'Exemplo: conservação de alimentos',
      description:
        'Conhecer os microrganismos ajuda a compreender por que determinados alimentos se deterioram e por que práticas como refrigeração, secagem ou tratamento térmico podem aumentar a sua conservação.',
      solution:
        'A aplicação do conhecimento biológico permite reduzir riscos e melhorar práticas de conservação.',
    },

    mozambiqueApplication: {
      title: 'Aplicações em Moçambique',
      description:
        'O conhecimento biológico é importante para a produção agrícola, prevenção de doenças, conservação da biodiversidade e gestão sustentável dos recursos naturais.',
      contextArea: 'saúde',
    },

    attention: {
      commonError:
        'Pensar que a Biologia possui importância apenas para quem pretende ser médico.',
      correctUnderstanding:
        'O conhecimento biológico é útil em muitas profissões e atividades, incluindo agricultura, educação, saúde, ambiente, investigação e alimentação.',
    },

    summaryPoints: [
      'A Biologia tem aplicações na saúde.',
      'É importante para a agricultura.',
      'Ajuda na conservação ambiental.',
      'Contribui para compreender alimentação e doenças.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u1-l2-q1',
        'Qual é uma aplicação da Biologia na agricultura?',
        [
          'Compreender doenças das plantas.',
          'Calcular a distância entre planetas.',
          'Construir estradas.',
          'Estudar movimentos sísmicos.',
        ],
        0,
        'A Biologia ajuda a compreender doenças, crescimento, reprodução e necessidades das plantas.'
      ),
      makeQuestion(
        'bio7-u1-l2-q2',
        'A Biologia pode contribuir para a prevenção de doenças?',
        ['Sim', 'Não'],
        0,
        'O conhecimento biológico permite compreender agentes causadores de doenças e formas de prevenção.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u1-l2-e1',
        'Qual área pode beneficiar diretamente do conhecimento da Biologia?',
        ['Saúde', 'Apenas construção civil', 'Apenas astronomia', 'Nenhuma'],
        0,
        'A saúde é uma das áreas em que o conhecimento biológico possui grande aplicação.'
      ),
      makeExercise(
        'bio7-u1-l2-e2',
        'A conservação da biodiversidade depende de conhecimentos biológicos.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. É necessário compreender espécies, habitats, populações e ecossistemas para conservar a biodiversidade.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u1', 3),
    unitId: 'bio-7-u1',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Ramos da Biologia',
    lessonNumber: 3,
    title: 'Ramos da Biologia',

    objectives: [
      'Compreender o conceito de ramo da Biologia.',
      'Identificar alguns ramos da Biologia.',
      'Relacionar cada ramo com o seu objeto de estudo.',
    ],

    content: {
      definition:
        'Ramos da Biologia são áreas especializadas que estudam determinados aspetos dos seres vivos ou grupos particulares de organismos.',

      explanation: [
        'A vida é muito diversificada e complexa. Por isso, a Biologia divide-se em diferentes áreas de estudo.',
        'A Botânica estuda as plantas, enquanto a Zoologia estuda os animais.',
        'A Microbiologia estuda microrganismos. A Ecologia estuda as relações entre os seres vivos e o ambiente.',
        'A Genética estuda a hereditariedade e a variação. A Anatomia estuda estruturas dos organismos e a Fisiologia estuda o funcionamento dessas estruturas.',
      ],
    },

    example: {
      title: 'Exemplo',
      description:
        'Um cientista que estuda doenças causadas por bactérias pode trabalhar com Microbiologia. Um investigador que estuda relações entre peixes e qualidade da água pode utilizar conhecimentos de Ecologia.',
      solution:
        'O ramo escolhido depende da pergunta científica que se pretende investigar.',
    },

    mozambiqueApplication: {
      title: 'Aplicação',
      description:
        'Em Moçambique, diferentes áreas da Biologia podem apoiar estudos sobre agricultura, fauna, flora, doenças, conservação e recursos naturais.',
      contextArea: 'biodiversidade',
    },

    attention: {
      commonError:
        'Confundir Botânica com Zoologia ou Ecologia com o estudo exclusivo de plantas.',
      correctUnderstanding:
        'Cada ramo possui um foco próprio, embora diferentes ramos possam trabalhar juntos numa mesma investigação.',
    },

    summaryPoints: [
      'A Biologia possui vários ramos.',
      'Botânica estuda plantas.',
      'Zoologia estuda animais.',
      'Ecologia estuda relações entre seres vivos e ambiente.',
      'Genética estuda hereditariedade e variação.',
      'Microbiologia estuda microrganismos.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u1-l3-q1',
        'Qual ramo estuda as plantas?',
        ['Botânica', 'Zoologia', 'Geologia', 'Astronomia'],
        0,
        'Botânica é o ramo da Biologia dedicado ao estudo das plantas.'
      ),
      makeQuestion(
        'bio7-u1-l3-q2',
        'Qual ramo estuda as relações entre seres vivos e ambiente?',
        ['Ecologia', 'Anatomia', 'Genética', 'Botânica'],
        0,
        'Ecologia estuda as relações dos organismos entre si e com o ambiente.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u1-l3-e1',
        'Um estudante quer investigar bactérias. Qual área é especialmente relevante?',
        ['Microbiologia', 'Astronomia', 'Geometria', 'Geologia'],
        0,
        'A Microbiologia dedica-se ao estudo dos microrganismos.'
      ),
      makeExercise(
        'bio7-u1-l3-e2',
        'A Zoologia estuda principalmente:',
        ['Animais', 'Plantas', 'Minerais', 'Planetas'],
        0,
        'Zoologia é o ramo da Biologia que estuda os animais.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u1', 4),
    unitId: 'bio-7-u1',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Relação da Biologia com outras ciências',
    lessonNumber: 4,
    title: 'Relação da Biologia com outras ciências',

    objectives: [
      'Explicar por que a Biologia se relaciona com outras ciências.',
      'Dar exemplos de relações entre disciplinas.',
      'Compreender a importância da interdisciplinaridade.',
    ],

    content: {
      definition:
        'A Biologia relaciona-se com outras ciências porque muitos fenómenos da vida são complexos e precisam de conhecimentos de diferentes áreas para serem compreendidos.',

      explanation: [
        'A Química ajuda a compreender as substâncias e reações que ocorrem nos organismos.',
        'A Física ajuda a compreender fenómenos como pressão, movimento, luz, som e eletricidade presentes nos seres vivos.',
        'A Matemática permite analisar dados, construir gráficos, calcular proporções e interpretar resultados de experiências.',
        'A Geografia contribui para compreender a distribuição dos seres vivos e a relação entre organismos e condições ambientais.',
      ],
    },

    example: {
      title: 'Exemplo: qualidade da água',
      description:
        'Para estudar a qualidade de uma água usada por uma comunidade, podem ser necessários conhecimentos de Biologia, Química, Física e Geografia.',
      solution:
        'A combinação das áreas permite obter uma compreensão mais completa do problema.',
    },

    mozambiqueApplication: {
      title: 'Água e saúde',
      description:
        'Problemas de qualidade da água podem exigir conhecimentos sobre microrganismos, substâncias químicas, características físicas da água e localização das fontes.',
      contextArea: 'recursos_naturais',
    },

    attention: {
      commonError:
        'Pensar que cada ciência trabalha completamente isolada das outras.',
      correctUnderstanding:
        'As ciências possuem objetos de estudo específicos, mas podem complementar-se para resolver problemas complexos.',
    },

    summaryPoints: [
      'A Biologia relaciona-se com várias ciências.',
      'Química ajuda a compreender substâncias e reações.',
      'Física ajuda a compreender fenómenos físicos nos organismos.',
      'Matemática ajuda na análise de dados.',
      'Geografia ajuda a compreender distribuição e ambiente.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u1-l4-q1',
        'Qual ciência ajuda a Biologia a estudar reações químicas nos seres vivos?',
        ['Química', 'História', 'Literatura', 'Educação Física'],
        0,
        'A Química estuda substâncias e transformações químicas.'
      ),
      makeQuestion(
        'bio7-u1-l4-q2',
        'A Matemática pode ajudar na análise de dados biológicos?',
        ['Sim', 'Não'],
        0,
        'A Matemática é importante para organizar, analisar e interpretar dados científicos.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u1-l4-e1',
        'Qual disciplina é especialmente útil para estudar substâncias presentes nos seres vivos?',
        ['Química', 'História', 'Língua Portuguesa', 'Educação Visual'],
        0,
        'A Química ajuda a estudar a composição e as transformações das substâncias.'
      ),
      makeExercise(
        'bio7-u1-l4-e2',
        'A investigação científica pode utilizar conhecimentos de várias ciências.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. Muitos problemas reais exigem uma abordagem interdisciplinar.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u1', 5),
    unitId: 'bio-7-u1',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Método científico',
    lessonNumber: 5,
    title: 'Método científico',

    objectives: [
      'Explicar o significado de método científico.',
      'Identificar etapas básicas de uma investigação.',
      'Distinguir hipótese de conclusão.',
    ],

    content: {
      definition:
        'Método científico é um conjunto organizado de procedimentos utilizados para investigar fenómenos, testar explicações e produzir conhecimento baseado em evidências.',

      explanation: [
        'Uma investigação pode começar com uma observação ou uma pergunta sobre um fenómeno.',
        'Depois de formular uma pergunta, o investigador pode propor uma hipótese, isto é, uma explicação provisória que pode ser testada.',
        'Através de experiências ou recolha sistemática de dados, a hipótese é confrontada com evidências.',
        'Finalmente, os resultados são analisados e é elaborada uma conclusão compatível com as evidências obtidas.',
      ],
    },

    example: {
      title: 'Exemplo: germinação de sementes',
      description:
        'Um estudante pergunta se a quantidade de água influencia a germinação de sementes. Pode formular uma hipótese e comparar grupos de sementes submetidos a diferentes quantidades de água.',
      solution:
        'Depois de observar os resultados, o estudante analisa os dados e conclui se as evidências apoiam ou não a hipótese.',
    },

    mozambiqueApplication: {
      title: 'Investigação escolar',
      description:
        'O método científico pode ser utilizado para investigar problemas relacionados com germinação, água, solo, agricultura, conservação e saúde.',
      contextArea: 'agricultura',
    },

    attention: {
      commonError:
        'Pensar que uma hipótese é uma resposta definitivamente comprovada.',
      correctUnderstanding:
        'Uma hipótese é uma explicação provisória que deve ser testada através de evidências.',
    },

    summaryPoints: [
      'A ciência utiliza procedimentos sistemáticos.',
      'Uma hipótese é uma explicação provisória.',
      'As hipóteses devem poder ser testadas.',
      'Os resultados devem ser analisados com base em evidências.',
      'A conclusão deve considerar os resultados obtidos.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u1-l5-q1',
        'O que é uma hipótese?',
        [
          'Uma explicação provisória que pode ser testada.',
          'Uma opinião que nunca pode ser analisada.',
          'Uma conclusão obrigatoriamente verdadeira.',
          'Uma regra matemática.',
        ],
        0,
        'Hipótese é uma explicação provisória que pode ser submetida a testes.'
      ),
      makeQuestion(
        'bio7-u1-l5-q2',
        'O que deve fundamentar uma conclusão científica?',
        [
          'Evidências e resultados.',
          'A preferência do investigador.',
          'Um palpite.',
          'Uma opinião sem dados.',
        ],
        0,
        'Conclusões científicas devem ser baseadas nas evidências disponíveis.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u1-l5-e1',
        'Um estudante afirma que determinada semente germina melhor com mais água e decide testar a ideia. Essa afirmação inicial pode ser considerada:',
        ['Hipótese', 'Conclusão definitiva', 'Lei científica', 'Teoria sem teste'],
        0,
        'Antes do teste, a explicação proposta é uma hipótese.'
      ),
      makeExercise(
        'bio7-u1-l5-e2',
        'Uma conclusão científica deve ignorar os resultados da experiência.',
        ['Verdadeiro', 'Falso'],
        1,
        'Falso. Os resultados são fundamentais para avaliar uma hipótese.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u1', 6),
    unitId: 'bio-7-u1',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Observação científica',
    lessonNumber: 6,
    title: 'Observação científica',

    objectives: [
      'Definir observação científica.',
      'Distinguir observação de opinião.',
      'Registar observações de forma objetiva.',
    ],

    content: {
      definition:
        'Observação científica é a recolha sistemática e cuidadosa de informações sobre um fenómeno utilizando os sentidos e, quando necessário, instrumentos de medição.',

      explanation: [
        'Observar cientificamente não significa apenas olhar. Significa prestar atenção às características relevantes de um fenómeno e registá-las de maneira organizada.',
        'Uma observação pode incluir cor, forma, tamanho, comportamento, temperatura, tempo ou outras características mensuráveis.',
        'Sempre que possível, as observações devem ser acompanhadas por medições e registos.',
        'É importante distinguir aquilo que foi realmente observado de uma interpretação ou opinião sobre o que aconteceu.',
      ],
    },

    example: {
      title: 'Exemplo',
      description:
        'Dizer “a planta tem 15 cm de altura” é uma observação mensurável. Dizer “a planta está feliz” é uma interpretação que não constitui uma medição científica adequada.',
      solution:
        'A primeira afirmação pode ser verificada através de uma régua.',
    },

    mozambiqueApplication: {
      title: 'Observação de plantas',
      description:
        'Estudantes podem observar plantas da sua comunidade e registar altura, número de folhas, cor e condições do local.',
      contextArea: 'agricultura',
    },

    attention: {
      commonError:
        'Confundir uma interpretação pessoal com uma observação.',
      correctUnderstanding:
        'Uma observação científica deve ser clara, objetiva e, quando possível, mensurável.',
    },

    summaryPoints: [
      'Observar cientificamente exige atenção e organização.',
      'Medições tornam os registos mais objetivos.',
      'Observação e interpretação não são exatamente a mesma coisa.',
      'Os dados devem ser registados de forma clara.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u1-l6-q1',
        'Qual é uma observação mais objetiva?',
        [
          'A planta mede 20 cm.',
          'A planta parece muito bonita.',
          'A planta está feliz.',
          'A planta parece gostar do lugar.',
        ],
        0,
        'Uma medida de 20 cm pode ser verificada utilizando um instrumento de medição.'
      ),
      makeQuestion(
        'bio7-u1-l6-q2',
        'Uma observação científica pode envolver medições.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. Medições fornecem dados objetivos sobre o fenómeno estudado.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u1-l6-e1',
        'Qual informação é mais adequada para um registo científico?',
        ['A folha mede 8 cm.', 'A folha é bonita.', 'A folha parece feliz.', 'A folha é interessante.'],
        0,
        'Uma medida pode ser verificada e comparada objetivamente.'
      ),
      makeExercise(
        'bio7-u1-l6-e2',
        'Observar cientificamente significa apenas olhar para alguma coisa.',
        ['Verdadeiro', 'Falso'],
        1,
        'Falso. A observação científica envolve atenção, registo e, quando possível, medição.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u1', 7),
    unitId: 'bio-7-u1',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Experimentação',
    lessonNumber: 7,
    title: 'Experimentação',

    objectives: [
      'Explicar o significado de experimentação.',
      'Reconhecer a importância de controlar condições numa experiência.',
      'Distinguir experiência de observação simples.',
    ],

    content: {
      definition:
        'Experimentação é a realização planeada de procedimentos para testar uma hipótese ou investigar a relação entre determinadas condições e um fenómeno.',

      explanation: [
        'Numa experiência, o investigador define o que pretende testar e organiza as condições de forma controlada.',
        'Quando se compara o efeito de uma variável, é importante manter outras condições tão semelhantes quanto possível.',
        'Por exemplo, ao estudar o efeito da água na germinação, podem ser utilizadas sementes semelhantes e recipientes iguais, alterando principalmente a quantidade de água.',
        'Os resultados devem ser registados e comparados antes de se tirar uma conclusão.',
      ],
    },

    example: {
      title: 'Experiência com sementes',
      description:
        'Dois grupos de sementes podem receber diferentes quantidades de água. Depois, pode ser comparada a germinação dos grupos.',
      solution:
        'A comparação permite investigar se a quantidade de água está relacionada com a germinação, desde que outras condições relevantes sejam controladas.',
    },

    mozambiqueApplication: {
      title: 'Agricultura escolar',
      description:
        'Experiências simples podem ajudar estudantes a compreender germinação, crescimento vegetal, condições do solo e necessidades das plantas.',
      contextArea: 'agricultura',
    },

    attention: {
      commonError:
        'Alterar várias condições ao mesmo tempo e depois atribuir o resultado a apenas uma delas.',
      correctUnderstanding:
        'Quando se pretende testar uma variável, é importante controlar outras condições relevantes.',
    },

    summaryPoints: [
      'Experiências servem para testar hipóteses.',
      'As condições devem ser planeadas.',
      'Variáveis relevantes devem ser controladas.',
      'Os resultados devem ser registados.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u1-l7-q1',
        'Qual é uma finalidade da experimentação?',
        [
          'Testar uma hipótese.',
          'Confirmar qualquer opinião sem evidências.',
          'Evitar medições.',
          'Substituir todos os registos.',
        ],
        0,
        'A experimentação permite testar explicações através de procedimentos e evidências.'
      ),
      makeQuestion(
        'bio7-u1-l7-q2',
        'Controlar condições é importante numa experiência.',
        ['Verdadeiro', 'Falso'],
        0,
        'O controlo de condições ajuda a interpretar corretamente os resultados.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u1-l7-e1',
        'Para estudar o efeito da água na germinação, é melhor:',
        [
          'Controlar outras condições relevantes.',
          'Alterar água, luz, temperatura e sementes ao mesmo tempo.',
          'Não registar os resultados.',
          'Utilizar apenas uma semente sem comparação.',
        ],
        0,
        'Controlar outras condições permite avaliar melhor o efeito da variável estudada.'
      ),
      makeExercise(
        'bio7-u1-l7-e2',
        'Uma experiência deve ser planeada antes da sua realização.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. O planeamento é importante para definir procedimentos e condições.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u1', 8),
    unitId: 'bio-7-u1',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Segurança no laboratório',
    lessonNumber: 8,
    title: 'Segurança no laboratório',

    objectives: [
      'Reconhecer regras básicas de segurança.',
      'Compreender a importância do comportamento responsável.',
      'Identificar riscos comuns no laboratório.',
    ],

    content: {
      definition:
        'Segurança no laboratório é o conjunto de regras e comportamentos destinados a prevenir acidentes, proteger pessoas e conservar materiais durante atividades experimentais.',

      explanation: [
        'No laboratório devem ser seguidas as orientações do professor ou responsável pela atividade.',
        'Não se deve provar substâncias, cheirar diretamente produtos químicos ou realizar procedimentos não autorizados.',
        'Materiais de vidro devem ser manuseados com cuidado e qualquer acidente deve ser comunicado imediatamente.',
        'A bancada deve permanecer organizada e os resíduos devem ser descartados de acordo com as orientações de segurança.',
      ],
    },

    example: {
      title: 'Exemplo',
      description:
        'Se um frasco cair e derramar uma substância, o estudante não deve tentar resolver sozinho sem saber o risco. Deve afastar-se e informar imediatamente o responsável.',
      solution:
        'Comunicar o acidente rapidamente permite aplicar o procedimento adequado.',
    },

    mozambiqueApplication: {
      title: 'Responsabilidade escolar',
      description:
        'Mesmo em laboratórios escolares com recursos limitados, regras básicas de segurança reduzem riscos e permitem realizar atividades práticas de forma responsável.',
      contextArea: 'saúde',
    },

    attention: {
      commonError:
        'Pensar que pequenas quantidades de substâncias ou materiais nunca oferecem risco.',
      correctUnderstanding:
        'Qualquer atividade experimental deve ser realizada de acordo com as regras de segurança e sob orientação adequada.',
    },

    summaryPoints: [
      'Segurança deve ser prioridade no laboratório.',
      'Não se deve provar substâncias.',
      'Acidentes devem ser comunicados imediatamente.',
      'Materiais devem ser utilizados corretamente.',
      'A bancada deve permanecer organizada.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u1-l8-q1',
        'O que fazer em caso de acidente no laboratório?',
        [
          'Informar imediatamente o responsável.',
          'Esconder o acidente.',
          'Continuar a experiência normalmente.',
          'Abandonar o laboratório sem avisar.',
        ],
        0,
        'Comunicar imediatamente permite que o procedimento de segurança adequado seja aplicado.'
      ),
      makeQuestion(
        'bio7-u1-l8-q2',
        'É seguro provar substâncias no laboratório para descobrir o sabor?',
        ['Não', 'Sim'],
        0,
        'Nunca se deve provar substâncias laboratoriais sem uma autorização e procedimento específico.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u1-l8-e1',
        'Qual comportamento é correto no laboratório?',
        [
          'Seguir as instruções do responsável.',
          'Correr entre as bancadas.',
          'Provar substâncias.',
          'Misturar produtos sem autorização.',
        ],
        0,
        'Seguir instruções é uma das principais regras de segurança.'
      ),
      makeExercise(
        'bio7-u1-l8-e2',
        'Um acidente deve ser escondido para evitar problemas.',
        ['Verdadeiro', 'Falso'],
        1,
        'Falso. Acidentes devem ser comunicados imediatamente.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u1', 9),
    unitId: 'bio-7-u1',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Instrumentos básicos de observação',
    lessonNumber: 9,
    title: 'Instrumentos básicos de observação',

    objectives: [
      'Reconhecer instrumentos básicos de observação.',
      'Explicar a utilidade de instrumentos simples.',
      'Compreender a importância da medição científica.',
    ],

    content: {
      definition:
        'Instrumentos de observação são ferramentas utilizadas para ampliar a capacidade de observar, medir ou registar características de objetos e fenómenos.',

      explanation: [
        'A visão humana permite observar muitos fenómenos, mas alguns detalhes são pequenos demais para serem vistos claramente.',
        'A lupa pode aumentar a imagem de objetos pequenos. O microscópio permite observar estruturas muito menores.',
        'A régua permite medir comprimento, enquanto outros instrumentos podem medir massa, temperatura ou volume.',
        'A escolha do instrumento depende daquilo que se pretende observar ou medir.',
      ],
    },

    example: {
      title: 'Exemplo',
      description:
        'Uma folha pode ser observada diretamente, mas uma pequena estrutura presente na sua superfície pode exigir uma lupa ou microscópio.',
      solution:
        'O instrumento deve ser escolhido de acordo com o tamanho e a natureza da estrutura que se pretende estudar.',
    },

    mozambiqueApplication: {
      title: 'Observação de organismos',
      description:
        'Instrumentos simples podem ser utilizados em atividades escolares para observar sementes, folhas, pequenos organismos e características do ambiente.',
      contextArea: 'biodiversidade',
    },

    attention: {
      commonError:
        'Usar qualquer instrumento sem considerar a sua finalidade.',
      correctUnderstanding:
        'Cada instrumento possui uma função e um nível de precisão ou ampliação adequado.',
    },

    summaryPoints: [
      'Instrumentos aumentam a capacidade de observação e medição.',
      'A lupa permite ampliar objetos pequenos.',
      'O microscópio permite observar estruturas muito pequenas.',
      'Instrumentos de medição fornecem dados objetivos.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u1-l9-q1',
        'Qual instrumento pode ampliar a imagem de um pequeno objeto?',
        ['Lupa', 'Régua', 'Balança', 'Termómetro'],
        0,
        'A lupa é utilizada para ampliar visualmente objetos pequenos.'
      ),
      makeQuestion(
        'bio7-u1-l9-q2',
        'A régua é utilizada principalmente para medir:',
        ['Comprimento', 'Temperatura', 'Massa', 'Pressão'],
        0,
        'A régua é utilizada para medir comprimento ou distância.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u1-l9-e1',
        'Para observar estruturas muito pequenas, qual instrumento pode ser necessário?',
        ['Microscópio', 'Régua', 'Balança', 'Proveta'],
        0,
        'O microscópio permite observar estruturas que não podem ser vistas claramente a olho nu.'
      ),
      makeExercise(
        'bio7-u1-l9-e2',
        'A escolha do instrumento depende do que se pretende observar ou medir.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. Instrumentos diferentes possuem funções diferentes.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u1', 10),
    unitId: 'bio-7-u1',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Ética e responsabilidade científica',
    lessonNumber: 10,
    title: 'Ética e responsabilidade científica',

    objectives: [
      'Compreender o significado de ética científica.',
      'Reconhecer comportamentos responsáveis na investigação.',
      'Valorizar honestidade e respeito na ciência.',
    ],

    content: {
      definition:
        'Ética científica é o conjunto de princípios que orientam uma investigação responsável, honesta, segura e respeitosa para com pessoas, animais, ambiente e conhecimento.',

      explanation: [
        'Um investigador deve apresentar resultados de forma honesta, sem inventar ou alterar dados para obter a conclusão desejada.',
        'A investigação que envolve seres humanos deve respeitar direitos, segurança, privacidade e consentimento apropriado.',
        'A utilização de animais em investigação deve seguir princípios de proteção e normas aplicáveis.',
        'A ciência também deve considerar os impactos ambientais e sociais das suas atividades.',
      ],
    },

    example: {
      title: 'Exemplo',
      description:
        'Se uma experiência não produzir o resultado esperado, o estudante não deve modificar os dados para parecer que a hipótese estava correta.',
      solution:
        'O resultado inesperado também é informação científica e deve ser comunicado honestamente.',
    },

    mozambiqueApplication: {
      title: 'Responsabilidade na escola e comunidade',
      description:
        'A ética científica ajuda estudantes e investigadores a realizar atividades responsáveis, especialmente quando trabalham com pessoas, animais, ambiente ou dados pessoais.',
      contextArea: 'ambiente',
    },

    attention: {
      commonError:
        'Pensar que é aceitável alterar dados quando os resultados não correspondem à hipótese.',
      correctUnderstanding:
        'A ciência depende da confiança nos dados. Resultados devem ser apresentados honestamente, mesmo quando contradizem a expectativa inicial.',
    },

    summaryPoints: [
      'A ciência exige honestidade.',
      'Dados não devem ser falsificados.',
      'Pessoas, animais e ambiente devem ser respeitados.',
      'A investigação deve considerar consequências sociais e ambientais.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u1-l10-q1',
        'É correto alterar resultados para confirmar uma hipótese?',
        ['Não', 'Sim'],
        0,
        'Alterar dados é contrário à honestidade científica.'
      ),
      makeQuestion(
        'bio7-u1-l10-q2',
        'A investigação científica deve respeitar pessoas e ambiente.',
        ['Verdadeiro', 'Falso'],
        0,
        'A responsabilidade científica inclui respeito pela segurança, direitos e ambiente.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u1-l10-e1',
        'Um estudante obtém um resultado diferente do esperado. O que deve fazer?',
        [
          'Registar e analisar o resultado honestamente.',
          'Apagar os dados.',
          'Inventar resultados.',
          'Alterar os números.',
        ],
        0,
        'Resultados inesperados devem ser registados e analisados, não falsificados.'
      ),
      makeExercise(
        'bio7-u1-l10-e2',
        'A ética científica contribui para a confiança na ciência.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. Honestidade e responsabilidade são fundamentais para a credibilidade científica.'
      ),
    ],
  },

  /* ==========================================================
     UNIDADE 2 — SERES VIVOS
     ========================================================== */

  {
    id: lessonId('bio-7-u2', 1),
    unitId: 'bio-7-u2',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Conceito de ser vivo',
    lessonNumber: 1,
    title: 'Conceito de ser vivo',

    objectives: [
      'Definir ser vivo.',
      'Identificar características associadas à vida.',
      'Distinguir seres vivos de objetos não vivos.',
    ],

    content: {
      definition:
        'Ser vivo é um organismo que apresenta organização biológica e realiza processos característicos da vida, como metabolismo, crescimento e reprodução, dentro das condições próprias de cada organismo.',

      explanation: [
        'Os seres vivos possuem organização e realizam processos que permitem a manutenção da vida.',
        'Entre as características geralmente associadas aos seres vivos estão metabolismo, crescimento, reprodução, resposta a estímulos e capacidade de manter condições internas relativamente estáveis.',
        'Nem todas as características são observadas da mesma forma em todos os organismos e em todos os momentos. Por exemplo, um indivíduo estéril continua sendo um ser vivo, embora não consiga reproduzir-se.',
        'A identificação de vida deve considerar o conjunto das características e não apenas uma característica isolada.',
      ],
    },

    example: {
      title: 'Exemplo: planta e pedra',
      description:
        'Uma planta realiza metabolismo, cresce, responde a estímulos e possui capacidade de reprodução. Uma pedra pode aumentar de tamanho por acumulação de materiais, mas não realiza processos biológicos.',
      solution:
        'A diferença está nos processos biológicos que caracterizam a organização viva.',
    },

    mozambiqueApplication: {
      title: 'Diversidade da vida',
      description:
        'Moçambique possui grande diversidade de plantas, animais e microrganismos em ambientes terrestres e aquáticos.',
      contextArea: 'biodiversidade',
    },

    attention: {
      commonError:
        'Pensar que qualquer coisa que cresce ou se move é necessariamente um ser vivo.',
      correctUnderstanding:
        'Crescimento ou movimento isolados não são suficientes para definir vida. É necessário considerar o conjunto das características biológicas.',
    },

    summaryPoints: [
      'Ser vivo é um organismo que apresenta organização e processos biológicos.',
      'Os seres vivos realizam metabolismo.',
      'Crescimento e reprodução são características importantes.',
      'Resposta a estímulos também é uma característica da vida.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u2-l1-q1',
        'Qual é um processo característico dos seres vivos?',
        ['Metabolismo', 'Ferrugem de uma bicicleta', 'Desgaste de uma pedra', 'Derretimento do gelo'],
        0,
        'Metabolismo é o conjunto de reações químicas que ocorre nos organismos.'
      ),
      makeQuestion(
        'bio7-u2-l1-q2',
        'Uma pedra é considerada ser vivo apenas porque pode aumentar de tamanho?',
        ['Não', 'Sim'],
        0,
        'O aumento de tamanho por acumulação de materiais não constitui, por si só, crescimento biológico.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u2-l1-e1',
        'Qual característica ajuda a identificar um ser vivo?',
        ['Realização de processos metabólicos', 'Apenas ter cor', 'Apenas possuir massa', 'Apenas ocupar espaço'],
        0,
        'O metabolismo é uma característica fundamental da organização viva.'
      ),
      makeExercise(
        'bio7-u2-l1-e2',
        'Um organismo que não consegue reproduzir-se individualmente deixa necessariamente de ser vivo.',
        ['Verdadeiro', 'Falso'],
        1,
        'Falso. Um indivíduo pode ser estéril e continuar sendo um ser vivo.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u2', 2),
    unitId: 'bio-7-u2',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Características dos seres vivos',
    lessonNumber: 2,
    title: 'Características dos seres vivos',

    objectives: [
      'Identificar características gerais dos seres vivos.',
      'Explicar a importância dessas características.',
      'Utilizar exemplos para reconhecer organismos vivos.',
    ],

    content: {
      definition:
        'As características dos seres vivos são propriedades e processos que, em conjunto, distinguem a organização viva da matéria não viva.',

      explanation: [
        'Os seres vivos possuem organização biológica, utilizam energia e matéria, crescem e desenvolvem-se.',
        'Eles respondem a estímulos, reproduzem-se e possuem informação hereditária.',
        'Os organismos também mantêm condições internas dentro de determinados limites, processo relacionado com a homeostase.',
        'A vida apresenta grande diversidade, por isso essas características podem manifestar-se de maneiras diferentes entre organismos.',
      ],
    },

    example: {
      title: 'Exemplo',
      description:
        'Uma planta cresce, realiza fotossíntese, respira, responde à luz, reproduz-se e possui material genético.',
      solution:
        'O conjunto dessas características demonstra que a planta é um ser vivo.',
    },

    mozambiqueApplication: {
      title: 'Observação da natureza',
      description:
        'A observação de plantas, animais e microrganismos permite identificar diferentes formas de manifestação das características da vida.',
      contextArea: 'biodiversidade',
    },

    attention: {
      commonError:
        'Considerar uma única característica como suficiente para definir vida.',
      correctUnderstanding:
        'É necessário analisar o conjunto de características e a organização biológica do organismo.',
    },

    summaryPoints: [
      'Seres vivos possuem organização biológica.',
      'Utilizam matéria e energia.',
      'Crescem e desenvolvem-se.',
      'Respondem a estímulos.',
      'Reproduzem-se e possuem informação genética.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u2-l2-q1',
        'Qual destas características pertence aos seres vivos?',
        ['Resposta a estímulos', 'Oxidação de ferro', 'Derretimento', 'Erosão'],
        0,
        'Os organismos respondem a alterações do ambiente.'
      ),
      makeQuestion(
        'bio7-u2-l2-q2',
        'Os seres vivos necessitam de matéria e energia para realizar processos vitais.',
        ['Verdadeiro', 'Falso'],
        0,
        'Os organismos dependem de matéria e energia para manter o metabolismo e outras funções.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u2-l2-e1',
        'Qual conjunto apresenta características associadas à vida?',
        [
          'Crescimento, metabolismo e resposta a estímulos.',
          'Ferrugem, erosão e derretimento.',
          'Somente cor e forma.',
          'Somente massa e volume.',
        ],
        0,
        'Crescimento, metabolismo e resposta a estímulos são características biológicas.'
      ),
      makeExercise(
        'bio7-u2-l2-e2',
        'Todos os seres vivos apresentam exatamente as mesmas características da mesma maneira.',
        ['Verdadeiro', 'Falso'],
        1,
        'Falso. Existe diversidade na forma como diferentes organismos realizam processos vitais.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u2', 3),
    unitId: 'bio-7-u2',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Organização dos seres vivos',
    lessonNumber: 3,
    title: 'Organização dos seres vivos',

    objectives: [
      'Compreender que os seres vivos possuem organização.',
      'Relacionar organização biológica com funcionamento.',
      'Reconhecer níveis básicos de organização.',
    ],

    content: {
      definition:
        'Organização biológica é a disposição ordenada das estruturas e componentes que formam um organismo e permitem o funcionamento integrado da vida.',

      explanation: [
        'Nos organismos multicelulares, células semelhantes podem formar tecidos, tecidos podem formar órgãos e órgãos podem trabalhar juntos em sistemas.',
        'Mesmo organismos unicelulares possuem organização interna que permite realizar funções vitais.',
        'A organização permite que diferentes partes desempenhem funções específicas e trabalhem de forma integrada.',
        'A partir da célula, podem ser considerados níveis progressivamente mais complexos de organização.',
      ],
    },

    example: {
      title: 'Exemplo: corpo humano',
      description:
        'Células musculares organizam-se em tecidos; tecidos formam estruturas como músculos; vários órgãos podem atuar juntos em sistemas.',
      solution:
        'A integração entre diferentes níveis permite o funcionamento do organismo.',
    },

    mozambiqueApplication: {
      title: 'Saúde',
      description:
        'Compreender a organização do organismo ajuda a entender como doenças ou alterações em determinadas estruturas podem afetar funções do corpo.',
      contextArea: 'saúde',
    },

    attention: {
      commonError:
        'Pensar que todas as células de um organismo multicelular possuem exatamente a mesma estrutura e função.',
      correctUnderstanding:
        'Muitas células apresentam especialização, desempenhando funções diferentes dentro do organismo.',
    },

    summaryPoints: [
      'Os seres vivos possuem organização.',
      'Organismos multicelulares apresentam diferentes níveis de organização.',
      'Células podem especializar-se.',
      'As partes do organismo funcionam de maneira integrada.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u2-l3-q1',
        'O que significa organização biológica?',
        [
          'Disposição ordenada das estruturas que permite o funcionamento da vida.',
          'Apenas o tamanho de um organismo.',
          'A cor externa do organismo.',
          'A idade do organismo.',
        ],
        0,
        'Organização biológica refere-se à disposição e integração das estruturas e funções da vida.'
      ),
      makeQuestion(
        'bio7-u2-l3-q2',
        'Células de um organismo multicelular podem apresentar funções diferentes.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. A especialização celular permite desempenhar diferentes funções.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u2-l3-e1',
        'Qual é uma vantagem da organização biológica?',
        [
          'Permitir especialização e integração de funções.',
          'Impedir qualquer interação entre células.',
          'Eliminar todas as diferenças celulares.',
          'Impedir crescimento.',
        ],
        0,
        'A organização permite que estruturas especializadas trabalhem de forma integrada.'
      ),
      makeExercise(
        'bio7-u2-l3-e2',
        'Um organismo multicelular pode possuir células especializadas.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. Diferentes células podem desempenhar diferentes funções.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u2', 4),
    unitId: 'bio-7-u2',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Crescimento',
    lessonNumber: 4,
    title: 'Crescimento',

    objectives: [
      'Definir crescimento biológico.',
      'Explicar como ocorre o crescimento.',
      'Distinguir crescimento biológico de simples acumulação de matéria.',
    ],

    content: {
      definition:
        'Crescimento biológico é o aumento organizado do tamanho ou da biomassa de um organismo, associado à produção de matéria e, em muitos organismos, ao aumento do número e tamanho das células.',

      explanation: [
        'Nos organismos multicelulares, o crescimento pode envolver divisão celular e aumento do tamanho das células.',
        'O crescimento depende da obtenção de matéria e energia e de processos internos regulados.',
        'Plantas e animais apresentam padrões de crescimento diferentes.',
        'O crescimento não deve ser confundido com uma simples acumulação externa de material.',
      ],
    },

    example: {
      title: 'Exemplo: crescimento de uma planta',
      description:
        'Uma semente germina e origina uma planta que desenvolve raízes, caule e folhas.',
      solution:
        'O aumento do organismo resulta de processos celulares e utilização de matéria e energia.',
    },

    mozambiqueApplication: {
      title: 'Agricultura',
      description:
        'Compreender o crescimento das plantas ajuda agricultores e estudantes a reconhecer a importância de água, luz, nutrientes e condições adequadas.',
      contextArea: 'agricultura',
    },

    attention: {
      commonError:
        'Pensar que qualquer objeto que aumenta de tamanho está a crescer biologicamente.',
      correctUnderstanding:
        'Crescimento biológico envolve processos organizados do organismo, não apenas acumulação de material externo.',
    },

    summaryPoints: [
      'Crescimento é uma característica dos seres vivos.',
      'Pode envolver divisão e crescimento celular.',
      'Depende de matéria e energia.',
      'Plantas e animais possuem diferentes padrões de crescimento.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u2-l4-q1',
        'O crescimento biológico está relacionado com:',
        [
          'Processos organizados do organismo.',
          'Apenas acumulação de poeira.',
          'Apenas erosão.',
          'Somente mudança de cor.',
        ],
        0,
        'Crescimento biológico resulta de processos internos organizados.'
      ),
      makeQuestion(
        'bio7-u2-l4-q2',
        'As plantas precisam de matéria e energia para crescer.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. O crescimento exige matéria e energia obtidas e processadas pelo organismo.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u2-l4-e1',
        'Qual processo pode contribuir diretamente para o crescimento de um organismo multicelular?',
        ['Divisão celular', 'Ferrugem', 'Erosão', 'Evaporação'],
        0,
        'A divisão celular contribui para o aumento do número de células em muitos organismos.'
      ),
      makeExercise(
        'bio7-u2-l4-e2',
        'Crescimento biológico é exatamente igual à acumulação de material numa pedra.',
        ['Verdadeiro', 'Falso'],
        1,
        'Falso. Crescimento biológico envolve processos internos organizados.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u2', 5),
    unitId: 'bio-7-u2',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Reprodução',
    lessonNumber: 5,
    title: 'Reprodução',

    objectives: [
      'Definir reprodução.',
      'Distinguir reprodução sexuada e assexuada.',
      'Explicar a importância da reprodução para a continuidade das espécies.',
    ],

    content: {
      definition:
        'Reprodução é o processo biológico pelo qual os organismos originam novos indivíduos da mesma espécie.',

      explanation: [
        'A reprodução permite a continuidade das populações ao longo das gerações.',
        'Na reprodução assexuada, um único organismo pode originar descendentes sem fusão de gametas. Os descendentes tendem a ser geneticamente muito semelhantes ao progenitor.',
        'Na reprodução sexuada ocorre participação de células reprodutoras e, em muitos organismos, fusão de gametas, contribuindo para a variabilidade genética.',
        'A reprodução é importante para a continuidade das espécies, embora um indivíduo isolado não precise necessariamente reproduzir-se para ser considerado vivo.',
      ],
    },

    example: {
      title: 'Exemplo',
      description:
        'Algumas plantas podem ser propagadas vegetativamente através de partes da planta. Em seres humanos, a reprodução é sexuada.',
      solution:
        'Os mecanismos de reprodução variam entre os organismos.',
    },

    mozambiqueApplication: {
      title: 'Agricultura',
      description:
        'A reprodução de plantas possui importância agrícola, incluindo produção de sementes e propagação vegetativa de determinadas culturas.',
      contextArea: 'agricultura',
    },

    attention: {
      commonError:
        'Pensar que reprodução é obrigatória para cada indivíduo permanecer vivo.',
      correctUnderstanding:
        'A reprodução é importante para a continuidade da espécie, mas indivíduos podem viver sem se reproduzir.',
    },

    summaryPoints: [
      'Reprodução origina novos indivíduos.',
      'Pode ser sexuada ou assexuada.',
      'A reprodução mantém a continuidade das espécies.',
      'A reprodução sexuada contribui para a variabilidade genética.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u2-l5-q1',
        'Qual é a função principal da reprodução?',
        [
          'Permitir a continuidade das espécies.',
          'Produzir apenas energia.',
          'Eliminar todos os organismos.',
          'Impedir crescimento.',
        ],
        0,
        'A reprodução permite a formação de novos indivíduos e a continuidade das espécies.'
      ),
      makeQuestion(
        'bio7-u2-l5-q2',
        'Na reprodução assexuada é necessária a fusão de gametas?',
        ['Não', 'Sim'],
        0,
        'A reprodução assexuada ocorre sem fusão de gametas.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u2-l5-e1',
        'Qual processo está diretamente relacionado com a continuidade de uma espécie?',
        ['Reprodução', 'Evaporação', 'Erosão', 'Condensação'],
        0,
        'A reprodução origina novos indivíduos e permite a continuidade das espécies.'
      ),
      makeExercise(
        'bio7-u2-l5-e2',
        'Um indivíduo que não se reproduz deixa necessariamente de ser um ser vivo.',
        ['Verdadeiro', 'Falso'],
        1,
        'Falso. A reprodução é uma característica da vida ao nível das populações e espécies; indivíduos estéreis continuam vivos.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u2', 6),
    unitId: 'bio-7-u2',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Nutrição',
    lessonNumber: 6,
    title: 'Nutrição',

    objectives: [
      'Definir nutrição.',
      'Explicar por que os organismos necessitam de nutrientes.',
      'Distinguir diferentes formas de obtenção de matéria.',
    ],

    content: {
      definition:
        'Nutrição é o conjunto de processos através dos quais os organismos obtêm, transformam e utilizam matéria e nutrientes necessários para as suas funções vitais.',

      explanation: [
        'Os organismos precisam de matéria para construir e renovar estruturas e de energia para realizar processos celulares.',
        'As plantas produzem matéria orgânica através da fotossíntese utilizando água, dióxido de carbono e energia luminosa.',
        'Os animais obtêm matéria orgânica através da alimentação.',
        'A nutrição está relacionada com crescimento, reparação de tecidos, metabolismo e manutenção do organismo.',
      ],
    },

    example: {
      title: 'Exemplo: alimentação humana',
      description:
        'Uma pessoa obtém nutrientes através dos alimentos. Esses nutrientes são posteriormente utilizados em diferentes processos do organismo.',
      solution:
        'A alimentação fornece matéria e energia necessárias ao funcionamento do organismo.',
    },

    mozambiqueApplication: {
      title: 'Alimentação e saúde',
      description:
        'Uma alimentação adequada é importante para crescimento, desenvolvimento e prevenção de problemas nutricionais.',
      contextArea: 'saúde',
    },

    attention: {
      commonError:
        'Pensar que todos os seres vivos obtêm alimento exatamente da mesma maneira.',
      correctUnderstanding:
        'Organismos diferentes possuem estratégias diferentes de obtenção de matéria e energia.',
    },

    summaryPoints: [
      'Nutrição fornece matéria e energia ao organismo.',
      'Plantas produzem matéria orgânica por fotossíntese.',
      'Animais obtêm nutrientes através da alimentação.',
      'Nutrição é essencial ao funcionamento e crescimento.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u2-l6-q1',
        'Por que os organismos precisam de nutrientes?',
        [
          'Para crescimento, manutenção e funcionamento.',
          'Apenas para mudar de cor.',
          'Somente para dormir.',
          'Para deixar de respirar.',
        ],
        0,
        'Nutrientes fornecem matéria e participam de processos necessários à vida.'
      ),
      makeQuestion(
        'bio7-u2-l6-q2',
        'As plantas podem produzir matéria orgânica através da fotossíntese.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. Na fotossíntese, plantas utilizam energia luminosa para produzir matéria orgânica a partir de substâncias inorgânicas.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u2-l6-e1',
        'Qual processo permite às plantas produzir matéria orgânica utilizando energia luminosa?',
        ['Fotossíntese', 'Digestão', 'Excreção', 'Transpiração'],
        0,
        'A fotossíntese permite produzir matéria orgânica utilizando energia luminosa.'
      ),
      makeExercise(
        'bio7-u2-l6-e2',
        'Os animais obtêm nutrientes principalmente através da alimentação.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. Animais dependem da ingestão e digestão de alimentos para obter nutrientes.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u2', 7),
    unitId: 'bio-7-u2',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Respiração',
    lessonNumber: 7,
    title: 'Respiração',

    objectives: [
      'Compreender o conceito de respiração celular.',
      'Distinguir respiração celular de simples entrada de ar.',
      'Explicar a importância da respiração para os organismos.',
    ],

    content: {
      definition:
        'Respiração celular é o conjunto de reações metabólicas através das quais as células obtêm energia utilizável a partir de moléculas orgânicas.',

      explanation: [
        'A respiração celular ocorre nas células e permite disponibilizar energia para atividades como crescimento, movimento, transporte de substâncias e manutenção do organismo.',
        'Na respiração aeróbia, o oxigénio participa no processo e a glicose é degradada, produzindo dióxido de carbono, água e energia armazenada principalmente em ATP.',
        'Respiração celular não é exatamente o mesmo que respirar ou trocar gases com o ambiente.',
        'Organismos diferentes possuem diferentes estruturas para realizar trocas gasosas, mas todas as células precisam de processos metabólicos para obter energia.',
      ],
    },

    example: {
      title: 'Exemplo: exercício físico',
      description:
        'Durante exercício intenso, os músculos aumentam a necessidade de energia. O organismo aumenta a ventilação e circulação para fornecer oxigénio e nutrientes.',
      solution:
        'O aumento da atividade celular exige maior produção de energia.',
    },

    mozambiqueApplication: {
      title: 'Saúde',
      description:
        'Compreender respiração ajuda a entender a importância do sistema respiratório, circulação e atividade física.',
      contextArea: 'saúde',
    },

    attention: {
      commonError:
        'Usar “respiração” apenas para significar entrada e saída de ar.',
      correctUnderstanding:
        'Na Biologia, é importante distinguir trocas gasosas da respiração celular, que ocorre nas células.',
    },

    summaryPoints: [
      'Respiração celular é um processo metabólico.',
      'Produz energia utilizável pelas células.',
      'A respiração aeróbia utiliza oxigénio.',
      'Trocas gasosas e respiração celular são conceitos relacionados, mas diferentes.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u2-l7-q1',
        'Onde ocorre a respiração celular?',
        ['Nas células', 'Apenas no ar', 'Apenas no solo', 'Apenas na água'],
        0,
        'Respiração celular é um conjunto de reações metabólicas que ocorre nas células.'
      ),
      makeQuestion(
        'bio7-u2-l7-q2',
        'Respiração celular é exatamente igual à entrada e saída de ar dos pulmões.',
        ['Falso', 'Verdadeiro'],
        0,
        'Falso. Trocas gasosas e respiração celular são processos distintos.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u2-l7-e1',
        'Qual é uma função importante da respiração celular?',
        ['Disponibilizar energia para as células.', 'Produzir luz solar.', 'Formar solo.', 'Eliminar todos os nutrientes.'],
        0,
        'A respiração celular disponibiliza energia utilizável pelas células.'
      ),
      makeExercise(
        'bio7-u2-l7-e2',
        'O oxigénio pode participar na respiração aeróbia.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. O oxigénio participa como reagente na respiração aeróbia.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u2', 8),
    unitId: 'bio-7-u2',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Excreção',
    lessonNumber: 8,
    title: 'Excreção',

    objectives: [
      'Definir excreção.',
      'Explicar a importância da eliminação de resíduos metabólicos.',
      'Distinguir excreção de alimentação.',
    ],

    content: {
      definition:
        'Excreção é o processo de eliminação de substâncias residuais resultantes do metabolismo do organismo.',

      explanation: [
        'Durante o metabolismo são produzidas substâncias que precisam de ser eliminadas para evitar acumulação prejudicial.',
        'Nos seres humanos, os rins participam na eliminação de resíduos através da urina, enquanto os pulmões eliminam dióxido de carbono.',
        'A pele também participa na eliminação de pequenas quantidades de água, sais e outras substâncias através do suor.',
        'Excreção não deve ser confundida com eliminação de restos de alimentos não digeridos, que pertence à egestão.',
      ],
    },

    example: {
      title: 'Exemplo: urina',
      description:
        'Os rins filtram o sangue e participam na formação da urina, que contém resíduos e excesso de determinadas substâncias.',
      solution:
        'A eliminação da urina é uma forma importante de excreção.',
    },

    mozambiqueApplication: {
      title: 'Saúde e água',
      description:
        'A compreensão da excreção reforça a importância da hidratação adequada, higiene e prevenção de doenças do sistema urinário.',
      contextArea: 'saúde',
    },

    attention: {
      commonError:
        'Considerar fezes como produto principal da excreção.',
      correctUnderstanding:
        'Fezes são principalmente restos não digeridos e materiais não absorvidos; excreção refere-se à eliminação de resíduos metabólicos.',
    },

    summaryPoints: [
      'Excreção elimina resíduos do metabolismo.',
      'Rins são importantes na excreção humana.',
      'Pulmões eliminam dióxido de carbono.',
      'Suor pode eliminar água e sais.',
      'Excreção é diferente de egestão.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u2-l8-q1',
        'Qual órgão participa diretamente da formação da urina?',
        ['Rim', 'Coração', 'Estômago', 'Pulmão'],
        0,
        'Os rins filtram o sangue e participam da formação da urina.'
      ),
      makeQuestion(
        'bio7-u2-l8-q2',
        'Excreção elimina resíduos resultantes do metabolismo.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. Essa é a definição básica de excreção.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u2-l8-e1',
        'Qual substância é eliminada pelos pulmões como produto do metabolismo?',
        ['Dióxido de carbono', 'Glicose', 'Amido', 'Proteína'],
        0,
        'O dióxido de carbono é produzido na respiração celular e eliminado pelos pulmões.'
      ),
      makeExercise(
        'bio7-u2-l8-e2',
        'Excreção e eliminação de restos alimentares não digeridos são exatamente o mesmo processo.',
        ['Verdadeiro', 'Falso'],
        1,
        'Falso. Excreção refere-se a resíduos metabólicos; egestão refere-se a restos não digeridos.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u2', 9),
    unitId: 'bio-7-u2',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Sensibilidade',
    lessonNumber: 9,
    title: 'Sensibilidade',

    objectives: [
      'Definir sensibilidade nos seres vivos.',
      'Explicar resposta a estímulos.',
      'Dar exemplos de respostas em plantas e animais.',
    ],

    content: {
      definition:
        'Sensibilidade é a capacidade dos organismos de detetar alterações internas ou externas e responder a estímulos.',

      explanation: [
        'Um estímulo é uma alteração que pode provocar uma resposta do organismo.',
        'Animais possuem sistemas nervosos e órgãos sensoriais especializados que permitem detetar diferentes estímulos.',
        'As plantas também respondem a estímulos, embora não possuam sistema nervoso como os animais.',
        'Luz, gravidade, temperatura, toque e substâncias químicas podem atuar como estímulos.',
      ],
    },

    example: {
      title: 'Exemplo: luz',
      description:
        'Uma planta pode orientar o crescimento dos seus órgãos em direção à luz. Um ser humano pode retirar a mão rapidamente ao tocar numa superfície muito quente.',
      solution:
        'Em ambos os casos existe deteção de um estímulo e uma resposta biológica.',
    },

    mozambiqueApplication: {
      title: 'Observação de plantas',
      description:
        'Estudantes podem observar respostas de plantas à luz e à água em experiências simples.',
      contextArea: 'agricultura',
    },

    attention: {
      commonError:
        'Pensar que apenas animais conseguem responder a estímulos.',
      correctUnderstanding:
        'Plantas também respondem a estímulos ambientais, embora utilizem mecanismos diferentes dos animais.',
    },

    summaryPoints: [
      'Sensibilidade é a capacidade de perceber estímulos e responder.',
      'Animais utilizam sistemas sensoriais e nervosos.',
      'Plantas também respondem a estímulos.',
      'Luz, temperatura e toque podem funcionar como estímulos.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u2-l9-q1',
        'O que é um estímulo?',
        [
          'Uma alteração capaz de provocar uma resposta.',
          'Um tipo de alimento.',
          'Uma célula.',
          'Um órgão.',
        ],
        0,
        'Estímulo é uma alteração interna ou externa que pode desencadear uma resposta.'
      ),
      makeQuestion(
        'bio7-u2-l9-q2',
        'As plantas podem responder a estímulos?',
        ['Sim', 'Não'],
        0,
        'Sim. Plantas respondem a estímulos como luz, gravidade, água e toque.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u2-l9-e1',
        'Uma planta que cresce em direção à luz está respondendo a:',
        ['Um estímulo luminoso', 'Um som', 'Uma doença necessariamente', 'Um mineral metálico'],
        0,
        'A luz é um estímulo ambiental ao qual muitas plantas respondem.'
      ),
      makeExercise(
        'bio7-u2-l9-e2',
        'Somente animais apresentam sensibilidade.',
        ['Verdadeiro', 'Falso'],
        1,
        'Falso. Plantas também possuem respostas a estímulos.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u2', 10),
    unitId: 'bio-7-u2',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Adaptação',
    lessonNumber: 10,
    title: 'Adaptação',

    objectives: [
      'Definir adaptação biológica.',
      'Distinguir adaptação de uma mudança individual imediata.',
      'Relacionar adaptação com sobrevivência e reprodução.',
    ],

    content: {
      definition:
        'Adaptação é uma característica herdável que, ao longo das gerações, aumenta a capacidade de um organismo sobreviver e reproduzir-se num determinado ambiente.',

      explanation: [
        'As adaptações resultam de processos evolutivos que atuam sobre variações existentes nas populações.',
        'Uma característica pode ser vantajosa num determinado ambiente e pouco vantajosa ou desvantajosa noutro.',
        'Adaptações podem envolver estrutura corporal, funcionamento fisiológico ou comportamento.',
        'Uma mudança que acontece durante a vida de um indivíduo em resposta ao ambiente não é automaticamente uma adaptação evolutiva.',
      ],
    },

    example: {
      title: 'Exemplo: plantas de ambientes secos',
      description:
        'Algumas plantas de ambientes secos apresentam características que ajudam a reduzir a perda de água, como folhas modificadas e estruturas de armazenamento.',
      solution:
        'Essas características podem aumentar a capacidade de sobrevivência em condições de escassez de água.',
    },

    mozambiqueApplication: {
      title: 'Diversidade dos ambientes',
      description:
        'Moçambique possui ambientes variados, desde zonas costeiras até regiões interiores, proporcionando diferentes condições às quais os organismos estão adaptados.',
      contextArea: 'ambiente',
    },

    attention: {
      commonError:
        'Pensar que um indivíduo desenvolve uma adaptação porque “precisa” dela.',
      correctUnderstanding:
        'Adaptações evolutivas surgem e tornam-se frequentes ao longo de gerações através de processos evolutivos, especialmente seleção natural.',
    },

    summaryPoints: [
      'Adaptação está relacionada com sobrevivência e reprodução.',
      'Adaptações são características herdáveis.',
      'O ambiente influencia quais características podem ser vantajosas.',
      'Adaptação evolutiva ocorre ao longo de gerações.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u2-l10-q1',
        'Uma adaptação evolutiva ocorre principalmente:',
        [
          'Ao longo de gerações.',
          'Instantaneamente num indivíduo.',
          'Apenas durante uma experiência.',
          'Quando um organismo decide mudar.',
        ],
        0,
        'Adaptações evolutivas tornam-se características das populações ao longo de gerações.'
      ),
      makeQuestion(
        'bio7-u2-l10-q2',
        'Uma característica pode ser vantajosa num ambiente e não ser vantajosa noutro.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. O valor adaptativo de uma característica depende do ambiente e das condições existentes.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u2-l10-e1',
        'Qual exemplo representa melhor uma adaptação evolutiva?',
        [
          'Uma característica herdável que favorece sobrevivência num ambiente.',
          'Uma pessoa que aprende a andar de bicicleta.',
          'Uma pessoa que corta o cabelo.',
          'Uma planta que perde água durante um dia quente.',
        ],
        0,
        'Adaptação evolutiva é uma característica herdável relacionada com sobrevivência e reprodução.'
      ),
      makeExercise(
        'bio7-u2-l10-e2',
        'Um indivíduo desenvolve uma adaptação evolutiva simplesmente porque precisa dela durante a vida.',
        ['Verdadeiro', 'Falso'],
        1,
        'Falso. Adaptações evolutivas resultam de processos que atuam nas populações ao longo de gerações.'
      ),
    ],
  },

  /* ==========================================================
     UNIDADE 3 — AMBIENTE
     ========================================================== */

  {
    id: lessonId('bio-7-u3', 1),
    unitId: 'bio-7-u3',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Conceito de ambiente',
    lessonNumber: 1,
    title: 'Conceito de ambiente',

    objectives: [
      'Definir ambiente.',
      'Identificar componentes do ambiente.',
      'Relacionar organismos com as condições do local onde vivem.',
    ],

    content: {
      definition:
        'Ambiente é o conjunto de condições e elementos que envolvem os organismos e influenciam a sua vida, incluindo componentes vivos e não vivos.',

      explanation: [
        'O ambiente inclui elementos físicos como água, ar, luz, temperatura e solo.',
        'Também inclui outros seres vivos, como plantas, animais, fungos e microrganismos.',
        'Os organismos não vivem isolados. Eles interagem continuamente com outros organismos e com os componentes físicos do ambiente.',
        'Alterações ambientais podem modificar as condições de sobrevivência das populações.',
      ],
    },

    example: {
      title: 'Exemplo: uma machamba',
      description:
        'Numa machamba, plantas, insetos, microrganismos, água, solo, luz e temperatura fazem parte do ambiente.',
      solution:
        'Todos esses elementos podem influenciar o crescimento das culturas.',
    },

    mozambiqueApplication: {
      title: 'Ambiente comunitário',
      description:
        'A compreensão do ambiente ajuda comunidades a tomar decisões sobre agricultura, água, resíduos e conservação.',
      contextArea: 'ambiente',
    },

    attention: {
      commonError:
        'Pensar que ambiente significa apenas natureza intocada.',
      correctUnderstanding:
        'Ambiente inclui as condições naturais e os elementos que rodeiam os organismos, incluindo ambientes modificados pelas pessoas.',
    },

    summaryPoints: [
      'Ambiente envolve componentes vivos e não vivos.',
      'Os organismos dependem das condições ambientais.',
      'Os seres vivos interagem com o ambiente.',
      'Mudanças ambientais podem afetar populações.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u3-l1-q1',
        'Qual elemento faz parte do ambiente?',
        ['Água', 'Apenas animais', 'Apenas pessoas', 'Nenhum elemento físico'],
        0,
        'Água é um componente não vivo do ambiente.'
      ),
      makeQuestion(
        'bio7-u3-l1-q2',
        'O ambiente inclui seres vivos e componentes físicos.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. O ambiente possui componentes bióticos e abióticos.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u3-l1-e1',
        'Qual conjunto representa componentes do ambiente?',
        [
          'Água, solo, plantas e animais.',
          'Apenas animais.',
          'Apenas água.',
          'Somente máquinas.',
        ],
        0,
        'O ambiente inclui componentes vivos e não vivos.'
      ),
      makeExercise(
        'bio7-u3-l1-e2',
        'Os seres vivos podem ser influenciados pelas condições do ambiente.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. Condições ambientais influenciam sobrevivência, crescimento e distribuição dos organismos.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u3', 2),
    unitId: 'bio-7-u3',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Fatores bióticos',
    lessonNumber: 2,
    title: 'Fatores bióticos',

    objectives: [
      'Definir fatores bióticos.',
      'Identificar exemplos de fatores bióticos.',
      'Explicar como os seres vivos influenciam uns aos outros.',
    ],

    content: {
      definition:
        'Fatores bióticos são os componentes vivos de um ambiente e as relações que estabelecem entre si.',

      explanation: [
        'Plantas, animais, fungos, bactérias e outros organismos são componentes bióticos.',
        'Um organismo pode afetar outro através de alimentação, competição, cooperação, predação, parasitismo ou outras interações.',
        'A presença ou ausência de determinadas espécies pode alterar as condições de vida de outras espécies.',
        'Os fatores bióticos funcionam em conjunto com fatores abióticos.',
      ],
    },

    example: {
      title: 'Exemplo',
      description:
        'Uma planta de milho pode ser afetada por insetos que se alimentam das folhas e também por organismos que ajudam na polinização.',
      solution:
        'Essas interações entre organismos são fatores bióticos.',
    },

    mozambiqueApplication: {
      title: 'Agricultura',
      description:
        'Pragas, polinizadores, predadores e microrganismos do solo são exemplos de fatores bióticos importantes para a produção agrícola.',
      contextArea: 'agricultura',
    },

    attention: {
      commonError:
        'Considerar água e temperatura como fatores bióticos.',
      correctUnderstanding:
        'Água e temperatura são fatores abióticos. Fatores bióticos correspondem aos componentes vivos e suas interações.',
    },

    summaryPoints: [
      'Fatores bióticos são componentes vivos.',
      'Incluem plantas, animais e microrganismos.',
      'Os organismos interagem entre si.',
      'Essas interações podem influenciar populações.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u3-l2-q1',
        'Qual é um fator biótico?',
        ['Uma planta', 'Temperatura', 'Água', 'Luz'],
        0,
        'Uma planta é um organismo vivo e, portanto, um componente biótico.'
      ),
      makeQuestion(
        'bio7-u3-l2-q2',
        'A competição entre organismos é uma interação biótica.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. Competição ocorre entre seres vivos e é uma interação biótica.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u3-l2-e1',
        'Qual situação representa um fator biótico?',
        [
          'Um gafanhoto alimentando-se de uma planta.',
          'A temperatura do ar.',
          'A quantidade de água.',
          'A intensidade da luz.',
        ],
        0,
        'O gafanhoto e a planta são organismos vivos e a interação entre eles é biótica.'
      ),
      makeExercise(
        'bio7-u3-l2-e2',
        'A temperatura é um fator biótico.',
        ['Verdadeiro', 'Falso'],
        1,
        'Falso. Temperatura é um fator abiótico.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u3', 3),
    unitId: 'bio-7-u3',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Fatores abióticos',
    lessonNumber: 3,
    title: 'Fatores abióticos',

    objectives: [
      'Definir fatores abióticos.',
      'Identificar fatores físicos e químicos do ambiente.',
      'Explicar a influência desses fatores sobre os organismos.',
    ],

    content: {
      definition:
        'Fatores abióticos são componentes não vivos do ambiente que influenciam os organismos.',

      explanation: [
        'Entre os fatores abióticos estão temperatura, luz, água, ar, solo, pH, salinidade e humidade.',
        'Cada espécie possui condições ambientais nas quais consegue sobreviver e reproduzir-se melhor.',
        'Alterações nos fatores abióticos podem modificar a distribuição e a abundância dos organismos.',
        'Os fatores abióticos interagem com os fatores bióticos para determinar as condições de um ecossistema.',
      ],
    },

    example: {
      title: 'Exemplo',
      description:
        'Uma planta necessita de determinada quantidade de luz e água para realizar adequadamente as suas funções.',
      solution:
        'Se as condições forem demasiado secas ou houver luz insuficiente, o crescimento pode ser afetado.',
    },

    mozambiqueApplication: {
      title: 'Agricultura e clima',
      description:
        'Temperatura, chuva, disponibilidade de água e características do solo influenciam a produção agrícola em diferentes regiões.',
      contextArea: 'agricultura',
    },

    attention: {
      commonError:
        'Pensar que fatores abióticos são seres vivos pequenos.',
      correctUnderstanding:
        'Abiótico significa não vivo. Água, luz, temperatura e solo são exemplos.',
    },

    summaryPoints: [
      'Fatores abióticos são componentes não vivos.',
      'Incluem água, luz, temperatura e solo.',
      'Influenciam sobrevivência e distribuição.',
      'Interagem com fatores bióticos.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u3-l3-q1',
        'Qual é um fator abiótico?',
        ['Temperatura', 'Planta', 'Peixe', 'Bactéria'],
        0,
        'Temperatura é um componente não vivo do ambiente.'
      ),
      makeQuestion(
        'bio7-u3-l3-q2',
        'A água pode funcionar como fator abiótico.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. A disponibilidade de água influencia muitos organismos.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u3-l3-e1',
        'Qual conjunto apresenta apenas fatores abióticos?',
        [
          'Luz, água e temperatura.',
          'Plantas, animais e fungos.',
          'Peixes, algas e bactérias.',
          'Predadores, presas e parasitas.',
        ],
        0,
        'Luz, água e temperatura são componentes não vivos.'
      ),
      makeExercise(
        'bio7-u3-l3-e2',
        'Os fatores abióticos podem influenciar o crescimento das plantas.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. Luz, água, temperatura e solo podem influenciar o crescimento.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u3', 4),
    unitId: 'bio-7-u3',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Habitat',
    lessonNumber: 4,
    title: 'Habitat',

    objectives: [
      'Definir habitat.',
      'Dar exemplos de habitats.',
      'Relacionar habitat com condições de vida.',
    ],

    content: {
      definition:
        'Habitat é o local ou tipo de ambiente onde um organismo vive e encontra condições e recursos necessários à sua sobrevivência.',

      explanation: [
        'Um habitat fornece recursos e condições como alimento, água, abrigo e espaço.',
        'Diferentes espécies podem ocupar habitats diferentes ou compartilhar o mesmo habitat.',
        'O habitat não é simplesmente o lugar onde o organismo foi encontrado uma vez; envolve condições que permitem a sua sobrevivência.',
        'A destruição ou alteração de habitats pode ameaçar populações e espécies.',
      ],
    },

    example: {
      title: 'Exemplo',
      description:
        'Um peixe de água doce vive num habitat aquático onde encontra água, alimento, oxigénio dissolvido e condições adequadas.',
      solution:
        'O conjunto dessas condições permite a sobrevivência do organismo.',
    },

    mozambiqueApplication: {
      title: 'Habitats moçambicanos',
      description:
        'Florestas, rios, lagos, mangais, savanas e zonas costeiras são habitats de muitas espécies presentes em Moçambique.',
      contextArea: 'biodiversidade',
    },

    attention: {
      commonError:
        'Confundir habitat com espécie.',
      correctUnderstanding:
        'Habitat é o local e conjunto de condições onde o organismo vive.',
    },

    summaryPoints: [
      'Habitat é o local de vida de um organismo.',
      'Fornece recursos e condições necessárias.',
      'Espécies diferentes podem compartilhar habitats.',
      'Alteração de habitats pode afetar a biodiversidade.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u3-l4-q1',
        'O que é habitat?',
        [
          'Local e condições onde um organismo vive.',
          'Nome científico de uma espécie.',
          'Somente alimento.',
          'Apenas o clima mundial.',
        ],
        0,
        'Habitat corresponde ao local e condições em que um organismo vive.'
      ),
      makeQuestion(
        'bio7-u3-l4-q2',
        'A destruição de habitats pode ameaçar espécies.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. A perda de condições e recursos pode reduzir populações.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u3-l4-e1',
        'Qual é um exemplo de habitat?',
        ['Um rio onde vivem peixes e outros organismos.', 'Uma molécula.', 'Um órgão humano.', 'Uma célula isolada.'],
        0,
        'Um rio pode fornecer condições e recursos para diversas espécies.'
      ),
      makeExercise(
        'bio7-u3-l4-e2',
        'Habitat é apenas o alimento que um organismo consome.',
        ['Verdadeiro', 'Falso'],
        1,
        'Falso. Habitat é o local e conjunto de condições onde o organismo vive.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u3', 5),
    unitId: 'bio-7-u3',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'População',
    lessonNumber: 5,
    title: 'População',

    objectives: [
      'Definir população biológica.',
      'Distinguir população de indivíduo.',
      'Compreender que populações possuem características próprias.',
    ],

    content: {
      definition:
        'População é o conjunto de indivíduos da mesma espécie que vivem numa determinada área e período e que podem interagir entre si.',

      explanation: [
        'Uma população é formada por vários indivíduos da mesma espécie.',
        'Os indivíduos de uma população podem competir por recursos, reproduzir-se e interagir de diferentes maneiras.',
        'Uma população possui características como tamanho, densidade, distribuição e estrutura etária.',
        'O número de indivíduos de uma população pode mudar devido a nascimentos, mortes, imigração e emigração.',
      ],
    },

    example: {
      title: 'Exemplo',
      description:
        'Todas as árvores de uma determinada espécie que vivem numa área específica podem constituir uma população.',
      solution:
        'O conceito exige considerar a mesma espécie, uma área e um período definidos.',
    },

    mozambiqueApplication: {
      title: 'Monitorização da fauna',
      description:
        'Estudar populações de animais ajuda na conservação de espécies e na gestão de áreas protegidas.',
      contextArea: 'biodiversidade',
    },

    attention: {
      commonError:
        'Chamar população a todos os organismos de uma área, independentemente da espécie.',
      correctUnderstanding:
        'População é formada por indivíduos da mesma espécie numa área e período determinados.',
    },

    summaryPoints: [
      'População envolve indivíduos da mesma espécie.',
      'Os indivíduos vivem numa área e período definidos.',
      'Populações mudam de tamanho ao longo do tempo.',
      'Nascimentos, mortes, imigração e emigração influenciam populações.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u3-l5-q1',
        'Uma população é constituída por:',
        [
          'Indivíduos da mesma espécie numa determinada área.',
          'Todos os seres vivos do planeta.',
          'Apenas indivíduos de espécies diferentes.',
          'Somente plantas.',
        ],
        0,
        'População é um conjunto de indivíduos da mesma espécie numa área e período definidos.'
      ),
      makeQuestion(
        'bio7-u3-l5-q2',
        'Nascimentos podem alterar o tamanho de uma população.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. Nascimentos tendem a aumentar o número de indivíduos.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u3-l5-e1',
        'Qual situação representa uma população?',
        [
          'Todos os indivíduos de uma espécie de peixe numa lagoa.',
          'Uma árvore isolada.',
          'Peixes, árvores e aves juntos.',
          'Todas as espécies de uma floresta.',
        ],
        0,
        'Uma população é formada por indivíduos da mesma espécie.'
      ),
      makeExercise(
        'bio7-u3-l5-e2',
        'Morte de indivíduos pode reduzir o tamanho de uma população.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. Mortes reduzem o número de indivíduos da população.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u3', 6),
    unitId: 'bio-7-u3',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Comunidade',
    lessonNumber: 6,
    title: 'Comunidade',

    objectives: [
      'Definir comunidade biológica.',
      'Distinguir comunidade de população.',
      'Reconhecer diferentes espécies numa comunidade.',
    ],

    content: {
      definition:
        'Comunidade é o conjunto de populações de espécies diferentes que vivem e interagem numa determinada área.',

      explanation: [
        'Uma comunidade inclui várias populações que compartilham uma área.',
        'As espécies podem estabelecer relações de alimentação, competição, predação, parasitismo, mutualismo e outras interações.',
        'A composição de uma comunidade pode mudar quando espécies desaparecem ou novas espécies entram.',
        'Comunidade é um nível de organização ecológica superior ao de população.',
      ],
    },

    example: {
      title: 'Exemplo',
      description:
        'Numa lagoa podem existir populações de peixes, algas, plantas aquáticas, insetos, bactérias e outros organismos.',
      solution:
        'Todas essas populações juntas constituem uma comunidade biológica.',
    },

    mozambiqueApplication: {
      title: 'Comunidades naturais',
      description:
        'Mangais, rios, florestas e savanas possuem comunidades compostas por muitas espécies interdependentes.',
      contextArea: 'biodiversidade',
    },

    attention: {
      commonError:
        'Confundir comunidade com população.',
      correctUnderstanding:
        'População envolve uma espécie; comunidade envolve várias populações de espécies diferentes.',
    },

    summaryPoints: [
      'Comunidade reúne populações de diferentes espécies.',
      'As populações interagem entre si.',
      'É um nível ecológico superior à população.',
      'A composição de uma comunidade pode mudar.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u3-l6-q1',
        'Uma comunidade é formada por:',
        [
          'Populações de diferentes espécies.',
          'Apenas um indivíduo.',
          'Apenas uma população.',
          'Somente fatores abióticos.',
        ],
        0,
        'Comunidade inclui várias populações de espécies diferentes.'
      ),
      makeQuestion(
        'bio7-u3-l6-q2',
        'Predação pode ser uma interação dentro de uma comunidade.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. Predação é uma interação entre organismos de diferentes espécies.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u3-l6-e1',
        'Qual exemplo representa uma comunidade?',
        [
          'Peixes, algas, insetos e bactérias de uma lagoa.',
          'Apenas os peixes de uma lagoa.',
          'Uma única planta.',
          'Apenas a água da lagoa.',
        ],
        0,
        'Uma comunidade reúne diferentes populações de espécies.'
      ),
      makeExercise(
        'bio7-u3-l6-e2',
        'Comunidade e população são exatamente o mesmo conceito.',
        ['Verdadeiro', 'Falso'],
        1,
        'Falso. População envolve uma espécie; comunidade envolve várias populações.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u3', 7),
    unitId: 'bio-7-u3',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Ecossistema',
    lessonNumber: 7,
    title: 'Ecossistema',

    objectives: [
      'Definir ecossistema.',
      'Relacionar componentes bióticos e abióticos.',
      'Explicar a importância das interações no ecossistema.',
    ],

    content: {
      definition:
        'Ecossistema é o conjunto formado pela comunidade de seres vivos e pelos componentes não vivos do ambiente, juntamente com as interações entre eles.',

      explanation: [
        'Um ecossistema inclui seres vivos, água, ar, solo, luz, temperatura e outros fatores abióticos.',
        'Os organismos interagem entre si e com o ambiente físico.',
        'A energia entra principalmente através da radiação solar e é transferida pelas relações alimentares.',
        'A matéria circula entre organismos e ambiente através de processos naturais.',
      ],
    },

    example: {
      title: 'Exemplo: lagoa',
      description:
        'Uma lagoa pode conter água, luz, sedimentos, algas, plantas, peixes, insetos, bactérias e outros organismos.',
      solution:
        'A interação entre todos esses componentes forma um ecossistema.',
    },

    mozambiqueApplication: {
      title: 'Ecossistemas de Moçambique',
      description:
        'Rios, lagos, mangais, savanas, florestas e zonas costeiras são exemplos de ambientes onde existem ecossistemas diversos.',
      contextArea: 'ambiente',
    },

    attention: {
      commonError:
        'Definir ecossistema apenas como conjunto de animais e plantas.',
      correctUnderstanding:
        'Ecossistema inclui componentes bióticos, abióticos e as interações entre eles.',
    },

    summaryPoints: [
      'Ecossistema reúne comunidade e ambiente físico.',
      'Existem fatores bióticos e abióticos.',
      'Os componentes interagem.',
      'Energia e matéria participam do funcionamento dos ecossistemas.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u3-l7-q1',
        'Um ecossistema inclui:',
        [
          'Seres vivos, componentes abióticos e suas interações.',
          'Somente animais.',
          'Somente plantas.',
          'Apenas água.',
        ],
        0,
        'Ecossistema inclui componentes vivos, não vivos e suas interações.'
      ),
      makeQuestion(
        'bio7-u3-l7-q2',
        'A luz solar pode ser importante para o funcionamento dos ecossistemas.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. A energia solar sustenta a produção primária na maioria dos ecossistemas.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u3-l7-e1',
        'Qual conjunto pode formar parte de um ecossistema?',
        [
          'Água, solo, plantas, animais e microrganismos.',
          'Apenas peixes.',
          'Apenas água.',
          'Somente rochas.',
        ],
        0,
        'Um ecossistema inclui componentes vivos e não vivos.'
      ),
      makeExercise(
        'bio7-u3-l7-e2',
        'Os componentes de um ecossistema interagem entre si.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. As interações são fundamentais para o funcionamento do ecossistema.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u3', 8),
    unitId: 'bio-7-u3',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Relações entre seres vivos',
    lessonNumber: 8,
    title: 'Relações entre seres vivos',

    objectives: [
      'Compreender que os seres vivos interagem.',
      'Reconhecer competição, predação, parasitismo e mutualismo.',
      'Relacionar interações com sobrevivência.',
    ],

    content: {
      definition:
        'Relações ecológicas são interações estabelecidas entre organismos, podendo beneficiar, prejudicar ou não afetar de forma significativa os participantes.',

      explanation: [
        'Na competição, organismos utilizam recursos limitados e podem prejudicar-se mutuamente pelo acesso a esses recursos.',
        'Na predação, um organismo captura e consome outro.',
        'No parasitismo, um organismo obtém recursos de outro, causando-lhe prejuízo.',
        'No mutualismo, ambos os organismos obtêm benefícios; diferentes formas de associação podem apresentar diferentes graus de dependência.',
      ],
    },

    example: {
      title: 'Exemplo',
      description:
        'Uma abelha obtém alimento numa flor e pode transportar pólen para outra flor, favorecendo a reprodução da planta.',
      solution:
        'Essa interação pode beneficiar tanto o inseto como a planta.',
    },

    mozambiqueApplication: {
      title: 'Agricultura e biodiversidade',
      description:
        'Predadores naturais, polinizadores e organismos do solo influenciam a produção agrícola e o equilíbrio dos ecossistemas.',
      contextArea: 'agricultura',
    },

    attention: {
      commonError:
        'Pensar que todas as relações entre organismos são prejudiciais.',
      correctUnderstanding:
        'Existem relações negativas, positivas e neutras, dependendo dos efeitos sobre os participantes.',
    },

    summaryPoints: [
      'Os seres vivos estabelecem várias relações.',
      'Competição ocorre quando recursos são disputados.',
      'Predação envolve consumo de uma presa.',
      'Parasitismo beneficia o parasita e prejudica o hospedeiro.',
      'Mutualismo pode beneficiar ambos.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u3-l8-q1',
        'Qual relação envolve um organismo capturar e consumir outro?',
        ['Predação', 'Mutualismo', 'Competição', 'Fotossíntese'],
        0,
        'Predação é uma interação em que um organismo captura e consome outro.'
      ),
      makeQuestion(
        'bio7-u3-l8-q2',
        'No mutualismo, ambos os organismos podem beneficiar-se.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. Mutualismo é uma interação com benefício para ambos os participantes.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u3-l8-e1',
        'Qual situação representa predação?',
        [
          'Uma ave captura um inseto para se alimentar.',
          'Duas plantas disputam água.',
          'Uma abelha visita uma flor.',
          'Um fungo obtém nutrientes de um hospedeiro.',
        ],
        0,
        'Capturar e consumir uma presa caracteriza predação.'
      ),
      makeExercise(
        'bio7-u3-l8-e2',
        'A competição pode ocorrer quando organismos necessitam do mesmo recurso limitado.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. Recursos como alimento, água, luz ou espaço podem ser limitantes.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u3', 9),
    unitId: 'bio-7-u3',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Conservação ambiental',
    lessonNumber: 9,
    title: 'Conservação ambiental',

    objectives: [
      'Definir conservação ambiental.',
      'Explicar por que a biodiversidade deve ser protegida.',
      'Identificar ações de conservação.',
    ],

    content: {
      definition:
        'Conservação ambiental é o conjunto de ações destinadas a proteger espécies, habitats, ecossistemas e recursos naturais, garantindo o seu uso responsável e a manutenção das funções ecológicas.',

      explanation: [
        'A biodiversidade fornece alimentos, medicamentos, matérias-primas, serviços ecossistémicos e benefícios culturais.',
        'A destruição de habitats, poluição, exploração excessiva e introdução de espécies invasoras podem ameaçar a biodiversidade.',
        'A conservação pode envolver áreas protegidas, restauração de habitats, uso sustentável dos recursos e educação ambiental.',
        'Conservar não significa impedir toda utilização dos recursos naturais; significa utilizá-los de forma que não comprometa a sua renovação e as funções ecológicas.',
      ],
    },

    example: {
      title: 'Exemplo: proteção de uma floresta',
      description:
        'Reduzir o corte ilegal, evitar queimadas descontroladas e promover recuperação de áreas degradadas são ações que podem contribuir para a conservação.',
      solution:
        'A proteção deve considerar espécies, habitats e necessidades das comunidades.',
    },

    mozambiqueApplication: {
      title: 'Conservação em Moçambique',
      description:
        'A conservação da biodiversidade é importante para florestas, fauna, zonas húmidas, mangais, áreas costeiras e outros ecossistemas.',
      contextArea: 'biodiversidade',
    },

    attention: {
      commonError:
        'Pensar que conservação significa simplesmente proibir qualquer utilização dos recursos.',
      correctUnderstanding:
        'Conservação procura proteger a natureza e promover utilização sustentável dos recursos, considerando também as necessidades humanas.',
    },

    summaryPoints: [
      'Conservação protege biodiversidade e ecossistemas.',
      'Habitats saudáveis são importantes para as espécies.',
      'Uso sustentável reduz impactos negativos.',
      'Educação ambiental contribui para conservação.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u3-l9-q1',
        'Qual é uma finalidade da conservação ambiental?',
        [
          'Proteger biodiversidade e ecossistemas.',
          'Destruir habitats.',
          'Aumentar poluição.',
          'Eliminar todas as espécies.',
        ],
        0,
        'A conservação procura proteger a biodiversidade e manter funções ecológicas.'
      ),
      makeQuestion(
        'bio7-u3-l9-q2',
        'O uso sustentável pode fazer parte da conservação.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. Utilizar recursos de forma sustentável é importante para a conservação.'
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u3-l9-e1',
        'Qual ação contribui para a conservação?',
        [
          'Recuperar uma área degradada.',
          'Destruir habitats.',
          'Poluir rios.',
          'Caçar espécies ameaçadas sem controlo.',
        ],
        0,
        'A restauração de áreas degradadas pode recuperar habitats e funções ecológicas.'
      ),
      makeExercise(
        'bio7-u3-l9-e2',
        'Conservar significa necessariamente impedir qualquer uso dos recursos naturais.',
        ['Verdadeiro', 'Falso'],
        1,
        'Falso. Conservação também pode envolver utilização sustentável dos recursos.'
      ),
    ],
  },

  {
    id: lessonId('bio-7-u3', 10),
    unitId: 'bio-7-u3',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'Problemas ambientais',
    lessonNumber: 10,
    title: 'Problemas ambientais',

    objectives: [
      'Identificar problemas ambientais comuns.',
      'Explicar causas e consequências.',
      'Reconhecer ações que podem reduzir impactos ambientais.',
    ],

    content: {
      definition:
        'Problemas ambientais são alterações ou impactos que prejudicam componentes do ambiente, organismos, ecossistemas ou o bem-estar humano.',

      explanation: [
        'Entre os problemas ambientais estão poluição da água, do ar e do solo, desflorestação, degradação dos solos, perda de biodiversidade e produção inadequada de resíduos.',
        'As causas podem estar relacionadas com atividades humanas como queimadas descontroladas, descarte inadequado de resíduos, exploração excessiva de recursos e determinadas formas de agricultura, indústria ou urbanização.',
        'As consequências podem incluir perda de habitats, contaminação da água, redução de espécies, erosão dos solos e problemas de saúde.',
        'A prevenção exige combinação de educação, legislação, tecnologias adequadas, gestão de recursos e participação das comunidades.',
      ],
    },

    example: {
      title: 'Exemplo: poluição de um rio',
      description:
        'O lançamento de resíduos num rio pode alterar a qualidade da água e afetar organismos aquáticos e pessoas que dependem daquela fonte.',
      solution:
        'Reduzir a entrada de poluentes, tratar águas residuais e proteger as margens são medidas que podem diminuir o problema.',
    },

    mozambiqueApplication: {
      title: 'Proteção dos recursos naturais',
      description:
        'Problemas ambientais podem afetar água, solos, florestas, agricultura, pesca e biodiversidade. A participação das comunidades é fundamental para reduzir impactos.',
      contextArea: 'ambiente',
    },

    attention: {
      commonError:
        'Pensar que os problemas ambientais afetam apenas plantas e animais.',
      correctUnderstanding:
        'A degradação ambiental também pode afetar diretamente a saúde, alimentação, água, economia e qualidade de vida das comunidades.',
    },

    summaryPoints: [
      'Poluição é um importante problema ambiental.',
      'Desflorestação pode provocar perda de habitats.',
      'Degradação do solo pode reduzir a produtividade.',
      'Perda de biodiversidade afeta ecossistemas.',
      'Prevenção exige participação individual e coletiva.',
    ],

    quickChecks: [
      makeQuestion(
        'bio7-u3-l10-q1',
        'Qual pode ser uma consequência da poluição da água?',
        [
          'Prejuízo para organismos aquáticos e saúde humana.',
          'Aumento automático da biodiversidade.',
          'Melhoria garantida da qualidade da água.',
          'Eliminação de todos os microrganismos.',
        ],
        0,
        'A poluição pode afetar organismos aquáticos e pessoas que dependem da água.'
      ),
      makeQuestion(
        'bio7-u3-l10-q2',
        'A proteção ambiental pode beneficiar as comunidades humanas.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. Ambiente saudável contribui para água, alimentos, saúde e meios de subsistência.',
      ),
    ],

    exercises: [
      makeExercise(
        'bio7-u3-l10-e1',
        'Qual ação pode ajudar a reduzir problemas ambientais?',
        [
          'Gestão adequada de resíduos.',
          'Lançamento de lixo nos rios.',
          'Desflorestação sem controlo.',
          'Queimadas descontroladas.',
        ],
        0,
        'A gestão adequada de resíduos reduz a poluição e os impactos ambientais.'
      ),
      makeExercise(
        'bio7-u3-l10-e2',
        'Os problemas ambientais podem afetar a saúde humana.',
        ['Verdadeiro', 'Falso'],
        0,
        'Verdadeiro. Água contaminada, poluição do ar e outros impactos ambientais podem afetar a saúde.',
      ),
    ],
  },
];

/*
 * ============================================================
 * AULAS DE SEGURANÇA PARA OS OUTROS TÓPICOS
 * ============================================================
 *
 * Enquanto desenvolvemos cada classe, os tópicos ainda não
 * detalhados continuam funcionais. Eles não substituem o
 * conteúdo desenvolvido que será acrescentado posteriormente.
 */

function createTemporaryLesson(
  unitId: string,
  topicTitle: string,
  classLevel: ClassLevel,
  subject: Subject,
  unitTitle: string,
  lessonNumber: number
): Lesson {
  const biology = subject === 'Biologia';

  return {
    id: `${unitId}-l${lessonNumber}`,
    unitId,
    classLevel,
    subject,
    theme: topicTitle,
    lessonNumber,
    title: topicTitle,

    objectives: [
      `Compreender o conceito fundamental de "${topicTitle}".`,
      `Explicar os principais aspetos relacionados com o tema.`,
      'Aplicar o conhecimento em situações do quotidiano.',
    ],

    content: {
      definition: biology
        ? `"${topicTitle}" é um tema de Biologia relacionado com o estudo dos seres vivos e dos fenómenos da vida.`
        : `"${topicTitle}" é um tema de Química relacionado com o estudo da matéria, das suas propriedades ou das suas transformações.`,

      explanation: [
        `O estudo de "${topicTitle}" deve começar pela compreensão dos conceitos fundamentais.`,
        'O estudante deve relacionar a definição com exemplos concretos.',
        'A aplicação prática ajuda a consolidar o conhecimento científico.',
      ],
    },

    example: {
      title: `Exemplo relacionado com ${topicTitle}`,
      description:
        `Uma situação do quotidiano pode ser utilizada para compreender o conceito de "${topicTitle}".`,
      solution:
        'A resolução deve utilizar os conceitos científicos estudados.',
    },

    mozambiqueApplication: {
      title: 'Aplicação em Moçambique',
      description:
        biology
          ? 'O conhecimento pode ser relacionado com saúde, agricultura, biodiversidade e ambiente.'
          : 'O conhecimento pode ser relacionado com água, agricultura, energia, indústria e ambiente.',
      contextArea: biology ? 'biodiversidade' : 'recursos_naturais',
    },

    attention: {
      commonError:
        'Memorizar termos sem compreender o significado científico.',
      correctUnderstanding:
        'O estudante deve compreender o conceito, observar exemplos e aplicá-lo em situações diferentes.',
    },

    summaryPoints: [
      `O tema é "${topicTitle}".`,
      'Os conceitos devem ser compreendidos.',
      'Exemplos ajudam na aprendizagem.',
    ],

    quickChecks: [
      makeQuestion(
        `${unitId}-${lessonNumber}-q1`,
        `Qual é a melhor estratégia para estudar "${topicTitle}"?`,
        [
          'Compreender os conceitos e aplicá-los.',
          'Memorizar sem compreender.',
          'Ignorar exemplos.',
          'Não realizar exercícios.',
        ],
        0,
        'A compreensão e aplicação são fundamentais para a aprendizagem científica.'
      ),
    ],

    exercises: [
      makeExercise(
        `${unitId}-${lessonNumber}-e1`,
        `Compreender "${topicTitle}" exige apenas memorizar palavras.`,
        ['Verdadeiro', 'Falso'],
        1,
        'Falso. A aprendizagem exige compreensão e capacidade de aplicação.',
      ),
    ],
  };
}

/*
 * ============================================================
 * AULAS DOS OUTROS TÓPICOS
 * ============================================================
 */

const ALL_CURRICULUM_LESSONS: Lesson[] = [];

for (const unit of CURRICULUM_UNITS) {
  unit.lessonTopics.forEach((topicTitle, index) => {
    const isBio7 =
      unit.classLevel === '7ª Classe' &&
      unit.subject === 'Biologia';

    if (!isBio7) {
      ALL_CURRICULUM_LESSONS.push(
        createTemporaryLesson(
          unit.id,
          topicTitle,
          unit.classLevel,
          unit.subject,
          unit.title,
          index + 1
        )
      );
    }
  });
}

/*
 * ============================================================
 * TODAS AS AULAS
 * ============================================================
 */

export const DETAILED_LESSONS: Lesson[] = [
  ...BIO_7_LESSONS,
];

export const ALL_LESSONS: Lesson[] = [
  ...DETAILED_LESSONS,
  ...ALL_CURRICULUM_LESSONS,
];

/*
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
  const topic = topicTitle.trim().toLowerCase();

  const lesson = ALL_LESSONS.find(
    (item) =>
      item.unitId === unitId &&
      item.theme.trim().toLowerCase() === topic
  );

  if (lesson) {
    return lesson;
  }

  return createTemporaryLesson(
    unitId,
    topicTitle,
    classLevel,
    subject,
    unitTitle,
    1
  );
}
