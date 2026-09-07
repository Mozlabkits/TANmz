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

/*
===========================================================
 BIOLOGIA — 11ª CLASSE
 Conteúdo alinhado ao Programa de Ensino do 2º Ciclo
===========================================================
*/

const BIO_11: EssentialContent[] = [

c(
'bio-11-01',
'11ª Classe',
'Biologia',
'bio-11-u1',
'Taxonomia dos Seres Vivos',
'Conceito e importância da taxonomia',
'Taxonomia',
'Taxonomia é o ramo da Biologia que estuda a classificação, identificação e organização dos seres vivos em grupos de acordo com as suas características e relações de semelhança.',
[
'A classificação facilita o estudo e a identificação dos seres vivos.',
'Os organismos podem ser agrupados de acordo com características morfológicas, anatómicas, fisiológicas e genéticas.',
'A taxonomia utiliza categorias organizadas de forma hierárquica.',
'A classificação científica permite que investigadores de diferentes países utilizem uma linguagem comum.'
],
'Classificação de organismos',
'Uma planta pode ser identificada e colocada em diferentes categorias taxonómicas de acordo com as suas características.',
'Importância científica',
'A taxonomia ajuda a identificar espécies, estudar a biodiversidade e compreender as relações entre os organismos.',
'biodiversidade',
'Pensar que classificar significa apenas dar nomes aos seres vivos.',
'A taxonomia envolve identificação, descrição, classificação e nomenclatura científica.',
[
'A taxonomia organiza os seres vivos.',
'A classificação utiliza características dos organismos.',
'A identificação permite reconhecer espécies.',
'A nomenclatura fornece nomes científicos padronizados.'
],
'O que é taxonomia?',
['Ciência que classifica e identifica os seres vivos','Estudo exclusivo dos animais','Estudo dos minerais','Estudo somente das células'],
0,
'A taxonomia organiza e identifica os seres vivos de acordo com critérios científicos.',
'Por que a classificação dos seres vivos é importante?',
['Facilita o estudo e a identificação dos organismos','Impede a investigação científica','Elimina a biodiversidade','Torna todos os organismos iguais'],
0,
'A classificação permite organizar a grande diversidade de organismos de maneira sistemática.'
),

c(
'bio-11-02',
'11ª Classe',
'Biologia',
'bio-11-u1',
'Taxonomia dos Seres Vivos',
'Categorias taxonómicas',
'Categorias taxonómicas',
'Categorias taxonómicas são níveis hierárquicos utilizados para organizar os seres vivos. No sistema estudado no ensino secundário, incluem Reino, Filo, Classe, Ordem, Família, Género e Espécie.',
[
'Reino é uma categoria ampla que reúne muitos organismos com características gerais comuns.',
'Filo reúne organismos com características estruturais fundamentais semelhantes.',
'Classe, Ordem e Família representam níveis progressivamente mais específicos.',
'Género reúne espécies relacionadas e espécie representa uma unidade fundamental da classificação biológica.'
],
'Hierarquia taxonómica',
'A sequência pode ser lembrada como Reino → Filo → Classe → Ordem → Família → Género → Espécie.',
'Identificação científica',
'Quanto mais se aproxima da espécie, mais específicas são as características utilizadas para identificar o organismo.',
'taxonomia',
'Pensar que espécie é uma categoria mais ampla que Reino.',
'Reino é mais abrangente, enquanto espécie é uma categoria mais específica.',
[
'Reino é amplo.',
'Filo vem depois de Reino.',
'Género é mais específico que Família.',
'Espécie é uma categoria fundamental da classificação.'
],
'Qual é a sequência correta das categorias taxonómicas?',
['Reino → Filo → Classe → Ordem → Família → Género → Espécie','Espécie → Reino → Filo → Género → Classe','Género → Reino → Espécie → Família','Classe → Reino → Espécie → Ordem'],
0,
'A sequência parte das categorias mais amplas para as mais específicas.',
'Qual categoria é mais específica?',
['Espécie','Reino','Filo','Classe'],
0,
'A espécie é uma das categorias mais específicas utilizadas na classificação tradicional.'
),

c(
'bio-11-03',
'11ª Classe',
'Biologia',
'bio-11-u1',
'Taxonomia dos Seres Vivos',
'Nomenclatura científica',
'Nomenclatura binomial',
'Nomenclatura binomial é o sistema de atribuição de nomes científicos constituídos por duas partes: o nome do género e o epíteto específico.',
[
'O género inicia-se normalmente com letra maiúscula.',
'O epíteto específico é escrito em minúscula.',
'O nome científico deve ser destacado graficamente, normalmente por itálico.',
'A nomenclatura científica reduz confusões causadas pelos diferentes nomes populares utilizados em diferentes regiões.'
],
'Nome científico',
'No nome Homo sapiens, Homo representa o género e sapiens representa o epíteto específico.',
'Comunicação científica',
'O uso de nomes científicos permite que investigadores utilizem uma denominação comum para uma mesma espécie.',
'ciência',
'Pensar que os dois nomes da nomenclatura binomial correspondem sempre a dois organismos diferentes.',
'As duas partes formam juntas o nome científico da espécie.',
[
'O nome científico possui duas partes.',
'O género começa com maiúscula.',
'O epíteto específico começa com minúscula.',
'O nome científico facilita a comunicação internacional.'
],
'Qual é uma característica da nomenclatura binomial?',
['Utilizar duas partes no nome científico','Utilizar apenas nomes populares','Usar somente números','Dar nomes diferentes à mesma espécie'],
0,
'A nomenclatura binomial utiliza duas partes para designar cientificamente uma espécie.',
'Em Homo sapiens, qual é o género?',
['Homo','sapiens','Hominidae','Primata'],
0,
'Homo é o género e sapiens é o epíteto específico.'
),

c(
'bio-11-04',
'11ª Classe',
'Biologia',
'bio-11-u2',
'Sistemática dos Seres Vivos',
'Reino Monera e bactérias',
'Bactérias',
'Bactérias são organismos microscópicos procarióticos, geralmente unicelulares, que não possuem núcleo delimitado por membrana.',
[
'O material genético bacteriano encontra-se numa região chamada nucleoide.',
'As bactérias podem apresentar diferentes formas, como cocos, bacilos e espirilos.',
'Algumas bactérias são úteis na decomposição, produção de alimentos e reciclagem de nutrientes.',
'Outras podem causar doenças em seres humanos, animais ou plantas.'
],
'Bactérias na alimentação',
'Algumas bactérias participam na produção de alimentos fermentados, como iogurte e determinados produtos lácteos.',
'Saúde e ambiente',
'Conhecer as bactérias permite compreender tanto as suas funções ecológicas como as medidas de prevenção de doenças bacterianas.',
'microbiologia',
'Pensar que todas as bactérias são prejudiciais.',
'Muitas bactérias são benéficas ou indispensáveis aos ecossistemas e ao funcionamento dos organismos.',
[
'Bactérias são procariontes.',
'São geralmente unicelulares.',
'Podem ser úteis ou patogénicas.',
'Participam nos ciclos da matéria.'
],
'As bactérias são organismos:',
['Procarióticos','Sempre pluricelulares','Sem material genético','Exclusivamente parasitas'],
0,
'As bactérias são organismos procarióticos, pois não possuem núcleo delimitado por membrana.',
'Qual é uma possível função benéfica das bactérias?',
['Participar na decomposição e produção de alimentos','Causar sempre doenças','Destruir todos os nutrientes','Impedir a reciclagem da matéria'],
0,
'Muitas bactérias participam na decomposição e em processos de fermentação utilizados na alimentação.'
),

c(
'bio-11-05',
'11ª Classe',
'Biologia',
'bio-11-u2',
'Sistemática dos Seres Vivos',
'Reino Protista',
'Protistas',
'Protistas são organismos eucarióticos, geralmente unicelulares, embora alguns grupos apresentem formas multicelulares simples, que não se enquadram nos grupos tradicionais de plantas, animais ou fungos.',
[
'Possuem células com núcleo delimitado por membrana.',
'Muitos protistas vivem em ambientes aquáticos ou húmidos.',
'Alguns são autotróficos e outros heterotróficos.',
'Algumas espécies são importantes na alimentação e nos ecossistemas, enquanto outras podem causar doenças.'
],
'Protozoários',
'Alguns protozoários vivem livremente na água, enquanto outros vivem associados a hospedeiros.',
'Saúde',
'O estudo dos protistas ajuda a compreender organismos microscópicos e algumas doenças parasitárias.',
'microbiologia',
'Pensar que todos os protistas são animais microscópicos.',
'Os protistas formam um grupo diversificado, incluindo organismos com diferentes formas de nutrição.',
[
'Protistas são eucariontes.',
'Muitos são unicelulares.',
'Vivem frequentemente em ambientes aquáticos ou húmidos.',
'Apresentam grande diversidade.'
],
'Uma característica dos protistas é:',
['Possuírem células eucarióticas','Não possuírem DNA','Serem todos pluricelulares','Serem todos procarióticos'],
0,
'Protistas possuem células eucarióticas.',
'Os protistas podem apresentar:',
['Nutrição autotrófica ou heterotrófica','Somente nutrição autotrófica','Somente nutrição heterotrófica','Nenhuma forma de nutrição'],
0,
'O grupo apresenta organismos com diferentes formas de obtenção de matéria e energia.'
),

c(
'bio-11-06',
'11ª Classe',
'Biologia',
'bio-11-u2',
'Sistemática dos Seres Vivos',
'Reino dos Fungos',
'Fungos',
'Fungos são organismos eucarióticos heterotróficos que obtêm nutrientes por absorção e apresentam estruturas como hifas e micélio em muitas espécies.',
[
'As hifas são filamentos que podem formar uma rede chamada micélio.',
'Os fungos não realizam fotossíntese.',
'Muitos fungos participam na decomposição da matéria orgânica.',
'Alguns fungos são utilizados na alimentação, medicina e indústria, enquanto outros causam doenças.'
],
'Fungos decompositores',
'Fungos que vivem sobre matéria orgânica em decomposição contribuem para devolver nutrientes ao ambiente.',
'Agricultura e ambiente',
'Os fungos participam da reciclagem da matéria e podem ser importantes na produção de alimentos e medicamentos.',
'ecologia',
'Pensar que fungos são plantas.',
'Fungos constituem um grupo próprio de organismos e possuem características diferentes das plantas.',
[
'Fungos são eucariontes.',
'São heterotróficos.',
'Muitos possuem hifas e micélio.',
'Participam na decomposição.'
],
'Como os fungos obtêm geralmente os nutrientes?',
['Por absorção','Por fotossíntese','Por filtração do sangue','Por produção de clorofila'],
0,
'Os fungos obtêm nutrientes principalmente por absorção de substâncias orgânicas.',
'Qual é uma função ecológica importante dos fungos?',
['Decomposição da matéria orgânica','Produção exclusiva de oxigénio','Fixação de todos os animais no solo','Impedimento da reciclagem de nutrientes'],
0,
'Os fungos decompositores ajudam a reciclar nutrientes nos ecossistemas.'
),

c(
'bio-11-07',
'11ª Classe',
'Biologia',
'bio-11-u2',
'Sistemática dos Seres Vivos',
'Reino das Plantas',
'Plantas',
'Plantas são organismos eucarióticos multicelulares, geralmente autotróficos, que produzem matéria orgânica através da fotossíntese e possuem tecidos especializados em diferentes grupos.',
[
'As plantas possuem células com parede celular e, geralmente, cloroplastos.',
'Briófitas não possuem vasos condutores verdadeiros.',
'Pteridófitas possuem vasos condutores, mas não produzem sementes.',
'Espermatófitas produzem sementes e incluem gimnospérmicas e angiospérmicas.'
],
'Milho e feijão',
'O milho é uma angiospérmica monocotiledónea, enquanto o feijão é uma angiospérmica dicotiledónea.',
'Agricultura',
'O conhecimento da diversidade vegetal é importante para agricultura, alimentação, medicina e conservação.',
'botânica',
'Pensar que todas as plantas possuem flores e sementes.',
'Existem plantas, como briófitas e pteridófitas, que não produzem sementes.',
[
'Plantas são eucariontes.',
'Muitas realizam fotossíntese.',
'Existem grupos com e sem vasos condutores.',
'As angiospérmicas produzem flores e frutos.'
],
'Qual grupo não possui sementes?',
['Briófitas','Angiospérmicas','Gimnospérmicas','Espermatófitas'],
0,
'As briófitas não produzem sementes e reproduzem-se por estruturas como esporos.',
'Qual grupo produz flores e frutos?',
['Angiospérmicas','Briófitas','Pteridófitas','Algumas algas'],
0,
'As angiospérmicas são plantas com flores e produzem frutos que envolvem as sementes.'
),

c(
'bio-11-08',
'11ª Classe',
'Biologia',
'bio-11-u2',
'Sistemática dos Seres Vivos',
'Reino Animal',
'Animais',
'Animais são organismos eucarióticos multicelulares e heterotróficos que obtêm matéria e energia através da ingestão de alimentos e apresentam grande diversidade estrutural e funcional.',
[
'Os animais não possuem parede celular como as plantas.',
'Apresentam diferentes níveis de organização corporal.',
'Podem ser invertebrados ou vertebrados.',
'Os animais desempenham funções importantes nos ecossistemas e nas actividades humanas.'
],
'Diversidade animal',
'Insetos, peixes, anfíbios, répteis, aves e mamíferos representam diferentes grupos animais.',
'Conservação',
'Conhecer a diversidade animal ajuda a compreender os ecossistemas e a necessidade de proteger espécies ameaçadas.',
'biodiversidade',
'Pensar que todos os animais possuem coluna vertebral.',
'Grande parte dos animais são invertebrados, como insetos, moluscos e vermes.',
[
'Animais são eucariontes.',
'São multicelulares.',
'São heterotróficos.',
'Apresentam grande diversidade de formas e funções.'
],
'Qual característica é comum aos animais?',
['São organismos eucarióticos multicelulares e heterotróficos','Todos possuem coluna vertebral','Todos vivem na água','Todos produzem o próprio alimento'],
0,
'Os animais são organismos multicelulares e heterotróficos.',
'Qual destes é um animal invertebrado?',
['Minhoca','Peixe','Galinha','Cão'],
0,
'A minhoca é um invertebrado porque não possui coluna vertebral.'
),

c(
'bio-11-09',
'11ª Classe',
'Biologia',
'bio-11-u2',
'Sistemática dos Seres Vivos',
'Animais e doenças parasitárias',
'Parasitismo',
'Parasitismo é uma relação biológica em que um organismo, chamado parasita, obtém benefícios de outro organismo, chamado hospedeiro, causando-lhe prejuízo.',
[
'Alguns vermes parasitas podem infectar seres humanos.',
'A esquistossomose está associada a parasitas do género Schistosoma.',
'A teníase pode ser causada por espécies de Taenia.',
'A prevenção depende de higiene, saneamento, água segura, preparação adequada dos alimentos e outras medidas específicas.'
],
'Esquistossomose',
'A transmissão da esquistossomose está relacionada ao contacto com água doce contaminada em determinadas condições ambientais.',
'Saúde comunitária',
'Conhecer os ciclos de vida dos parasitas ajuda a identificar formas de interromper a transmissão.',
'saúde',
'Pensar que todas as doenças parasitárias são transmitidas da mesma maneira.',
'Cada parasita possui um ciclo de vida e vias de transmissão específicas.',
[
'Parasita beneficia-se do hospedeiro.',
'Alguns vermes causam doenças.',
'Os ciclos de vida ajudam a compreender a transmissão.',
'Prevenção depende da via de transmissão.'
],
'O que caracteriza o parasitismo?',
['Um organismo beneficia-se causando prejuízo ao hospedeiro','Ambos os organismos beneficiam-se igualmente','Nenhum organismo é afetado','Ambos são sempre prejudicados'],
0,
'No parasitismo, o parasita beneficia-se e o hospedeiro sofre prejuízo.',
'Uma medida geral importante para prevenir várias parasitoses é:',
['Manter boa higiene e saneamento','Consumir água contaminada','Comer alimentos crus sem cuidado','Evitar lavar as mãos'],
0,
'Higiene, água segura e saneamento reduzem o risco de várias doenças parasitárias.'
),

c(
'bio-11-10',
'11ª Classe',
'Biologia',
'bio-11-u2',
'Sistemática dos Seres Vivos',
'Biodiversidade e conservação',
'Biodiversidade',
'Biodiversidade é a variedade de formas de vida, incluindo diversidade genética, diversidade de espécies e diversidade de ecossistemas.',
[
'A biodiversidade fornece alimentos, matérias-primas e outros serviços dos ecossistemas.',
'A destruição de habitats pode reduzir populações e provocar perda de espécies.',
'A caça excessiva, poluição, introdução de espécies invasoras e alterações ambientais podem ameaçar a biodiversidade.',
'A conservação pode envolver áreas protegidas, uso sustentável dos recursos e recuperação de habitats.'
],
'Proteção de espécies',
'A criação e gestão de áreas de conservação pode ajudar a proteger espécies, habitats e processos ecológicos.',
'Comunidade',
'As comunidades locais podem contribuir para a conservação através do uso responsável dos recursos naturais.',
'conservação',
'Pensar que conservar significa impedir qualquer utilização da natureza.',
'Conservação significa proteger a biodiversidade e utilizar os recursos de forma responsável e sustentável.',
[
'Biodiversidade inclui genes, espécies e ecossistemas.',
'Os habitats sustentam as espécies.',
'Actividades humanas podem ameaçar a biodiversidade.',
'A conservação protege os recursos naturais.'
],
'O que inclui a biodiversidade?',
['Diversidade genética, de espécies e de ecossistemas','Somente animais','Somente plantas','Somente microrganismos'],
0,
'A biodiversidade inclui diversidade genética, de espécies e de ecossistemas.',
'Qual ação ajuda a conservar a biodiversidade?',
['Proteger habitats naturais','Caçar espécies ameaçadas','Destruir florestas sem controlo','Poluir rios'],
0,
'A proteção dos habitats é essencial para manter populações e espécies.'
)

];


/*
===========================================================
 BIOLOGIA — 12ª CLASSE
 Conteúdo alinhado ao Programa de Ensino do 2º Ciclo
===========================================================
*/

const BIO_12: EssentialContent[] = [

c(
'bio-12-01',
'12ª Classe',
'Biologia',
'bio-12-u1',
'Citologia e Fisiologia Celular',
'Células procarióticas e eucarióticas',
'Célula',
'A célula é a unidade estrutural e funcional básica dos seres vivos. As células podem ser procarióticas ou eucarióticas.',
[
'Células procarióticas não possuem núcleo delimitado por membrana.',
'Células eucarióticas possuem núcleo delimitado por membrana.',
'As células eucarióticas apresentam organelos especializados.',
'As estruturas celulares trabalham de forma integrada para manter a vida da célula.'
],
'Bactéria e célula animal',
'Uma bactéria apresenta organização procariótica, enquanto uma célula animal apresenta organização eucariótica.',
'Microscopia',
'A identificação de estruturas celulares permite compreender o funcionamento dos organismos.',
'citologia',
'Pensar que todas as células possuem núcleo.',
'As células procarióticas não possuem núcleo delimitado por membrana.',
[
'Procariontes não possuem núcleo membranoso.',
'Eucariontes possuem núcleo.',
'Organelos possuem funções específicas.',
'A célula realiza funções vitais.'
],
'Qual célula possui núcleo delimitado por membrana?',
['Célula eucariótica','Célula procariótica','Vírus','Príon'],
0,
'Células eucarióticas possuem núcleo delimitado por membrana.',
'Qual organismo apresenta organização procariótica?',
['Bactéria','Célula animal','Célula vegetal','Fungo multicelular'],
0,
'As bactérias são organismos procarióticos.'
),

c(
'bio-12-02',
'12ª Classe',
'Biologia',
'bio-12-u1',
'Citologia e Fisiologia Celular',
'Transporte através da membrana',
'Transporte celular',
'Transporte celular é o movimento de substâncias através da membrana plasmática, podendo ocorrer sem gasto direto de energia ou com gasto de energia.',
[
'Difusão é o movimento de partículas de uma região de maior concentração para uma região de menor concentração.',
'Osmose é o movimento de água através de uma membrana semipermeável.',
'Transporte activo utiliza energia celular para movimentar substâncias contra o gradiente de concentração.',
'A membrana plasmática controla a entrada e saída de substâncias.'
],
'Osmose em células vegetais',
'Quando uma célula vegetal é colocada numa solução adequada, a entrada ou saída de água pode alterar o seu estado de turgescência.',
'Saúde e agricultura',
'O transporte através das membranas é fundamental para absorção de água e nutrientes e manutenção do equilíbrio celular.',
'fisiologia',
'Pensar que toda passagem de substâncias pela membrana exige energia.',
'Difusão e osmose podem ocorrer sem gasto directo de ATP, enquanto o transporte activo requer energia.',
[
'Difusão ocorre a favor do gradiente.',
'Osmose envolve movimento de água.',
'Transporte activo requer energia.',
'A membrana possui permeabilidade seletiva.'
],
'Qual processo corresponde ao movimento de água através de uma membrana semipermeável?',
['Osmose','Transporte activo','Digestão','Fotossíntese'],
0,
'Osmose é o movimento de água através de uma membrana semipermeável.',
'Qual processo normalmente requer energia celular?',
['Transporte activo','Difusão simples','Osmose','Difusão facilitada sempre'],
0,
'O transporte activo utiliza energia para movimentar determinadas substâncias contra o gradiente.'
),

c(
'bio-12-03',
'12ª Classe',
'Biologia',
'bio-12-u1',
'Citologia e Metabolismo',
'Metabolismo celular',
'Metabolismo',
'Metabolismo é o conjunto de reacções químicas que ocorrem nas células e permitem obter energia, produzir moléculas e manter as funções vitais.',
[
'Catabolismo corresponde a reacções que degradam moléculas e geralmente libertam energia.',
'Anabolismo corresponde a reacções de síntese de moléculas e geralmente requer energia.',
'O metabolismo depende de enzimas que aceleram reacções químicas.',
'As reacções metabólicas permitem crescimento, reparação, movimento e manutenção celular.'
],
'Exercício físico',
'D urante actividade física intensa, as células musculares aumentam a necessidade de produção de energia.',
'Saúde',
'Compreender o metabolismo ajuda a explicar como os nutrientes são utilizados pelo organismo.',
'metabolismo',
'Pensar que metabolismo significa apenas digestão.',
'Metabolismo inclui todas as reacções químicas celulares, não apenas a digestão.',
[
'Metabolismo ocorre nas células.',
'Catabolismo degrada moléculas.',
'Anabolismo sintetiza moléculas.',
'As enzimas participam nas reacções metabólicas.'
],
'O que é metabolismo?',
['Conjunto de reacções químicas celulares','Somente a digestão dos alimentos','Somente a respiração pulmonar','Apenas a circulação sanguínea'],
0,
'Metabolismo é o conjunto de reacções químicas que ocorrem nas células.',
'Qual processo está associado ao catabolismo?',
['Degradação de moléculas com libertação de energia','Síntese de proteínas sempre sem energia','Produção de órgãos','Divisão de ecossistemas'],
0,
'O catabolismo envolve a degradação de moléculas e pode disponibilizar energia.'
),

c(
'bio-12-04',
'12ª Classe',
'Biologia',
'bio-12-u1',
'Citologia e Metabolismo',
'Enzimas',
'Enzima',
'Enzima é uma substância, geralmente uma proteína, que acelera uma reacção química específica sem ser consumida no processo.',
[
'As enzimas reduzem a energia de activação das reacções.',
'O substrato é a molécula sobre a qual a enzima actua.',
'A actividade enzimática pode ser influenciada pela temperatura e pelo pH.',
'Cada enzima apresenta condições e substratos preferenciais de actuação.'
],
'Enzimas digestivas',
'A amilase, por exemplo, participa na digestão de determinados carboidratos.',
'Medicina e indústria',
'As enzimas são utilizadas na digestão, diagnóstico, produção de alimentos e diversos processos industriais.',
'metabolismo',
'Pensar que as enzimas são destruídas imediatamente depois de uma reacção.',
'A enzima participa na reacção e pode continuar a actuar, embora possa perder actividade em condições inadequadas.',
[
'Enzimas aceleram reacções.',
'Substratos ligam-se às enzimas.',
'Temperatura influencia actividade.',
'P H inadequado pode alterar a actividade enzimática.'
],
'Qual é a principal função de uma enzima?',
['Acelerar uma reacção química','Produzir células sem DNA','Substituir o núcleo','Impedir todas as reacções'],
0,
'As enzimas aceleram reacções químicas ao reduzir a energia de activação.',
'Qual factor pode influenciar a actividade enzimática?',
['Temperatura','Cor do organismo sempre','Tamanho do habitat','Número de ossos'],
0,
'Temperatura é um dos factores que pode alterar a actividade das enzimas.'
),

c(
'bio-12-05',
'12ª Classe',
'Biologia',
'bio-12-u2',
'Fisiologia Vegetal',
'Tecidos e transporte nas plantas',
'Xilema e floema',
'Xilema e floema são tecidos vasculares das plantas especializados no transporte de substâncias. O xilema transporta principalmente água e sais minerais, enquanto o floema transporta substâncias orgânicas produzidas principalmente nas folhas.',
[
'O xilema participa no transporte da seiva bruta.',
'O floema participa no transporte da seiva elaborada.',
'A transpiração contribui para o movimento da água através da planta.',
'As raízes absorvem água e sais minerais do solo.'
],
'Transporte da água',
'A água absorvida pelas raízes pode subir pelo xilema até às folhas.',
'Agricultura',
'Compreender o transporte vegetal ajuda a explicar irrigação, crescimento e resposta das plantas à falta de água.',
'botânica',
'Pensar que xilema e floema transportam exactamente as mesmas substâncias da mesma maneira.',
'Xilema e floema possuem funções de transporte diferentes.',
[
'Xilema transporta principalmente água e sais minerais.',
'Floema transporta matéria orgânica.',
'Raízes absorvem água e sais.',
'Transpiração influencia o movimento da água.'
],
'Qual tecido transporta principalmente água e sais minerais?',
['Xilema','Floema','Epiderme','Meristema'],
0,
'O xilema conduz principalmente água e sais minerais.',
'Qual tecido está associado ao transporte da seiva elaborada?',
['Floema','Xilema','Epiderme','Cutícula'],
0,
'O floema transporta principalmente substâncias orgânicas produzidas nas folhas.'
),

c(
'bio-12-06',
'12ª Classe',
'Biologia',
'bio-12-u2',
'Fisiologia Vegetal',
'Fotossíntese',
'Fotossíntese',
'Fotossíntese é o processo pelo qual organismos fotossintéticos utilizam energia luminosa para produzir matéria orgânica a partir de dióxido de carbono e água, libertando oxigénio em condições fotossintéticas comuns.',
[
'A fotossíntese ocorre principalmente nas células que possuem cloroplastos.',
'A clorofila participa na absorção da energia luminosa.',
'O dióxido de carbono fornece carbono para a formação de matéria orgânica.',
'A fotossíntese contribui para a produção de matéria orgânica e para a entrada de energia nos ecossistemas.'
],
'Plantas e luz',
'Uma planta exposta a condições adequadas de luz, água e dióxido de carbono pode realizar fotossíntese.',
'Agricultura',
'A intensidade luminosa, disponibilidade de água, temperatura e concentração de dióxido de carbono podem influenciar a fotossíntese.',
'botânica',
'Pensar que a planta obtém toda a sua matéria orgânica directamente do solo.',
'Os sais minerais são importantes para a nutrição vegetal, mas grande parte da matéria orgânica é formada através da fotossíntese.',
[
'Fotossíntese utiliza energia luminosa.',
'Clorofila participa na absorção da luz.',
'CO2 e água são matérias-primas.',
'O processo produz matéria orgânica.'
],
'Qual pigmento participa principalmente na absorção da luz para a fotossíntese?',
['Clorofila','Hemoglobina','Queratina','Melanina'],
0,
'A clorofila absorve energia luminosa utilizada na fotossíntese.',
'Qual gás é utilizado como matéria-prima na fotossíntese?',
['Dióxido de carbono','Oxigénio','Azoto molecular','Hidrogénio'],
0,
'O dióxido de carbono fornece carbono para a formação de compostos orgânicos.'
),

c(
'bio-12-07',
'12ª Classe',
'Biologia',
'bio-12-u1',
'Respiração Celular',
'Respiração aeróbica e anaeróbica',
'Respiração celular',
'Respiração celular é o conjunto de processos pelos quais as células obtêm energia utilizável a partir de moléculas orgânicas. Pode ocorrer por vias aeróbicas ou anaeróbicas.',
[
'Na respiração aeróbica, o oxigénio participa como aceitador final de electrões e há elevada produção de ATP.',
'Na respiração anaeróbica ou fermentação, a produção de energia ocorre sem utilização directa de oxigénio como aceitador final.',
'A fermentação alcoólica produz etanol e dióxido de carbono.',
'A fermentação láctica produz lactato e ocorre em determinadas células e microrganismos.'
],
'Produção de pão',
'Leveduras realizam fermentação alcoólica e produzem dióxido de carbono, contribuindo para o crescimento da massa do pão.',
'Indústria alimentar',
'A respiração anaeróbica possui aplicações na produção de pão, bebidas fermentadas e outros produtos.',
'metabolismo',
'Pensar que respiração celular significa apenas respirar com os pulmões.',
'Respiração celular ocorre ao nível das células e é diferente da ventilação pulmonar.',
[
'Respiração celular produz energia utilizável.',
'A via aeróbica utiliza oxigénio.',
'Fermentação ocorre sem utilização directa de oxigénio como aceitador final.',
'Leveduras podem realizar fermentação alcoólica.'
],
'Qual é um produto da fermentação alcoólica?',
['Etanol','Oxigénio','Clorofila','Hemoglobina'],
0,
'A fermentação alcoólica produz etanol e dióxido de carbono.',
'Qual processo é utilizado por leveduras na produção de pão?',
['Fermentação alcoólica','Fotossíntese','Digestão mecânica','Osmose'],
0,
'A fermentação alcoólica das leveduras produz dióxido de carbono, ajudando a massa a crescer.'
),

c(
'bio-12-08',
'12ª Classe',
'Biologia',
'bio-12-u3',
'Fisiologia Animal',
'Tecidos e órgãos dos sentidos',
'Tecido animal',
'Tecido animal é um conjunto organizado de células semelhantes, associado a uma função específica no organismo.',
[
'Os principais tipos são tecido epitelial, conjuntivo, muscular e nervoso.',
'O tecido epitelial reveste superfícies e pode formar glândulas.',
'O tecido conjuntivo sustenta, liga e protege estruturas.',
'O tecido muscular permite contracção e movimento, enquanto o tecido nervoso participa na recepção e transmissão de sinais.'
],
'Pele',
'A pele possui tecido epitelial e outros tecidos que contribuem para proteção, sensação e regulação.',
'Saúde',
'Conhecer os tecidos ajuda a compreender a estrutura e o funcionamento dos órgãos.',
'anatomia',
'Pensar que todos os tecidos possuem a mesma função.',
'Cada tecido apresenta estrutura e função especializadas.',
[
'Existem quatro grandes tipos de tecidos animais.',
'Cada tecido possui funções específicas.',
'Tecidos formam órgãos.',
'Órgãos trabalham em conjunto nos sistemas.'
],
'Qual tecido é especializado na contracção?',
['Tecido muscular','Tecido epitelial','Tecido ósseo apenas','Tecido adiposo apenas'],
0,
'O tecido muscular é especializado na contracção.',
'Qual tecido está diretamente relacionado com a transmissão de impulsos nervosos?',
['Tecido nervoso','Tecido epitelial','Tecido adiposo','Tecido ósseo'],
0,
'O tecido nervoso é especializado na recepção e transmissão de sinais.'
),

c(
'bio-12-09',
'12ª Classe',
'Biologia',
'bio-12-u3',
'Fisiologia Animal',
'Sistema nervoso e coordenação',
'Sistema nervoso',
'O sistema nervoso é o conjunto de estruturas responsáveis pela recepção de estímulos, processamento de informações e coordenação de respostas do organismo.',
[
'O sistema nervoso central inclui encéfalo e medula espinal.',
'O sistema nervoso periférico inclui nervos que ligam o sistema nervoso central ao resto do organismo.',
'O neurónio é uma célula especializada na transmissão de sinais nervosos.',
'O arco reflexo permite respostas rápidas a determinados estímulos.'
],
'Reflexo',
'A retirada rápida da mão ao tocar numa superfície muito quente é uma resposta reflexa.',
'Saúde',
'A proteção do sistema nervoso depende de hábitos saudáveis e prevenção de traumatismos.',
'fisiologia',
'Pensar que todos os movimentos são necessariamente conscientes.',
'Existem respostas reflexas que podem ocorrer rapidamente sem depender inicialmente de uma decisão consciente.',
[
'SNC inclui encéfalo e medula.',
'SNP inclui nervos.',
'Neurónios transmitem sinais.',
'Reflexos permitem respostas rápidas.'
],
'Qual estrutura pertence ao sistema nervoso central?',
['Medula espinal','Nervo periférico','Músculo','Pele'],
0,
'A medula espinal faz parte do sistema nervoso central.',
'Qual é a principal célula especializada do sistema nervoso?',
['Neurónio','Glóbulo vermelho','Osteócito','Adipócito'],
0,
'O neurónio é especializado na recepção e transmissão de sinais nervosos.'
),

c(
'bio-12-10',
'12ª Classe',
'Biologia',
'bio-12-u3',
'Fisiologia Animal',
'Sistema digestivo',
'Digestão',
'Digestão é o conjunto de processos mecânicos e químicos que transformam os alimentos em moléculas menores que podem ser absorvidas pelo organismo.',
[
'A digestão começa na boca com mastigação e acção da saliva.',
'O estômago participa na digestão mecânica e química.',
'O intestino delgado é o principal local de digestão final e absorção de nutrientes.',
'O fígado produz a bílis e o pâncreas produz enzimas digestivas importantes.'
],
'Absorção intestinal',
'As vilosidades do intestino delgado aumentam a superfície disponível para absorção de nutrientes.',
'Nutrição',
'Uma alimentação equilibrada fornece nutrientes necessários ao crescimento, manutenção e funcionamento do organismo.',
'saúde',
'Pensar que digestão e absorção são o mesmo processo.',
'Digestão transforma alimentos; absorção permite que nutrientes atravessem o epitélio intestinal e entrem no meio interno.',
[
'Digestão pode ser mecânica e química.',
'O estômago participa na digestão.',
'O intestino delgado absorve muitos nutrientes.',
'O fígado produz bílis.'
],
'Onde ocorre grande parte da absorção de nutrientes?',
['Intestino delgado','Esófago','Boca','Traqueia'],
0,
'O intestino delgado possui estruturas que aumentam a absorção dos nutrientes.',
'Qual órgão produz a bílis?',
['Fígado','Pâncreas','Estômago','Rim'],
0,
'O fígado produz a bílis, que participa na digestão das gorduras.'
),

c(
'bio-12-11',
'12ª Classe',
'Biologia',
'bio-12-u3',
'Fisiologia Animal',
'Sistema respiratório',
'Respiração humana',
'Respiração humana é o processo pelo qual o organismo realiza trocas gasosas com o ambiente, obtendo oxigénio e eliminando dióxido de carbono.',
[
'O ar entra pelas vias respiratórias até aos pulmões.',
'Os alvéolos são estruturas especializadas nas trocas gasosas.',
'O oxigénio passa dos alvéolos para o sangue.',
'O dióxido de carbono passa do sangue para os alvéolos e é eliminado na expiração.'
],
'Hematose pulmonar',
'Hematose pulmonar é a troca de oxigénio e dióxido de carbono entre o ar alveolar e o sangue.',
'Saúde respiratória',
'Evitar fumo, reduzir exposição a poluentes e procurar cuidados de saúde diante de sintomas respiratórios contribui para proteger o sistema respiratório.',
'saúde',
'Pensar que a troca gasosa ocorre principalmente na traqueia.',
'As principais trocas gasosas ocorrem nos alvéolos pulmonares.',
[
'Alvéolos realizam trocas gasosas.',
'O sangue transporta gases respiratórios.',
'Inspiração leva ar aos pulmões.',
'Expiração elimina dióxido de carbono.'
],
'Onde ocorre principalmente a hematose pulmonar?',
['Alvéolos','Traqueia','Faringe','Laringe'],
0,
'A hematose ocorre principalmente nos alvéolos pulmonares.',
'Qual gás passa dos alvéolos para o sangue?',
['Oxigénio','Dióxido de carbono','Azoto exclusivamente','Vapor de água exclusivamente'],
0,
'O oxigénio difunde-se dos alvéolos para o sangue.'
),

c(
'bio-12-12',
'12ª Classe',
'Biologia',
'bio-12-u3',
'Fisiologia Animal',
'Sistema circulatório e linfático',
'Circulação sanguínea',
'Circulação sanguínea é o movimento do sangue através do coração e dos vasos sanguíneos, permitindo o transporte de gases, nutrientes, hormonas e resíduos.',
[
'O coração funciona como uma bomba muscular.',
'As artérias conduzem sangue para fora do coração.',
'As veias conduzem sangue em direcção ao coração.',
'Os capilares permitem trocas entre o sangue e os tecidos.'
],
'Transporte de oxigénio',
'A hemoglobina presente nos glóbulos vermelhos participa no transporte de grande parte do oxigénio no sangue.',
'Saúde cardiovascular',
'Uma alimentação equilibrada, actividade física e outros hábitos saudáveis contribuem para reduzir riscos cardiovasculares.',
'saúde',
'Pensar que todas as artérias transportam sangue rico em oxigénio.',
'Na circulação pulmonar, a artéria pulmonar transporta sangue pobre em oxigénio para os pulmões.',
[
'O coração bombeia sangue.',
'Artérias saem do coração.',
'Veias chegam ao coração.',
'Capilares realizam trocas.'
],
'Qual vaso conduz o sangue para fora do coração?',
['Artéria','Veia','Capilar exclusivamente','Alvéolo'],
0,
'As artérias conduzem o sangue para fora do coração.',
'Qual componente do sangue transporta grande parte do oxigénio?',
['Glóbulos vermelhos','Plaquetas','Plasma exclusivamente','Glóbulos brancos'],
0,
'Os glóbulos vermelhos possuem hemoglobina, que transporta grande parte do oxigénio.'
),

c(
'bio-12-13',
'12ª Classe',
'Biologia',
'bio-12-u3',
'Fisiologia Animal',
'Sistema excretor e homeostase',
'Excreção',
'Excreção é o processo de eliminação de substâncias resultantes do metabolismo que podem ser prejudiciais quando acumuladas no organismo.',
[
'Os rins filtram o sangue e participam na formação da urina.',
'O sistema urinário inclui rins, ureteres, bexiga urinária e uretra.',
'A unidade funcional do rim é o néfron.',
'Os rins ajudam a controlar o equilíbrio de água e sais do organismo.'
],
'Formação da urina',
'A formação da urina envolve processos como filtração, reabsorção e secreção ao longo do néfron.',
'Saúde',
'Consumir água adequada, manter higiene e procurar assistência médica em caso de sintomas urinários ajuda a proteger o sistema urinário.',
'homeostase',
'Pensar que excreção é apenas eliminação das fezes.',
'Fezes são principalmente resíduos não digeridos eliminados pelo sistema digestivo, enquanto excreção refere-se principalmente a resíduos metabólicos.',
[
'Rins filtram o sangue.',
'Néfrons são unidades funcionais dos rins.',
'Urina contém resíduos metabólicos e água.',
'Rins participam na homeostase.'
],
'Qual é a principal função dos rins relacionada à excreção?',
['Filtrar o sangue e formar urina','Produzir oxigénio','Realizar fotossíntese','Produzir bílis'],
0,
'Os rins filtram o sangue e participam na formação da urina.',
'Qual é a unidade funcional do rim?',
['Néfron','Alvéolo','Neurónio','Vilosidade'],
0,
'O néfron é a unidade funcional do rim.'
),

c(
'bio-12-14',
'12ª Classe',
'Biologia',
'bio-12-u3',
'Fisiologia Animal',
'Sistema reprodutor e desenvolvimento humano',
'Reprodução humana',
'Reprodução humana é o conjunto de processos biológicos que permitem a formação de descendentes através da participação dos sistemas reprodutores masculino e feminino.',
[
'O sistema reprodutor masculino produz espermatozoides.',
'O sistema reprodutor feminino produz ovócitos e proporciona condições para o desenvolvimento embrionário.',
'A fecundação corresponde à união dos gâmetas masculino e feminino.',
'A gravidez envolve desenvolvimento embrionário e fetal no útero.'
],
'Fecundação',
'Na reprodução humana, a fecundação normalmente ocorre quando um espermatozoide se une a um ovócito, formando o zigoto.',
'Saúde reprodutiva',
'Conhecimentos sobre reprodução ajudam na prevenção de gravidez não planificada, infecções sexualmente transmissíveis e complicações durante a gestação.',
'reprodução',
'Pensar que fecundação e gravidez são exactamente o mesmo processo.',
'Fecundação é a união dos gâmetas; gravidez é o período de desenvolvimento do novo organismo após a implantação e estabelecimento da gestação.',
[
'Espermatozoides são gâmetas masculinos.',
'Óvulos ou ovócitos são gâmetas femininos.',
'Fecundação forma o zigoto.',
'O desenvolvimento embrionário ocorre no útero.'
],
'Qual é o resultado imediato da fecundação?',
['Formação do zigoto','Formação do pulmão','Produção de urina','Formação do sangue adulto'],
0,
'A fecundação resulta na formação do zigoto.',
'Qual é o principal órgão onde ocorre o desenvolvimento embrionário humano?',
['Útero','Ovário','Estômago','Rim'],
0,
'O embrião desenvolve-se no útero durante a gestação.'
),

c(
'bio-12-15',
'12ª Classe',
'Biologia',
'bio-12-u4',
'Saúde',
'Vírus e doenças virais',
'Vírus',
'Vírus são agentes infecciosos acelulares constituídos por material genético envolvido por uma estrutura proteica e que dependem de células hospedeiras para se multiplicarem.',
[
'Os vírus não possuem organização celular.',
'Podem possuir DNA ou RNA como material genético.',
'Utilizam componentes da célula hospedeira para produzir novas partículas virais.',
'Algumas doenças virais podem ser prevenidas por vacinação, higiene, medidas de proteção e outras estratégias específicas.'
],
'Ciclo viral',
'Durante a infecção, o vírus introduz o seu material genético na célula hospedeira e utiliza mecanismos celulares para produzir novos componentes virais.',
'Saúde pública',
'Conhecer a transmissão e prevenção das doenças virais ajuda a reduzir infecções na comunidade.',
'saúde',
'Pensar que antibióticos são eficazes contra todos os vírus.',
'Antibióticos actuam contra bactérias e não são medicamentos gerais contra vírus.',
[
'Vírus são acelulares.',
'Dependem de células hospedeiras.',
'Possuem material genético.',
'Algumas doenças virais podem ser prevenidas por vacinação.'
],
'Por que os vírus dependem de células hospedeiras?',
['Porque utilizam estruturas e mecanismos celulares para se multiplicar','Porque não possuem material genético','Porque realizam fotossíntese','Porque possuem tecidos próprios'],
0,
'Os vírus dependem da maquinaria das células hospedeiras para produzir novas partículas virais.',
'Os antibióticos são usados principalmente contra:',
['Bactérias','Todos os vírus','Todos os fungos','Todas as doenças'],
0,
'Antibióticos são utilizados principalmente contra infecções bacterianas e não contra vírus.'
),

c(
'bio-12-16',
'12ª Classe',
'Biologia',
'bio-12-u4',
'Saúde',
'Segurança alimentar e nutrição',
'Segurança alimentar',
'Segurança alimentar corresponde às condições e práticas que garantem que os alimentos sejam seguros para consumo e não causem doenças quando preparados e utilizados adequadamente.',
[
'A contaminação dos alimentos pode ser biológica, química ou física.',
'Mãos, utensílios e superfícies devem ser mantidos limpos.',
'Alimentos crus devem ser separados de alimentos prontos para consumo.',
'A conservação adequada e o cozimento correcto ajudam a reduzir riscos de doenças transmitidas por alimentos.'
],
'Conservação dos alimentos',
'Guardar alimentos perecíveis em condições adequadas de temperatura reduz a multiplicação de muitos microrganismos.',
'Saúde comunitária',
'Boas práticas de higiene e conservação dos alimentos ajudam a prevenir intoxicações e infecções alimentares.',
'nutrição',
'Pensar que um alimento com aparência normal é necessariamente seguro.',
'Alguns microrganismos e contaminantes podem estar presentes sem alterar imediatamente o cheiro, cor ou aparência do alimento.',
[
'Higiene reduz contaminação.',
'Alimentos crus devem ser separados dos cozinhados.',
'Temperatura adequada ajuda na conservação.',
'Cozimento adequado pode reduzir microrganismos perigosos.'
],
'Qual prática ajuda a prevenir contaminação alimentar?',
['Lavar as mãos antes de preparar alimentos','Misturar alimentos crus e cozinhados','Guardar alimentos perecíveis ao sol','Utilizar utensílios sujos'],
0,
'A higiene das mãos é uma medida fundamental para reduzir a contaminação dos alimentos.',
'Por que alimentos crus devem ser separados dos alimentos prontos?',
['Para evitar contaminação cruzada','Para aumentar a temperatura','Para impedir a digestão','Para produzir vitaminas'],
0,
'A separação reduz a possibilidade de microrganismos passarem dos alimentos crus para os alimentos prontos.'
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

/*
===========================================================
 QUÍMICA — 8ª CLASSE
 Conteúdo alinhado ao Programa de Ensino do 1º Ciclo
===========================================================
*/

const CHEM_8: EssentialContent[] = [

c(
'chem-8-01',
'8ª Classe',
'Química',
'chem-8-u1',
'Química no Quotidiano',
'Química e desenvolvimento da sociedade',
'Química',
'Química é a ciência que estuda a matéria, a sua constituição, estrutura, propriedades, transformações e as relações de energia envolvidas nessas transformações.',
[
'A Química estuda substâncias presentes na natureza e materiais produzidos pelo ser humano.',
'Está relacionada com áreas como Biologia, Física, Medicina, Agricultura e Engenharia.',
'A Química permite desenvolver medicamentos, fertilizantes, materiais, combustíveis e produtos de higiene.',
'O conhecimento químico também ajuda a compreender problemas ambientais e a utilizar recursos de forma responsável.'
],
'Química no dia a dia',
'A preparação de alimentos, tratamento da água, produção de medicamentos, fabricação de sabão e conservação de alimentos envolvem conhecimentos químicos.',
'Importância social',
'A Química contribui para a saúde, agricultura, indústria, alimentação, saneamento e desenvolvimento tecnológico.',
'ciência',
'Pensar que a Química acontece apenas num laboratório.',
'A Química está presente em processos naturais e em muitas actividades do quotidiano.',
[
'Química estuda a matéria e suas transformações.',
'Está presente no quotidiano.',
'Tem aplicações na saúde e agricultura.',
'Pode contribuir para o desenvolvimento sustentável.'
],
'O que estuda a Química?',
['Matéria, suas propriedades e transformações','Somente os animais','Somente os planetas','Apenas os seres humanos'],
0,
'A Química estuda a matéria, suas propriedades, estrutura e transformações.',
'Qual actividade envolve conhecimentos químicos?',
['Produção de medicamentos','Somente leitura de mapas','Observação de estrelas sem instrumentos','Prática de desporto'],
0,
'A produção de medicamentos envolve substâncias e transformações químicas.'
),

c(
'chem-8-02',
'8ª Classe',
'Química',
'chem-8-u1',
'Química no Quotidiano',
'Química e desenvolvimento sustentável',
'Desenvolvimento sustentável',
'Desenvolvimento sustentável é o desenvolvimento que procura satisfazer as necessidades do presente sem comprometer a capacidade das gerações futuras de satisfazerem as suas necessidades.',
[
'O desenvolvimento sustentável procura equilibrar aspectos ambientais, sociais e económicos.',
'A Química pode contribuir para produzir materiais menos poluentes e utilizar recursos de forma mais eficiente.',
'A redução de resíduos e a reciclagem podem diminuir impactos ambientais.',
'O uso responsável de água, energia e matérias-primas é importante para a sustentabilidade.'
],
'Reciclagem',
'A reciclagem permite recuperar materiais presentes em resíduos e transformá-los em matérias-primas ou novos produtos.',
'Gestão de resíduos',
'Conhecimentos químicos ajudam a compreender os materiais, a sua transformação e as melhores formas de tratamento.',
'meio ambiente',
'Pensar que sustentabilidade significa deixar de utilizar todos os recursos naturais.',
'Sustentabilidade significa utilizar recursos de forma responsável, procurando reduzir desperdícios e impactos ambientais.',
[
'Sustentabilidade considera o futuro.',
'Recursos devem ser utilizados responsavelmente.',
'Reutilização e reciclagem reduzem resíduos.',
'A Química pode contribuir para soluções ambientais.'
],
'Qual é um objectivo do desenvolvimento sustentável?',
['Satisfazer necessidades atuais sem comprometer as futuras','Consumir recursos sem limites','Aumentar todos os resíduos','Destruir recursos naturais'],
0,
'A sustentabilidade procura equilibrar necessidades atuais e conservação dos recursos.',
'Qual prática contribui para reduzir resíduos?',
['Reciclagem','Desperdício','Queima indiscriminada de lixo','Lançamento de resíduos nos rios'],
0,
'A reciclagem permite recuperar materiais e reduzir a quantidade de resíduos descartados.'
),

c(
'chem-8-03',
'8ª Classe',
'Química',
'chem-8-u1',
'Química no Quotidiano',
'Poluição química',
'Poluição',
'Poluição é a introdução de substâncias ou formas de energia no ambiente em quantidade ou condições capazes de provocar alterações prejudiciais nos ecossistemas e na saúde.',
[
'A poluição pode afectar o ar, a água e o solo.',
'Produtos químicos utilizados de forma inadequada podem contaminar o ambiente.',
'Metais pesados, pesticidas e determinados resíduos industriais podem causar problemas ambientais.',
'A prevenção da poluição é geralmente mais segura e económica do que tentar remediar danos já ocorridos.'
],
'Contaminação da água',
'O lançamento de produtos químicos, esgotos ou resíduos em rios pode alterar a qualidade da água e prejudicar organismos aquáticos.',
'Saúde pública',
'A qualidade da água está relacionada com a prevenção de várias doenças e com a conservação dos ecossistemas.',
'ambiente',
'Pensar que toda substância química é poluente.',
'Uma substância pode ser útil ou prejudicial dependendo das suas propriedades, quantidade, concentração e forma de utilização.',
[
'Poluição altera o ambiente.',
'Pode afectar água, ar e solo.',
'Substâncias químicas podem causar contaminação.',
'Prevenção reduz impactos.'
],
'Qual pode ser consequência da contaminação química da água?',
['Prejuízo para organismos aquáticos','Aumento obrigatório da biodiversidade','Purificação automática da água','Produção automática de oxigénio'],
0,
'A contaminação pode prejudicar organismos aquáticos e tornar a água inadequada para determinados usos.',
'Qual prática ajuda a reduzir a poluição?',
['Tratamento adequado de resíduos','Lançamento de resíduos nos rios','Descarte de produtos químicos no solo','Queima indiscriminada de lixo'],
0,
'O tratamento adequado dos resíduos reduz a quantidade de contaminantes libertados no ambiente.'
),

c(
'chem-8-04',
'8ª Classe',
'Química',
'chem-8-u1',
'Química no Quotidiano',
'Compostagem',
'Compostagem',
'Compostagem é um processo biológico de decomposição controlada de resíduos orgânicos, realizado principalmente por microrganismos e outros decompositores, originando um material rico em matéria orgânica chamado composto.',
[
'Podem ser compostados restos vegetais, folhas e outros resíduos orgânicos adequados.',
'Microrganismos decompõem a matéria orgânica durante o processo.',
'A compostagem reduz a quantidade de resíduos orgânicos enviados para lixeiras.',
'O composto pode melhorar as características do solo e contribuir para a agricultura.'
],
'Restos vegetais',
'Cascas de frutas, folhas e restos vegetais podem ser utilizados na produção de composto quando devidamente separados.',
'Agricultura',
'O composto pode fornecer matéria orgânica ao solo e ajudar na melhoria da sua estrutura.',
'agricultura',
'Pensar que qualquer tipo de lixo deve ser colocado na compostagem.',
'Materiais orgânicos adequados devem ser separados de plásticos, metais, vidros e resíduos perigosos.',
[
'Compostagem envolve decomposição.',
'Resíduos orgânicos são a principal matéria-prima.',
'Produz composto.',
'Pode beneficiar o solo.'
],
'O que é compostagem?',
['Decomposição controlada de resíduos orgânicos','Queima de metais','Separação de areia e água','Produção de plástico'],
0,
'A compostagem é a decomposição controlada de matéria orgânica.',
'Qual resíduo é adequado para compostagem?',
['Folhas e restos vegetais','Vidro','Latas de alumínio','Pilhas'],
0,
'Folhas e restos vegetais são exemplos de resíduos orgânicos que podem ser compostados.'
),

c(
'chem-8-05',
'8ª Classe',
'Química',
'chem-8-u2',
'Misturas',
'Substâncias e misturas',
'Mistura',
'Mistura é um sistema constituído por duas ou mais substâncias que se encontram juntas sem formar necessariamente uma nova substância através de uma reacção química.',
[
'Os componentes de uma mistura mantêm as suas propriedades químicas fundamentais.',
'As misturas podem ser homogéneas ou heterogéneas.',
'Uma mistura homogénea apresenta aspecto uniforme e uma única fase visível.',
'Uma mistura heterogénea apresenta duas ou mais fases visíveis ou distinguíveis.'
],
'Água e sal',
'Quando o sal se dissolve completamente na água, forma-se uma mistura homogénea chamada solução.',
'Laboratório',
'A identificação das misturas permite escolher métodos adequados para separar os seus componentes.',
'misturas',
'Pensar que toda mistura é uma substância pura.',
'Uma mistura contém mais de uma substância, enquanto uma substância pura possui composição definida.',
[
'Mistura possui dois ou mais componentes.',
'Pode ser homogénea.',
'Pode ser heterogénea.',
'Os componentes podem ser separados por métodos físicos.'
],
'Água com areia é uma mistura:',
['Heterogénea','Homogénea','Pura','Elementar'],
0,
'Água e areia formam uma mistura heterogénea porque os componentes podem ser distinguidos.',
'Água com sal completamente dissolvido é geralmente:',
['Mistura homogénea','Mistura heterogénea','Elemento químico','Substância simples'],
0,
'O sal dissolvido distribui-se uniformemente na água, formando uma mistura homogénea.'
),

c(
'chem-8-06',
'8ª Classe',
'Química',
'chem-8-u2',
'Misturas',
'Métodos de separação de misturas',
'Separação de misturas',
'Métodos de separação de misturas são processos físicos utilizados para separar os componentes de uma mistura sem transformar necessariamente essas substâncias em outras.',
[
'A filtração pode separar um sólido insolúvel de um líquido.',
'A decantação pode separar componentes com diferentes densidades ou fases que não se misturam.',
'A evaporação pode separar um sólido dissolvido de um líquido através da remoção do solvente.',
'A destilação utiliza diferenças nos pontos de ebulição para separar componentes de uma mistura.'
],
'Filtração',
'A filtração de água com areia permite reter as partículas sólidas no filtro enquanto a água passa.',
'Tratamento de água',
'Métodos de separação são utilizados em laboratórios, tratamento de água, indústria e preparação de matérias-primas.',
'laboratório',
'Pensar que todos os métodos de separação podem ser usados para qualquer mistura.',
'O método deve ser escolhido de acordo com as propriedades dos componentes.',
[
'Filtração separa sólidos insolúveis.',
'Decantação aproveita diferenças de densidade ou fases.',
'Evaporação pode recuperar o soluto.',
'Destilação aproveita diferenças de pontos de ebulição.'
],
'Qual método é adequado para separar areia e água?',
['Filtração','Destilação fraccionada','Imantação apenas','Cromatografia obrigatoriamente'],
0,
'A filtração retém a areia enquanto a água atravessa o filtro.',
'Qual método pode separar água e sal dissolvido recuperando a água?',
['Destilação','Filtração simples','Peneiração','Decantação simples'],
0,
'A destilação permite vaporizar a água e depois condensá-la, separando-a do sal.'
),

c(
'chem-8-07',
'8ª Classe',
'Química',
'chem-8-u2',
'Misturas',
'Destilação simples',
'Destilação simples',
'Destilação simples é um método de separação baseado principalmente na diferença dos pontos de ebulição dos componentes de uma mistura, envolvendo vaporização e posterior condensação.',
[
'O componente mais volátil vaporiza preferencialmente.',
'O vapor é conduzido para uma região onde é arrefecido.',
'A condensação transforma o vapor novamente em líquido.',
'O método é útil para separar um líquido de um soluto não volátil ou líquidos com pontos de ebulição suficientemente diferentes.'
],
'Água salgada',
'Na destilação da água salgada, a água pode ser vaporizada e posteriormente condensada, enquanto o sal permanece no recipiente.',
'Produção de água',
'A destilação pode ser utilizada para obter água com baixo teor de sais, embora o processo necessite de energia.',
'água',
'Pensar que a destilação remove qualquer contaminante automaticamente em qualquer situação.',
'A eficácia depende da natureza e volatilidade das substâncias presentes.',
[
'Destilação envolve vaporização.',
'O vapor é condensado.',
'Diferenças de ebulição são importantes.',
'Pode separar água de sais dissolvidos.'
],
'Em que propriedade se baseia principalmente a destilação?',
['Diferença nos pontos de ebulição','Diferença de cor','Diferença de massa apenas','Diferença de sabor'],
0,
'A destilação utiliza principalmente diferenças nos pontos de ebulição.',
'Na destilação da água salgada, o sal:',
['Permanece principalmente no recipiente de destilação','Vaporiza sempre primeiro','Transforma-se em oxigénio','Desaparece'],
0,
'O sal não é volátil nas condições usuais da destilação e permanece no recipiente.'
),

c(
'chem-8-08',
'8ª Classe',
'Química',
'chem-8-u3',
'Reacções Químicas',
'Reacção química',
'Reacção química',
'Reacção química é um processo no qual uma ou mais substâncias, chamadas reagentes, são transformadas em novas substâncias, chamadas produtos.',
[
'D urante uma reacção química, os átomos são reorganizados em novas combinações.',
'As propriedades dos produtos são diferentes das propriedades dos reagentes.',
'Algumas reacções libertam energia e outras absorvem energia.',
'Uma reacção pode ser identificada por evidências como formação de gás, precipitado, mudança de cor ou variação de temperatura.'
],
'Combustão',
'A combustão é uma reacção química rápida que normalmente envolve uma substância combustível e oxigénio, libertando energia.',
'Energia',
'Reacções químicas são importantes na produção de energia, digestão, respiração, combustão e processos industriais.',
'reacções',
'Pensar que qualquer mudança física é uma reacção química.',
'Derreter gelo, por exemplo, é uma mudança física porque a substância continua sendo água.',
[
'Reagentes formam produtos.',
'Átomos são reorganizados.',
'Podem ocorrer mudanças de energia.',
'Existem sinais observáveis de algumas reacções.'
],
'Como são chamadas as substâncias presentes inicialmente numa reacção?',
['Reagentes','Produtos','Catalisadores sempre','Solventes sempre'],
0,
'As substâncias presentes inicialmente são chamadas reagentes.',
'Qual situação representa uma reacção química?',
['Formação de ferrugem no ferro','Derretimento do gelo','Evaporação da água','Quebra de um vidro'],
0,
'A formação de ferrugem envolve transformação química do ferro na presença de oxigénio e água.'
),

c(
'chem-8-09',
'8ª Classe',
'Química',
'chem-8-u3',
'Reacções Químicas',
'Equações químicas',
'Equação química',
'Equação química é uma representação simbólica de uma reacção química, utilizando fórmulas e coeficientes para indicar reagentes, produtos e proporções.',
[
'Os reagentes são escritos normalmente à esquerda da seta.',
'Os produtos aparecem normalmente à direita da seta.',
'Os coeficientes indicam as proporções entre as substâncias.',
'A equação deve respeitar a conservação dos átomos de cada elemento.'
],
'Formação da água',
'2H₂ + O₂ → 2H₂O representa a reacção entre hidrogénio e oxigénio para formar água.',
'Laboratório',
'Equações químicas facilitam a comunicação e os cálculos relacionados com reacções.',
'química',
'Pensar que a seta significa igualdade matemática.',
'A seta representa transformação dos reagentes em produtos.',
[
'Reagentes ficam à esquerda.',
'Produtos ficam à direita.',
'Coeficientes representam proporções.',
'Átomos devem ser conservados.'
],
'Na equação 2H₂ + O₂ → 2H₂O, o produto é:',
['H₂O','H₂','O₂','H'],
0,
'H₂O representa a substância formada na reacção.',
'Por que uma equação química deve ser balanceada?',
['Para conservar o número de átomos de cada elemento','Para mudar os elementos','Para eliminar produtos','Para aumentar a massa'],
0,
'O balanceamento garante a conservação dos átomos durante a reacção.'
),

c(
'chem-8-10',
'8ª Classe',
'Química',
'chem-8-u3',
'Reacções Químicas',
'Cálculos químicos',
'Lei da conservação da massa',
'A lei da conservação da massa estabelece que, numa transformação química realizada num sistema fechado, a massa total dos reagentes é igual à massa total dos produtos.',
[
'Os átomos não desaparecem durante uma reacção química.',
'Os átomos são reorganizados para formar novas substâncias.',
'O balanceamento das equações químicas está relacionado com esta conservação.',
'Em sistemas abertos, pode parecer que a massa mudou porque gases podem entrar ou sair do sistema.'
],
'Combustão',
'Na combustão, parte dos produtos pode estar no estado gasoso. Se os gases forem considerados no sistema fechado, a massa total é conservada.',
'Laboratório',
'A conservação da massa é importante para realizar cálculos e verificar resultados experimentais.',
'cálculos',
'Pensar que a massa desaparece quando se forma um gás.',
'O gás possui massa. Se escapar do recipiente, a massa medida pode diminuir, mas a massa total do sistema continua conservada.',
[
'A matéria é conservada.',
'Átomos são reorganizados.',
'Gases também possuem massa.',
'Sistemas fechados facilitam verificar a conservação.'
],
'Se 10 g de reagentes formam produtos num sistema fechado, a massa dos produtos será:',
['10 g','5 g','20 g','0 g'],
0,
'Num sistema fechado, a massa total dos produtos será igual à massa total dos reagentes.',
'Qual princípio está relacionado com o balanceamento das equações?',
['Conservação dos átomos','Destruição dos elementos','Criação de matéria','Eliminação dos produtos'],
0,
'O balanceamento garante que o número de átomos de cada elemento seja igual nos dois lados.'
),

c(
'chem-8-11',
'8ª Classe',
'Química',
'chem-8-u3',
'Reacções Químicas',
'Velocidade das reacções',
'Velocidade da reacção',
'Velocidade de uma reacção química indica quão rapidamente os reagentes são consumidos ou os produtos são formados.',
[
'Algumas reacções são muito rápidas, enquanto outras são lentas.',
'A temperatura pode aumentar a velocidade de muitas reacções.',
'A concentração dos reagentes pode influenciar a velocidade.',
'A superfície de contacto e a presença de catalisadores também podem afectar a velocidade.'
],
'Comprimido efervescente',
'Um comprimido triturado geralmente reage mais rapidamente do que um comprimido inteiro porque apresenta maior superfície de contacto.',
'Indústria',
'O controlo da velocidade das reacções é importante na produção industrial e na conservação de alimentos.',
'cinética',
'Pensar que aumentar a temperatura sempre torna qualquer reacção infinitamente rápida.',
'A temperatura influencia a velocidade dentro das condições e limites do sistema.',
[
'Velocidade mede rapidez da reacção.',
'Temperatura pode alterar a velocidade.',
'Concentração pode alterar a velocidade.',
'Superfície de contacto pode influenciar a reacção.'
],
'Qual factor pode aumentar a velocidade de muitas reacções?',
['Aumento da temperatura','Diminuição obrigatória da concentração','Redução da superfície de contacto','Remoção de todos os reagentes'],
0,
'O aumento da temperatura pode aumentar a frequência e energia das colisões eficazes.',
'Por que um sólido triturado pode reagir mais rapidamente?',
['Porque possui maior superfície de contacto','Porque possui menos partículas','Porque deixa de ser sólido','Porque perde todos os átomos'],
0,
'Maior superfície de contacto permite maior contacto entre as partículas dos reagentes.'
)

];


/*
===========================================================
 QUÍMICA — 9ª CLASSE
 Conteúdo alinhado ao Programa de Ensino do 1º Ciclo
===========================================================
*/

const CHEM_9: EssentialContent[] = [

c(
'chem-9-01',
'9ª Classe',
'Química',
'chem-9-u1',
'Classes dos Compostos Inorgânicos',
'Óxidos',
'Óxido',
'Óxido é um composto binário formado por oxigénio ligado a outro elemento químico, de acordo com as regras de combinação química.',
[
'Óxidos metálicos são geralmente classificados como óxidos básicos.',
'Óxidos de muitos não metais são geralmente classificados como óxidos ácidos.',
'Os óxidos apresentam diferentes propriedades físicas e químicas.',
'Alguns óxidos reagem com água, ácidos ou bases.'
],
'Óxido de cálcio',
'O óxido de cálcio, CaO, é um óxido metálico que pode reagir com água formando hidróxido de cálcio.',
'Agricultura',
'O óxido de cálcio pode ser utilizado na correcção da acidez de determinados solos e em processos industriais.',
'agricultura',
'Pensar que todos os óxidos são iguais.',
'Óxidos apresentam diferentes propriedades dependendo dos elementos que os constituem.',
[
'Óxidos são compostos binários.',
'Contêm oxigénio.',
'Podem ser metálicos ou não metálicos.',
'Apresentam diferentes propriedades.'
],
'Qual é um exemplo de óxido?',
['CaO','NaCl','HCl','NaOH'],
0,
'CaO é constituído por cálcio e oxigénio, sendo um óxido.',
'Óxidos são geralmente classificados como compostos:',
['Binários contendo oxigénio','Formados somente por metais','Sem oxigénio','Formados somente por hidrogénio'],
0,
'Óxidos são compostos binários em que o oxigénio está combinado com outro elemento.'
),

c(
'chem-9-02',
'9ª Classe',
'Química',
'chem-9-u1',
'Classes dos Compostos Inorgânicos',
'Ácidos',
'Ácido',
'Ácido é uma substância que, em solução aquosa, pode aumentar a concentração de iões hidrónio e que, segundo a teoria de Brønsted-Lowry, pode doar protões.',
[
'Ácidos podem apresentar sabor azedo, mas nunca devem ser provados no laboratório.',
'Alguns ácidos são corrosivos e devem ser manipulados com cuidado.',
'Ácidos podem reagir com determinados metais produzindo hidrogénio.',
'Ácidos podem reagir com bases em reacções de neutralização.'
],
'Ácido clorídrico',
'O ácido clorídrico, HCl, em solução aquosa apresenta propriedades ácidas.',
'Laboratório',
'Ácidos possuem muitas aplicações industriais, laboratoriais e biológicas, mas devem ser utilizados com segurança.',
'segurança',
'Pensar que todos os ácidos são igualmente perigosos.',
'A força, concentração e propriedades específicas variam de um ácido para outro.',
[
'Ácidos apresentam propriedades características.',
'Podem doar protões.',
'Podem reagir com bases.',
'Alguns são corrosivos.'
],
'Qual substância é um ácido?',
['HCl','NaOH','NaCl','CaO'],
0,
'HCl é um ácido quando considerado em solução aquosa.',
'Uma reacção entre ácido e base é chamada:',
['Neutralização','Combustão obrigatória','Destilação','Filtração'],
0,
'Ácido e base podem reagir numa reacção de neutralização.'
),

c(
'chem-9-03',
'9ª Classe',
'Química',
'chem-9-u1',
'Classes dos Compostos Inorgânicos',
'Bases',
'Base',
'Base é uma substância que, em solução aquosa, pode aumentar a concentração de iões hidróxido ou, segundo Brønsted-Lowry, aceitar protões.',
[
'Bases solúveis em água são chamadas álcalis.',
'Muitas bases apresentam propriedades escorregadias ao tacto, mas não devem ser tocadas no laboratório.',
'Bases podem reagir com ácidos formando sais e água.',
'A concentração e a natureza da base determinam o seu comportamento e perigosidade.'
],
'Hidróxido de sódio',
'NaOH é uma base forte e deve ser manuseado com cuidado devido ao seu carácter corrosivo.',
'Indústria',
'Bases são utilizadas na produção de sabões, detergentes, papel e em vários processos industriais.',
'indústria',
'Pensar que todas as bases são fracas ou inofensivas.',
'Algumas bases, como NaOH, são fortemente corrosivas.',
[
'Bases podem formar OH⁻ em água.',
'Álcalis são bases solúveis.',
'Podem neutralizar ácidos.',
'Algumas bases são corrosivas.'
],
'Qual é uma base?',
['NaOH','HCl','CO₂','NaCl'],
0,
'NaOH é hidróxido de sódio, uma base.',
'Uma base pode reagir com um ácido formando:',
['Sal e água','Somente oxigénio','Somente metal','Somente ácido'],
0,
'A neutralização entre ácido e base pode produzir sal e água.'
),

c(
'chem-9-04',
'9ª Classe',
'Química',
'chem-9-u1',
'Classes dos Compostos Inorgânicos',
'Indicadores ácido-base',
'Indicador ácido-base',
'Indicador ácido-base é uma substância que apresenta mudança de cor em função da acidez ou basicidade do meio.',
[
'Indicadores naturais podem ser obtidos de algumas plantas.',
'Indicadores artificiais são produzidos ou preparados para apresentar mudanças de cor em determinadas faixas de pH.',
'O tornassol pode indicar se uma solução apresenta carácter ácido ou básico.',
'O extracto de repolho roxo contém pigmentos que mudam de cor conforme o pH.'
],
'Repolho roxo',
'O extracto de repolho roxo pode apresentar cores diferentes quando colocado em soluções ácidas ou básicas.',
'Laboratório escolar',
'Indicadores permitem comparar o carácter ácido ou básico de soluções de forma simples.',
'laboratório',
'Pensar que a mudança de cor indica necessariamente a identidade exacta da substância.',
'O indicador fornece informação sobre o carácter ácido ou básico e, dependendo do indicador, uma faixa aproximada de pH.',
[
'Indicadores mudam de cor.',
'Podem ser naturais ou artificiais.',
'Respondem ao pH.',
'São úteis em experiências químicas.'
],
'Qual é um indicador natural?',
['Extracto de repolho roxo','Areia','Ferro','Cloreto de sódio sólido'],
0,
'O repolho roxo contém pigmentos naturais sensíveis ao pH.',
'Para que serve um indicador ácido-base?',
['Identificar o carácter ácido ou básico de uma solução','Separar areia e água','Medir massa directamente','Produzir oxigénio'],
0,
'Indicadores mudam de cor de acordo com o carácter ácido ou básico do meio.'
),

c(
'chem-9-05',
'9ª Classe',
'Química',
'chem-9-u1',
'Classes dos Compostos Inorgânicos',
'Sais',
'Sal',
'Sal é um composto iónico constituído por catiões e aniões e que pode ser formado, entre outros processos, pela reacção de neutralização entre um ácido e uma base.',
[
'Os sais apresentam diferentes composições e propriedades.',
'Alguns sais são solúveis em água e outros apresentam baixa solubilidade.',
'O cloreto de sódio é um exemplo de sal.',
'Sais são importantes na alimentação, agricultura, indústria e processos biológicos.'
],
'Cloreto de sódio',
'NaCl é formado por iões Na⁺ e Cl⁻ e é utilizado como sal de cozinha.',
'Agricultura',
'Outros sais, além do NaCl, são importantes como nutrientes minerais e matérias-primas industriais.',
'química',
'Pensar que todos os sais são próprios para consumo.',
'Muitos sais não são alimentos e alguns podem ser tóxicos ou perigosos.',
[
'Sais são compostos iónicos.',
'Possuem catiões e aniões.',
'Podem resultar de neutralização.',
'Apresentam diferentes propriedades.'
],
'Qual é um sal comum?',
['NaCl','HCl','NaOH','CO₂'],
0,
'NaCl é cloreto de sódio, um sal.',
'Uma reacção de neutralização pode produzir:',
['Sal e água','Somente oxigénio','Somente hidrogénio','Somente metal'],
0,
'Ácido e base podem reagir formando sal e água.'
),

c(
'chem-9-06',
'9ª Classe',
'Química',
'chem-9-u2',
'Cinética Química e Equilíbrio',
'Velocidade das reacções',
'Cinética química',
'Cinética química é a área da Química que estuda a velocidade das reacções químicas e os factores que influenciam essa velocidade.',
[
'A concentração dos reagentes pode influenciar a velocidade.',
'A temperatura pode alterar a velocidade das reacções.',
'A superfície de contacto pode influenciar a frequência de colisões entre partículas.',
'Catalisadores podem aumentar a velocidade de determinadas reacções sem serem consumidos globalmente.'
],
'Catalisador',
'Um catalisador fornece uma via de reacção com menor energia de activação, aumentando a velocidade da reacção.',
'Indústria',
'O controlo da velocidade é essencial para aumentar eficiência e segurança em processos industriais.',
'indústria',
'Pensar que um catalisador aumenta a quantidade final de produto em qualquer reacção.',
'Um catalisador altera a velocidade para atingir o equilíbrio, mas não altera a composição de equilíbrio de uma reacção reversível em condições ideais.',
[
'Cinética estuda velocidade.',
'Temperatura influencia reacções.',
'Concentração influencia colisões.',
'Catalisadores alteram a velocidade.'
],
'Qual factor pode aumentar a velocidade de uma reacção?',
['Aumento da temperatura','Remoção dos reagentes','Diminuição total da superfície','Eliminação das colisões'],
0,
'A temperatura pode aumentar a energia e frequência das colisões eficazes.',
'O que faz um catalisador?',
['Aumenta a velocidade de uma reacção por uma via de menor energia de activação','É sempre consumido completamente','Impede qualquer reacção','Transforma todos os reagentes em elementos'],
0,
'Catalisadores fornecem uma via de reacção com menor energia de activação.'
),

c(
'chem-9-07',
'9ª Classe',
'Química',
'chem-9-u2',
'Cinética Química e Equilíbrio',
'Equilíbrio químico',
'Equilíbrio químico',
'Equilíbrio químico é o estado de uma reacção reversível em que as velocidades das reacções directa e inversa se tornam iguais, mantendo constantes as concentrações macroscópicas das espécies em condições determinadas.',
[
'O equilíbrio químico é dinâmico, porque as reacções directa e inversa continuam a ocorrer.',
'O equilíbrio pode ser atingido quando as reacções directa e inversa ocorrem à mesma velocidade.',
'Alterações de concentração, temperatura ou pressão podem deslocar o equilíbrio de sistemas adequados.',
'O princípio de Le Chatelier ajuda a prever a resposta de um sistema em equilíbrio a uma perturbação.'
],
'Equilíbrio dinâmico',
'No equilíbrio, os reagentes e produtos continuam a transformar-se microscopicamente, mas as velocidades directa e inversa são iguais.',
'Indústria química',
'O controlo do equilíbrio é importante na produção de várias substâncias industriais.',
'indústria',
'Pensar que no equilíbrio a reacção para completamente.',
'No equilíbrio dinâmico, as reacções continuam a ocorrer, mas em velocidades iguais.',
[
'Equilíbrio é dinâmico.',
'Reacções directa e inversa continuam.',
'As velocidades tornam-se iguais.',
'Condições externas podem deslocar o equilíbrio.'
],
'No equilíbrio químico:',
['As velocidades directa e inversa são iguais','A reacção para completamente','Não existem produtos','Não existem reagentes'],
0,
'O equilíbrio dinâmico ocorre quando as velocidades das reacções directa e inversa são iguais.',
'O que pode alterar a posição de um equilíbrio químico?',
['Concentração, temperatura ou pressão em sistemas apropriados','Apenas a cor do recipiente','Somente a massa do laboratório','Somente o nome da substância'],
0,
'Alterações nas condições do sistema podem provocar deslocamento do equilíbrio.'
),

c(
'chem-9-08',
'9ª Classe',
'Química',
'chem-9-u3',
'Cloro e Elementos do Grupo VIIA',
'Halogéneos',
'Halogéneos',
'Halogéneos são elementos do grupo 17 da tabela periódica, caracterizados por elevada tendência para formar iões negativos e compostos com muitos elementos.',
[
'Entre os halogéneos encontram-se flúor, cloro, bromo, iodo e astato.',
'O cloro é um halogéneo importante no estudo da Química do 9º ano.',
'Os halogéneos possuem sete eletrões de valência.',
'Muitos halogéneos são reactivos e formam compostos iónicos com metais.'
],
'Cloreto de sódio',
'O sódio pode transferir um eletrão para o cloro, formando Na⁺ e Cl⁻, que constituem o cloreto de sódio.',
'Desinfecção',
'Compostos de cloro são utilizados em determinados processos de tratamento e desinfecção da água.',
'água',
'Pensar que todos os compostos de cloro possuem as mesmas propriedades do gás cloro.',
'As propriedades dependem da substância química específica.',
[
'Halogéneos pertencem ao grupo 17.',
'Possuem sete eletrões de valência.',
'Cloro é um halogéneo.',
'Podem formar aniões.'
],
'Em que grupo da tabela periódica estão os halogéneos?',
['Grupo 17','Grupo 1','Grupo 2','Grupo 18'],
0,
'Os halogéneos pertencem ao grupo 17 da tabela periódica.',
'Quantos eletrões de valência possuem os halogéneos?',
['7','1','2','8'],
0,
'Os elementos do grupo 17 possuem sete eletrões de valência.'
),

c(
'chem-9-09',
'9ª Classe',
'Química',
'chem-9-u3',
'Cloro e Elementos do Grupo VIIA',
'Cloro e ácido clorídrico',
'Cloro',
'Cloro é um elemento químico de símbolo Cl e número atómico 17. Em condições ambientes, a substância simples cloro existe como moléculas diatómicas Cl₂.',
[
'O cloro pertence ao grupo dos halogéneos.',
'O gás cloro apresenta elevada reactividade e é tóxico em concentrações perigosas.',
'O cloro pode reagir com hidrogénio formando cloreto de hidrogénio.',
'Em água, o cloreto de hidrogénio forma ácido clorídrico.'
],
'Cloreto de hidrogénio',
'HCl gasoso é cloreto de hidrogénio; quando dissolvido em água, a solução é chamada ácido clorídrico.',
'Tratamento de água',
'Compostos de cloro possuem aplicações importantes, mas devem ser utilizados com controlo e segurança.',
'segurança',
'Confundir cloro gasoso com ácido clorídrico.',
'Cl₂ e HCl são substâncias diferentes, com composição e propriedades diferentes.',
[
'Cl é o símbolo do cloro.',
'O número atómico do cloro é 17.',
'Cl₂ é a substância simples cloro.',
'HCl em água forma ácido clorídrico.'
],
'Qual é o símbolo químico do cloro?',
['Cl','C','Co','Ca'],
0,
'Cl é o símbolo químico do elemento cloro.',
'Qual é a fórmula molecular da substância simples cloro?',
['Cl₂','Cl','HCl','NaCl'],
0,
'A substância simples cloro é formada por moléculas diatómicas Cl₂.'
),

c(
'chem-9-10',
'9ª Classe',
'Química',
'chem-9-u3',
'Cloro e Reacções Redox',
'Reacção de oxidação-redução',
'Reacção redox',
'Reacção redox é uma transformação química que envolve transferência de eletrões entre espécies ou alteração dos seus estados de oxidação.',
[
'Oxidação corresponde à perda de eletrões ou aumento do número de oxidação.',
'Recondução ou redução corresponde ao ganho de eletrões ou diminuição do número de oxidação.',
'A oxidação e a redução ocorrem simultaneamente.',
'O agente oxidante recebe eletrões e o agente redutor fornece eletrões.'
],
'Formação de iões',
'Quando um átomo perde eletrões, sofre oxidação; quando uma espécie ganha eletrões, sofre redução.',
'Metalurgia',
'Reacções redox são importantes na corrosão, obtenção de metais, baterias e processos biológicos.',
'energia',
'Pensar que oxidação significa apenas reacção com oxigénio.',
'Em sentido moderno, oxidação pode ocorrer sem participação directa de oxigénio e envolve perda de eletrões ou aumento do número de oxidação.',
[
'Oxidação envolve perda de eletrões.',
'Reução envolve ganho de eletrões.',
'As duas ocorrem simultaneamente.',
'Redox envolve transferência de eletrões.'
],
'Uma espécie que perde eletrões sofre:',
['Oxidação','Redução','Neutralização','Destilação'],
0,
'A perda de eletrões corresponde à oxidação.',
'Uma espécie que ganha eletrões sofre:',
['Redução','Oxidação','Combustão obrigatória','Filtração'],
0,
'O ganho de eletrões corresponde à redução.'
),

c(
'chem-9-11',
'9ª Classe',
'Química',
'chem-9-u3',
'Cálculos Químicos',
'Quantidade de matéria e mol',
'Mol',
'Mol é a unidade do Sistema Internacional utilizada para medir quantidade de matéria. Um mol contém exactamente 6,02214076 × 10²³ entidades elementares.',
[
'As entidades podem ser átomos, moléculas, iões ou outras partículas especificadas.',
'O número de Avogadro corresponde a 6,02214076 × 10²³ entidades por mol.',
'A quantidade de matéria é representada pela letra n.',
'A relação entre massa, quantidade de matéria e massa molar é n = m/M.'
],
'Um mol de água',
'Um mol de moléculas de água contém aproximadamente 6,022 × 10²³ moléculas de H₂O.',
'Laboratório',
'O conceito de mol permite relacionar quantidades microscópicas de partículas com massas medidas no laboratório.',
'cálculos',
'Pensar que um mol é uma unidade de massa.',
'Mol mede quantidade de matéria; grama mede massa.',
[
'Mol mede quantidade de matéria.',
'Número de Avogadro indica entidades por mol.',
'n = m/M.',
'Massa molar é expressa em g/mol.'
],
'O que mede o mol?',
['Quantidade de matéria','Temperatura','Volume apenas','Pressão'],
0,
'O mol é a unidade SI da quantidade de matéria.',
'Qual é aproximadamente o número de partículas em 1 mol?',
['6,022 × 10²³','6,022 × 10²','6,022 × 10⁶','6,022 × 10¹²'],
0,
'Um mol contém exactamente 6,02214076 × 10²³ entidades elementares.'
),

c(
'chem-9-12',
'9ª Classe',
'Química',
'chem-9-u4',
'Volume Molar e Cálculos Químicos',
'Volume molar dos gases',
'Volume molar',
'Volume molar é o volume ocupado por um mol de uma determinada substância em condições específicas de temperatura e pressão.',
[
'O volume molar depende das condições de temperatura e pressão.',
'Para gases, o volume molar pode ser usado para relacionar quantidade de matéria e volume.',
'Em condições específicas de referência, utiliza-se um valor aproximado de volume molar conforme o modelo e condições adotadas.',
'A relação geral pode ser expressa como Vm = V/n.'
],
'Gás oxigénio',
'Conhecendo o volume e o volume molar nas mesmas condições, pode-se calcular a quantidade de matéria de um gás.',
'Laboratório',
'O volume molar facilita cálculos envolvendo gases em experiências e processos químicos.',
'gases',
'Usar sempre o mesmo valor de volume molar sem verificar as condições.',
'O volume molar depende da temperatura e pressão utilizadas.',
[
'Volume molar relaciona volume e quantidade de matéria.',
'Depende das condições.',
'Vm = V/n.',
'É especialmente útil para gases.'
],
'Qual é a expressão do volume molar?',
['Vm = V/n','Vm = n/V','Vm = m/V','Vm = V × m'],
0,
'Volume molar é o volume dividido pela quantidade de matéria.',
'Por que é necessário indicar as condições ao utilizar um volume molar?',
['Porque o volume dos gases depende da temperatura e pressão','Porque os gases não possuem partículas','Porque a massa deixa de existir','Porque todos os gases têm sempre o mesmo volume'],
0,
'Temperatura e pressão influenciam o volume ocupado pelos gases.'
),

c(
'chem-9-13',
'9ª Classe',
'Química',
'chem-9-u4',
'Cálculos Químicos',
'Massa molar',
'Massa molar',
'Massa molar é a massa correspondente a um mol de uma substância e é normalmente expressa em gramas por mol.',
[
'A massa molar de um elemento pode ser obtida a partir da massa atómica relativa indicada na tabela periódica.',
'A massa molar de um composto é calculada somando as massas atómicas dos átomos presentes na fórmula.',
'A relação n = m/M permite calcular a quantidade de matéria.',
'A massa molar é uma ponte entre a escala microscópica e as medidas de laboratório.'
],
'Água',
'A massa molar aproximada da água H₂O é 18 g/mol, considerando H = 1 e O = 16.',
'Cálculos laboratoriais',
'A massa molar permite calcular quantidades de matéria necessárias em experiências químicas.',
'cálculos',
'Confundir massa molar com massa da amostra.',
'Massa molar é uma propriedade expressa em g/mol, enquanto a massa da amostra depende da quantidade existente.',
[
'Massa molar é expressa em g/mol.',
'Depende da fórmula química.',
'n = m/M.',
'Permite relacionar massa e quantidade de matéria.'
],
'Qual é aproximadamente a massa molar da água H₂O?',
['18 g/mol','2 g/mol','16 g/mol','20 g/mol'],
0,
'H₂O possui duas massas de H e uma de O: 2(1) + 16 = 18 g/mol.',
'Se uma amostra possui 18 g de água, aproximadamente quantos mol existem?',
['1 mol','18 mol','0,1 mol','36 mol'],
0,
'Usando n = m/M, temos n = 18/18 = 1 mol.'
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
