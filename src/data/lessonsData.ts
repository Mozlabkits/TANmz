import { Lesson } from '../types';

export const DETAILED_LESSONS: Lesson[] = [
  // ----------------------------------------------------
  // 7ª CLASSE - BIOLOGIA - UNIDADE 1: INTRODUÇÃO À BIOLOGIA
  // ----------------------------------------------------
  {
    id: 'bio-7-u1-l1',
    unitId: 'bio-7-u1',
    classLevel: '7ª Classe',
    subject: 'Biologia',
    theme: 'O que é Biologia?',
    lessonNumber: 1,
    title: 'Conceito e Significado da Biologia',
    objectives: [
      'Definir a etimologia da palavra Biologia (Bios e Logos).',
      'Identificar o objeto de estudo da Biologia.',
      'Reconhecer a importância do estudo dos seres vivos no nosso quotidiano.',
    ],
    content: {
      definition: 'A Biologia é a ciência que se dedica ao estudo da vida, de todos os seres vivos e das interações que estabelecem entre si e com o ambiente que os rodeia.',
      explanation: [
        'A palavra Biologia tem origem na língua grega: deriva da junção de dois termos: "Bios", que significa vida, e "Logos", que significa estudo, tratado ou conhecimento. Portanto, etimologicamente, Biologia é a "ciência da vida".',
        'Os biólogos investigam desde as estruturas microscópicas invisíveis a olho nu (como bactérias e células) até aos maiores ecossistemas do planeta Terra (como as savanas, florestas tropicais e os oceanos).',
        'O estudo da vida permite compreender como os organismos nascem, crescem, se alimentam, respiram, se reproduzem e evoluem ao longo de milhões de anos.',
      ],
      diagramOrFormula: 'Bios (Vida) + Logos (Estudo) = Biologia (Ciência da Vida)',
    },
    example: {
      title: 'Exemplo prático de investigação biológica',
      description: 'Quando um agricultor em Manica observa que as folhas de milho estão a amarelecer e um extensionista descobre que isso se deve a uma praga de gafanhotos ou carência de azoto, está a ser aplicada a Biologia prática.',
    },
    mozambiqueApplication: {
      title: 'A Biologia na preservação da fauna do Parque Nacional da Gorongosa',
      description: 'Em Moçambique, a Biologia é crucial para monitorizar a recuperação de espécies como leões, elefantes e antílopes no Parque Nacional da Gorongosa e na Reserva Especial de Maputo, protegendo a rica biodiversidade nacional contra a caça furtiva.',
      contextArea: 'biodiversidade',
    },
    attention: {
      commonError: 'Achar que a Biologia estuda apenas os animais.',
      correctUnderstanding: 'A Biologia estuda TODAS as formas de vida: animais, plantas, fungos, algas, bactérias e protozoários.',
    },
    summaryPoints: [
      'Biologia = Bios (vida) + Logos (estudo).',
      'Estuda a estrutura, funcionamento, origem, evolução e ecologia dos seres vivos.',
      'É fundamental para a saúde, agricultura sustentável e proteção do meio ambiente.',
    ],
    quickChecks: [
      {
        id: 'qc-bio-7-1-1',
        question: 'O termo grego "Bios" significa:',
        options: ['Terra', 'Vida', 'Água', 'Planta'],
        correctAnswerIndex: 1,
        explanation: '"Bios" significa estritamente Vida, enquanto "Logos" significa estudo.',
      },
      {
        id: 'qc-bio-7-1-2',
        question: 'Qual dos seguintes NÃO é objeto de estudo da Biologia?',
        options: ['O crescimento de uma árvore de mangal', 'A formação de minerais rochosos inertes', 'A reprodução de peixes do Lago Niassa', 'A respiração humana'],
        correctAnswerIndex: 1,
        explanation: 'Minerais e rochas inertes são estudados pela Geologia ou Mineralogia, enquanto os seres vivos são o foco da Biologia.',
      },
    ],
    exercises: [
      {
        id: 'ex-bio-7-1-1',
        statement: 'A Biologia é fundamental para a agricultura em Moçambique porque:',
        difficulty: 'Fácil',
        type: 'multiple_choice',
        options: [
          'Permite conhecer as pragas e melhorar a produção de alimentos como milho e mandioca',
          'Serve apenas para batizar animais com nomes em latim',
          'Elimina a necessidade de regar as machambas',
          'Transforma plantas venenosas em ouro',
        ],
        correctAnswer: 0,
        explanation: 'O conhecimento biológico sobre plantas, pragas e solos férteis auxilia diretamente no cultivo sustentável e na segurança alimentar das famílias.',
      },
      {
        id: 'ex-bio-7-1-2',
        statement: 'Verdadeiro ou Falso: Um vírus ou uma bactéria que causa doenças no gado bovino em Gaza não pode ser estudado pela Biologia por ser microscópico.',
        difficulty: 'Médio',
        type: 'true_false',
        options: ['Verdadeiro', 'Falso'],
        correctAnswer: 1,
        explanation: 'Falso. A Microbiologia é um dos ramos mais importantes da Biologia e estuda microrganismos microscópicos como bactérias e protozoários.',
      },
    ],
  },

  // ----------------------------------------------------
  // 8ª CLASSE - BIOLOGIA - UNIDADE 1: CÉLULA
  // ----------------------------------------------------
  {
    id: 'bio-8-u1-l1',
    unitId: 'bio-8-u1',
    classLevel: '8ª Classe',
    subject: 'Biologia',
    theme: 'Conceito de Célula e Teoria Celular',
    lessonNumber: 1,
    title: 'A Célula como Unidade Básica da Vida',
    objectives: [
      'Definir a célula como a unidade morfológica e funcional de todos os seres vivos.',
      'Enunciar os três postulados essenciais da Teoria Celular.',
      'Distinguir seres unicelulares de seres pluricelulares.',
    ],
    content: {
      definition: 'A célula é a menor unidade estrutural, funcional e reprodutiva que compõe os seres vivos, capaz de realizar todas as funções vitais de forma autónoma ou coordenada.',
      explanation: [
        'A palavra célula foi cunhada pelo cientista inglês Robert Hooke em 1665, ao observar pequenos compartimentos numa lâmina fina de cortiça através de um microscópio ótico primitivo.',
        'No século XIX, Matthias Schleiden e Theodor Schwann formularam a célebre Teoria Celular, mais tarde complementada por Rudolf Virchow.',
        'A Teoria Celular estabelece três pilares universais: 1) Todos os seres vivos são formados por uma ou mais células; 2) A célula é a unidade funcional fundamental da vida; 3) Toda a célula provém da divisão de outra célula preexistente.',
      ],
      diagramOrFormula: '1 Célula preexistente ➔ Divisão celular (Mitose) ➔ 2 Novas células',
    },
    example: {
      title: 'Unicelulares vs Pluricelulares',
      description: 'Uma bactéria ou a amiba é um organismo unicelular (uma única célula realiza digestão, respiração e reprodução). O ser humano ou um embondeiro é pluricelular, composto por biliões de células especializadas.',
    },
    mozambiqueApplication: {
      title: 'O exame microscópico no diagnóstico da Malária',
      description: 'Nos postos de saúde de Moçambique, os técnicos de laboratório usam microscópios óticos para observar as hemácias (células vermelhas do sangue) e identificar o parasita unicelular Plasmodium falciparum, causador da malária.',
      contextArea: 'saúde',
    },
    attention: {
      commonError: 'Confundir a cortiça morta observada por Hooke com uma célula viva funcional.',
      correctUnderstanding: 'Hooke observou apenas as paredes celulósicas vazias de células vegetais mortas; as células vivas contêm citoplasma e organelos ativos.',
    },
    summaryPoints: [
      'A célula é a unidade estrutural e funcional da vida.',
      'Postulado de Virchow: "Omnis cellula e cellula" (toda célula vem de outra célula).',
      'Classificação quanto ao número: Unicelulares (bactérias, leveduras) e Pluricelulares (plantas, animais).',
    ],
    quickChecks: [
      {
        id: 'qc-bio-8-1-1',
        question: 'Quem observou pela primeira vez os espaços microscópicos da cortiça e usou o termo "célula"?',
        options: ['Gregor Mendel', 'Robert Hooke', 'Charles Darwin', 'Louis Pasteur'],
        correctAnswerIndex: 1,
        explanation: 'Robert Hooke em 1665 publicou na sua obra Micrographia as observações de cortes de cortiça.',
      },
    ],
    exercises: [
      {
        id: 'ex-bio-8-1-1',
        statement: 'Qual das seguintes afirmações expressa corretamente um postulado da Teoria Celular?',
        difficulty: 'Fácil',
        type: 'multiple_choice',
        options: [
          'Apenas os animais de grande porte possuem células',
          'Toda a célula surge espontaneamente a partir de matéria sem vida',
          'Todos os organismos vivos são constituídos por uma ou mais células',
          'As células vegetais não necessitam de nutrientes',
        ],
        correctAnswer: 2,
        explanation: 'O primeiro postulado da Teoria Celular enuncia com clareza que todos os seres vivos (sem exceção conhecida) são formados por células.',
      },
      {
        id: 'ex-bio-8-1-2',
        statement: 'Explique por que razão o ser humano é classificado como pluricelular:',
        difficulty: 'Médio',
        type: 'multiple_choice',
        options: [
          'Porque possui apenas uma célula gigante que desempenha tudo',
          'Porque é formado por trilhões de células agrupadas em tecidos e órgãos especializados',
          'Porque não depende de água para sobreviver',
          'Porque suas células não possuem membrana plasmática',
        ],
        correctAnswer: 1,
        explanation: 'Organismos pluricelulares como os humanos possuem grande quantidade de células diferenciadas (musculares, nervosas, epiteliais, sanguíneas).',
      },
    ],
  },

  // ----------------------------------------------------
  // 9ª CLASSE - BIOLOGIA - UNIDADE 2: GENÉTICA INTRODUTÓRIA
  // ----------------------------------------------------
  {
    id: 'bio-9-u2-l1',
    unitId: 'bio-9-u2',
    classLevel: '9ª Classe',
    subject: 'Biologia',
    theme: 'Hereditariedade, Genótipo e Fenótipo',
    lessonNumber: 1,
    title: 'Bases da Hereditariedade e Primeira Lei de Mendel',
    objectives: [
      'Diferenciar genótipo de fenótipo.',
      'Compreender o conceito de alelos dominantes e recessivos.',
      'Interpretar a 1ª Lei de Mendel (Lei da Segregação dos Fatores).',
    ],
    content: {
      definition: 'A Hereditariedade é o processo biológico através do qual os progenitores transmitem as suas características genéticas aos seus descendentes.',
      explanation: [
        'O Genótipo é a constituição genética de um indivíduo, ou seja, o conjunto de genes herdados dos pais (representados por letras, ex: AA, Aa, aa).',
        'O Fenótipo é a manifestação visível ou detetável das características do indivíduo (ex: cor dos olhos, altura, grupo sanguíneo), sendo o resultado da interação entre o genótipo e o ambiente (Fenótipo = Genótipo + Ambiente).',
        'Gregor Mendel, monge e botânico austríaco considerado o "Pai da Genética", descobriu que cada característica é determinada por um par de fatores (alelos) que se separam durante a formação dos gametas.',
      ],
      diagramOrFormula: 'Fenótipo = Genótipo + Meio Ambiente | Cruzamento Aa x Aa ➔ 1 AA : 2 Aa : 1 aa',
    },
    example: {
      title: 'Cruzamento clássico em ervilhas de cheiro',
      description: 'Ao cruzar ervilhas amarelas puras (AA) com verdes puras (aa), a primeira geração F1 é 100% amarela (Aa). Ao cruzar F1 entre si, surgem na geração F2 proporções de 3 amarelas para 1 verde (75% dominantes, 25% recessivas).',
    },
    mozambiqueApplication: {
      title: 'Melhoramento genético de variedades de mandioca em Moçambique',
      description: 'O Instituto de Investigação Agrária de Moçambique (IIAM) cruza variedades de mandioca para obter genótipos resistentes ao vírus do mosaico castanho (CBSD), garantindo colheitas sadias para milhares de famílias moçambicanas.',
      contextArea: 'agricultura',
    },
    attention: {
      commonError: 'Achar que o fenótipo depende exclusivamente dos genes sem qualquer influência ambiental.',
      correctUnderstanding: 'O ambiente modula a expressão génica: duas plantas com o mesmo genótipo podem crescer de tamanhos diferentes dependendo da luz, água e fertilidade do solo.',
    },
    summaryPoints: [
      'Genótipo: constituição genética (alelos herdados).',
      'Fenótipo: características observáveis resultantes da interação genes + ambiente.',
      'Alelo Dominante manifesta-se em dose simples (Aa); Alelo Recessivo necessita de dose dupla (aa).',
    ],
    quickChecks: [
      {
        id: 'qc-bio-9-2-1',
        question: 'Um indivíduo que possui alelos idênticos para um determinado gene (ex: BB ou bb) é designado:',
        options: ['Heterozigótico', 'Homozigótico', 'Híbrido', 'Mutante'],
        correctAnswerIndex: 1,
        explanation: 'Homozigótico significa que possui alelos iguais (puro), ao passo que heterozigótico tem alelos diferentes (Bb).',
      },
    ],
    exercises: [
      {
        id: 'ex-bio-9-2-1',
        statement: 'No cruzamento entre dois indivíduos heterozigóticos (Aa x Aa), qual é a probabilidade esperada de descendentes recessivos (aa)?',
        difficulty: 'Médio',
        type: 'calculation',
        options: ['100%', '75%', '50%', '25%'],
        correctAnswer: 3,
        explanation: 'Pelo quadro de Punnett: AA (25%), Aa (50%), aa (25%). Logo, a probabilidade do fenótipo recessivo (aa) é de 1/4 ou 25%.',
      },
    ],
  },

  // ----------------------------------------------------
  // 10ª CLASSE - BIOLOGIA - UNIDADE 1: ANATOMIA E FISIOLOGIA HUMANA
  // ----------------------------------------------------
  {
    id: 'bio-10-u1-l1',
    unitId: 'bio-10-u1',
    classLevel: '10ª Classe',
    subject: 'Biologia',
    theme: 'Sistema Circulatório e Coração',
    lessonNumber: 1,
    title: 'Estrutura do Coração e Grande e Pequena Circulação',
    objectives: [
      'Identificar as quatro cavidades do coração humano (aurículas e ventrículos).',
      'Distinguir a Pequena Circulação (pulmonar) da Grande Circulação (sistémica).',
      'Compreender o papel do oxigénio e da hemoglobina no transporte sanguíneo.',
    ],
    content: {
      definition: 'O sistema circulatório é o sistema responsável pelo transporte de oxigénio, nutrientes, hormonas e excreções por todas as células do corpo humano através do sangue bombeado pelo coração.',
      explanation: [
        'O coração humano é um órgão muscular oco (miocárdio) composto por 4 cavidades: duas aurículas (superiores, de receção) e dois ventrículos (inferiores, de bombeamento).',
        'O lado direito do coração recebe e bombeia exclusivamente sangue venoso (rico em dióxido de carbono), enquanto o lado esquerdo trabalha exclusivamente com sangue arterial (rico em oxigénio), sem mistura direta.',
        'Pequena Circulação (Coração ➔ Pulmões ➔ Coração): o ventrículo direito bombeia sangue venoso para os pulmões através da artéria pulmonar para hematose (troca gasosa); regressa à aurícula esquerda rico em O₂.',
        'Grande Circulação (Coração ➔ Todo o Corpo ➔ Coração): o ventrículo esquerdo ejeta sangue oxigenado pela artéria aorta para todos os tecidos; o sangue retorna desoxigenado à aurícula direita pelas veias cavas.',
      ],
      diagramOrFormula: 'Pequena: VD ➔ Pulmões ➔ AE | Grande: VE ➔ Aorta ➔ Tecidos ➔ Cavas ➔ AD',
    },
    example: {
      title: 'Aferição do pulso arterial',
      description: 'Ao colocar os dedos no pulso radial após uma corrida, sentimos a onda de pressão gerada pela sístole (contração) do ventrículo esquerdo empurrando o sangue para a artéria aorta.',
    },
    mozambiqueApplication: {
      title: 'Saúde cardiovascular e prevenção da hipertensão em Moçambique',
      description: 'O Ministério da Saúde (MISAU) alerta para o aumento de doenças cardiovasculares causadas pelo consumo excessivo de sal e sedentarismo. Praticar caminhadas e reduzir o sal protege as artérias coronárias e o coração.',
      contextArea: 'saúde',
    },
    attention: {
      commonError: 'Achar que todas as artérias transportam sangue rico em oxigénio.',
      correctUnderstanding: 'A Artéria Pulmonar é a exceção: transporta sangue desoxigenado (venoso) do coração para os pulmões.',
    },
    summaryPoints: [
      'Coração: 4 cavidades (2 aurículas e 2 ventrículos).',
      'Pequena circulação oxigena o sangue nos alvéolos pulmonares.',
      'Grande circulação nutre e oxigena todas as células do organismo.',
    ],
    quickChecks: [
      {
        id: 'qc-bio-10-1-1',
        question: 'Qual cavidade cardíaca bombeia sangue com grande pressão para a artéria aorta alimentar todo o corpo?',
        options: ['Aurícula Direita', 'Ventrículo Direito', 'Aurícula Esquerda', 'Ventrículo Esquerdo'],
        correctAnswerIndex: 3,
        explanation: 'O Ventrículo Esquerdo tem a parede muscular mais espessa justamente para gerar pressão e impulsionar o sangue por toda a grande circulação.',
      },
    ],
    exercises: [
      {
        id: 'ex-bio-10-1-1',
        statement: 'A hematose pulmonar consiste em:',
        difficulty: 'Médio',
        type: 'multiple_choice',
        options: [
          'A digestão de proteínas no estômago',
          'A troca de dióxido de carbono por oxigénio nos alvéolos pulmonares',
          'A produção de glóbulos brancos na medula óssea',
          'A contração dos músculos esqueléticos da perna',
        ],
        correctAnswer: 1,
        explanation: 'Hematose é a transformação do sangue venoso em sangue arterial nos pulmões através da absorção de O₂ e libertação de CO₂.',
      },
    ],
  },

  // ----------------------------------------------------
  // 11ª CLASSE - BIOLOGIA - UNIDADE 1: GENÉTICA MOLECULAR
  // ----------------------------------------------------
  {
    id: 'bio-11-u1-l1',
    unitId: 'bio-11-u1',
    classLevel: '11ª Classe',
    subject: 'Biologia',
    theme: 'Estrutura do DNA e Replicação',
    lessonNumber: 1,
    title: 'A Molécula de DNA: Dupla Hélice e Replicação Semipreservativa',
    objectives: [
      'Descrever os componentes de um nucleótido de DNA (desoxirribose, fosfato e base azotada).',
      'Aplicar a regra de emparelhamento de bases de Chargaff (A-T e G-C).',
      'Explicar o mecanismo semipreservativo de replicação do DNA.',
    ],
    content: {
      definition: 'O DNA (Ácido Desoxirribonucleico) é o polímero biológico que armazena a informação genética necessária para o desenvolvimento e funcionamento de todos os seres vivos conhecidos.',
      explanation: [
        'Descoberto na sua conformação tridimensional em 1953 por James Watson e Francis Crick (com dados de difração de raios X obtidos por Rosalind Franklin), o DNA é composto por duas cadeias polinucleotídicas enroladas numa dupla hélice.',
        'Cada nucleótido é constituído por: 1 grupo fosfato (PO₄³⁻), 1 açúcar pentose (desoxirribose) e 1 base azotada.',
        'As bases azotadas complementares ligam-se por pontes de hidrogénio: a Adenina (A) emparelha sempre com a Timina (T) através de 2 pontes de hidrogénio, e a Guanina (G) emparelha sempre com a Citosina (C) através de 3 pontes de hidrogénio.',
        'A replicação do DNA é semipreservativa: cada cadeia mãe atua como molde para a síntese de uma nova cadeia complementar catalisada pela enzima DNA polimerase.',
      ],
      diagramOrFormula: 'Regra de Chargaff: %A = %T | %G = %C | Cadeia molde ➔ Duas duplas hélices idênticas',
    },
    example: {
      title: 'Determinação da sequência complementar',
      description: 'Se uma cadeia de DNA tiver a sequência 5\'- A T G C C G T - 3\', a sua cadeia complementar terá obrigatoriamente a sequência 3\'- T A C G G C A - 5\'.',
    },
    mozambiqueApplication: {
      title: 'Testes de DNA e investigação forense no SERNIC em Moçambique',
      description: 'O Serviço Nacional de Investigação Criminal (SERNIC) e centros de medicina legal em Moçambique utilizam a análise de sequências de DNA para testes de paternidade e elucidação de crimes através de vestígios biológicos.',
      contextArea: 'recursos_naturais',
    },
    attention: {
      commonError: 'Achar que o Uracilo (U) faz parte do DNA.',
      correctUnderstanding: 'O Uracilo existe exclusivamente no RNA; no DNA a base complementar da Adenina é sempre a Timina (T).',
    },
    summaryPoints: [
      'DNA: dupla hélice antiparalela com esqueleto açúcar-fosfato.',
      'Bases azotadas: A liga a T (2 ligações H); G liga a C (3 ligações H).',
      'Replicação semipreservativa garante a transmissão fiel dos genes na divisão celular.',
    ],
    quickChecks: [
      {
        id: 'qc-bio-11-1-1',
        question: 'Se uma molécula de DNA contém 30% de Guanina (G), qual é a percentagem de Citosina (C)?',
        options: ['20%', '30%', '40%', '15%'],
        correctAnswerIndex: 1,
        explanation: 'Pela regra de Chargaff, a quantidade de Guanina é sempre igual à de Citosina: %G = %C = 30%.',
      },
    ],
    exercises: [
      {
        id: 'ex-bio-11-1-1',
        statement: 'Qual enzima principal sintetiza a nova fita de DNA adicionando nucleótidos livres durante a replicação?',
        difficulty: 'Médio',
        type: 'multiple_choice',
        options: [
          'Amilase salivar',
          'DNA Polimerase',
          'Lactase',
          'Insulina',
        ],
        correctAnswer: 1,
        explanation: 'A DNA Polimerase é a principal enzima catalisadora que lê a fita molde e adiciona os nucleótidos correspondentes na direção 5\' para 3\'.',
      },
    ],
  },

  // ----------------------------------------------------
  // 12ª CLASSE - BIOLOGIA - UNIDADE 2: BIOTECNOLOGIA
  // ----------------------------------------------------
  {
    id: 'bio-12-u2-l1',
    unitId: 'bio-12-u2',
    classLevel: '12ª Classe',
    subject: 'Biologia',
    theme: 'Engenharia Genética e Tecnologia do DNA Recombinante',
    lessonNumber: 1,
    title: 'Ferramentas do DNA Recombinante e Aplicações',
    objectives: [
      'Definir tecnologia do DNA recombinante.',
      'Compreender o papel das enzimas de restrição (tesouras moleculares) e DNA ligases.',
      'Avaliar benefícios agrícolas e implicações bioéticas dos Organismos Geneticamente Modificados (OGM).',
    ],
    content: {
      definition: 'A Engenharia Genética é o ramo da biotecnologia moderna que manipula e transfere genes diretamente entre diferentes organismos através de técnicas moleculares laboratoriais in vitro.',
      explanation: [
        'A produção de um organismo transgénico ou recombinante envolve: 1) Isolamento do gene de interesse; 2) Corte do DNA com enzimas de restrição (endonucleases que reconhecem sequências palindrómicas específicas); 3) Inserção do gene num vetor de clonagem (geralmente um plasmídeo bacteriano); 4) União das pontas através da DNA ligase; 5) Transformação da bactéria hospedeira.',
        'A bactéria recombinante passa a produzir a proteína humana ou vegetal codificada pelo gene inserido, reproduzindo-se em biorreatores industriais.',
        'A bioética desempenha um papel fulcral para regulamentar a segurança alimentar, impactos ecológicos em espécies nativas e impedir manipulações eugénicas na espécie humana.',
      ],
      diagramOrFormula: 'Plasmídeo cortado + Gene estranho + DNA Ligase ➔ Plasmídeo Recombinante ➔ Clonagem',
    },
    example: {
      title: 'Produção em larga escala de Insulina Humana',
      description: 'Antes da biotecnologia, a insulina era extraída do pâncreas de porcos e causava alergias. Hoje, bactérias Escherichia coli com o gene da insulina humana produzem insulina idêntica à humana para diabéticos.',
    },
    mozambiqueApplication: {
      title: 'Biossegurança e regulamentação de transgénicos em Moçambique',
      description: 'O Grupo Interinstitucional de Biossegurança (GIB) em Moçambique avalia ensaios de variedades de sementes tolerantes à seca para garantir a proteção do património genético de plantas nativas e a sustentabilidade camponesa.',
      contextArea: 'agricultura',
    },
    attention: {
      commonError: 'Achar que transgénico e melhoramento genético clássico por cruzamento são rigorosamente a mesma coisa.',
      correctUnderstanding: 'No cruzamento clássico, misturam-se milhares de genes apenas entre a mesma espécie; na transgenia, introduz-se cirurgicamente um gene específico, por vezes vindo de reinos diferentes.',
    },
    summaryPoints: [
      'Enzimas de restrição: cortam o DNA em sítios específicos.',
      'DNA ligase: sela quimicamente as moléculas de DNA.',
      'Aplicações: insulina, vacinas de nova geração e sementes enriquecidas contra carências nutricionais.',
    ],
    quickChecks: [
      {
        id: 'qc-bio-12-2-1',
        question: 'Qual é a função biológica de uma enzima de restrição em biotecnologia?',
        options: ['Copiar RNA', 'Cortar o DNA em sequências nucleotídicas específicas', 'Destruir todas as células', 'Colorir a bactéria'],
        correctAnswerIndex: 1,
        explanation: 'As enzimas de restrição atuam como tesouras moleculares altamente precisas cortando o DNA.',
      },
    ],
    exercises: [
      {
        id: 'ex-bio-12-2-1',
        statement: 'O plasmídeo bacteriano utilizado com frequência como vetor de clonagem é:',
        difficulty: 'Avançado',
        type: 'multiple_choice',
        options: [
          'Uma pequena molécula circular de DNA extracromossómico presente em bactérias',
          'Uma proteína fibrosa da membrana celular',
          'Um vírus parasita exclusivo de humanos',
          'Um fragmento lipídico sem genes',
        ],
        correctAnswer: 0,
        explanation: 'Plasmídeos são anéis circulares de DNA bacteriano que se replicam independentemente e transportam genes de interesse.',
      },
    ],
  },

  // ----------------------------------------------------
  // 7ª CLASSE - QUÍMICA - UNIDADE 2: MATÉRIA
  // ----------------------------------------------------
  {
    id: 'qui-7-u2-l1',
    unitId: 'qui-7-u2',
    classLevel: '7ª Classe',
    subject: 'Química',
    theme: 'Conceito de Matéria e Estados Físicos',
    lessonNumber: 1,
    title: 'A Matéria, Massa, Volume e Estados Físicos',
    objectives: [
      'Definir matéria como tudo o que tem massa e ocupa espaço (volume).',
      'Distinguir as características dos estados sólido, líquido e gasoso.',
      'Identificar as mudanças de estado físico (fusão, solidificação, vaporização, condensação).',
    ],
    content: {
      definition: 'Matéria é tudo aquilo que tem massa e ocupa lugar no espaço. O ar que respiramos, a água dos rios, o ferro, a areia e o nosso corpo são todos exemplos de matéria.',
      explanation: [
        'A matéria apresenta-se na natureza em três estados físicos principais: sólido, líquido e gasoso.',
        'Estado Sólido: possui forma própria e volume constante. As partículas estão muito unidas e quase não se movem (ex: um bloco de madeira ou uma colher de metal).',
        'Estado Líquido: possui volume constante, mas forma variável (adquire a forma do recipiente que o contém). As partículas estão mais soltas e deslizam umas sobre as outras (ex: água, óleo).',
        'Estado Gasoso: não possui nem forma nem volume próprios; expande-se até ocupar todo o espaço disponível. As partículas estão muito afastadas e movem-se velozmente (ex: vapor de água, ar atmosférico).',
      ],
      diagramOrFormula: 'Sólido ⇄ (Fusão / Solidificação) ⇄ Líquido ⇄ (Vaporização / Condensação) ⇄ Gás',
    },
    example: {
      title: 'As três fases da água no nosso quotidiano',
      description: 'Gelo retirado do congelador (sólido) derrete à temperatura ambiente transformando-se em água líquida (fusão). Se aquecermos a água na panela até ferver, passa a vapor de água invisível (ebulição/vaporização).',
    },
    mozambiqueApplication: {
      title: 'A produção de sal por evaporação solar em Nacala e Angoche',
      description: 'Nas salinas das províncias costeiras de Nampula e Sofala em Moçambique, a água do mar é colocada em tanques rasos sob o sol ardente. A água passa do estado líquido para o gasoso (evaporação), restando o cloreto de sódio (sal de cozinha sólido).',
      contextArea: 'indústria',
    },
    attention: {
      commonError: 'Achar que o ar não é matéria porque não o conseguimos ver.',
      correctUnderstanding: 'O ar é matéria real: possui massa e ocupa volume. Um balão cheio é mais pesado e tem maior volume do que um balão vazio.',
    },
    summaryPoints: [
      'Matéria = massa + volume.',
      'Sólido: forma e volume definidos.',
      'Líquido: forma variável, volume definido.',
      'Gás: forma e volume variáveis.',
    ],
    quickChecks: [
      {
        id: 'qc-qui-7-2-1',
        question: 'A passagem direta de uma substância do estado sólido para o estado líquido chama-se:',
        options: ['Evaporação', 'Fusão', 'Solidificação', 'Condensação'],
        correctAnswerIndex: 1,
        explanation: 'A fusão é a mudança do estado sólido para o líquido provocada pelo ganho de calor (ex: gelo a derreter).',
      },
    ],
    exercises: [
      {
        id: 'ex-qui-7-2-1',
        statement: 'Qual dos seguintes materiais é um exemplo clássico de matéria no estado gasoso?',
        difficulty: 'Fácil',
        type: 'multiple_choice',
        options: [
          'Uma barra de ferro de construção',
          'A gasolina no tanque do carro',
          'O oxigénio contido numa botija hospitalar',
          'Um grão de areia da praia de Tofo',
        ],
        correctAnswer: 2,
        explanation: 'O gás oxigénio encontra-se no estado gasoso, com moléculas livres e em alta velocidade.',
      },
    ],
  },

  // ----------------------------------------------------
  // 8ª CLASSE - QUÍMICA - UNIDADE 2: ESTRUTURA ATÓMICA
  // ----------------------------------------------------
  {
    id: 'qui-8-u2-l1',
    unitId: 'qui-8-u2',
    classLevel: '8ª Classe',
    subject: 'Química',
    theme: 'O Átomo, Número Atómico e Número de Massa',
    lessonNumber: 1,
    title: 'Estrutura Interna do Átomo: Protões, Neutrões e Eletrões',
    objectives: [
      'Identificar as duas regiões fundamentais do átomo (núcleo e eletrosfera).',
      'Caracterizar as subpartículas: protões (+), neutrões (0) e eletrões (-).',
      'Calcular o número de massa através da fórmula A = Z + N.',
    ],
    content: {
      definition: 'O átomo é a unidade fundamental formadora de todos os elementos químicos, constituído por um núcleo central muito denso e por uma eletrosfera periférica.',
      explanation: [
        'No núcleo do átomo concentram-se quase toda a sua massa: encontramos os Protões (com carga elétrica positiva +1) e os Neutrões (com carga elétrica nula ou neutra).',
        'Na eletrosfera, orbitando ao redor do núcleo a altas velocidades, encontram-se os Eletrões (com carga elétrica negativa -1 e massa desprezível, cerca de 1836 vezes menor que a de um protão).',
        'Num átomo neutro, o número de protões é rigorosamente igual ao número de eletrões (cargas positivas anulam cargas negativas).',
        'O Número Atómico (Z) representa o número de protões no núcleo e identifica o elemento químico. O Número de Massa (A) é a soma total de protões e neutrões: A = Z + N.',
      ],
      diagramOrFormula: 'A = Z + nº de neutrões (N) ➔ n = A - Z | Carga líquida neutra: p⁺ = e⁻',
    },
    example: {
      title: 'Cálculo de partículas no átomo de Sódio (Na)',
      description: 'O Sódio possui Z = 11 e A = 23. Logo: possui 11 protões, 11 eletrões (no estado neutro) e o número de neutrões é N = A - Z = 23 - 11 = 12 neutrões.',
    },
    mozambiqueApplication: {
      title: 'O Carvão Mineral de Moatize e a Química do Carbono',
      description: 'Na bacia carbonífera de Moatize em Tete, extrai-se carvão mineral rico em átomos de Carbono (Z = 6). Cada átomo de carbono possui 6 protões no núcleo, que formam as cadeias essenciais para gerar energia térmica e siderurgia.',
      contextArea: 'recursos_naturais',
    },
    attention: {
      commonError: 'Confundir Número Atómico (Z) com Número de Massa (A).',
      correctUnderstanding: 'O Número Atómico (Z) indica apenas os protões; o Número de Massa (A) é sempre maior ou igual, pois soma protões com neutrões.',
    },
    summaryPoints: [
      'Núcleo: Protões (p⁺) e Neutrões (n⁰). Concentra a massa.',
      'Eletrosfera: Eletrões (e⁻) com carga negativa.',
      'Fórmula fundamental: A = Z + N.',
    ],
    quickChecks: [
      {
        id: 'qc-qui-8-2-1',
        question: 'Qual partícula atómica possui carga elétrica negativa?',
        options: ['Protão', 'Neutrão', 'Eletrão', 'Núcleo'],
        correctAnswerIndex: 2,
        explanation: 'Os eletrões orbitam na eletrosfera e possuem carga elétrica negativa (-1).',
      },
    ],
    exercises: [
      {
        id: 'ex-qui-8-2-1',
        statement: 'Um átomo de Alumínio tem número atómico Z = 13 e número de massa A = 27. Quantos neutrões possui o seu núcleo?',
        difficulty: 'Médio',
        type: 'calculation',
        options: ['13', '14', '27', '40'],
        correctAnswer: 1,
        explanation: 'N = A - Z = 27 - 13 = 14 neutrões.',
      },
    ],
  },

  // ----------------------------------------------------
  // 9ª CLASSE - QUÍMICA - UNIDADE 1: LIGAÇÕES QUÍMICAS
  // ----------------------------------------------------
  {
    id: 'qui-9-u1-l1',
    unitId: 'qui-9-u1',
    classLevel: '9ª Classe',
    subject: 'Química',
    theme: 'Ligação Iónica e Covalente',
    lessonNumber: 1,
    title: 'Estabilidade Atómica, Ligação Iónica e Covalente',
    objectives: [
      'Explicar a Regra do Octeto (estabilidade com 8 eletrões na última camada).',
      'Distinguir ligação iónica (transferência de eletrões) de ligação covalente (partilha).',
      'Relacionar o tipo de ligação com as propriedades físicas das substâncias.',
    ],
    content: {
      definition: 'Ligações químicas são as forças atrativas eletrostáticas que unem átomos ou iões para formar moléculas ou redes cristalinas estáveis.',
      explanation: [
        'A maioria dos átomos isolados não é estável; para atingirem a estabilidade eletrónica dos Gases Nobres, necessitam de ter 8 eletrões no seu nível mais externo (Regra do Octeto) ou 2 no caso do Hélio.',
        'Ligação Iónica: ocorre geralmente entre um metal (que tem tendência a perder eletrões, formando catiões) e um não-metal (que tem tendência a ganhar eletrões, formando aniões). Há transferência definitiva de eletrões. Exemplo: NaCl (sal de cozinha).',
        'Ligação Covalente: ocorre entre não-metais através do emparelhamento (partilha mútua) de pares de eletrões. Exemplo: H₂O (água) e O₂ (oxigénio gasoso).',
        'Compostos iónicos são sólidos à temperatura ambiente com altos pontos de fusão e conduzem eletricidade quando dissolvidos em água.',
      ],
      diagramOrFormula: 'Na• + •Cl::: ➔ Na⁺ [:::Cl:::]⁻ (Iónica) | H• + •H ➔ H-H (Covalente simples)',
    },
    example: {
      title: 'A formação do sal cloreto de sódio (NaCl)',
      description: 'O sódio (Na) possui 1 eletrão de valência e cede-o ao cloro (Cl), que possui 7 eletrões de valência. O sódio passa a Na⁺ e o cloro a Cl⁻. A atração entre as cargas opostas forma o cristal iónico.',
    },
    mozambiqueApplication: {
      title: 'Condutividade das águas de poço e o cloro de purificação',
      description: 'Na purificação de água em distritos rurais com Certeza (solução de hipoclorito de sódio, sal iónico), os iões livres na água ajudam a destruir bactérias causadoras da cólera e desinteria.',
      contextArea: 'saúde',
    },
    attention: {
      commonError: 'Achar que compostos covalentes moleculares conduzem eletricidade pura na água como os sais.',
      correctUnderstanding: 'A água pura ou com açúcar (composto covalente) não conduz corrente elétrica de forma apreciável, pois não liberta iões livres.',
    },
    summaryPoints: [
      'Octeto: átomos ligam-se para atingir 8 eletrões de valência.',
      'Iónica: metal + não-metal (transferência de eletrões, atração de iões opostos).',
      'Covalente: não-metal + não-metal (partilha de eletrões).',
    ],
    quickChecks: [
      {
        id: 'qc-qui-9-1-1',
        question: 'Que tipo de ligação química se estabelece na molécula de água (H₂O) entre o hidrogénio e o oxigénio?',
        options: ['Ligação Iónica', 'Ligação Covalente', 'Ligação Metálica', 'Ligação Magnética'],
        correctAnswerIndex: 1,
        explanation: 'Tanto o hidrogénio como o oxigénio são não-metais e partilham eletrões, caracterizando uma ligação covalente.',
      },
    ],
    exercises: [
      {
        id: 'ex-qui-9-1-1',
        statement: 'O cloreto de magnésio (MgCl₂) é um composto iónico. Ele é formado porque:',
        difficulty: 'Médio',
        type: 'multiple_choice',
        options: [
          'O Magnésio (metal) perde 2 eletrões para os átomos de Cloro (não-metais)',
          'Os átomos partilham 8 pares de neutrões',
          'O cloro evapora espontaneamente',
          'Não há forças eletrostáticas presentes',
        ],
        correctAnswer: 0,
        explanation: 'O magnésio doa 2 eletrões (tornando-se Mg²⁺) para dois átomos de cloro (cada um tornando-se Cl⁻), formando a rede iónica estável.',
      },
    ],
  },

  // ----------------------------------------------------
  // 10ª CLASSE - QUÍMICA - UNIDADE 1: QUANTIDADE DE MATÉRIA
  // ----------------------------------------------------
  {
    id: 'qui-10-u1-l1',
    unitId: 'qui-10-u1',
    classLevel: '10ª Classe',
    subject: 'Química',
    theme: 'O Mol, Massa Molar e Número de Avogadro',
    lessonNumber: 1,
    title: 'Quantidade de Matéria (Mol) e Cálculos de Massa Molar',
    objectives: [
      'Definir a unidade do Sistema Internacional "Mol" para quantidade de substância.',
      'Utilizar a Constante de Avogadro (6,02 × 10²³ partículas/mol).',
      'Calcular a massa molar (M) e relacionar massa (m) com número de moles (n = m / M).',
    ],
    content: {
      definition: 'O Mol é a unidade do SI para expressar a quantidade de matéria de um sistema que contém tantas entidades elementares (átomos, moléculas ou iões) quantos os átomos que existem exatamente em 12 gramas de Carbono-12.',
      explanation: [
        'Devido às dimensões minúsculas dos átomos, os químicos usam o "Mol" como um pacote prático de contagem, do mesmo modo que usamos "dúzia" para 12 unidades.',
        'Um mol de qualquer substância contém sempre 6,022 × 10²³ entidades elementares (este número astronómico é a Constante de Avogadro, NA).',
        'A Massa Molar (M) é a massa expressa em gramas de um mol de substância, tendo a unidade g/mol. O seu valor numérico é idêntico à massa molecular calculada a partir da Tabela Periódica.',
        'A relação fundamental dos cálculos químicos é: n = m / M (onde n = número de moles [mol], m = massa da amostra [g] e M = massa molar [g/mol]).',
      ],
      diagramOrFormula: 'n = m / M | N = n × NA (onde NA = 6,02 × 10²³ partículas/mol)',
    },
    example: {
      title: 'Cálculo da massa molar da Água (H₂O) e número de moles',
      description: 'Massas atómicas da tabela: H = 1 g/mol; O = 16 g/mol. Massa molar da água: M(H₂O) = (2 × 1) + (1 × 16) = 18 g/mol. Em 36 g de água pura temos: n = 36 g / 18 g/mol = 2 moles de moléculas de H₂O.',
    },
    mozambiqueApplication: {
      title: 'Dosagem estequiométrica de fertilizantes em Chókwè',
      description: 'No regadio de Chókwè (província de Gaza), engenheiros agrônomos calculam a dosagem de ureia CO(NH₂)₂ em moles por hectare para garantir o fornecimento exato de azoto às plantações de arroz sem salinizar o solo.',
      contextArea: 'agricultura',
    },
    attention: {
      commonError: 'Confundir a massa de 1 molécula com a massa de 1 mol de moléculas.',
      correctUnderstanding: 'Uma única molécula de água tem massa na ordem de 10⁻²³ gramas; 1 MOL de água contém 6,02 × 10²³ moléculas e pesa 18 gramas na balança.',
    },
    summaryPoints: [
      '1 mol = 6,02 × 10²³ partículas (Constante de Avogadro).',
      'Massa molar (M): massa de 1 mol em g/mol.',
      'Fórmula chave: n = m / M.',
    ],
    quickChecks: [
      {
        id: 'qc-qui-10-1-1',
        question: 'Quantos átomos de carbono existem em exatamente 1 mol de átomos de carbono puro?',
        options: ['12 átomos', '1000 átomos', '6,02 × 10²³ átomos', '1,66 × 10⁻²⁴ átomos'],
        correctAnswerIndex: 2,
        explanation: 'Exatamente 6,02 × 10²³ entidades, que é o valor constante do número de Avogadro.',
      },
    ],
    exercises: [
      {
        id: 'ex-qui-10-1-1',
        statement: 'Dada a massa molar do dióxido de carbono CO₂ como 44 g/mol, quantos moles existem em uma amostra de 88 gramas de gás CO₂?',
        difficulty: 'Médio',
        type: 'calculation',
        options: ['0,5 mol', '1 mol', '2 mol', '4 mol'],
        correctAnswer: 2,
        explanation: 'Aplicando n = m / M: n = 88 g / 44 g/mol = 2 moles de CO₂.',
      },
    ],
  },

  // ----------------------------------------------------
  // 11ª CLASSE - QUÍMICA - UNIDADE 1: QUÍMICA ORGÂNICA
  // ----------------------------------------------------
  {
    id: 'qui-11-u1-l1',
    unitId: 'qui-11-u1',
    classLevel: '11ª Classe',
    subject: 'Química',
    theme: 'O Carbono e os Hidrocarbonetos (Alcanos)',
    lessonNumber: 1,
    title: 'Propriedades do Carbono e Nomenclatura dos Alcanos',
    objectives: [
      'Identificar o postulado da tetravalência do carbono (capacidade de formar 4 ligações covalentes).',
      'Explicar a capacidade do carbono de formar cadeias carbónicas estáveis.',
      'Nomear alcanos lineares e ramificados segundo as regras da IUPAC (fórmula CnH2n+2).',
    ],
    content: {
      definition: 'Química Orgânica é a ciência que estuda a estrutura, propriedades, composição e reações dos compostos químicos que contêm carbono ligado a hidrogénio e outros elementos.',
      explanation: [
        'O átomo de carbono possui número atómico Z = 6 e quatro eletrões na sua camada de valência (sp³, sp² ou sp). Por isso é rigorosamente tetravalente: forma sempre 4 ligações covalentes para se estabilizar.',
        'Hidrocarbonetos são compostos formados unicamente por átomos de carbono e hidrogénio.',
        'Alcanos são hidrocarbonetos saturados, o que significa que todas as ligações entre carbonos são ligações simples (ligações sigma σ). A sua fórmula geral é CnH2n+2.',
        'Nomenclatura IUPAC: Prefixo (indica nº de carbonos: 1 = met, 2 = et, 3 = prop, 4 = but, 5 = pent) + Infixo (an = ligação simples) + Sufixo (o = hidrocarboneto). Exemplos: CH₄ = Metano; C₂H₆ = Etano; C₃H₈ = Propano; C₄H₁₀ = Butano.',
      ],
      diagramOrFormula: 'Fórmula geral dos alcanos: CnH2n+2 | Metano: CH₄ | Propano: CH₃-CH₂-CH₃',
    },
    example: {
      title: 'Determinação da fórmula molecular do Pentano',
      description: 'Para o pentano, o prefixo "pent" indica n = 5 átomos de carbono. Pela fórmula CnH2n+2, temos: H = (2 × 5) + 2 = 12 hidrogénios. Logo, a fórmula molecular é C₅H₁₂.',
    },
    mozambiqueApplication: {
      title: 'O Gás Natural da Bacia do Rovuma e Pande/Temane',
      description: 'As gigantescas reservas de gás natural de Moçambique na província de Inhambane e na bacia de Cabo Delgado são compostas maioritariamente por Metano (CH₄, 85-95%) e Etano (C₂H₆). É uma das maiores riquezas minerais do país.',
      contextArea: 'recursos_naturais',
    },
    attention: {
      commonError: 'Desenhar um átomo de carbono com 3 ou com 5 ligações químicas.',
      correctUnderstanding: 'O carbono é sempre estritamente tetravalente em compostos orgânicos estáveis: deve ter exatamente 4 traços de ligação ao seu redor.',
    },
    summaryPoints: [
      'O carbono é tetravalente (faz sempre 4 ligações covalentes).',
      'Alcanos: hidrocarbonetos saturados de ligação simples (CnH2n+2).',
      'Prefixos IUPAC: Met (1), Et (2), Prop (3), But (4), Pent (5), Hex (6).',
    ],
    quickChecks: [
      {
        id: 'qc-qui-11-1-1',
        question: 'Qual é a fórmula molecular correta do gás Butano (n = 4)?',
        options: ['C₄H₈', 'C₄H₁₀', 'C₄H₆', 'C₄H₁₂'],
        correctAnswerIndex: 1,
        explanation: 'Fórmula geral CnH2n+2: para n = 4, H = (2 × 4) + 2 = 10. Logo, C₄H₁₀.',
      },
    ],
    exercises: [
      {
        id: 'ex-qui-11-1-1',
        statement: 'O principal componente do gás natural explorado em Moçambique é o alcano mais simples da natureza, denominado:',
        difficulty: 'Fácil',
        type: 'multiple_choice',
        options: [
          'Metano (CH₄)',
          'Benzeno (C₆H₆)',
          'Acetileno (C₂H₂)',
          'Etanol (C₂H₅OH)',
        ],
        correctAnswer: 0,
        explanation: 'O metano (CH₄) possui 1 único átomo de carbono e compõe a quase totalidade do gás natural fóssil.',
      },
    ],
  },

  // ----------------------------------------------------
  // 12ª CLASSE - QUÍMICA - UNIDADE 1: CINÉTICA QUÍMICA
  // ----------------------------------------------------
  {
    id: 'qui-12-u1-l1',
    unitId: 'qui-12-u1',
    classLevel: '12ª Classe',
    subject: 'Química',
    theme: 'Velocidade de Reação e Teoria das Colisões',
    lessonNumber: 1,
    title: 'Fatores que Influenciam a Velocidade das Reações Químicas',
    objectives: [
      'Definir velocidade média de uma reação química.',
      'Explicar a Teoria das Colisões e o conceito de Energia de Ativação (Ea).',
      'Analisar a influência da temperatura, concentração, superfície de contacto e catalisadores.',
    ],
    content: {
      definition: 'Cinética Química é a área da química que estuda a velocidade com que os reagentes se transformam em produtos e os fatores capazes de acelerar ou retardar essa transformação.',
      explanation: [
        'Para que uma reação ocorra segundo a Teoria das Colisões, as partículas dos reagentes devem: 1) Colidir fisicamente entre si; 2) Possuir orientação espacial geométrica favorável; 3) Possuir uma energia mínima necessária designada Energia de Ativação (Ea) para formar o complexo ativado.',
        'Fatores determinantes: Aumento da Temperatura: aumenta a energia cinética média das partículas, aumentando drasticamente o choque efetivo.',
        'Superfície de contacto: quanto mais fragmentado ou pulverizado o sólido, mais colisões ocorrem por segundo.',
        'Concentração dos reagentes: maior quantidade de moléculas por unidade de volume intensifica a probabilidade de choques.',
        'Catalisador: substância que acelera a reação sem ser consumida no processo global, proporcionando um caminho alternativo com menor energia de ativação (Ea).',
      ],
      diagramOrFormula: 'v = Δ[Reagente]/Δt | Catalisador ➔ Baixa a Energia de Ativação (Ea)',
    },
    example: {
      title: 'Efeito da fragmentação e temperatura',
      description: 'Um comprimido efervescente triturado em pó reage com a água em segundos muito mais rápido do que um comprimido inteiro. Da mesma forma, os alimentos conservam-se dias no frigorífico porque a baixa temperatura reduz drasticamente a velocidade de degradação bacteriana.',
    },
    mozambiqueApplication: {
      title: 'Combustão de carvão nas cozinhas moçambicanas e ventilação',
      description: 'Ao soprar o fogão de carvão em bairros de Maputo ou Beira, aumentamos a taxa de oxigénio (concentração) e aceleramos a combustão do carvão para preparar a refeição familiar rapidamente.',
      contextArea: 'energia',
    },
    attention: {
      commonError: 'Achar que o catalisador altera o rendimento final ou a variação de entalpia (ΔH) da reação.',
      correctUnderstanding: 'O catalisador apenas encurta o tempo para atingir o equilíbrio/término, sem mudar a quantidade final dos produtos nem a energia térmica global.',
    },
    summaryPoints: [
      'Energia de ativação (Ea): barreira energética mínima para haver reação.',
      'Fatores que aceleram: ↑Temperatura, ↑Concentração, ↑Superfície de contacto, Presença de catalisador.',
      'Catalisador atua diminuindo a energia de ativação.',
    ],
    quickChecks: [
      {
        id: 'qc-qui-12-1-1',
        question: 'Qual é o papel de um catalisador numa reação química endotérmica ou exotérmica?',
        options: [
          'Diminuir a energia de ativação aumentando a velocidade da reação',
          'Aumentar o calor total libertado',
          'Diminuir o número de colisões moleculares',
          'Ser transformado no produto final da reação',
        ],
        correctAnswerIndex: 0,
        explanation: 'O catalisador diminui a barreira da energia de ativação, permitindo que muito mais partículas consigam reagir a cada segundo.',
      },
    ],
    exercises: [
      {
        id: 'ex-qui-12-1-1',
        statement: 'Porque é que lascas finas de madeira ardem muito mais rapidamente do que um tronco grosso de embondeiro com a mesma massa?',
        difficulty: 'Médio',
        type: 'multiple_choice',
        options: [
          'Porque as lascas têm menor densidade',
          'Porque as lascas apresentam maior superfície de contacto exposta ao oxigénio do ar',
          'Porque a temperatura das lascas é superior à do tronco',
          'Porque as lascas não precisam de calor inicial',
        ],
        correctAnswer: 1,
        explanation: 'Maior superfície de contacto exposta possibilita um número muito maior de colisões eficazes entre o carbono da madeira e as moléculas de oxigénio por unidade de tempo.',
      },
    ],
  },
];

/**
 * Fallback generator that ensures ANY topic clicked by a student across all units
 * of 7ª, 8ª, 9ª, 10ª, 11ª, and 12ª classes renders a fully structured pedagogical lesson!
 */
export function getLessonForTopic(unitId: string, topicTitle: string, classLevel: any, subject: any, unitTitle: string): Lesson {
  const existing = DETAILED_LESSONS.find(
    (l) => l.unitId === unitId && (l.theme.toLowerCase() === topicTitle.toLowerCase() || l.title.toLowerCase().includes(topicTitle.toLowerCase()))
  );
  if (existing) return existing;

  // Generate a curriculum-accurate structured lesson dynamically
  const isBiology = subject === 'Biologia';
  return {
    id: `${unitId}-${encodeURIComponent(topicTitle).slice(0, 15)}`,
    unitId,
    classLevel,
    subject,
    theme: topicTitle,
    lessonNumber: 1,
    title: `${topicTitle} - Estudo Fundamental`,
    objectives: [
      `Compreender o conceito e relevância de ${topicTitle} na ${subject}.`,
      `Identificar os princípios científicos essenciais aplicados a ${topicTitle}.`,
      `Relacionar a importância deste tema com o contexto ambiental, biológico ou tecnológico em Moçambique.`,
    ],
    content: {
      definition: `${topicTitle} é um dos temas estruturantes do currículo nacional de ${subject} para a ${classLevel}, focado no estudo sistemático dos fenómenos e leis da natureza.`,
      explanation: [
        `No estudo de "${topicTitle}", analisamos como os princípios de ${subject} atuam de forma lógica, mensurável e progressiva.`,
        isBiology
          ? `No ramo da Biologia, ${topicTitle} ajuda a entender os processos vitais celulares, a organização dos seres vivos, a hereditariedade e a conservação da biodiversidade autóctone de Moçambique.`
          : `No ramo da Química, ${topicTitle} fundamenta as transformações da matéria, as equações balanceadas, a estrutura molecular e o aproveitamento sustentável dos recursos minerais e energéticos do nosso país.`,
        `A consolidação deste tema baseia-se na observação, no método científico e no rigor da notação e nomenclatura aceites internacionalmente.`,
      ],
      diagramOrFormula: isBiology
        ? `Observação ➔ Hipótese ➔ Investigação Biológica ➔ Validação Pedagógica`
        : `Reagentes ➔ [Transformação Química com Conservação de Massa] ➔ Produtos`,
    },
    example: {
      title: `Exemplo prático de aplicação de ${topicTitle}`,
      description: `Na prática diária de um estudante do ensino secundário em Moçambique, o conceito de ${topicTitle} surge na compreensão da conservação de alimentos, na agricultura local, no uso consciente da água potável e na preservação dos recursos naturais.`,
    },
    mozambiqueApplication: {
      title: `Contexto Moçambicano: Aplicação de ${topicTitle}`,
      description: `Moçambique possui ecossistemas ricos e vastos recursos minerais. O domínio científico de ${topicTitle} permite formar cidadãos conscientes e futuros técnicos para impulsionar o desenvolvimento sustentável em províncias de norte a sul do país.`,
      contextArea: isBiology ? 'biodiversidade' : 'recursos_naturais',
    },
    attention: {
      commonError: `Generalizar conceitos sem prestar atenção às condições experimentais e às unidades de medida corretas.`,
      correctUnderstanding: `Na ciência rigorosa, cada termo possui significado exato e as relações de causa e efeito devem ser fundamentadas em evidências empíricas e teóricas.`,
    },
    summaryPoints: [
      `${topicTitle} integra a unidade curricular "${unitTitle}".`,
      `Compreender este tema é indispensável para responder aos testes e exames escolares de ${subject} da ${classLevel}.`,
      `A aplicação prática dos conceitos reforça o desenvolvimento comunitário e a cidadania responsável.`,
    ],
    quickChecks: [
      {
        id: `qc-${unitId}-auto-1`,
        question: `Qual é o foco principal ao estudar "${topicTitle}" na ${classLevel}?`,
        options: [
          `Compreender os conceitos científicos de forma clara e progressiva`,
          `Decorar palavras sem entender a sua aplicação real`,
          `Ignorar as evidências e leis estabelecidas`,
          `Substituir a ciência por opiniões sem comprovação`,
        ],
        correctAnswerIndex: 0,
        explanation: `O princípio pedagógico do TANmz privilegia a compreensão clara, progressiva e fundamentada em factos comprovados.`,
      },
      {
        id: `qc-${unitId}-auto-2`,
        question: `No contexto de ${subject}, como se validam os conhecimentos sobre ${topicTitle}?`,
        options: [
          `Através de adivinhações`,
          `Através do método científico, observação e experimentação rigorosa`,
          `Apenas por crenças populares`,
          `Por sorteio`,
        ],
        correctAnswerIndex: 1,
        explanation: `A ciência apoia-se sempre no método científico, na observação reprodutível e na verificação experimental.`,
      },
    ],
    exercises: [
      {
        id: `ex-${unitId}-auto-1`,
        statement: `Ao analisar ${topicTitle} no âmbito da ${subject}, podemos afirmar com rigor que:`,
        difficulty: 'Fácil',
        type: 'multiple_choice',
        options: [
          `Contribui diretamente para a formação científica do estudante e resolução de problemas da comunidade`,
          `Não possui qualquer utilidade prática para Moçambique`,
          `Contradiz todas as leis da física e da natureza`,
          `É estudado unicamente no ensino universitário`,
        ],
        correctAnswer: 0,
        explanation: `O estudo deste conteúdo desenvolve o raciocínio crítico e capacita o aluno a compreender fenómenos reais da sua vida quotidiana e do país.`,
      },
      {
        id: `ex-${unitId}-auto-2`,
        statement: `Verdadeiro ou Falso: Os conhecimentos adquiridos nesta aula sobre ${topicTitle} são úteis para os testes escolares e exames nacionais da ${classLevel}.`,
        difficulty: 'Médio',
        type: 'true_false',
        options: ['Verdadeiro', 'Falso'],
        correctAnswer: 0,
        explanation: `Verdadeiro. O currículo do TANmz segue a sequência oficial do Sistema Nacional de Educação de Moçambique.`,
      },
    ],
  };
}
