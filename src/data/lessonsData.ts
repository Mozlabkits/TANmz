import { Lesson, ClassLevel, Subject } from '../types';

/*
===========================================================
 TANmz — CONTEÚDOS ESSENCIAIS DE BIOLOGIA E QUÍMICA
 7ª à 12ª Classe

 Conteúdo desenvolvido para aprendizagem autónoma.
 Cada tema contém:
 - definição
 - explicação
 - exemplo
 - aplicação
 - atenção/erro comum
 - resumo
 - verificação
 - exercício
===========================================================
*/

type EssentialContent = {
  id: string;
  classLevel: ClassLevel;
  subject: Subject;
  unitId: string;
  unitTitle: string;
  title: string;
  theme: string;
  definition: string;
  explanation: string[];
  exampleTitle: string;
  exampleDescription: string;
  exampleSolution?: string;
  mozTitle: string;
  mozDescription: string;
  contextArea:
    | 'agricultura'
    | 'saúde'
    | 'biodiversidade'
    | 'recursos_naturais'
    | 'ambiente'
    | 'indústria'
    | 'energia';
  commonError: string;
  correctUnderstanding: string;
  summary: string[];
  question: string;
  options: string[];
  correctIndex: number;
  questionExplanation: string;
  exercise: string;
  exerciseOptions: string[];
  exerciseCorrectIndex: number;
  exerciseExplanation: string;
};

const c = (
  id: string,
  classLevel: ClassLevel,
  subject: Subject,
  unitId: string,
  unitTitle: string,
  title: string,
  theme: string,
  definition: string,
  explanation: string[],
  exampleTitle: string,
  exampleDescription: string,
  mozTitle: string,
  mozDescription: string,
  contextArea:
    | 'agricultura'
    | 'saúde'
    | 'biodiversidade'
    | 'recursos_naturais'
    | 'ambiente'
    | 'indústria'
    | 'energia',
  commonError: string,
  correctUnderstanding: string,
  summary: string[],
  question: string,
  options: string[],
  correctIndex: number,
  questionExplanation: string,
  exercise: string,
  exerciseOptions: string[],
  exerciseCorrectIndex: number,
  exerciseExplanation: string,
  exampleSolution?: string
): EssentialContent => ({
  id,
  classLevel,
  subject,
  unitId,
  unitTitle,
  title,
  theme,
  definition,
  explanation,
  exampleTitle,
  exampleDescription,
  exampleSolution,
  mozTitle,
  mozDescription,
  contextArea,
  commonError,
  correctUnderstanding,
  summary,
  question,
  options,
  correctIndex,
  questionExplanation,
  exercise,
  exerciseOptions,
  exerciseCorrectIndex,
  exerciseExplanation,
});

/*
===========================================================
 BIOLOGIA — 7ª CLASSE
===========================================================
*/

const BIO_7: EssentialContent[] = [

c(
'bio-7-01',
'7ª Classe',
'Biologia',
'bio-7-u1',
'Introdução à Biologia',
'Biologia e método científico',
'Introdução à Biologia',
'Biologia é a ciência que estuda os seres vivos, a sua organização, funcionamento, reprodução, evolução e relação com o ambiente.',
[
'A palavra Biologia vem de termos de origem grega relacionados com vida e estudo. A disciplina procura compreender como os seres vivos são constituídos e como funcionam.',
'O estudo biológico utiliza observação, perguntas, hipóteses, experiências, recolha de dados, análise e conclusão. Esse conjunto de procedimentos é conhecido como método científico.',
'Uma hipótese é uma explicação provisória que pode ser testada. Uma hipótese científica deve poder ser confrontada com observações ou experiências.',
'A Biologia está relacionada com outras ciências, como Química, Física, Geografia e Matemática.'
],
'Exemplo: uma planta que cresce pouco',
'Um estudante observa que duas plantas da mesma espécie crescem de maneira diferente. Pode levantar a hipótese de que a quantidade de luz influencia o crescimento.',
'Aplicação em Moçambique',
'A observação de culturas como milho, feijão e mandioca permite estudar crescimento, nutrição vegetal, pragas e influência das condições ambientais.',
'agricultura',
'Pensar que uma hipótese é uma certeza.',
'Uma hipótese é uma explicação provisória que precisa ser testada através de evidências.',
[
'Biologia estuda a vida e os seres vivos.',
'O método científico organiza a investigação.',
'Hipóteses precisam ser testadas.',
'A Biologia relaciona-se com várias outras ciências.'
],
'Qual é o principal objeto de estudo da Biologia?',
['As estrelas','Os seres vivos e os fenómenos da vida','Somente as rochas','Apenas os números'],
1,
'A Biologia estuda os seres vivos e os processos relacionados com a vida.',
'Um estudante quer saber se a falta de água influencia o crescimento de uma planta. Qual procedimento é mais científico?',
['Apenas dar uma opinião','Comparar plantas sob condições controladas','Escolher uma conclusão antes da experiência','Não observar os resultados'],
1,
'Uma investigação científica deve controlar condições e comparar resultados antes de chegar a uma conclusão.'
),

c(
'bio-7-02',
'7ª Classe',
'Biologia',
'bio-7-u1',
'Introdução à Biologia',
'Microscopia e observação científica',
'Microscópio',
'O microscópio é um instrumento que permite observar estruturas demasiado pequenas para serem vistas claramente a olho nu.',
[
'O microscópio óptico utiliza lentes para ampliar a imagem de objetos pequenos.',
'A ampliação permite visualizar detalhes, mas aumentar uma imagem não significa necessariamente revelar mais informação útil.',
'A preparação correta da amostra, iluminação e foco são fundamentais para obter uma boa imagem.',
'O microscópio tornou possível estudar estruturas celulares e contribuiu para o desenvolvimento da Biologia.'
],
'Observação de uma célula',
'Uma fina preparação de tecido pode ser colocada numa lâmina e observada através do microscópio depois de ajustado o foco.',
'Microscopia em escolas',
'Mesmo com equipamentos simples, a observação microscópica ajuda estudantes moçambicanos a relacionar conceitos de célula e tecidos com organismos presentes no seu ambiente.',
'educação',
'Confundir ampliação com resolução.',
'Ampliação aumenta a imagem; resolução é a capacidade de distinguir dois pontos próximos como separados.',
[
'O microscópio permite observar estruturas microscópicas.',
'O foco e a iluminação são importantes.',
'Ampliação e resolução não são a mesma coisa.',
'A microscopia é fundamental para o estudo celular.'
],
'Para que serve principalmente um microscópio?',
['Para medir temperatura','Para observar estruturas muito pequenas','Para pesar substâncias','Para medir velocidade'],
1,
'O microscópio permite observar estruturas que não podem ser analisadas adequadamente a olho nu.',
'Por que uma imagem pode ficar maior, mas continuar sem detalhes?',
['Porque ampliação e resolução são diferentes','Porque o microscópio não possui lentes','Porque toda amostra é invisível','Porque a luz não participa da observação'],
0,
'Aumentar uma imagem sem melhorar a resolução pode produzir uma imagem maior, mas não necessariamente mais informativa.'
),

c(
'bio-7-03',
'7ª Classe',
'Biologia',
'bio-7-u2',
'Seres Vivos',
'Características dos seres vivos',
'Seres vivos',
'Seres vivos são sistemas organizados que apresentam características como metabolismo, crescimento, reprodução, resposta a estímulos e capacidade de manter condições internas relativamente estáveis.',
[
'Os seres vivos possuem organização. Nos organismos multicelulares, células podem formar tecidos, órgãos e sistemas.',
'Os seres vivos realizam metabolismo, conjunto de reações químicas que permitem obter e utilizar energia e matéria.',
'A reprodução permite a continuidade das espécies.',
'Os organismos respondem a estímulos do ambiente e podem apresentar adaptações ao longo das gerações.'
],
'Uma planta em direção à luz',
'Uma planta colocada perto de uma janela pode orientar o crescimento dos seus órgãos em direção à luz. Isso demonstra resposta a um estímulo ambiental.',
'Vida e agricultura',
'Conhecer as necessidades dos seres vivos ajuda a melhorar práticas agrícolas, como fornecimento de água, luz, nutrientes e proteção contra condições desfavoráveis.',
'agricultura',
'Usar apenas movimento como definição de vida.',
'Nem todo movimento indica vida. O mais importante é considerar o conjunto de características biológicas.',
[
'Seres vivos apresentam organização.',
'Realizam metabolismo.',
'Reproduzem-se e respondem ao ambiente.',
'As características da vida devem ser analisadas em conjunto.'
],
'Qual característica está diretamente relacionada à obtenção e utilização de energia?',
['Metabolismo','Cor','Tamanho','Forma'],
0,
'Metabolismo corresponde ao conjunto de reações químicas que sustentam as atividades do organismo.',
'Uma semente germina quando encontra condições adequadas. Qual processo está envolvido?',
['Apenas movimento','Crescimento e metabolismo','Somente mudança de cor','Nenhuma atividade biológica'],
1,
'A germinação envolve intensa atividade metabólica e crescimento do organismo vegetal.'
),

c(
'bio-7-04',
'7ª Classe',
'Biologia',
'bio-7-u3',
'Ambiente',
'Ecossistema e relações entre seres vivos',
'Ecossistema',
'Ecossistema é o conjunto formado pelos seres vivos de uma área e pelos fatores físicos e químicos do ambiente, juntamente com as relações entre esses componentes.',
[
'Os fatores bióticos correspondem aos seres vivos, como plantas, animais, fungos e microrganismos.',
'Os fatores abióticos incluem água, luz, temperatura, solo, ar e sais minerais.',
'Uma população é formada por indivíduos da mesma espécie numa determinada área. Comunidade reúne populações de espécies diferentes.',
'Os seres vivos estabelecem relações como competição, predação, parasitismo, mutualismo e outras interações.'
],
'Uma machamba',
'Em uma machamba existem plantas cultivadas, insetos, microrganismos, água, solo, luz e temperatura. Todos esses componentes interagem.',
'Conservação ambiental',
'Em Moçambique, compreender os ecossistemas ajuda a proteger florestas, rios, zonas costeiras, fauna e áreas agrícolas.',
'ambiente',
'Pensar que ecossistema significa apenas os animais e plantas.',
'Um ecossistema inclui componentes vivos e não vivos e as interações entre eles.',
[
'Ecossistema inclui fatores bióticos e abióticos.',
'População reúne indivíduos da mesma espécie.',
'Comunidade reúne diferentes populações.',
'As relações ecológicas influenciam o equilíbrio do ecossistema.'
],
'Qual é um fator abiótico?',
['Capim','Peixe','Temperatura','Bactéria'],
2,
'Temperatura é um fator físico não vivo do ambiente.',
'Se a água de um rio ficar muito poluída, que componente do ecossistema pode ser afetado?',
['Somente as pedras','Os organismos aquáticos e as relações ecológicas','Nenhum ser vivo','Apenas o vento'],
1,
'A poluição da água pode afetar diretamente organismos aquáticos e indiretamente toda a rede ecológica.'
)

];

/*
===========================================================
 BIOLOGIA — 8ª CLASSE
===========================================================
*/

const BIO_8: EssentialContent[] = [

c(
'bio-8-01',
'8ª Classe',
'Biologia',
'bio-8-u1',
'Célula: Unidade da Vida',
'Teoria celular e tipos de células',
'Célula',
'A célula é a unidade estrutural e funcional básica dos seres vivos. Alguns organismos possuem uma única célula e outros são constituídos por muitas células.',
[
'Todos os organismos celulares são constituídos por células.',
'A célula realiza funções fundamentais da vida, embora as células dos diferentes organismos tenham estruturas especializadas.',
'Organismos unicelulares são constituídos por uma célula. Organismos multicelulares possuem muitas células especializadas.',
'As células podem ser classificadas em procarióticas e eucarióticas de acordo com a organização do material genético.'
],
'Bactéria e célula vegetal',
'Uma bactéria é procariótica e não possui núcleo delimitado por membrana. Uma célula vegetal é eucariótica e possui núcleo.',
'Microrganismos e saúde',
'O estudo das células ajuda a compreender doenças, microrganismos, agricultura e conservação de alimentos.',
'saúde',
'Pensar que todas as células possuem exatamente as mesmas estruturas.',
'Células diferentes podem possuir estruturas comuns e estruturas especializadas de acordo com a sua função.',
[
'A célula é unidade básica da vida.',
'Existem organismos unicelulares e multicelulares.',
'Existem células procarióticas e eucarióticas.',
'A estrutura celular está relacionada com a função.'
],
'Qual afirmação está de acordo com a teoria celular?',
['Todos os seres vivos são formados por células','Somente animais possuem células','As células não realizam funções vitais','Todas as células possuem parede celular'],
0,
'A teoria celular estabelece que a célula é a unidade básica dos organismos vivos.',
'Qual é uma diferença importante entre células procarióticas e eucarióticas?',
['As procarióticas não possuem núcleo delimitado por membrana','As eucarióticas não possuem DNA','As procarióticas não possuem membrana','As eucarióticas não possuem citoplasma'],
0,
'Células procarióticas possuem material genético em uma região não delimitada por membrana nuclear.'
),

c(
'bio-8-02',
'8ª Classe',
'Biologia',
'bio-8-u1',
'Célula: Unidade da Vida',
'Organelos e funções celulares',
'Organelos celulares',
'Organelos são estruturas celulares especializadas que desempenham funções específicas dentro das células eucarióticas.',
[
'O núcleo contém a maior parte do DNA da célula e participa do controlo da atividade celular.',
'As mitocôndrias realizam etapas importantes da respiração celular aeróbia e produzem ATP.',
'Os ribossomas participam na síntese de proteínas.',
'Nas células vegetais, cloroplastos realizam a fotossíntese e o grande vacúolo participa no armazenamento e equilíbrio hídrico.'
],
'Mitocôndria e energia',
'Uma célula muscular necessita de muita energia para funcionar. Por isso, possui muitas mitocôndrias.',
'Produção agrícola',
'A compreensão das estruturas celulares ajuda a explicar crescimento das plantas, produção de alimentos e efeitos de condições ambientais sobre as culturas.',
'agricultura',
'Pensar que um organelo realiza todas as funções da célula.',
'As estruturas trabalham de forma integrada; uma célula depende da cooperação entre diferentes componentes.',
[
'Núcleo: informação genética.',
'Mitocôndria: produção de ATP por respiração celular.',
'Ribossoma: síntese de proteínas.',
'Cloroplasto: fotossíntese em células vegetais.'
],
'Qual organelo está diretamente relacionado com a fotossíntese?',
['Ribossoma','Cloroplasto','Mitocôndria','Lisossoma'],
1,
'O cloroplasto contém clorofila e estruturas onde ocorrem as reações da fotossíntese.',
'Uma célula que precisa produzir muitas proteínas necessita de grande atividade de qual estrutura?',
['Ribossomas','Parede celular','Vacúolo apenas','Cloroplastos em qualquer célula'],
0,
'Os ribossomas são responsáveis pela síntese de proteínas.'
),

c(
'bio-8-03',
'8ª Classe',
'Biologia',
'bio-8-u2',
'Nutrição e Alimentação',
'Fotossíntese',
'Fotossíntese',
'Fotossíntese é o processo pelo qual organismos fotossintéticos, como plantas e algas, utilizam energia luminosa para produzir matéria orgânica a partir de dióxido de carbono e água, libertando oxigénio em condições fotossintéticas oxigénicas.',
[
'A clorofila participa na captação de energia luminosa.',
'A água fornece hidrogénio e eletrões em etapas do processo e o dióxido de carbono fornece o carbono utilizado para formar moléculas orgânicas.',
'A glicose e outros compostos orgânicos produzidos podem servir de fonte de energia e matéria para a planta.',
'A fotossíntese é fundamental para os ecossistemas porque contribui para a produção de matéria orgânica e para a entrada de energia nas cadeias alimentares.'
],
'Planta de milho',
'Uma planta de milho utiliza luz solar, água e dióxido de carbono para produzir matéria orgânica necessária ao crescimento.',
'Fotossíntese nas culturas',
'A produção agrícola depende da disponibilidade de luz, água, nutrientes e condições adequadas para a atividade fotossintética.',
'agricultura',
'Pensar que a planta obtém todo o seu alimento diretamente do solo.',
'O solo fornece água e sais minerais, mas a matéria orgânica é produzida principalmente através da fotossíntese.',
[
'A fotossíntese utiliza energia luminosa.',
'CO₂ e água participam do processo.',
'A clorofila é importante na captação da luz.',
'A fotossíntese sustenta grande parte das cadeias alimentares.'
],
'Qual substância do ar é utilizada como fonte de carbono na fotossíntese?',
['Oxigénio','Dióxido de carbono','Nitrogénio molecular','Hidrogénio'],
1,
'O dióxido de carbono fornece carbono para a síntese de compostos orgânicos.',
'Uma planta está recebendo água, mas permanece completamente no escuro. O que acontecerá com a fotossíntese?',
['Continuará normalmente','Será fortemente limitada pela falta de luz','Aumentará indefinidamente','Não dependerá da luz'],
1,
'A energia luminosa é essencial para as reações fotoquímicas da fotossíntese.'
),

c(
'bio-8-04',
'8ª Classe',
'Biologia',
'bio-8-u2',
'Nutrição e Alimentação',
'Respiração celular',
'Respiração celular',
'Respiração celular é o conjunto de processos metabólicos pelos quais células obtêm energia utilizável a partir de moléculas orgânicas.',
[
'Na respiração aeróbia, a glicose é oxidada utilizando oxigénio como aceitador final de eletrões na cadeia respiratória.',
'O processo produz ATP, principal forma de energia química diretamente utilizada em muitas atividades celulares.',
'A respiração celular ocorre continuamente nas células vivas, embora a intensidade possa variar.',
'Nas células eucarióticas, as etapas principais da respiração aeróbia ocorrem no citosol e nas mitocôndrias.'
],
'Exercício físico',
'Durante exercício intenso, os músculos aumentam a necessidade de ATP. Quando o fornecimento de oxigénio não acompanha a demanda, pode aumentar a participação de vias anaeróbias.',
'Saúde e atividade física',
'Compreender a respiração celular ajuda a explicar atividade muscular, alimentação, energia e necessidades do organismo.',
'saúde',
'Confundir respiração celular com simplesmente inspirar e expirar.',
'Respiração pulmonar é troca de gases; respiração celular é um processo metabólico que ocorre dentro das células.',
[
'Respiração celular produz ATP.',
'Na respiração aeróbia, o oxigénio participa como aceitador final de eletrões.',
'A glicose pode ser oxidada para obtenção de energia.',
'Respiração celular e respiração pulmonar são conceitos diferentes.'
],
'Qual é uma função central da respiração celular?',
['Produzir ATP utilizável pela célula','Produzir luz','Formar solo','Impedir toda perda de água'],
0,
'A respiração celular disponibiliza energia na forma de ATP para atividades celulares.',
'Por que uma pessoa precisa de oxigénio para sustentar adequadamente muitas atividades aeróbias?',
['Porque o oxigénio participa da respiração aeróbia','Porque o oxigénio é alimento','Porque o oxigénio substitui a água','Porque o oxigénio produz glicose diretamente'],
0,
'O oxigénio participa da cadeia respiratória na respiração aeróbia.'
)

];

/*
===========================================================
 BIOLOGIA — 9ª CLASSE
===========================================================
*/

const BIO_9: EssentialContent[] = [

c(
'bio-9-01',
'9ª Classe',
'Biologia',
'bio-9-u1',
'Reprodução e Desenvolvimento',
'Reprodução humana',
'Reprodução humana',
'A reprodução humana é o processo biológico pelo qual se originam novos indivíduos, envolvendo gametas, fecundação, desenvolvimento embrionário e nascimento.',
[
'O sistema reprodutor masculino produz espermatozoides e hormonas sexuais.',
'O sistema reprodutor feminino produz ovócitos e hormonas e proporciona condições para a gestação.',
'A fecundação ocorre normalmente quando um espermatozoide se funde com o ovócito, formando o zigoto.',
'O desenvolvimento embrionário envolve sucessivas divisões celulares e diferenciação.'
],
'Fecundação',
'Na fecundação, o material genético dos dois gametas combina-se para formar uma nova combinação genética.',
'Saúde reprodutiva',
'Conhecimento sobre reprodução, higiene, prevenção de infeções sexualmente transmissíveis e planeamento familiar contribui para decisões responsáveis.',
'saúde',
'Confundir menstruação com fecundação.',
'Menstruação ocorre quando não houve implantação de uma gravidez e o revestimento uterino é eliminado; fecundação é a fusão dos gametas.',
[
'A reprodução permite a continuidade da espécie.',
'Gametas são células reprodutivas.',
'A fecundação forma o zigoto.',
'O desenvolvimento envolve divisão e diferenciação celular.'
],
'O que resulta diretamente da fecundação?',
['Zigoto','Urina','Hemoglobina','Neurónio adulto'],
0,
'O zigoto é a célula formada pela união dos gametas.',
'Qual é uma finalidade importante da educação sexual?',
['Fornecer informação científica para decisões responsáveis','Estimular comportamentos de risco','Substituir consultas médicas','Eliminar a necessidade de higiene'],
0,
'A educação sexual baseada em evidências ajuda a tomar decisões responsáveis e a prevenir problemas de saúde.'
),

c(
'bio-9-02',
'9ª Classe',
'Biologia',
'bio-9-u2',
'Genética Introdutória',
'Genética e hereditariedade',
'Genética',
'Genética é o ramo da Biologia que estuda a hereditariedade e a variação das características dos organismos.',
[
'Os genes são segmentos de DNA que contêm informação relacionada com produtos funcionais, como proteínas ou RNAs.',
'Os genes estão organizados nos cromossomas.',
'Os alelos são formas alternativas de um gene ou região genética.',
'Genótipo refere-se à constituição genética relevante de um indivíduo; fenótipo corresponde às características observáveis ou mensuráveis resultantes da interação entre fatores genéticos e ambientais.'
],
'Cor das sementes',
'Em organismos com reprodução sexuada, descendentes recebem material genético dos progenitores, produzindo combinações variadas.',
'Melhoramento de culturas',
'O conhecimento da hereditariedade pode ser aplicado no melhoramento de variedades agrícolas adaptadas às condições locais.',
'agricultura',
'Pensar que o fenótipo depende exclusivamente dos genes.',
'O fenótipo resulta da interação entre informação genética e ambiente, embora a importância de cada fator varie conforme a característica.',
[
'Genética estuda hereditariedade e variação.',
'Genes são segmentos de DNA.',
'Alelo é uma forma de um gene.',
'Fenótipo depende de fatores genéticos e ambientais.'
],
'O que é um gene?',
['Uma unidade de informação genética localizada no DNA','Uma célula sanguínea','Um órgão','Um alimento'],
0,
'Genes são segmentos de DNA associados à informação hereditária.',
'Uma planta possui genes para determinada característica, mas cresce em solo muito pobre. O ambiente pode afetar o fenótipo?',
['Sim','Não','Somente em animais','Somente em microrganismos'],
0,
'O ambiente pode influenciar a expressão das características observáveis.'
),

c(
'bio-9-03',
'9ª Classe',
'Biologia',
'bio-9-u2',
'Genética Introdutória',
'Leis de Mendel',
'Hereditariedade mendeliana',
'As leis de Mendel descrevem padrões de transmissão de características hereditárias observados em experiências com ervilhas.',
[
'Mendel trabalhou com características que podiam ser acompanhadas em gerações sucessivas.',
'Na segregação, os dois alelos de um gene se separam durante a formação dos gametas.',
'Na fecundação, os gametas combinam-se novamente.',
'Em alguns cruzamentos, é possível prever proporções genéticas e fenotípicas, mas características reais podem ser mais complexas do que os modelos mendelianos simples.'
],
'Cruzamento monohíbrido',
'Num cruzamento simples entre indivíduos heterozigóticos para um gene com dominância completa, a distribuição genotípica esperada é 1:2:1 e a fenotípica pode ser 3:1.',
'Melhoramento animal e vegetal',
'Modelos de hereditariedade ajudam a compreender a transmissão de características em plantas e animais utilizados na produção.',
'agricultura',
'Pensar que todos os caracteres obedecem exatamente à proporção 3:1.',
'A proporção 3:1 é válida em condições específicas de um modelo mendeliano simples com dominância completa.',
[
'Mendel estudou transmissão hereditária.',
'Os alelos segregam durante a formação dos gametas.',
'As proporções dependem do modelo genético.',
'Nem todas as características seguem padrões mendelianos simples.'
],
'Em um cruzamento Aa × Aa, qual proporção genotípica é esperada?',
['1 AA : 2 Aa : 1 aa','3 AA : 1 aa','1 Aa : 1 aa','Todos AA'],
0,
'Cada progenitor produz gametas A e a, resultando em AA, Aa, Aa e aa.',
'No cruzamento Aa × Aa, qual proporção fenotípica é esperada quando A apresenta dominância completa?',
['3 dominantes : 1 recessivo','1 dominante : 3 recessivos','Todos recessivos','Todos heterozigóticos'],
0,
'AA e Aa apresentam o fenótipo dominante, enquanto aa apresenta o recessivo.'
),

c(
'bio-9-04',
'9ª Classe',
'Biologia',
'bio-9-u3',
'Classificação dos Seres Vivos',
'Classificação e biodiversidade',
'Classificação biológica',
'Classificação biológica organiza os seres vivos em grupos com base em características, relações evolutivas e evidências científicas.',
[
'A taxonomia envolve identificação, descrição e classificação dos organismos.',
'A nomenclatura binomial utiliza dois nomes para designar uma espécie: género e epíteto específico.',
'Classificações modernas procuram refletir relações evolutivas.',
'A biodiversidade inclui diversidade genética, diversidade de espécies e diversidade de ecossistemas.'
],
'Nome científico',
'O ser humano é Homo sapiens. Homo corresponde ao género e sapiens ao epíteto específico.',
'Biodiversidade moçambicana',
'Moçambique possui elevada diversidade de plantas, animais e ecossistemas, incluindo áreas costeiras, florestais e savânicas.',
'biodiversidade',
'Pensar que a classificação é apenas uma lista de nomes.',
'A classificação científica procura organizar a diversidade e representar relações entre organismos.',
[
'A classificação organiza a biodiversidade.',
'A nomenclatura binomial utiliza dois termos.',
'A espécie é uma unidade fundamental da classificação.',
'A classificação moderna considera relações evolutivas.'
],
'Qual é o objetivo principal da classificação biológica?',
['Organizar e compreender a diversidade dos organismos','Eliminar espécies','Mudar o ambiente','Produzir alimentos diretamente'],
0,
'A classificação facilita identificação, comparação e estudo da biodiversidade.',
'Por que os nomes científicos são úteis?',
['Reduzem ambiguidades entre diferentes nomes locais','Substituem todas as línguas','Servem apenas para plantas','Não possuem regras'],
0,
'Um nome científico padronizado facilita a comunicação científica internacional.'
)

];

/*
===========================================================
 BIOLOGIA — 10ª CLASSE
===========================================================
*/

```typescript
const BIO_10: EssentialContent[] = [

c(
'bio-10-01',
'10ª Classe',
'Biologia',
'bio-10-u1',
'Citologia',
'Teoria celular e núcleo',
'Célula',
'A célula é a unidade estrutural, funcional e reprodutiva básica dos seres vivos. Os organismos podem ser constituídos por uma ou muitas células.',
[
'A teoria celular estabelece princípios fundamentais sobre a organização celular dos seres vivos.',
'As células podem apresentar diferentes formas e funções.',
'Nas células eucarióticas, o núcleo contém a maior parte do material genético.',
'O núcleo participa do controlo das actividades celulares e da transmissão da informação genética.',
'A membrana nuclear separa o conteúdo nuclear do citoplasma.'
],
'Núcleo',
'O núcleo contém cromatina, que corresponde ao material formado principalmente por ADN associado a proteínas.',
'Saúde e investigação',
'O estudo celular é fundamental para compreender doenças, crescimento, reprodução e funcionamento dos organismos.',
'ciência',
'Pensar que todas as células possuem núcleo.',
'As células procarióticas não possuem núcleo delimitado por membrana.',
[
'Célula é unidade básica da vida.',
'O núcleo é característico das células eucarióticas.',
'O material genético encontra-se organizado no núcleo das eucarióticas.',
'A teoria celular explica a importância da célula nos seres vivos.'
],
'Qual estrutura contém a maior parte do ADN numa célula eucariótica?',
['Núcleo','Ribossoma','Parede celular','Vacúolo'],
0,
'O núcleo das células eucarióticas contém a maior parte do material genético.',
'Qual afirmação distingue melhor células procarióticas e eucarióticas?',
['Eucarióticas possuem núcleo delimitado por membrana','Procarióticas não possuem ADN','Eucarióticas não possuem ribossomas','Procarióticas não possuem membrana celular'],
0,
'A principal diferença está na organização do material genético: as eucarióticas possuem núcleo delimitado por membrana.'
),

c(
'bio-10-02',
'10ª Classe',
'Biologia',
'bio-10-u1',
'Citologia',
'Cromossomas e genes',
'Cromossoma',
'Cromossoma é uma estrutura constituída principalmente por ADN associado a proteínas, responsável pela organização e transmissão da informação genética durante a divisão celular.',
[
'O ADN é a principal molécula que armazena a informação genética.',
'Os cromossomas localizam-se no núcleo das células eucarióticas durante grande parte do ciclo celular.',
'Um gene é uma região do ADN associada a uma função biológica ou à produção de um produto funcional.',
'Os genes estão organizados nos cromossomas.',
'O número e a organização dos cromossomas são característicos de cada espécie.'
],
'Cariótipo humano',
'O ser humano possui normalmente 46 cromossomas nas células somáticas, organizados em 23 pares.',
'Medicina',
'A análise cromossómica pode auxiliar no estudo de algumas alterações genéticas.',
'saúde',
'Pensar que gene e cromossoma são exactamente a mesma coisa.',
'Um cromossoma contém muitas regiões de ADN, incluindo vários genes.',
[
'ADN contém informação genética.',
'Genes são regiões do ADN.',
'Cromossomas organizam ADN associado a proteínas.',
'As espécies apresentam características cromossómicas próprias.'
],
'Onde se encontra a informação genética de um gene?',
['No ADN','Na água','Nos sais minerais','Na glicose'],
0,
'Os genes são constituídos por regiões de ADN que contêm informação genética.',
'Qual relação está correta?',
['Cromossoma contém ADN; ADN contém genes','Gene contém cromossomas','ADN é formado por órgãos','Cromossoma é uma célula inteira'],
0,
'Os cromossomas organizam moléculas de ADN que contêm muitos genes.'
),

c(
'bio-10-03',
'10ª Classe',
'Biologia',
'bio-10-u1',
'Citologia',
'ADN e ARN',
'Ácido nucleico',
'Ácidos nucleicos são macromoléculas responsáveis pelo armazenamento, transmissão e utilização da informação genética. Os principais são ADN e ARN.',
[
'O ADN possui normalmente duas cadeias polinucleotídicas organizadas em dupla hélice.',
'As bases nitrogenadas do ADN são adenina, timina, citosina e guanina.',
'No ARN, a timina é substituída por uracilo.',
'O ARN participa em processos relacionados com a expressão da informação genética.',
'Os nucleótidos são unidades constituintes dos ácidos nucleicos.'
],
'Dupla hélice',
'No ADN, as bases apresentam emparelhamento específico: adenina com timina e citosina com guanina.',
'Biotecnologia',
'O conhecimento do ADN permite aplicações em medicina, agricultura, investigação e identificação genética.',
'ciência',
'Confundir ADN com proteína.',
'ADN é um ácido nucleico; proteínas são macromoléculas diferentes formadas por aminoácidos.',
[
'ADN e ARN são ácidos nucleicos.',
'ADN possui A, T, C e G.',
'ARN possui A, U, C e G.',
'Nucleótidos formam os ácidos nucleicos.'
],
'Qual base nitrogenada existe no ADN mas não no ARN?',
['Timina','Uracilo','Guanina','Citosina'],
0,
'No ADN existe timina, enquanto no ARN essa base é substituída por uracilo.',
'Qual é a função principal do ADN?',
['Armazenar informação genética','Produzir directamente energia','Digerir alimentos','Transportar oxigénio'],
0,
'O ADN armazena a informação genética utilizada pelas células.'
),

c(
'bio-10-04',
'10ª Classe',
'Biologia',
'bio-10-u1',
'Citologia',
'Replicação, transcrição e tradução',
'Replicação do ADN',
'Replicação do ADN é o processo pelo qual uma molécula de ADN é copiada, permitindo que a informação genética seja transmitida às células-filhas.',
[
'As duas cadeias do ADN separam-se durante a replicação.',
'Cada cadeia serve de molde para a formação de uma nova cadeia complementar.',
'A complementaridade das bases permite copiar a informação genética.',
'A replicação ocorre antes da divisão celular.',
'A informação do ADN pode ser utilizada para produzir proteínas através da expressão génica.'
],
'Expressão génica',
'Na expressão génica, a informação do ADN pode ser transcrita para ARN e posteriormente utilizada na síntese de proteínas.',
'Biotecnologia',
'Compreender expressão génica é essencial para estudar doenças, produção de medicamentos e engenharia genética.',
'ciência',
'Pensar que ADN é directamente transformado em proteína numa única etapa.',
'A expressão génica envolve processos distintos, incluindo transcrição e tradução.',
[
'Replicação copia ADN.',
'Transcrição produz ARN a partir de ADN.',
'Tradução utiliza informação do ARN para síntese de proteínas.',
'As bases complementares ajudam a conservar a informação genética.'
],
'Qual é a função da replicação do ADN?',
['Copiar a informação genética','Produzir glicose','Digestionar proteínas','Transportar oxigénio'],
0,
'A replicação garante a cópia da informação genética antes da divisão celular.',
'Qual processo utiliza informação do ARN mensageiro para produzir uma proteína?',
['Tradução','Respiração','Fotossíntese','Digestão'],
0,
'A tradução ocorre nos ribossomas e utiliza a informação do ARN mensageiro para orientar a síntese proteica.'
),

c(
'bio-10-05',
'10ª Classe',
'Biologia',
'bio-10-u1',
'Citologia',
'Ciclo celular e mitose',
'Ciclo celular',
'Ciclo celular é a sequência de acontecimentos pelos quais uma célula cresce, duplica o seu material genético e se divide.',
[
'O ciclo celular inclui períodos de crescimento e preparação e uma fase de divisão.',
'Antes da divisão, o ADN é duplicado.',
'A mitose produz normalmente duas células-filhas geneticamente semelhantes à célula-mãe.',
'A mitose é importante para crescimento, renovação e reparação dos tecidos.',
'A divisão celular precisa de ser cuidadosamente regulada.'
],
'Regeneração',
'Quando ocorre uma lesão, a divisão de determinadas células contribui para a substituição de células danificadas.',
'Saúde',
'Alterações no controlo do ciclo celular podem contribuir para o desenvolvimento de tumores.',
'saúde',
'Pensar que mitose produz quatro células.',
'A mitose, em condições normais, resulta em duas células-filhas.',
[
'Ciclo celular inclui crescimento e divisão.',
'ADN é duplicado antes da divisão.',
'Mitose produz duas células-filhas.',
'Mitose participa no crescimento e reparação.'
],
'Qual é um resultado típico da mitose?',
['Duas células-filhas','Quatro gâmetas','Uma célula sem ADN','Nenhuma célula'],
0,
'A mitose normalmente produz duas células-filhas geneticamente semelhantes.',
'Por que a mitose é importante no organismo?',
['Crescimento e renovação celular','Produção de alimentos no estômago','Digestão de água','Produção de solo'],
0,
'A mitose permite aumentar o número de células e substituir células em determinados tecidos.'
),

c(
'bio-10-06',
'10ª Classe',
'Biologia',
'bio-10-u1',
'Citologia',
'Meiose e gametogénese',
'Meiose',
'Meiose é uma divisão celular especializada que reduz o número de cromossomas pela metade e origina células haploides, sendo fundamental para a reprodução sexuada.',
[
'A meiose envolve duas divisões celulares sucessivas.',
'A partir de uma célula diploide, formam-se normalmente quatro células haploides geneticamente diferentes.',
'A meiose contribui para a variabilidade genética.',
'A formação de gâmetas está associada à meiose em animais.',
'Na fecundação, gâmetas haploides unem-se e restauram o número diploide de cromossomas.'
],
'Mitose versus meiose',
'Mitose mantém o número de cromossomas e produz duas células; meiose reduz o número de cromossomas e produz normalmente quatro células geneticamente diferentes.',
'Reprodução',
'A meiose é indispensável para manter o número cromossómico da espécie após a fecundação.',
'ciência',
'Confundir células haploides com diploides.',
'Haploides possuem um conjunto de cromossomas; diploides possuem dois conjuntos.',
[
'Meiose reduz o número cromossómico.',
'Gâmetas são haploides.',
'Meiose contribui para variabilidade.',
'Fecundação restaura a condição diploide.'
],
'Qual é uma característica da meiose?',
['Produção de células haploides','Produção de duas células sempre idênticas','Ausência de divisão celular','Duplicação sem separação'],
0,
'A meiose reduz o número de cromossomas e produz células haploides.',
'Qual é uma consequência importante da meiose?',
['Aumento da variabilidade genética','Eliminação de todos os genes','Produção de bactérias','Duplicação do número cromossómico'],
0,
'A recombinação e a distribuição dos cromossomas durante a meiose contribuem para a variabilidade genética.'
),

c(
'bio-10-07',
'10ª Classe',
'Biologia',
'bio-10-u2',
'Genética',
'Conceitos fundamentais de genética',
'Genética',
'Genética é o ramo da Biologia que estuda a hereditariedade, a transmissão das características e a variação entre organismos.',
[
'Genótipo é a constituição genética de um indivíduo para determinadas características.',
'Fenótipo corresponde às características observáveis ou mensuráveis resultantes da interação entre genes e ambiente.',
'Um alelo é uma forma alternativa de um gene.',
'Um indivíduo homozigótico possui dois alelos iguais para determinado gene.',
'Um indivíduo heterozigótico possui dois alelos diferentes para determinado gene.'
],
'Cor das sementes',
'Em um modelo simples, um alelo dominante pode determinar o fenótipo quando está presente em heterozigose.',
'Melhoramento agrícola',
'Os princípios da genética podem ser utilizados no melhoramento de plantas e animais.',
'agricultura',
'Pensar que dominante significa mais forte ou mais comum.',
'Dominante refere-se à expressão de um alelo em determinadas condições genéticas, não à sua superioridade biológica.',
[
'Genética estuda hereditariedade e variação.',
'Genótipo representa constituição genética.',
'Fenótipo representa características observáveis.',
'Alelo é uma forma de um gene.'
],
'Qual é a diferença básica entre genótipo e fenótipo?',
['Genótipo refere-se à constituição genética; fenótipo às características observáveis','São exactamente a mesma coisa','Fenótipo é sempre apenas ADN','Genótipo é apenas aparência'],
0,
'Genótipo refere-se à constituição genética, enquanto fenótipo corresponde às características resultantes da interação entre genes e ambiente.',
'Um indivíduo com dois alelos diferentes para um gene é:',
['Heterozigótico','Homozigótico','Haploide obrigatoriamente','Sem genes'],
0,
'Indivíduos heterozigóticos possuem dois alelos diferentes para determinado gene.'
),

c(
'bio-10-08',
'10ª Classe',
'Biologia',
'bio-10-u2',
'Genética',
'Leis de Mendel',
'Lei da segregação',
'A lei da segregação estabelece que os dois alelos de um gene se separam durante a formação dos gâmetas, de modo que cada gâmeta recebe um alelo.',
[
'Mendel utilizou ervilheiras para estudar a transmissão de características.',
'No cruzamento Aa × Aa, os genótipos esperados são AA, Aa, Aa e aa.',
'A proporção genotípica esperada nesse modelo é 1:2:1.',
'Quando existe dominância completa, a proporção fenotípica esperada pode ser 3:1.',
'As proporções mendelianas dependem das condições e pressupostos do modelo.'
],
'Cruzamento Aa × Aa',
'Cada progenitor produz gâmetas A e a. A combinação dos gâmetas produz AA, Aa, Aa e aa.',
'Melhoramento genético',
'Os princípios de Mendel ajudam a prever determinados padrões de hereditariedade em plantas e animais.',
'agricultura',
'Aplicar automaticamente 3:1 a todas as características.',
'A proporção 3:1 ocorre em condições específicas de dominância completa e segregação simples.',
[
'Os alelos segregam durante a formação dos gâmetas.',
'Aa produz gâmetas A e a.',
'Aa × Aa produz 1 AA : 2 Aa : 1 aa.',
'Com dominância completa, pode ocorrer proporção fenotípica 3:1.'
],
'Qual é a proporção genotípica esperada em Aa × Aa?',
['1 AA : 2 Aa : 1 aa','3 AA : 1 aa','1 Aa : 1 AA','Todos Aa'],
0,
'Os quatro resultados possíveis são AA, Aa, Aa e aa.',
'Se A é dominante, qual proporção fenotípica é esperada em Aa × Aa?',
['3 dominantes : 1 recessivo','1 dominante : 3 recessivos','Todos recessivos','Todos dominantes'],
0,
'AA e Aa apresentam o fenótipo dominante e aa apresenta o fenótipo recessivo.'
),

c(
'bio-10-09',
'10ª Classe',
'Biologia',
'bio-10-u2',
'Genética',
'Grupos sanguíneos e herança',
'Grupo sanguíneo',
'Grupo sanguíneo é uma classificação do sangue baseada na presença ou ausência de determinados antigénios na superfície das células sanguíneas.',
[
'O sistema ABO possui os grupos A, B, AB e O.',
'No sistema ABO, os alelos IA e IB são codominantes e i é recessivo.',
'Uma pessoa do grupo A pode apresentar genótipo IAIA ou IAi.',
'Uma pessoa do grupo B pode apresentar genótipo IBIB ou IBi.',
'O grupo AB possui IA e IB, enquanto o grupo O possui ii.'
],
'Transfusão',
'A compatibilidade sanguínea deve ser verificada antes de uma transfusão para reduzir o risco de reações imunológicas.',
'Saúde',
'O conhecimento dos grupos sanguíneos é importante em transfusões e cuidados médicos.',
'saúde',
'Memorizar que uma pessoa pode receber qualquer tipo de sangue.',
'A compatibilidade depende do sistema sanguíneo e deve ser determinada por profissionais de saúde.',
[
'ABO possui A, B, AB e O.',
'IA e IB são codominantes.',
'i é recessivo.',
'Compatibilidade é essencial nas transfusões.'
],
'Qual grupo sanguíneo possui os antigénios A e B?',
['AB','A','B','O'],
0,
'O grupo AB apresenta os antigénios A e B nas hemácias.',
'Qual é o genótipo do grupo O no sistema ABO?',
['ii','IAIA','IBIB','IAIB'],
0,
'O grupo O resulta da presença de dois alelos recessivos i.'
),

c(
'bio-10-10',
'10ª Classe',
'Biologia',
'bio-10-u3',
'Evolução',
'Evolução biológica',
'Evolução',
'Evolução biológica é a mudança nas características hereditárias das populações ao longo das gerações.',
[
'A evolução ocorre em populações, não porque um indivíduo decida mudar geneticamente.',
'A variabilidade genética fornece diferenças sobre as quais podem atuar processos evolutivos.',
'Mutações e recombinação contribuem para a variabilidade genética.',
'A selecção natural pode alterar a frequência de características numa população.',
'O isolamento de populações pode contribuir para divergência evolutiva.'
],
'Selecção natural',
'Se indivíduos com determinada característica deixam, em média, mais descendentes, essa característica pode tornar-se mais frequente na população ao longo das gerações.',
'Adaptação',
'As populações podem apresentar adaptações relacionadas com o ambiente em que vivem.',
'ciência',
'Pensar que evolução significa necessariamente progresso.',
'Evolução significa mudança nas características hereditárias das populações, não necessariamente melhoria.',
[
'Evolução ocorre ao longo das gerações.',
'Populações apresentam variabilidade.',
'Selecção natural pode alterar frequências de características.',
'A evolução não é dirigida por uma necessidade consciente.'
],
'O que muda diretamente ao longo das gerações durante a evolução?',
['Frequências de características hereditárias nas populações','A vontade individual','A idade dos organismos','A quantidade de água no corpo'],
0,
'A evolução envolve mudanças hereditárias nas populações ao longo das gerações.',
'Qual processo pode favorecer a adaptação de uma população?',
['Selecção natural','Digestão','Respiração pulmonar','Circulação sanguínea'],
0,
'A selecção natural pode favorecer características hereditárias que aumentam o sucesso reprodutivo em determinado ambiente.'
),

c(
'bio-10-11',
'10ª Classe',
'Biologia',
'bio-10-u3',
'Evolução',
'Darwin e selecção natural',
'Selecção natural',
'Selecção natural é o processo pelo qual indivíduos com características hereditárias que favorecem a sobrevivência ou reprodução em determinado ambiente tendem a deixar mais descendentes.',
[
'As populações apresentam variação entre indivíduos.',
'Parte dessa variação é hereditária.',
'Os organismos produzem mais descendentes do que o ambiente pode sustentar.',
'Existe competição por recursos.',
'Indivíduos com características vantajosas em determinado ambiente podem deixar mais descendentes.'
],
'Resistência a antibióticos',
'Quando antibióticos são utilizados, bactérias resistentes podem sobreviver e reproduzir-se, aumentando a frequência de resistência na população.',
'Saúde',
'O uso inadequado de antibióticos favorece a selecção de bactérias resistentes.',
'saúde',
'Pensar que o antibiótico cria intencionalmente a resistência porque a bactéria precisa dela.',
'A resistência pode existir devido a variação genética e ser favorecida pela selecção.',
[
'Existe variação.',
'Alguma variação é hereditária.',
'Há competição e reprodução diferencial.',
'Características vantajosas podem tornar-se mais frequentes.'
],
'Qual é uma condição importante para a selecção natural?',
['Existência de variação hereditária','Ausência completa de reprodução','Todos os indivíduos serem geneticamente iguais','Ausência de diferenças ambientais'],
0,
'A selecção natural depende de variação hereditária e diferenças no sucesso reprodutivo.',
'Por que o uso inadequado de antibióticos pode favorecer resistência?',
['Porque bactérias resistentes podem sobreviver e reproduzir-se','Porque os antibióticos criam bactérias de propósito','Porque elimina todos os microrganismos','Porque impede qualquer mutação'],
0,
'Quando susceptíveis são eliminadas, variantes resistentes podem sobreviver e aumentar na população.'
),

c(
'bio-10-12',
'10ª Classe',
'Biologia',
'bio-10-u4',
'Ecologia e Ambiente',
'Conceitos fundamentais de ecologia',
'Ecologia',
'Ecologia é o ramo da Biologia que estuda as relações dos seres vivos entre si e com o ambiente.',
[
'A biosfera é a região da Terra onde existe vida.',
'Habitat é o local onde um organismo vive.',
'Nicho ecológico corresponde ao papel e às condições de vida de uma espécie no ecossistema.',
'População é o conjunto de indivíduos da mesma espécie numa determinada área.',
'Comunidade é o conjunto de populações de diferentes espécies que vivem e interagem numa área.'
],
'Exemplo numa floresta',
'Uma população de macacos, uma população de árvores e uma população de aves formam parte da comunidade da floresta.',
'Conservação',
'Os conceitos ecológicos ajudam a compreender a organização e conservação dos ecossistemas.',
'meio ambiente',
'Confundir habitat com nicho ecológico.',
'Habitat é o lugar onde vive; nicho descreve o papel e as condições de vida da espécie.',
[
'Ecologia estuda relações entre organismos e ambiente.',
'População envolve uma espécie.',
'Comunidade envolve várias espécies.',
'Habitat e nicho são conceitos diferentes.'
],
'O conjunto de indivíduos da mesma espécie numa área é:',
['População','Comunidade','Biosfera','Ecossistema inteiro'],
0,
'População é o conjunto de indivíduos da mesma espécie que vivem numa determinada área.',
'O lugar onde uma espécie vive é chamado:',
['Habitat','Gene','Nicho exclusivamente','Cromossoma'],
0,
'Habitat é o local onde um organismo ou espécie vive.'
),

c(
'bio-10-13',
'10ª Classe',
'Biologia',
'bio-10-u4',
'Ecologia e Ambiente',
'Relações ecológicas',
'Relação ecológica',
'Relação ecológica é uma interação estabelecida entre organismos de uma mesma espécie ou de espécies diferentes.',
[
'Competição ocorre quando organismos disputam recursos limitados.',
'Predação ocorre quando um organismo captura e consome outro.',
'Parasitismo ocorre quando um organismo beneficia e o hospedeiro é prejudicado.',
'Mutualismo é uma interação em que ambas as espécies obtêm benefício.',
'As relações ecológicas influenciam a estrutura e o funcionamento das comunidades.'
],
'Predador e presa',
'Um leão que captura uma zebra apresenta uma relação de predação.',
'Equilíbrio ecológico',
'As relações entre organismos influenciam populações e podem contribuir para o equilíbrio dinâmico dos ecossistemas.',
'meio ambiente',
'Confundir predação com parasitismo.',
'Na predação, a presa é capturada e consumida; no parasitismo, o parasita vive associado ao hospedeiro e normalmente não o mata imediatamente.',
[
'Competição envolve disputa.',
'Predação envolve captura e consumo.',
'Parasitismo beneficia o parasita e prejudica o hospedeiro.',
'Mutualismo beneficia ambas as espécies.'
],
'Que relação ocorre quando um leão captura uma zebra?',
['Predação','Mutualismo','Parasitismo','Comensalismo'],
0,
'Na predação, o predador captura e consome a presa.',
'Qual relação beneficia as duas espécies?',
['Mutualismo','Predação','Parasitismo','Amensalismo'],
0,
'No mutualismo, ambas as espécies obtêm benefícios da interação.'
),

c(
'bio-10-14',
'10ª Classe',
'Biologia',
'bio-10-u4',
'Ecologia e Ambiente',
'Poluição e conservação',
'Poluição',
'Poluição é a introdução de agentes ou formas de energia no ambiente em quantidade capaz de provocar efeitos prejudiciais nos organismos ou nos ecossistemas.',
[
'A poluição pode afectar o ar, a água e o solo.',
'Resíduos industriais, domésticos e agrícolas podem contribuir para a poluição.',
'A poluição da água pode prejudicar organismos aquáticos e a saúde humana.',
'O tratamento de resíduos e águas residuais reduz impactos ambientais.',
'A conservação procura proteger, restaurar e utilizar os recursos de forma sustentável.'
],
'Água contaminada',
'O lançamento de resíduos e esgotos sem tratamento em rios pode reduzir a qualidade da água e prejudicar os organismos aquáticos.',
'Protecção ambiental',
'Reduzir resíduos, tratar águas residuais, conservar florestas e utilizar recursos racionalmente são medidas importantes.',
'meio ambiente',
'Pensar que qualquer presença de uma substância no ambiente significa automaticamente poluição.',
'O efeito depende da substância, concentração, local e capacidade do ambiente de absorvê-la.',
[
'Poluição pode afectar água, ar e solo.',
'Resíduos mal geridos podem poluir.',
'Tratamento reduz impactos.',
'Conservação procura manter a qualidade dos ecossistemas.'
],
'Qual actividade pode causar poluição da água?',
['Lançamento de esgotos sem tratamento','Protecção de nascentes','Tratamento de águas residuais','Reflorestamento'],
0,
'Esgotos sem tratamento podem introduzir microrganismos, nutrientes e outras substâncias prejudiciais na água.',
'Qual prática contribui para conservação ambiental?',
['Tratamento de resíduos e protecção dos habitats','Desmatamento indiscriminado','Caça furtiva','Despejo de lixo nos rios'],
0,
'Tratamento de resíduos e protecção dos habitats reduzem a degradação ambiental.'
)

];
```


/*
===========================================================
 BIOLOGIA — 11ª CLASSE
===========================================================
*/

const BIO_11: EssentialContent[] = [

c(
'bio-11-01',
'11ª Classe',
'Biologia',
'bio-11-u1',
'Genética Clássica e Molecular',
'DNA e replicação',
'DNA',
'O DNA é uma molécula que armazena informação genética nos organismos celulares e em diversos vírus.',
[
'O DNA é constituído por nucleótidos formados por açúcar, fosfato e uma base nitrogenada.',
'As bases do DNA são adenina, timina, citosina e guanina.',
'As duas cadeias de DNA são complementares.',
'Na replicação, cada molécula de DNA serve de molde para a formação de duas moléculas de DNA, permitindo a transmissão da informação genética.'
],
'Complementaridade',
'Uma sequência com A-T-G-C possui uma cadeia complementar com T-A-C-G.',
'Genética e saúde',
'O estudo do DNA é importante para diagnóstico molecular, investigação genética, identificação e biotecnologia.',
'saúde',
'Pensar que todo DNA está exclusivamente no núcleo.',
'Células eucarióticas também possuem DNA em organelos como mitocôndrias e, nas plantas, cloroplastos.',
[
'DNA contém informação genética.',
'Possui quatro bases principais.',
'As bases formam pares complementares.',
'A replicação permite copiar a informação genética.'
],
'Qual base emparelha normalmente com adenina no DNA?',
['Timina','Guanina','Citosina','Uracilo'],
0,
'No DNA, adenina emparelha com timina.',
'Qual é a importância da replicação do DNA?',
['Permitir a transmissão da informação genética para células-filhas','Destruir todos os genes','Produzir oxigénio diretamente','Impedir a divisão celular'],
0,
'A replicação permite que células resultantes da divisão recebam cópias da informação genética.'
),

c(
'bio-11-02',
'11ª Classe',
'Biologia',
'bio-11-u1',
'Genética Clássica e Molecular',
'Expressão génica e síntese de proteínas',
'Expressão génica',
'Expressão génica é o conjunto de processos pelos quais a informação de um gene é utilizada para produzir um produto funcional, como uma proteína ou RNA.',
[
'Na síntese proteica, a informação do DNA pode ser transcrita para RNA mensageiro.',
'O RNA mensageiro pode ser traduzido nos ribossomas.',
'O código genético relaciona sequências de nucleótidos com aminoácidos.',
'A regulação da expressão génica permite que diferentes células utilizem diferentes conjuntos de genes.'
],
'Insulina',
'A insulina é uma proteína produzida por células especializadas do pâncreas. A informação para sua produção está codificada no DNA.',
'Biotecnologia',
'Conhecer expressão génica permite compreender doenças e desenvolver aplicações biotecnológicas, incluindo produção de proteínas terapêuticas.',
'saúde',
'Pensar que DNA é diretamente transformado em proteína em uma única etapa.',
'Em células eucarióticas, a expressão de genes codificadores de proteínas envolve processos como transcrição e tradução.',
[
'DNA contém informação.',
'RNA participa da expressão génica.',
'Ribossomas realizam tradução.',
'A regulação génica permite especialização celular.'
],
'Em que estrutura ocorre a tradução?',
['Ribossoma','Parede celular','Lisossoma','Centríolo'],
0,
'A tradução ocorre nos ribossomas, onde a sequência do RNA mensageiro orienta a montagem da proteína.',
'Qual sequência representa corretamente o fluxo simplificado da informação genética?',
['DNA → RNA → proteína','Proteína → RNA → DNA sempre','RNA → DNA → solo','Água → DNA → proteína'],
0,
'O modelo DNA → RNA → proteína representa o fluxo clássico da informação para genes codificadores de proteínas.'
),

c(
'bio-11-03',
'11ª Classe',
'Biologia',
'bio-11-u2',
'Evolução Biológica',
'Evolução por seleção natural',
'Seleção natural',
'Seleção natural é um processo evolutivo no qual indivíduos com características hereditárias que aumentam a sobrevivência ou reprodução em determinado ambiente tendem a deixar mais descendentes.',
[
'As populações apresentam variação.',
'Parte da variação possui componente hereditário.',
'Os organismos enfrentam condições que influenciam sobrevivência e reprodução.',
'A seleção natural atua sobre características observáveis, mas a evolução ocorre na população ao longo de gerações.'
],
'Resistência a inseticidas',
'Quando uma população de insetos possui variação genética e alguns indivíduos são menos afetados por um inseticida, esses indivíduos podem sobreviver e reproduzir-se mais.',
'Agricultura e resistência',
'O uso inadequado de pesticidas pode favorecer populações resistentes, dificultando o controlo de pragas.',
'agricultura',
'Pensar que os organismos desenvolvem intencionalmente características porque precisam delas.',
'A seleção natural não cria uma característica por necessidade. Ela altera a frequência de variantes hereditárias já existentes ou surgidas por mutação.',
[
'Populações possuem variação.',
'Parte da variação é hereditária.',
'A seleção natural altera frequências ao longo das gerações.',
'Indivíduos não evoluem intencionalmente.'
],
'Quem evolui biologicamente ao longo das gerações?',
['Populações','Um indivíduo durante uma única vida','Uma pedra','Uma molécula isolada'],
0,
'A evolução é uma mudança nas características hereditárias de populações ao longo das gerações.',
'Por que o uso repetido de um pesticida pode favorecer resistência?',
['Porque indivíduos resistentes podem sobreviver e reproduzir-se mais','Porque o pesticida cria vontade de resistir','Porque todos os insetos se tornam iguais','Porque nenhum inseto possui variação'],
0,
'A seleção favorece variantes resistentes quando elas estão presentes e o ambiente impõe essa pressão.'
),

c(
'bio-11-04',
'11ª Classe',
'Biologia',
'bio-11-u3',
'Ecologia e Dinâmica de Ecossistemas',
'Cadeias alimentares e fluxo de energia',
'Cadeia alimentar',
'Cadeia alimentar representa uma sequência simplificada de transferência de matéria e energia entre organismos através da alimentação.',
[
'Produtores, como plantas, formam matéria orgânica a partir de energia luminosa ou química.',
'Consumidores obtêm matéria e energia alimentando-se de outros organismos.',
'Decompositores participam da decomposição da matéria orgânica.',
'A energia disponível diminui ao longo dos níveis tróficos porque parte é dissipada como calor durante o metabolismo.'
],
'Milho → gafanhoto → galinha',
'Numa machamba, o milho pode servir de alimento para gafanhotos, que podem ser consumidos por galinhas. Essa relação forma parte de uma teia alimentar.',
'Segurança alimentar',
'Alterações nas populações de produtores, consumidores ou decompositores podem afetar a produtividade e estabilidade dos ecossistemas agrícolas.',
'agricultura',
'Pensar que a energia circula infinitamente na cadeia alimentar.',
'A matéria pode ser reciclada, mas a energia flui pelo ecossistema e parte é dissipada como calor.',
[
'Produtores iniciam muitas cadeias alimentares.',
'Consumidores obtêm alimento de outros organismos.',
'Decompositores reciclam matéria.',
'A energia diminui ao longo dos níveis tróficos.'
],
'Qual organismo é normalmente produtor numa cadeia alimentar terrestre?',
['Capim','Gafanhoto','Galinha','Falcão'],
0,
'Plantas são produtores porque produzem matéria orgânica usando energia luminosa.',
'Por que geralmente existe menos energia disponível nos níveis tróficos superiores?',
['Porque parte da energia é dissipada durante o metabolismo','Porque predadores não possuem células','Porque plantas não possuem energia','Porque a energia desaparece sem transformação'],
0,
'Parte da energia é dissipada como calor em processos metabólicos.'
)

];

/*
===========================================================
 BIOLOGIA — 12ª CLASSE
===========================================================
*/

const BIO_12: EssentialContent[] = [

c(
'bio-12-01',
'12ª Classe',
'Biologia',
'bio-12-u1',
'Biologia Molecular Avançada',
'Mutações e variabilidade genética',
'Mutação',
'Mutação é uma alteração na sequência do material genético. Algumas mutações são neutras, outras podem ser prejudiciais ou vantajosas dependendo do contexto.',
[
'Mutações podem surgir espontaneamente durante processos celulares ou ser favorecidas por determinados agentes mutagénicos.',
'Mutações em células germinativas podem ser transmitidas à descendência.',
'Mutações somáticas normalmente não são transmitidas aos descendentes.',
'A variabilidade genética resulta de mutações, recombinação e outros processos.'
],
'Mutação pontual',
'Uma alteração de uma única base no DNA pode não alterar a proteína, alterar um aminoácido ou introduzir um sinal de paragem, dependendo da posição e do tipo de mudança.',
'Saúde e genética',
'O estudo de mutações ajuda a compreender doenças genéticas, cancro e respostas a tratamentos.',
'saúde',
'Pensar que toda mutação causa doença.',
'Mutações podem ser neutras, prejudiciais ou, em determinadas condições, vantajosas.',
[
'Mutações alteram material genético.',
'Podem ser neutras, prejudiciais ou vantajosas.',
'Mutações germinativas podem ser herdadas.',
'Mutações contribuem para a variabilidade genética.'
],
'O que é uma mutação?',
['Alteração na sequência do material genético','Apenas uma mudança de temperatura','Uma doença obrigatoriamente','Uma célula especializada'],
0,
'Mutações são alterações na sequência do material genético.',
'Uma mutação presente numa célula da pele de um adulto é automaticamente transmitida aos filhos?',
['Não','Sim, sempre','Somente se houver febre','Somente em plantas'],
0,
'Mutações somáticas normalmente não são transmitidas à descendência.'
),

c(
'bio-12-02',
'12ª Classe',
'Biologia',
'bio-12-u2',
'Biotecnologia e Bioética',
'Engenharia genética e DNA recombinante',
'DNA recombinante',
'DNA recombinante é uma molécula de DNA formada pela combinação de sequências de DNA provenientes de diferentes fontes.',
[
'Técnicas de engenharia genética permitem isolar, copiar, modificar ou inserir sequências de DNA.',
'Nem todo DNA recombinante resulta em organismo transgénico.',
'Organismos geneticamente modificados podem ser utilizados em investigação, agricultura, indústria e medicina.',
'A utilização da biotecnologia deve considerar segurança, eficácia, impactos ambientais e questões éticas.'
],
'Insulina recombinante',
'Bactérias modificadas podem ser utilizadas para produzir insulina humana recombinante, uma aplicação importante da engenharia genética.',
'Biotecnologia e saúde',
'A engenharia genética pode produzir substâncias terapêuticas e apoiar diagnóstico e investigação de doenças.',
'saúde',
'Pensar que todo organismo geneticamente modificado é necessariamente perigoso.',
'Os riscos e benefícios devem ser avaliados caso a caso, com evidências científicas e regulamentação adequada.',
[
'DNA recombinante combina sequências de DNA.',
'Engenharia genética permite modificar material genético.',
'Existem aplicações médicas e agrícolas.',
'Questões éticas e de biossegurança são importantes.'
],
'O que caracteriza o DNA recombinante?',
['Combinação de sequências de DNA de diferentes fontes','Ausência total de DNA','Somente DNA de vírus','DNA sem bases nitrogenadas'],
0,
'DNA recombinante resulta da combinação de sequências de DNA.',
'Qual é uma aplicação médica da engenharia genética?',
['Produção de proteínas terapêuticas','Produção de areia','Medição da temperatura','Formação de nuvens'],
0,
'A engenharia genética permite produzir proteínas utilizadas em medicina.'
),

c(
'bio-12-03',
'12ª Classe',
'Biologia',
'bio-12-u3',
'Evolução, Genética Populacional e Diversidade',
'Genética populacional',
'Genética populacional',
'Genética populacional estuda a distribuição e mudança das frequências dos alelos e genótipos nas populações.',
[
'As frequências alélicas representam a proporção de diferentes alelos numa população.',
'Mutação, seleção natural, deriva genética, migração e acasalamento não aleatório podem alterar a estrutura genética das populações.',
'A deriva genética é particularmente importante em populações pequenas.',
'O fluxo génico ocorre quando indivíduos ou gametas entram ou saem de uma população.'
],
'Efeito fundador',
'Quando um pequeno grupo de indivíduos estabelece uma nova população, os alelos presentes nesse grupo podem representar apenas uma parte da diversidade original.',
'Conservação',
'Em populações pequenas e isoladas, a perda de diversidade genética pode aumentar riscos de longo prazo para a conservação.',
'biodiversidade',
'Pensar que evolução significa sempre aumento de complexidade.',
'Evolução significa mudança nas características hereditárias de populações ao longo das gerações, não necessariamente maior complexidade.',
[
'Populações possuem frequências alélicas.',
'Deriva genética pode alterar frequências ao acaso.',
'Seleção natural favorece variantes em determinado ambiente.',
'Fluxo génico movimenta alelos entre populações.'
],
'Qual processo pode alterar frequências alélicas por acaso?',
['Deriva genética','Digestão','Fotossíntese','Respiração pulmonar'],
0,
'A deriva genética altera frequências alélicas por efeitos aleatórios de amostragem.',
'Por que populações pequenas podem perder diversidade genética mais rapidamente?',
['Porque efeitos aleatórios podem ter maior impacto','Porque não possuem DNA','Porque não sofrem reprodução','Porque todos os genes desaparecem imediatamente'],
0,
'Em populações pequenas, eventos aleatórios podem alterar significativamente as frequências dos alelos.'
),

c(
'bio-12-04',
'12ª Classe',
'Biologia',
'bio-12-u4',
'Ecologia Aplicada e Desenvolvimento Sustentável',
'Desenvolvimento sustentável',
'Desenvolvimento sustentável',
'Desenvolvimento sustentável procura satisfazer necessidades humanas atuais sem comprometer a capacidade das gerações futuras de satisfazerem as suas necessidades.',
[
'A sustentabilidade envolve dimensões ambientais, sociais e económicas.',
'A utilização de recursos naturais deve considerar capacidade de renovação e limites ecológicos.',
'A conservação da biodiversidade é importante para manter serviços dos ecossistemas.',
'Produção agrícola, energia, água e gestão de resíduos devem ser planejadas considerando impactos de longo prazo.'
],
'Gestão da água',
'Uma comunidade pode reduzir desperdício, proteger nascentes, tratar água e utilizar tecnologias adequadas para conservar recursos hídricos.',
'Água em comunidades',
'Em Moçambique, a gestão sustentável da água é importante para consumo humano, agricultura, saúde e conservação dos ecossistemas.',
'recursos_naturais',
'Pensar que sustentabilidade significa não utilizar recursos naturais.',
'Sustentabilidade significa utilizar recursos de maneira responsável, equilibrando necessidades humanas e conservação.',
[
'Sustentabilidade considera presente e futuro.',
'Inclui ambiente, sociedade e economia.',
'Conservação e uso responsável dos recursos são fundamentais.',
'Decisões locais podem ter efeitos ambientais amplos.'
],
'Qual é uma característica do desenvolvimento sustentável?',
['Considerar necessidades atuais e futuras','Usar recursos sem limites','Ignorar impactos ambientais','Eliminar toda atividade económica'],
0,
'Sustentabilidade procura equilibrar necessidades humanas e conservação dos recursos.',
'Qual medida contribui para a sustentabilidade da água?',
['Proteger fontes de água e reduzir desperdício','Despejar resíduos no rio','Destruir zonas húmidas','Aumentar desperdício'],
0,
'Proteção das fontes e uso eficiente reduzem impactos e ajudam a manter a disponibilidade de água.'
)

];

/*
===========================================================
 QUÍMICA — 7ª CLASSE
===========================================================
const CHEM_7: EssentialContent[] = [
  c(
    'chem-7-01',
    'chem-7-u1',
    'Introdução à Química',
    'A Química e a sua importância',
    'Introdução à Química',
    [
      'Compreender o que é a Química e qual é o seu objeto de estudo.',
      'Reconhecer a presença da Química no quotidiano.',
      'Compreender a importância da observação, experimentação e segurança no estudo da Química.',
    ],
    'A Química é a ciência que estuda a matéria, a sua composição, estrutura, propriedades e as transformações que ela sofre, incluindo as mudanças de energia associadas a essas transformações.',
    [
      'A Química está presente no nosso dia a dia: na água que bebemos, nos alimentos, no sabão, nos medicamentos, nos combustíveis, nos fertilizantes e nos materiais usados na construção.',
      'O conhecimento químico é desenvolvido por meio da observação, formulação de perguntas, realização de experiências, recolha de dados e interpretação de evidências.',
      'No laboratório é fundamental seguir regras de segurança: usar corretamente os materiais, não provar substâncias, evitar cheirar diretamente os produtos e seguir as orientações do professor.',
      'A Química relaciona-se com outras ciências. Na Biologia ajuda a compreender processos celulares; na Física relaciona-se com energia e propriedades da matéria; na Matemática utiliza cálculos e representação de dados.',
    ],
    'Por que o sabão consegue remover a gordura das mãos?',
    'As moléculas do sabão possuem uma parte que interage com a água e outra que interage com substâncias gordurosas. Assim, o sabão ajuda a dispersar a gordura na água, facilitando a sua remoção durante a lavagem.',
    'Química aplicada à vida quotidiana em Moçambique',
    'O conhecimento químico é importante no tratamento da água, conservação e preparação dos alimentos, produção de sabão, agricultura, saúde, construção e utilização responsável dos recursos naturais.',
    'saúde',
    'Pensar que a Química existe apenas dentro de um laboratório.',
    'A Química estuda fenómenos e materiais que fazem parte da natureza e da vida quotidiana. O laboratório é apenas um dos locais onde o conhecimento químico pode ser investigado.',
    [
      'A Química estuda a matéria, as suas propriedades e transformações.',
      'A Química está presente em muitas atividades do quotidiano.',
      'A observação e a experimentação ajudam a produzir conhecimento científico.',
      'A segurança deve ser respeitada durante as atividades experimentais.',
    ],
    [
      {
        id: 'chem-7-01-q1',
        question: 'Qual é o principal objeto de estudo da Química?',
        options: [
          'Apenas os animais',
          'A matéria, as suas propriedades e transformações',
          'Apenas os planetas',
          'Somente os seres humanos',
        ],
        correctAnswerIndex: 1,
        explanation: 'A Química estuda a matéria, a sua composição, estrutura, propriedades e transformações.',
      },
      {
        id: 'chem-7-01-q2',
        question: 'Qual comportamento é adequado num laboratório?',
        options: [
          'Provar substâncias para descobrir o seu sabor',
          'Misturar produtos sem orientação',
          'Seguir as regras de segurança e as orientações do professor',
          'Cheirar diretamente todos os produtos',
        ],
        correctAnswerIndex: 2,
        explanation: 'As atividades laboratoriais devem ser realizadas de acordo com as regras de segurança e sob orientação adequada.',
      },
    ],
    [
      {
        id: 'chem-7-01-ex1',
        statement: 'Explica, com as tuas próprias palavras, o que é a Química e indica dois exemplos da sua presença no quotidiano.',
        difficulty: 'Fácil',
        type: 'fill_blank',
        correctAnswer: 'A Química estuda a matéria, as suas propriedades e transformações.',
        explanation: 'Uma resposta adequada deve relacionar a Química com o estudo da matéria e das suas propriedades ou transformações.',
        hint: 'Pensa nos materiais e nas transformações que observas diariamente.',
      },
      {
        id: 'chem-7-01-ex2',
        statement: 'Indica duas regras de segurança que devem ser respeitadas durante uma experiência química.',
        difficulty: 'Fácil',
        type: 'fill_blank',
        correctAnswer: 'Seguir as orientações do professor e não provar substâncias.',
        explanation: 'Entre as regras importantes estão seguir as orientações, usar corretamente os materiais e nunca provar substâncias.',
        hint: 'Pensa primeiro na proteção da saúde e na prevenção de acidentes.',
      },
    ],
  ),

  c(
    'chem-7-02',
    'chem-7-u2',
    'Matéria e Transformações',
    'Matéria, estados físicos e propriedades',
    'Matéria',
    [
      'Definir matéria.',
      'Distinguir os estados sólido, líquido e gasoso.',
      'Reconhecer algumas propriedades da matéria.',
      'Diferenciar massa e volume.',
    ],
    'Matéria é tudo aquilo que possui massa e ocupa espaço.',
    [
      'No estado sólido, a matéria apresenta forma e volume próprios, como acontece com uma pedra ou um pedaço de madeira.',
      'No estado líquido, a matéria possui volume definido, mas toma a forma do recipiente, como acontece com a água.',
      'No estado gasoso, a matéria não possui forma nem volume próprios e tende a ocupar todo o espaço disponível, como acontece com o ar.',
      'A massa indica a quantidade de matéria de um corpo e pode ser medida, por exemplo, em gramas ou quilogramas.',
      'O volume indica o espaço ocupado por um corpo e pode ser medido, por exemplo, em litros ou centímetros cúbicos.',
      'A matéria também apresenta propriedades como cor, estado físico, densidade, solubilidade e temperaturas de fusão e ebulição.',
    ],
    'A água nos três estados físicos',
    'A água pode ser encontrada como gelo no estado sólido, como água líquida e como vapor de água no estado gasoso. A mudança de estado depende das condições, especialmente da temperatura.',
    'Importância das propriedades da matéria em Moçambique',
    'Conhecer as propriedades dos materiais ajuda na conservação e armazenamento da água e dos alimentos, na utilização de combustíveis e na escolha adequada de materiais para diferentes atividades.',
    'recursos_naturais',
    'Confundir massa com volume ou considerar que massa e peso são exatamente a mesma grandeza.',
    'Massa e volume são grandezas diferentes: a massa está relacionada com a quantidade de matéria, enquanto o volume corresponde ao espaço ocupado.',
    [
      'Matéria possui massa e ocupa espaço.',
      'Os três estados físicos mais estudados são sólido, líquido e gasoso.',
      'Massa e volume são propriedades diferentes.',
      'As propriedades da matéria ajudam a identificar e utilizar materiais.',
    ],
    [
      {
        id: 'chem-7-02-q1',
        question: 'Qual das opções representa uma propriedade associada à quantidade de matéria?',
        options: [
          'Massa',
          'Cor da parede',
          'Forma da letra',
          'Som produzido',
        ],
        correctAnswerIndex: 0,
        explanation: 'A massa está relacionada com a quantidade de matéria presente num corpo.',
      },
      {
        id: 'chem-7-02-q2',
        question: 'Dois litros de água correspondem principalmente a uma medida de:',
        options: [
          'Massa',
          'Volume',
          'Temperatura',
          'Densidade',
        ],
        correctAnswerIndex: 1,
        explanation: 'O litro é uma unidade usada para medir volume.',
      },
    ],
    [
      {
        id: 'chem-7-02-ex1',
        statement: 'Distingue os estados sólido, líquido e gasoso usando um exemplo para cada um.',
        difficulty: 'Fácil',
        type: 'fill_blank',
        correctAnswer: 'Sólido: gelo; líquido: água; gasoso: vapor de água.',
        explanation: 'Os exemplos devem demonstrar as diferenças entre os estados físicos da matéria.',
        hint: 'Pensa na água em diferentes condições.',
      },
      {
        id: 'chem-7-02-ex2',
        statement: 'Explica a diferença entre massa e volume.',
        difficulty: 'Médio',
        type: 'fill_blank',
        correctAnswer: 'Massa é a quantidade de matéria; volume é o espaço ocupado.',
        explanation: 'Massa e volume representam propriedades diferentes da matéria.',
        hint: 'Pergunta: quanto de matéria existe? E quanto espaço ela ocupa?',
      },
    ],
  ),

  c(
    'chem-7-03',
    'chem-7-u3',
    'Substâncias e Misturas',
    'Substâncias, misturas e métodos de separação',
    'Substâncias e misturas',
    [
      'Distinguir substâncias de misturas.',
      'Reconhecer substâncias simples e compostas.',
      'Diferenciar misturas homogéneas e heterogéneas.',
      'Compreender a utilização de métodos físicos de separação.',
    ],
    'Uma substância é uma forma de matéria com composição e propriedades características. Uma mistura resulta da combinação de duas ou mais substâncias.',
    [
      'Uma substância simples é constituída por um único elemento químico, enquanto uma substância composta é constituída por mais de um elemento químico.',
      'Numa mistura homogénea, os componentes distribuem-se de forma uniforme e não são facilmente distinguidos a olho nu.',
      'Numa mistura heterogénea, é possível distinguir diferentes componentes ou fases.',
      'Os componentes de muitas misturas podem ser separados por métodos físicos, escolhidos de acordo com propriedades como tamanho das partículas, densidade, solubilidade ou ponto de ebulição.',
      'Entre os métodos de separação estão a filtração, decantação, evaporação, destilação e separação magnética.',
    ],
    'Separação de areia e água por filtração',
    'Quando areia é misturada com água, a areia não se dissolve. Ao passar a mistura por um filtro, a água atravessa os poros enquanto as partículas de areia ficam retidas.',
    'Tratamento e utilização da água',
    'Em diferentes comunidades de Moçambique, processos como sedimentação, decantação e filtração podem fazer parte do tratamento da água. Para consumo humano, podem ser necessárias etapas adicionais de tratamento e desinfeção.',
    'recursos_naturais',
    'Pensar que qualquer mistura pode ser separada por um único método.',
    'O método de separação depende das propriedades dos componentes da mistura.',
    [
      'Substância e mistura não são conceitos iguais.',
      'Misturas podem ser homogéneas ou heterogéneas.',
      'Os métodos de separação utilizam diferenças nas propriedades dos componentes.',
      'A filtração pode separar um sólido insolúvel de um líquido.',
    ],
    [
      {
        id: 'chem-7-03-q1',
        question: 'A água com sal completamente dissolvido é geralmente considerada uma mistura:',
        options: [
          'Heterogénea',
          'Homogénea',
          'Metálica',
          'Gasosa',
        ],
        correctAnswerIndex: 1,
        explanation: 'Quando o sal está completamente dissolvido, a mistura apresenta composição uniforme.',
      },
      {
        id: 'chem-7-03-q2',
        question: 'Qual método é adequado para separar areia misturada com água?',
        options: [
          'Filtração',
          'Imantação',
          'Destilação fracionada obrigatória',
          'Cromatografia',
        ],
        correctAnswerIndex: 0,
        explanation: 'A areia é um sólido insolúvel que pode ser retido por um filtro.',
      },
    ],
    [
      {
        id: 'chem-7-03-ex1',
        statement: 'Distingue uma mistura homogénea de uma mistura heterogénea e apresenta um exemplo de cada.',
        difficulty: 'Fácil',
        type: 'fill_blank',
        correctAnswer: 'Homogénea: composição uniforme, como água com sal dissolvido. Heterogénea: componentes distinguíveis, como água e areia.',
        explanation: 'A principal diferença está na uniformidade da mistura e na possibilidade de distinguir os seus componentes ou fases.',
        hint: 'Observa se a mistura apresenta uma ou várias fases visíveis.',
      },
      {
        id: 'chem-7-03-ex2',
        statement: 'Indica um método adequado para separar areia e água e explica porquê.',
        difficulty: 'Médio',
        type: 'fill_blank',
        correctAnswer: 'Filtração, porque a areia fica retida no filtro enquanto a água passa.',
        explanation: 'A filtração aproveita a diferença entre as partículas sólidas e o líquido.',
        hint: 'Pensa no que acontece quando uma mistura passa por um filtro.',
      },
    ],
  ),

  c(
    'chem-7-04',
    'chem-7-u4',
    'Transformações da Matéria',
    'Transformações físicas e químicas',
    'Transformações da matéria',
    [
      'Distinguir transformações físicas de transformações químicas.',
      'Reconhecer exemplos de transformações físicas no quotidiano.',
      'Reconhecer situações em que novas substâncias podem ser formadas.',
      'Relacionar transformações químicas com situações do quotidiano.',
    ],
    'Uma transformação física altera o estado, a forma ou o aspeto de uma substância sem produzir necessariamente uma nova substância. Numa transformação química, ocorre formação de uma ou mais substâncias diferentes das iniciais.',
    [
      'Mudanças de estado, como fusão, solidificação e evaporação, são exemplos de transformações físicas.',
      'Cortar, triturar ou dobrar um material também pode ser uma transformação física, porque a composição da matéria não precisa de mudar.',
      'A combustão, a ferrugem e algumas alterações que ocorrem durante a preparação dos alimentos são exemplos de transformações químicas.',
      'Indícios como formação de gás, mudança persistente de cor, formação de precipitado ou libertação/absorção de energia podem ajudar a identificar uma transformação química, mas devem ser analisados no contexto.',
      'Uma mudança de aparência, por si só, não é suficiente para concluir que ocorreu uma transformação química.',
    ],
    'Gelo a derreter e ferro a enferrujar',
    'Quando o gelo derrete, a água continua a ser água, embora tenha mudado de estado físico. Quando o ferro enferruja, formam-se novas substâncias resultantes da reação do ferro com o oxigénio e a água do ambiente.',
    'Transformações químicas nos alimentos e na agricultura',
    'A preparação dos alimentos, a fermentação e a deterioração dos produtos agrícolas envolvem transformações químicas. Compreender esses processos ajuda na conservação e utilização adequada dos alimentos.',
    'agricultura',
    'Considerar que toda mudança de aparência é automaticamente uma transformação química.',
    'Para identificar uma transformação química, é necessário analisar se houve alteração da composição e formação de novas substâncias.',
    [
      'Transformações físicas não produzem necessariamente novas substâncias.',
      'Transformações químicas envolvem alterações na composição da matéria.',
      'Fusão e congelamento da água são transformações físicas.',
      'Combustão e ferrugem são exemplos de transformações químicas.',
    ],
    [
      {
        id: 'chem-7-04-q1',
        question: 'A formação de ferrugem no ferro é considerada principalmente uma transformação:',
        options: [
          'Física',
          'Química',
          'Mecânica apenas',
          'Temporária sem alteração da matéria',
        ],
        correctAnswerIndex: 1,
        explanation: 'A formação da ferrugem envolve reações químicas e formação de novas substâncias.',
      },
      {
        id: 'chem-7-04-q2',
        question: 'O congelamento da água é uma transformação:',
        options: [
          'Química',
          'Nuclear',
          'Física',
          'Biológica obrigatória',
        ],
        correctAnswerIndex: 2,
        explanation: 'No congelamento, a água muda do estado líquido para o sólido sem mudar a sua identidade química.',
      },
    ],
    [
      {
        id: 'chem-7-04-ex1',
        statement: 'Explica a diferença entre uma transformação física e uma transformação química.',
        difficulty: 'Fácil',
        type: 'fill_blank',
        correctAnswer: 'Na transformação física não é necessária a formação de uma nova substância; na química ocorre alteração da composição e formação de novas substâncias.',
        explanation: 'A diferença fundamental está na composição da matéria e na formação ou não de novas substâncias.',
        hint: 'Pergunta se a substância inicial continua a ser a mesma.',
      },
      {
        id: 'chem-7-04-ex2',
        statement: 'Classifica o derretimento do gelo e a formação de ferrugem como transformações físicas ou químicas.',
        difficulty: 'Fácil',
        type: 'multiple_choice',
        options: [
          'Derretimento: física; ferrugem: química',
          'Derretimento: química; ferrugem: física',
          'As duas são físicas',
          'As duas são químicas',
        ],
        correctAnswer: 'Derretimento: física; ferrugem: química',
        explanation: 'O derretimento altera apenas o estado físico da água. A formação da ferrugem envolve novas substâncias.',
        hint: 'Compara mudança de estado com formação de uma nova substância.',
      },
    ],
  ),
];


/*
===========================================================
 QUÍMICA — 8ª CLASSE
===========================================================
*/

const CHEM_8: EssentialContent[] = [

c(
'chem-8-01',
'8ª Classe',
'Química',
'chem-8-u1',
'Constituição da Matéria',
'Átomo e estrutura atómica',
'Átomo',
'Átomo é a unidade fundamental da matéria para a descrição química dos elementos, constituído por núcleo e região eletrónica.',
[
'O núcleo contém protões e neutrões.',
'Os eletrões ocupam regiões de probabilidade ao redor do núcleo.',
'O número de protões determina o número atómico e identifica o elemento.',
'Num átomo neutro, o número de eletrões é igual ao número de protões.'
],
'Carbono',
'O carbono possui número atómico 6, portanto um átomo neutro de carbono possui seis protões e seis eletrões.',
'Elementos presentes nos seres vivos',
'O carbono, oxigénio, hidrogénio e outros elementos são fundamentais para a matéria viva e para recursos naturais.',
'biomassa',
'Pensar que eletrões percorrem sempre órbitas circulares fixas como planetas.',
'O modelo moderno descreve eletrões por orbitais e regiões de probabilidade.',
[
'Átomo possui núcleo e eletrões.',
'Protões têm carga positiva.',
'Eletrões têm carga negativa.',
'O número de protões define o elemento.'
],
'O que determina o número atómico?',
['Número de protões','Número de neutrões apenas','Número de moléculas','Número de níveis de água'],
0,
'O número atómico é igual ao número de protões do núcleo.',
'Um átomo neutro possui 8 protões. Quantos eletrões possui?',
['8','4','16','0'],
0,
'Num átomo neutro, o número de eletrões é igual ao número de protões.'
),

c(
'chem-8-02',
'8ª Classe',
'Química',
'chem-8-u1',
'Constituição da Matéria',
'Tabela periódica',
'Tabela periódica',
'A tabela periódica organiza os elementos químicos segundo o número atómico e propriedades periódicas.',
[
'Elementos são organizados em períodos e grupos.',
'Elementos de um mesmo grupo podem apresentar propriedades químicas relacionadas.',
'Metais, não metais e metaloides apresentam diferentes propriedades.',
'A posição de um elemento ajuda a prever algumas características químicas.'
],
'Sódio e cloro',
'Sódio e cloro possuem propriedades muito diferentes, mas formam o composto cloreto de sódio.',
'Recursos minerais',
'A tabela periódica ajuda a compreender elementos presentes em minerais, fertilizantes, materiais industriais e organismos.',
'indústria',
'Pensar que elementos próximos possuem sempre propriedades idênticas.',
'As tendências periódicas existem, mas cada elemento possui propriedades próprias.',
[
'A tabela organiza elementos.',
'Número atómico aumenta ao longo dos períodos.',
'Grupos apresentam relações de propriedades.',
'A posição ajuda a prever comportamento químico.'
],
'Qual informação identifica diretamente um elemento?',
['Número atómico','Cor do recipiente','Massa da amostra apenas','Estado da água'],
0,
'O número atómico identifica o elemento.',
'Elementos de um mesmo grupo geralmente:',
['Apresentam algumas propriedades químicas semelhantes','São todos iguais','Possuem sempre a mesma massa','São todos gases'],
0,
'Elementos do mesmo grupo apresentam configurações de valência relacionadas e tendências químicas semelhantes.'
),

c(
'chem-8-03',
'8ª Classe',
'Química',
'chem-8-u2',
'Ligações Químicas',
'Ligações químicas',
'Ligação química',
'Ligação química é uma interação que mantém átomos unidos em estruturas estáveis, envolvendo principalmente os eletrões de valência.',
[
'Na ligação iónica ocorre transferência de eletrões entre espécies, formando iões de cargas opostas.',
'Na ligação covalente ocorre partilha de pares de eletrões entre átomos.',
'Na ligação metálica, eletrões de valência apresentam comportamento coletivo em uma rede metálica.',
'O tipo de ligação influencia propriedades dos materiais.'
],
'Cloreto de sódio',
'No NaCl, o sódio forma Na⁺ e o cloro forma Cl⁻; as cargas opostas contribuem para a estrutura iónica.',
'Materiais e indústria',
'Compreender ligações ajuda a explicar propriedades de sais, metais, água e materiais usados no quotidiano.',
'indústria',
'Pensar que ligação iónica significa que os átomos simplesmente encostam.',
'A ligação envolve interações eletrostáticas entre iões e estrutura organizada.',
[
'Eletrões de valência participam das ligações.',
'Iónica envolve formação de iões.',
'Covalen­te envolve partilha de eletrões.',
'Metálica possui eletrões deslocalizados.'
],
'Que tipo de ligação envolve partilha de eletrões?',
['Covalente','Iónica apenas','Metálica exclusivamente','Nuclear'],
0,
'Ligações covalentes envolvem partilha de pares de eletrões entre átomos.',
'Na formação de NaCl, o sódio tende a:',
['Perder um eletrão','Ganhar sete protões','Perder o núcleo','Formar água'],
0,
'O sódio possui um eletrão de valência e tende a formar Na⁺ por perda desse eletrão.'
),

c(
'chem-8-04',
'8ª Classe',
'Química',
'chem-8-u3',
'Ácidos, Bases e Indicadores',
'Ácidos e bases',
'Ácido e base',
'Ácidos e bases são classes de substâncias com propriedades químicas características. Em água, ácidos aumentam a concentração de H₃O⁺, enquanto bases aumentam a concentração de OH⁻ ou aceitam protões, dependendo da definição usada.',
[
'O pH é uma medida relacionada com a atividade de iões hidrogénio em solução aquosa.',
'Soluções ácidas apresentam pH inferior a 7 em condições usuais de referência.',
'Soluções básicas apresentam pH superior a 7.',
'Indicadores mudam de cor conforme a acidez ou basicidade do meio.'
],
'Limão',
'O sumo de limão contém ácidos orgânicos e apresenta caráter ácido.',
'Água e saúde',
'O controlo do pH é importante no tratamento de água, agricultura, alimentos e processos industriais.',
'recursos_naturais',
'Pensar que ácido significa necessariamente venenoso.',
'Acidez e toxicidade não são a mesma coisa; dependem da substância e da concentração.',
[
'pH caracteriza acidez/basicidade.',
'pH menor que 7 indica meio ácido em água.',
'pH maior que 7 indica meio básico.',
'Indicadores ajudam a identificar o caráter da solução.'
],
'Uma solução com pH 3 é:',
['Ácida','Básica','Neutra','Sempre um metal'],
0,
'Em água, pH 3 corresponde a uma solução ácida.',
'Qual substância pode ser usada como indicador natural?',
['Extrato de repolho roxo','Areia','Ferro','Sal sólido'],
0,
'Pigmentos do repolho roxo mudam de cor em diferentes condições de pH.'
)

];

/*
===========================================================
 QUÍMICA — 9ª CLASSE
===========================================================
*/

const CHEM_9: EssentialContent[] = [

c(
'chem-9-01',
'9ª Classe',
'Química',
'chem-9-u1',
'Reações Químicas',
'Reações químicas',
'Reação química',
'Reação química é um processo no qual uma ou mais substâncias são transformadas em outras substâncias com composição e propriedades diferentes.',
[
'As substâncias iniciais são chamadas reagentes.',
'As substâncias formadas são produtos.',
'Durante uma reação, os átomos são reorganizados; não são simplesmente criados ou destruídos.',
'Equações químicas representam simbolicamente essas transformações.'
],
'Combustão',
'Na combustão do metano, metano e oxigénio reagem formando dióxido de carbono e água.',
'Combustíveis',
'Combustões são importantes para energia e transporte, mas podem produzir poluentes e gases de efeito estufa.',
'energia',
'Pensar que os átomos desaparecem numa reação.',
'Os átomos são conservados e reorganizados em novas combinações.',
[
'Reagentes transformam-se em produtos.',
'Átomos são reorganizados.',
'Equações representam reações.',
'A matéria é conservada.'
],
'Em uma reação química, os reagentes são:',
['Substâncias presentes no início da reação','Sempre produtos','Somente gases','Somente metais'],
0,
'Reagentes são as substâncias que participam inicialmente da transformação.',
'Na reação 2H₂ + O₂ → 2H₂O, quais são os produtos?',
['H₂O','H₂ e O₂','Somente H₂','Somente O₂'],
0,
'A água é o produto representado no lado direito da equação.'
),

c(
'chem-9-02',
'9ª Classe',
'Química',
'chem-9-u2',
'Estequiometria',
'Conservação da massa',
'Lei da conservação da massa',
'Em um sistema fechado, a massa total dos reagentes é igual à massa total dos produtos de uma reação química.',
[
'A lei relaciona-se com a conservação dos átomos durante as reações.',
'Uma equação química deve ser balanceada para apresentar o mesmo número de átomos de cada elemento nos dois lados.',
'Os coeficientes representam proporções entre partículas ou quantidades de matéria.',
'Balancear não significa alterar as fórmulas químicas das substâncias.'
],
'Formação de água',
'Na equação 2H₂ + O₂ → 2H₂O existem quatro átomos de H e dois de O em ambos os lados.',
'Laboratório e indústria',
'O balanceamento é necessário para calcular quantidades de reagentes e produtos em processos químicos.',
'indústria',
'Alterar índices das fórmulas para balancear.',
'Devem ser alterados coeficientes, não os índices que definem a substância.',
[
'A massa é conservada em sistema fechado.',
'Equações devem ser balanceadas.',
'Coeficientes indicam proporções.',
'Fórmulas químicas não devem ser alteradas arbitrariamente.'
],
'Qual equação está balanceada?',
['2H₂ + O₂ → 2H₂O','H₂ + O₂ → H₂O','H₂ + O → H₂O₂','H₂ + O₂ → H₂O₂'],
0,
'Na equação correta existem dois H₂, um O₂ e dois H₂O, conservando os átomos.',
'Para balancear uma equação química devemos alterar principalmente:',
['Coeficientes','Símbolos dos elementos','Índices arbitrariamente','Nomes dos elementos'],
0,
'Coeficientes mudam as quantidades relativas sem alterar a identidade química da substância.'
),

c(
'chem-9-03',
'9ª Classe',
'Química',
'chem-9-u3',
'Soluções',
'Concentração de soluções',
'Concentração',
'Concentração expressa a quantidade de soluto presente em determinada quantidade de solução ou solvente, dependendo da definição usada.',
[
'Uma solução contém soluto e solvente.',
'A concentração pode ser expressa de várias formas.',
'A concentração em massa pode ser calculada por C = m/V, quando massa e volume estão nas unidades adequadas.',
'Diluição reduz a concentração adicionando solvente, sem alterar a quantidade de soluto inicialmente presente, se não houver perdas.'
],
'Sal em água',
'Adicionar mais sal ao mesmo volume de água aumenta a concentração até que se atinja a solubilidade e possa restar sólido.',
'Água e laboratório',
'Preparar soluções com concentração conhecida é importante em laboratórios, saúde, agricultura e tratamento de água.',
'saúde',
'Pensar que adicionar água aumenta a concentração.',
'Adicionar solvente geralmente diminui a concentração, mantendo constante a quantidade de soluto.',
[
'Solução possui soluto e solvente.',
'Concentração mede quantidade de soluto em relação a uma referência.',
'C = m/V é uma forma de concentração em massa.',
'Diluição diminui concentração.'
],
'Se 10 g de sal estão dissolvidos em 2 L de solução, a concentração em massa é:',
['5 g/L','20 g/L','0,2 g/L','12 g/L'],
0,
'C = m/V = 10/2 = 5 g/L.',
'Se adicionarmos água a uma solução sem perder soluto, a concentração:',
['Diminui','Aumenta sempre','Não pode mudar','Transforma-se em sólido'],
0,
'O mesmo soluto passa a estar distribuído em maior volume.'
),

c(
'chem-9-04',
'9ª Classe',
'Química',
'chem-9-u4',
'Química Inorgânica',
'Óxidos, ácidos, bases e sais',
'Funções inorgânicas',
'Óxidos, ácidos, bases e sais são classes importantes de substâncias inorgânicas com propriedades e comportamentos químicos característicos.',
[
'Óxidos são compostos binários em que o oxigénio está combinado com outro elemento, com exceções específicas da classificação.',
'Ácidos apresentam propriedades relacionadas com doação de protões ou formação de H₃O⁺ em água.',
'Bases podem produzir OH⁻ em água ou aceitar protões.',
'Sais são compostos iónicos que podem resultar de reações entre ácidos e bases.'
],
'Neutralização',
'HCl + NaOH → NaCl + H₂O é um exemplo de neutralização entre um ácido e uma base.',
'Tratamento de água e agricultura',
'Reações ácido-base são utilizadas em tratamento de água, correção de solos e processos industriais.',
'agricultura',
'Pensar que todo sal é obrigatoriamente sal de cozinha.',
'Cloreto de sódio é apenas um dos muitos sais existentes.',
[
'Óxidos contêm oxigénio combinado com outro elemento.',
'Ácidos e bases possuem propriedades opostas em muitos contextos.',
'Sais formam uma grande classe de compostos.',
'Neutralização pode formar sal e água.'
],
'Na reação HCl + NaOH → NaCl + H₂O, NaCl é:',
['Um sal','Um ácido','Uma base','Um elemento'],
0,
'Cloreto de sódio é um sal.',
'Uma reação entre ácido e base pode produzir:',
['Sal e água','Somente oxigénio','Somente metal','Somente ácido'],
0,
'Uma reação de neutralização pode produzir sal e água.'
)

];

/*
===========================================================
 QUÍMICA — 10ª CLASSE
===========================================================
*/

const CHEM_10: EssentialContent[] = [

c(
'chem-10-01',
'10ª Classe',
'Química',
'chem-10-u1',
'Quantidade de Matéria',
'Mol e número de Avogadro',
'Mol',
'Mol é a unidade do SI para quantidade de matéria. Um mol contém exatamente 6,02214076 × 10²³ entidades elementares especificadas.',
[
'As entidades podem ser átomos, moléculas, iões ou outras partículas.',
'A massa molar é a massa correspondente a um mol de uma substância.',
'A quantidade de matéria pode ser calculada por n = m/M.',
'O conceito de mol permite relacionar o mundo microscópico com quantidades medidas no laboratório.'
],
'18 g de água',
'A massa molar aproximada da água é 18 g/mol. Assim, 18 g de água correspondem aproximadamente a 1 mol de moléculas de água.',
'Laboratório',
'O mol é essencial para preparar soluções, calcular reagentes e interpretar reações químicas.',
'indústria',
'Confundir mol com massa.',
'Mol mede quantidade de matéria; gramas medem massa.',
[
'Mol é unidade de quantidade de matéria.',
'1 mol contém 6,02214076 × 10²³ entidades.',
'n = m/M.',
'Massa molar é expressa em g/mol.'
],
'Quantas entidades existem aproximadamente em 1 mol?',
['6,02214076 × 10²³','100','1 milhão','10²'],
0,
'Esse valor é a constante de Avogadro, definida exatamente pelo SI.',
'Quantos mol existem em 36 g de água, considerando M = 18 g/mol?',
['2 mol','0,5 mol','18 mol','54 mol'],
0,
'n = m/M = 36/18 = 2 mol.'
),

c(
'chem-10-02',
'10ª Classe',
'Química',
'chem-10-u2',
'Ligação e Estrutura',
'Geometria molecular e polaridade',
'Geometria molecular',
'A geometria molecular descreve a disposição espacial dos átomos numa molécula, influenciada pelas interações entre regiões de densidade eletrónica.',
[
'A distribuição eletrónica influencia os ângulos de ligação.',
'Moléculas podem apresentar geometrias lineares, angulares, trigonal plana, tetraédrica e outras.',
'A polaridade depende das ligações e da geometria da molécula.',
'Uma molécula com ligações polares pode ser globalmente apolar se os dipolos se anularem pela geometria.'
],
'Água',
'A molécula de água é angular e possui ligações O-H polares, resultando em molécula polar.',
'Água e ambiente',
'A polaridade da água ajuda a explicar sua capacidade de dissolver muitas substâncias iónicas e polares.',
'recursos_naturais',
'Pensar que qualquer molécula com ligação polar é obrigatoriamente polar.',
'A polaridade molecular depende da soma vetorial dos dipolos de ligação e da geometria.',
[
'Geometria descreve disposição espacial.',
'Ligações podem ser polares.',
'Polaridade molecular depende da geometria.',
'Água é uma molécula polar.'
],
'Por que a água é polar?',
['Porque sua geometria angular e ligações O-H produzem dipolo resultante','Porque não possui eletrões','Porque é metálica','Porque não possui ligações'],
0,
'A geometria angular impede o cancelamento completo dos dipolos O-H.',
'Uma molécula linear simétrica com duas ligações polares iguais pode ser:',
['Apolar','Sempre iónica','Sempre metálica','Sem eletrões'],
0,
'Os dipolos podem cancelar-se quando a geometria é simétrica.'
),

c(
'chem-10-03',
'10ª Classe',
'Química',
'chem-10-u3',
'Química Orgânica',
'Introdução à química orgânica',
'Química orgânica',
'Química orgânica estuda principalmente compostos de carbono, especialmente estruturas em que o carbono forma cadeias e ligações covalentes características.',
[
'O carbono possui quatro eletrões de valência e pode formar quatro ligações covalentes.',
'Cadeias carbónicas podem ser lineares, ramificadas ou cíclicas.',
'Hidrocarbonetos são compostos constituídos apenas por carbono e hidrogénio.',
'Grupos funcionais determinam muitas propriedades e reatividades dos compostos orgânicos.'
],
'Etanol',
'O etanol possui dois carbonos, seis hidrogénios e um grupo hidroxilo, sendo um álcool.',
'Combustíveis e indústria',
'Compostos orgânicos estão presentes em combustíveis, medicamentos, plásticos, alimentos e muitos materiais.',
'indústria',
'Definir química orgânica como estudo exclusivo de seres vivos.',
'A química orgânica estuda principalmente compostos de carbono, independentemente de serem produzidos por seres vivos ou sintetizados industrialmente.',
[
'Carbono forma muitas estruturas.',
'Hidrocarbonetos contêm C e H.',
'Grupos funcionais influenciam propriedades.',
'Química orgânica tem ampla aplicação industrial.'
],
'Qual elemento é central na química orgânica?',
['Carbono','Sódio','Ferro','Hélio'],
0,
'O carbono forma grande diversidade de estruturas covalentes.',
'Qual composto é um hidrocarboneto?',
['CH₄','H₂O','NaCl','NH₃'],
0,
'CH₄ contém apenas carbono e hidrogénio.'
),

c(
'chem-10-04',
'10ª Classe',
'Química',
'chem-10-u4',
'Química Ambiental',
'Combustíveis e poluição',
'Combustíveis',
'Combustível é uma substância ou material capaz de libertar energia utilizável, geralmente através de uma reação química como combustão.',
[
'Combustíveis fósseis incluem carvão, petróleo e gás natural.',
'A combustão completa de hidrocarbonetos produz principalmente CO₂ e H₂O.',
'Combustão incompleta pode produzir monóxido de carbono e fuligem.',
'A queima de combustíveis fósseis é uma importante fonte antropogénica de CO₂.'
],
'Carvão vegetal',
'A combustão libera energia, mas também produz gases e partículas que podem afetar a saúde e o ambiente.',
'Energia e ambiente',
'O uso de combustíveis deve considerar eficiência, qualidade do ar, saúde e impactos ambientais.',
'energia',
'Pensar que toda combustão produz apenas dióxido de carbono e água.',
'A composição do combustível e as condições de combustão determinam os produtos.',
[
'Combustão libera energia.',
'Combustão completa de hidrocarbonetos produz CO₂ e água.',
'Combustão incompleta pode produzir CO.',
'Combustíveis têm impactos ambientais.'
],
'Qual gás tóxico pode resultar de combustão incompleta?',
['Monóxido de carbono','Oxigénio','Hélio','Nitrogénio puro'],
0,
'O monóxido de carbono é produzido em combustões incompletas e interfere no transporte de oxigénio no organismo.',
'Por que ambientes fechados são perigosos para combustões sem ventilação adequada?',
['Podem acumular monóxido de carbono e outros poluentes','Porque o fogo deixa de existir','Porque produz apenas água','Porque elimina todo oxigénio instantaneamente'],
0,
'Ventilação inadequada favorece acumulação de gases perigosos e redução do oxigénio.'
)

];

/*
===========================================================
 QUÍMICA — 11ª CLASSE
===========================================================
*/

const CHEM_11: EssentialContent[] = [

c(
'chem-11-01',
'11ª Classe',
'Química',
'chem-11-u1',
'Química Orgânica',
'Hidrocarbonetos',
'Hidrocarbonetos',
'Hidrocarbonetos são compostos orgânicos constituídos exclusivamente por carbono e hidrogénio.',
[
'Alcanos possuem apenas ligações simples entre carbonos.',
'Alcenos possuem pelo menos uma ligação dupla carbono-carbono.',
'Alcinos possuem pelo menos uma ligação tripla.',
'Aromaticidade descreve sistemas especiais de ligações conjugadas, como o benzeno.'
],
'Metano e eteno',
'Metano é um alcano com uma ligação simples; eteno possui uma ligação dupla entre carbonos.',
'Gás natural',
'O gás natural contém principalmente metano, embora sua composição varie conforme a origem. É utilizado como combustível e matéria-prima industrial.',
'energia',
'Pensar que todo hidrocarboneto é um gás.',
'Hidrocarbonetos podem ser gases, líquidos ou sólidos dependendo da estrutura e massa molecular.',
[
'Hidrocarbonetos contêm apenas C e H.',
'Alcanos têm ligações simples.',
'Alcenos possuem ligações duplas.',
'Alcinos possuem ligações triplas.'
],
'Qual é um hidrocarboneto?',
['C₂H₆','H₂O','NaOH','HCl'],
0,
'C₂H₆ contém apenas carbono e hidrogénio.',
'Qual hidrocarboneto possui uma ligação dupla?',
['Eteno','Etano','Metano','Propano'],
0,
'O eteno possui ligação C=C.'
),

c(
'chem-11-02',
'11ª Classe',
'Química',
'chem-11-u2',
'Funções Orgânicas',
'Álcoois, ácidos carboxílicos e ésteres',
'Funções orgânicas',
'Funções orgânicas são grupos de átomos presentes em moléculas que conferem propriedades e reatividade características.',
[
'Álcoois possuem grupo hidroxilo ligado a carbono saturado.',
'Ácidos carboxílicos possuem grupo carboxilo.',
'Ésteres possuem o grupo funcional característico -COO- e podem ser formados em reações de esterificação.',
'As propriedades de uma molécula dependem do grupo funcional e da estrutura completa.'
],
'Etanol e ácido acético',
'Etanol é um álcool. Ácido acético, presente no vinagre, é um ácido carboxílico.',
'Alimentos',
'Ésteres estão relacionados com aromas e fragrâncias, enquanto álcoois e ácidos possuem aplicações industriais e alimentares.',
'indústria',
'Confundir grupo funcional com a molécula inteira.',
'O grupo funcional é apenas uma parte da estrutura e influencia fortemente o comportamento químico.',
[
'Grupos funcionais caracterizam famílias orgânicas.',
'Álcool possui -OH característico.',
'Ácido carboxílico possui -COOH.',
'Ésteres possuem grupo -COO-.'
],
'Qual grupo funcional caracteriza um álcool?',
['-OH','-COOH','-COO- exclusivamente','-NH₂'],
0,
'O grupo hidroxilo é característico dos álcoois.',
'Qual substância é um ácido carboxílico?',
['CH₃COOH','CH₃OH','CH₄','C₂H₆'],
0,
'CH₃COOH possui o grupo carboxilo -COOH.'
),

c(
'chem-11-03',
'11ª Classe',
'Química',
'chem-11-u3',
'Equilíbrio Químico',
'Equilíbrio químico',
'Equilíbrio químico',
'Equilíbrio químico é o estado de um sistema reversível em que as velocidades das reações direta e inversa são iguais, mantendo concentrações constantes ao longo do tempo.',
[
'Equilíbrio químico é dinâmico, não significa que as reações pararam.',
'O equilíbrio pode deslocar-se quando condições como concentração, pressão ou temperatura mudam.',
'O princípio de Le Chatelier ajuda a prever a resposta de sistemas em equilíbrio a perturbações.',
'A constante de equilíbrio depende da temperatura para uma determinada reação.'
],
'Síntese de amónia',
'O processo Haber-Bosch utiliza equilíbrio entre nitrogénio e hidrogénio para produzir amónia.',
'Fertilizantes',
'A amónia é matéria-prima para fertilizantes importantes para a agricultura.',
'agricultura',
'Pensar que no equilíbrio não ocorre reação.',
'As reações direta e inversa continuam ocorrendo, mas com velocidades iguais.',
[
'Equilíbrio é dinâmico.',
'Velocidades direta e inversa são iguais.',
'Concentrações permanecem constantes.',
'Temperatura pode alterar a constante de equilíbrio.'
],
'No equilíbrio químico, as reações:',
['Continuam ocorrendo com velocidades iguais','Param completamente','Ocorrem apenas no sentido direto','Desaparecem'],
0,
'O equilíbrio é dinâmico.',
'Adicionar mais reagente a um sistema em equilíbrio geralmente provoca:',
['Uma resposta do sistema que tende a consumir parte do reagente adicionado','Fim imediato da reação','Desaparecimento de todos os produtos','Nenhuma alteração possível'],
0,
'O sistema responde à perturbação deslocando-se conforme as condições termodinâmicas.'
),

c(
'chem-11-04',
'11ª Classe',
'Química',
'chem-11-u4',
'Eletroquímica',
'Oxidação e redução',
'Reações redox',
'Reações de oxidação-redução envolvem transferência de eletrões ou mudanças nos números de oxidação.',
[
'Oxidação corresponde à perda de eletrões ou aumento do número de oxidação.',
'Reação de redução corresponde ao ganho de eletrões ou diminuição do número de oxidação.',
'O agente oxidante é reduzido.',
'O agente redutor é oxidado.'
],
'Ferrugem',
'Na corrosão do ferro, o ferro sofre oxidação enquanto espécies de oxigénio são reduzidas.',
'Proteção de metais',
'Compreender corrosão ajuda na conservação de estruturas metálicas, ferramentas, pontes e equipamentos.',
'indústria',
'Confundir oxidante com espécie que sofre oxidação.',
'O agente oxidante recebe eletrões e é reduzido.',
[
'Oxidação envolve perda de eletrões.',
'Re­dução envolve ganho de eletrões.',
'O oxidante é reduzido.',
'O redutor é oxidado.'
],
'Qual processo envolve perda de eletrões?',
['Oxidação','Redução','Neutralização','Diluição'],
0,
'Perder eletrões corresponde a oxidação.',
'Em uma reação redox, o agente redutor:',
['É oxidado','É reduzido','Não participa','É sempre água'],
0,
'O agente redutor fornece eletrões e, por isso, sofre oxidação.'
)

];

/*
===========================================================
 QUÍMICA — 12ª CLASSE
===========================================================
*/

const CHEM_12: EssentialContent[] = [

c(
'chem-12-01',
'12ª Classe',
'Química',
'chem-12-u1',
'Cinética Química',
'Velocidade das reações',
'Cinética química',
'Cinética química estuda a velocidade das reações e os fatores que influenciam essa velocidade.',
[
'A velocidade mede a variação da concentração de uma espécie por unidade de tempo.',
'Para um reagente, v = -Δ[reagente]/Δt.',
'Para um produto, v = Δ[produto]/Δt.',
'Concentração, temperatura, superfície de contacto e catalisadores podem influenciar a velocidade.'
],
'Comprimido triturado',
'Um comprimido triturado apresenta maior superfície de contacto com a água do que um comprimido inteiro, podendo dissolver-se mais rapidamente.',
'Processos industriais',
'O controlo da velocidade é importante na produção de medicamentos, alimentos, combustíveis e produtos químicos.',
'indústria',
'Pensar que catalisador aumenta sempre a quantidade final de produto.',
'Catalisador aumenta a velocidade ao oferecer um caminho de menor energia de ativação, sem alterar a constante de equilíbrio.',
[
'Cinética estuda velocidade.',
'Concentração influencia a velocidade em muitas reações.',
'Temperatura pode aumentar a velocidade.',
'Catalisadores reduzem a energia de ativação do caminho reacional.'
],
'Qual fator pode aumentar a velocidade de muitas reações?',
['Aumento de temperatura','Remoção de todas as partículas','Diminuição obrigatória da concentração','Eliminação do contacto'],
0,
'Aumentar a temperatura geralmente aumenta a energia cinética e a frequência de colisões eficazes.',
'Qual é a expressão correta para a velocidade de consumo de um reagente?',
['v = -Δ[reagente]/Δt','v = Δ[reagente]/Δt sempre positivo','v = Δt/Δ[reagente]','v = [reagente] × Δt'],
0,
'O sinal negativo mantém a velocidade positiva quando a concentração do reagente diminui.'
),

c(
'chem-12-02',
'12ª Classe',
'Química',
'chem-12-u2',
'Ácidos e Bases',
'pH e equilíbrio ácido-base',
'pH',
'pH é uma grandeza logarítmica relacionada à atividade dos iões hidrónio em solução aquosa; em aproximações escolares, pH = -log[H₃O⁺].',
[
'Quanto maior a concentração de H₃O⁺, menor tende a ser o pH.',
'Em condições padrão, pH 7 é associado à neutralidade da água pura a 25 °C.',
'Ácidos fortes ionizam-se extensamente em água; ácidos fracos estabelecem equilíbrio de ionização.',
'A força de um ácido não é a mesma coisa que sua concentração.'
],
'Ácido clorídrico',
'HCl é um ácido forte em água e apresenta elevada ionização.',
'Tratamento e laboratório',
'O controlo de pH é importante em água, agricultura, alimentos, processos industriais e análises laboratoriais.',
'água',
'Confundir ácido forte com solução concentrada.',
'Força mede tendência de ionização; concentração indica quantidade de soluto por volume.',
[
'pH é logarítmico.',
'Maior [H₃O⁺] significa menor pH.',
'Força e concentração são conceitos diferentes.',
'Ácidos fortes ionizam-se extensamente em água.'
],
'Uma solução com [H₃O⁺] = 10⁻³ mol/L tem aproximadamente qual pH?',
['3','-3','10','7'],
0,
'pH = -log(10⁻³) = 3.',
'Uma solução de ácido fraco pode ter concentração elevada e ainda assim:',
['Ionizar apenas parcialmente','Ionizar obrigatoriamente 100%','Não conter moléculas','Ser sempre neutra'],
0,
'Ácidos fracos estabelecem equilíbrio e não ionizam completamente.'
),

c(
'chem-12-03',
'12ª Classe',
'Química',
'chem-12-u3',
'Química Orgânica',
'Polímeros',
'Polímeros',
'Polímeros são macromoléculas constituídas por unidades estruturais repetidas chamadas monómeros ou derivadas delas.',
[
'Polímeros podem ser naturais, como celulose, ou sintéticos, como polietileno.',
'Polimerização pode ocorrer por diferentes mecanismos.',
'As propriedades dependem da estrutura, massa molecular e interações entre cadeias.',
'Plásticos têm grande utilidade, mas a gestão inadequada dos resíduos provoca impactos ambientais.'
],
'Polietileno',
'O polietileno é produzido pela polimerização de unidades de eteno.',
'Gestão de resíduos',
'O uso responsável de plásticos, reutilização, reciclagem e gestão adequada de resíduos são importantes para reduzir impactos ambientais.',
'ambiente',
'Pensar que todos os polímeros são plásticos sintéticos.',
'Existem polímeros naturais e sintéticos.',
[
'Polímeros são macromoléculas.',
'Monómeros formam unidades repetidas.',
'Existem polímeros naturais e sintéticos.',
'A gestão de resíduos é essencial.'
],
'Qual é um polímero natural?',
['Celulose','Polietileno','PVC','Náilon'],
0,
'A celulose é um polímero natural formado por unidades de glicose.',
'Uma estratégia ambiental adequada para resíduos plásticos é:',
['Reduzir, reutilizar, reciclar e melhorar a gestão','Queimar todos ao ar livre','Lançar no rio','Enterrar indiscriminadamente'],
0,
'Gestão adequada reduz poluição e riscos ambientais.'
),

c(
'chem-12-04',
'12ª Classe',
'Química',
'chem-12-u4',
'Química Ambiental',
'Água, poluição e tratamento',
'Tratamento da água',
'Tratamento da água é o conjunto de processos físicos, químicos e biológicos utilizados para remover contaminantes ou tornar a água adequada ao uso pretendido.',
[
'Água destinada ao consumo precisa atender critérios microbiológicos e físico-químicos.',
'Processos podem incluir coagulação, floculação, sedimentação, filtração e desinfeção.',
'Ferver água pode reduzir muitos microrganismos, mas não remove todos os contaminantes químicos.',
'Água visualmente limpa não é necessariamente segura para beber.'
],
'Filtração e desinfeção',
'Filtração pode remover partículas, enquanto desinfeção busca reduzir microrganismos patogénicos.',
'Água segura em comunidades',
'O conhecimento químico contribui para tratamento doméstico e comunitário da água e para prevenção de doenças.',
'recursos_naturais',
'Pensar que água transparente é automaticamente potável.',
'Qualidade da água depende de vários parâmetros, incluindo contaminantes invisíveis e microrganismos.',
[
'Tratamento combina processos.',
'Filtração remove partículas.',
'Desinfeção reduz microrganismos.',
'Água transparente pode ainda estar contaminada.'
],
'Qual processo é usado principalmente para reduzir microrganismos patogénicos?',
['Desinfeção','Peneiração de pedras','Decantação de areia apenas','Medição do volume'],
0,
'Desinfeção utiliza métodos físicos ou químicos para inativar ou remover microrganismos.',
'Por que não devemos avaliar a segurança da água apenas pela aparência?',
['Contaminantes podem ser invisíveis','Toda água transparente é segura','A cor determina todos os microrganismos','A água não possui substâncias dissolvidas'],
0,
'Muitos contaminantes químicos e microbiológicos não são visíveis.'
)

];

/*
===========================================================
 CONVERSÃO DOS CONTEÚDOS PARA O FORMATO Lesson
===========================================================
*/

function makeLesson(item: EssentialContent): Lesson {
  return {
    id: item.id,
    unitId: item.unitId,
    classLevel: item.classLevel,
    subject: item.subject,
    theme: item.theme,
    lessonNumber: 1,
    title: item.title,

    objectives: [
      `Definir e compreender o conceito de ${item.title}.`,
      `Explicar os principais aspectos relacionados com ${item.theme}.`,
      'Relacionar o conteúdo com situações do quotidiano.',
      'Aplicar o conhecimento científico na resolução de problemas.'
    ],

    content: {
      definition: item.definition,
      explanation: item.explanation
    },

    example: {
      title: item.exampleTitle,
      description: item.exampleDescription,
      solution: item.exampleSolution
    },

    mozambiqueApplication: {
      title: item.mozTitle,
      description: item.mozDescription,
      contextArea: item.contextArea
    },

    attention: {
      commonError: item.commonError,
      correctUnderstanding: item.correctUnderstanding
    },

    summaryPoints: item.summary,

    quickChecks: [
      {
        id: `${item.id}-q1`,
        question: item.question,
        options: item.options,
        correctAnswerIndex: item.correctIndex,
        explanation: item.questionExplanation
      }
    ],

    exercises: [
      {
        id: `${item.id}-e1`,
        statement: item.exercise,
        difficulty: 'Médio',
        type: 'multiple_choice',
        options: item.exerciseOptions,
        correctAnswer: item.exerciseCorrectIndex,
        explanation: item.exerciseExplanation
      }
    ]
  };
}

/*
===========================================================
 TODOS OS CONTEÚDOS ESSENCIAIS
===========================================================
*/

export const DETAILED_LESSONS: Lesson[] = [
  ...BIO_7.map(makeLesson),
  ...BIO_8.map(makeLesson),
  ...BIO_9.map(makeLesson),
  ...BIO_10.map(makeLesson),
  ...BIO_11.map(makeLesson),
  ...BIO_12.map(makeLesson),

  ...CHEM_7.map(makeLesson),
  ...CHEM_8.map(makeLesson),
  ...CHEM_9.map(makeLesson),
  ...CHEM_10.map(makeLesson),
  ...CHEM_11.map(makeLesson),
  ...CHEM_12.map(makeLesson)
];

/*
===========================================================
 ÍNDICES DE PESQUISA
===========================================================
*/

export const ALL_LESSONS: Lesson[] = DETAILED_LESSONS;

export function getLessonForTopic(
  unitId: string,
  topicTitle: string,
  classLevel?: ClassLevel,
  subject?: Subject
): Lesson | undefined {

  return ALL_LESSONS.find((lesson) => {

    const sameUnit = lesson.unitId === unitId;

    const sameTopic =
      lesson.title.toLowerCase() === topicTitle.toLowerCase() ||
      lesson.theme.toLowerCase() === topicTitle.toLowerCase();

    const sameClass =
      !classLevel || lesson.classLevel === classLevel;

    const sameSubject =
      !subject || lesson.subject === subject;

    return sameUnit && sameTopic && sameClass && sameSubject;
  });
}

/*
===========================================================
 PESQUISA POR TEXTO
===========================================================
*/

export function searchLessons(query: string): Lesson[] {

  const normalized = query
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  return ALL_LESSONS.filter((lesson) => {

    const text = [
      lesson.title,
      lesson.theme,
      lesson.content.definition,
      ...lesson.content.explanation,
      ...lesson.summaryPoints
    ]
      .join(' ')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    return text.includes(normalized);
  });
}

/*
===========================================================
 FILTROS POR CLASSE E DISCIPLINA
===========================================================
*/

export function getLessonsByClass(
  classLevel: ClassLevel
): Lesson[] {

  return ALL_LESSONS.filter(
    (lesson) => lesson.classLevel === classLevel
  );
}

export function getLessonsBySubject(
  subject: Subject
): Lesson[] {

  return ALL_LESSONS.filter(
    (lesson) => lesson.subject === subject
  );
}

export function getLessonsByClassAndSubject(
  classLevel: ClassLevel,
  subject: Subject
): Lesson[] {

  return ALL_LESSONS.filter(
    (lesson) =>
      lesson.classLevel === classLevel &&
      lesson.subject === subject
  );
}

/*
===========================================================
 FIM DO ARQUIVO
===========================================================
*/
