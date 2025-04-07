/**
 * Serviço para gerenciar comentários bíblicos
 */

/**
 * Banco de dados local de comentários bíblicos
 */
const comentarios = {
  // Antigo Testamento
  genesis: {
    id: "genesis",
    nome: "Gênesis",
    autor: "Dr. Paulo Martins",
    resumo:
      "O livro de Gênesis é o livro das origens. Ele nos apresenta a origem do universo, da humanidade, do pecado, da salvação, da família e do povo de Israel.",
    imagemCapa: "/images/genesis.jpg",
    capitulos: [
      {
        numero: 1,
        titulo: "A Criação",
        texto: `<p>O primeiro capítulo de Gênesis apresenta o relato da criação do universo por Deus. A frase de abertura "No princípio criou Deus os céus e a terra" estabelece imediatamente que Deus existe antes de tudo e é o Criador de tudo que existe.</p>
        <p>O texto segue um padrão ordenado de seis dias de criação, culminando com o descanso no sétimo dia. Cada dia é marcado pela frase "E foi a tarde e a manhã", indicando um ciclo completo.</p>
        <p>Teologicamente, este capítulo estabelece várias verdades fundamentais: a existência de um único Deus criador, a bondade inerente da criação ("viu que era bom"), e o status especial dos seres humanos como criados "à imagem e semelhança de Deus".</p>`,
      },
      {
        numero: 2,
        titulo: "A Criação do Homem e da Mulher",
        texto: `<p>O segundo capítulo de Gênesis fornece um relato mais detalhado da criação dos seres humanos. Enquanto o capítulo 1 apresenta uma visão panorâmica da criação, o capítulo 2 foca especificamente na criação da humanidade e do Jardim do Éden.</p>
        <p>O homem é formado do "pó da terra", indicando sua natureza terrena, mas Deus sopra nele o "fôlego de vida", indicando também sua natureza espiritual. A mulher é criada da costela do homem, estabelecendo uma relação de intimidade e parceria.</p>
        <p>Este capítulo também introduz o conceito do trabalho humano (cuidar do jardim) e o primeiro mandamento específico (não comer da árvore do conhecimento do bem e do mal).</p>`,
      },
      {
        numero: 3,
        titulo: "A Queda do Homem",
        texto: `<p>O terceiro capítulo de Gênesis registra a entrada do pecado no mundo através da desobediência de Adão e Eva. A serpente (identificada em outros textos bíblicos como representação de Satanás) engana Eva questionando a palavra e a bondade de Deus.</p>
        <p>O ato de comer o fruto proibido traz consequências imediatas: vergonha, medo, culpa e alienação - tanto de Deus quanto um do outro. Deus pronuncia julgamentos específicos sobre a serpente, a mulher e o homem.</p>
        <p>No entanto, até mesmo no julgamento há graça: Deus provê vestimentas para cobrir sua nudez e pronuncia a primeira promessa de redenção na chamada "proto-evangelium" (Gênesis 3:15), onde é prometido que a descendência da mulher esmagará a cabeça da serpente.</p>`,
      },
    ],
    temas: ["Criação", "Queda", "Dilúvio", "Patriarcas", "José"],
    bibliografiaRecomendada: [
      "O Pentateuco (John H. Sailhamer)",
      "Comentário Bíblico Exposition: Gênesis (James Montgomery Boice)",
      "Gênesis: Um Comentário (Bruce K. Waltke)",
    ],
    versiculosChave: [
      {
        referencia: "Gênesis 1:1",
        texto: "No princípio criou Deus os céus e a terra.",
      },
      {
        referencia: "Gênesis 1:27",
        texto:
          "Criou Deus o homem à sua imagem, à imagem de Deus o criou; homem e mulher os criou.",
      },
      {
        referencia: "Gênesis 12:2-3",
        texto:
          "De ti farei uma grande nação, e te abençoarei, e engrandecerei o teu nome. Sê tu uma bênção! Abençoarei os que te abençoarem e amaldiçoarei os que te amaldiçoarem; em ti serão benditas todas as famílias da terra.",
      },
    ],
  },

  exodo: {
    id: "exodo",
    nome: "Êxodo",
    autor: "Dr. Paulo Martins",
    resumo:
      "O livro de Êxodo narra a libertação dos israelitas da escravidão no Egito, a jornada pelo deserto, o estabelecimento da aliança no Sinai e a construção do tabernáculo.",
    imagemCapa: "/images/exodo.jpg",
    capitulos: [
      {
        numero: 1,
        titulo: "Israel no Egito",
        texto: `<p>O primeiro capítulo de Êxodo estabelece a transição da história dos patriarcas para a história nacional de Israel. Começa com uma recapitulação das setenta pessoas da família de Jacó que entraram no Egito, conforme narrado no final de Gênesis.</p>
        <p>O texto então descreve como os israelitas se multiplicaram grandemente, cumprindo a promessa divina feita a Abraão. Esta bênção demográfica, no entanto, é vista como uma ameaça pelo novo Faraó "que não conheceu José", levando a medidas opressivas cada vez mais severas contra os israelitas.</p>
        <p>O capítulo termina com a ordem de Faraó para que todas as crianças do sexo masculino sejam mortas ao nascer, preparando o cenário para o nascimento e a preservação providencial de Moisés no capítulo seguinte.</p>`,
      },
      {
        numero: 3,
        titulo: "A Sarça Ardente",
        texto: `<p>Depois de fugir do Egito e passar quarenta anos em Midiã, Moisés tem um encontro transformador com Deus na forma de uma sarça que arde sem se consumir. Este é um dos momentos-chave na história bíblica, marcando o início da missão de Moisés como libertador de Israel.</p>
        <p>O nome divino YHWH (tradicionalmente traduzido como "EU SOU O QUE SOU") é revelado, sublinhando a natureza autoexistente e eterna de Deus. Este encontro estabelece vários elementos fundamentais: a santidade de Deus, a compaixão divina pelo sofrimento de Israel, e o chamado relutante de Moisés.</p>
        <p>A promessa divina de libertação é acompanhada de sinais confirmatórios para convencer tanto Moisés quanto o povo de Israel da autenticidade de sua missão.</p>`,
      },
      {
        numero: 20,
        titulo: "Os Dez Mandamentos",
        texto: `<p>O capítulo 20 de Êxodo contém um dos textos mais importantes e influentes de toda a Bíblia: os Dez Mandamentos. Estes mandamentos formam o núcleo do código moral da fé judaico-cristã e têm influenciado significativamente a legislação e a ética ocidental.</p>
        <p>Os mandamentos podem ser divididos em duas categorias: os primeiros quatro regulam o relacionamento com Deus, e os últimos seis regulam as relações interpessoais. Esta estrutura reflete o duplo mandamento de amor a Deus e ao próximo que Jesus posteriormente identificou como o resumo de toda a lei.</p>
        <p>É importante notar que estes mandamentos são dados após a libertação de Israel da escravidão, não como condição para a libertação, mas como resposta à graça já demonstrada. Isto estabelece o padrão bíblico de que a obediência é uma resposta à graça divina, não um meio de obtê-la.</p>`,
      },
    ],
    temas: [
      "Escravidão",
      "Libertação",
      "As Dez Pragas",
      "Os Dez Mandamentos",
      "O Tabernáculo",
    ],
    bibliografiaRecomendada: [
      "Êxodo: Um Comentário (Walter C. Kaiser Jr.)",
      "O Pentateuco como Narrativa (John H. Sailhamer)",
      "O Livro de Êxodo (Brevard S. Childs)",
    ],
    versiculosChave: [
      {
        referencia: "Êxodo 3:14",
        texto:
          "Disse Deus a Moisés: EU SOU O QUE SOU. Disse mais: Assim dirás aos filhos de Israel: EU SOU me enviou a vós outros.",
      },
      {
        referencia: "Êxodo 19:5-6",
        texto:
          "Agora, pois, se diligentemente ouvirdes a minha voz e guardardes a minha aliança, então, sereis a minha propriedade peculiar dentre todos os povos; porque toda a terra é minha; vós me sereis reino de sacerdotes e nação santa.",
      },
      {
        referencia: "Êxodo 20:2-3",
        texto:
          "Eu sou o SENHOR, teu Deus, que te tirei da terra do Egito, da casa da servidão. Não terás outros deuses diante de mim.",
      },
    ],
  },

  // Novo Testamento
  mateus: {
    id: "mateus",
    nome: "Mateus",
    autor: "Dr. Pedro Santos",
    resumo:
      "O Evangelho de Mateus apresenta Jesus como o Messias prometido e o cumprimento das profecias do Antigo Testamento, com ênfase em seu ensinamento e no Reino dos Céus.",
    imagemCapa: "/images/mateus.jpg",
    capitulos: [
      {
        numero: 1,
        titulo: "Genealogia e Nascimento de Jesus",
        texto: `<p>O Evangelho de Mateus começa estabelecendo a linhagem messiânica de Jesus através de sua genealogia, traçando sua descendência de Abraão através de Davi. Esta estrutura genealógica é deliberadamente organizada em três grupos de catorze gerações, destacando momentos-chave na história de Israel: Abraão, Davi e o exílio babilônico.</p>
        <p>A inclusão de quatro mulheres (Tamar, Raabe, Rute e a esposa de Urias) na genealogia é notável, pois todas tinham histórias incomuns ou eram não-israelitas, possivelmente prefigurando a natureza inclusiva do ministério de Jesus.</p>
        <p>A segunda parte do capítulo descreve a concepção virginal de Jesus e o papel de José, que é descrito como "justo" e recebe instruções divinas através de um sonho, uma ocorrência que se repetirá em momentos cruciais da narrativa.</p>`,
      },
      {
        numero: 5,
        titulo: "O Sermão do Monte: As Bem-aventuranças",
        texto: `<p>O capítulo 5 inicia o famoso Sermão do Monte (capítulos 5-7), o primeiro dos cinco grandes blocos de ensinamento em Mateus. O sermão começa com as Bem-aventuranças, uma série de bênçãos pronunciadas sobre aqueles que possuem certas qualidades espirituais.</p>
        <p>As Bem-aventuranças apresentam uma inversão dos valores mundanos, declarando abençoados aqueles que o mundo consideraria fracos ou desfavorecidos. Elas estabelecem o caráter do Reino dos Céus como fundamentalmente diferente dos reinos terrenos.</p>
        <p>O capítulo continua com Jesus declarando que veio não para abolir a Lei e os Profetas, mas para cumpri-los. Esta afirmação é seguida por uma série de contrastes ("Ouvistes que foi dito... Eu, porém, vos digo...") nos quais Jesus aprofunda e interioriza as exigências da Lei, movendo-a do comportamento externo para as motivações do coração.</p>`,
      },
      {
        numero: 28,
        titulo: "A Ressurreição e a Grande Comissão",
        texto: `<p>O capítulo final do Evangelho de Mateus narra a descoberta do túmulo vazio por mulheres devotas na manhã do primeiro dia da semana. Um anjo anuncia a ressurreição de Jesus e instrui as mulheres a levarem a notícia aos discípulos.</p>
        <p>O evangelho conclui com a aparição do Jesus ressuscitado aos discípulos em uma montanha na Galileia. Ali, Ele declara que toda autoridade no céu e na terra lhe foi dada e comissiona seus seguidores a fazerem discípulos de todas as nações.</p>
        <p>A Grande Comissão (28:19-20) inclui os elementos de ir, batizar e ensinar, com a promessa da presença contínua de Cristo "até à consumação do século". Esta conclusão liga-se ao início do evangelho, onde Jesus é apresentado como "Emanuel, que quer dizer: Deus conosco" (1:23).</p>`,
      },
    ],
    temas: [
      "Reino dos Céus",
      "Messias",
      "Discipulado",
      "Cumprimento das Profecias",
      "Igreja",
    ],
    bibliografiaRecomendada: [
      "Comentário do Evangelho de Mateus (D.A. Carson)",
      "Mateus: Um Comentário (Craig L. Blomberg)",
      "O Evangelho Segundo Mateus (Leon Morris)",
    ],
    versiculosChave: [
      {
        referencia: "Mateus 1:23",
        texto:
          "Eis que a virgem conceberá e dará à luz um filho, e ele será chamado pelo nome de Emanuel, que quer dizer: Deus conosco.",
      },
      {
        referencia: "Mateus 5:17",
        texto:
          "Não penseis que vim revogar a Lei ou os Profetas; não vim para revogar, vim para cumprir.",
      },
      {
        referencia: "Mateus 28:19-20",
        texto:
          "Ide, portanto, fazei discípulos de todas as nações, batizando-os em nome do Pai, e do Filho, e do Espírito Santo; ensinando-os a guardar todas as coisas que vos tenho ordenado. E eis que estou convosco todos os dias até à consumação do século.",
      },
    ],
  },

  apocalipse: {
    id: "apocalipse",
    nome: "Apocalipse",
    autor: "Dr. Lucas Mendes",
    resumo:
      "O livro de Apocalipse, também conhecido como Revelação, contém visões proféticas dadas ao apóstolo João, revelando o plano de Deus para os últimos tempos e a vitória final de Cristo.",
    imagemCapa: "/images/apocalipse.jpg",
    capitulos: [
      {
        numero: 1,
        titulo: "A Visão do Cristo Glorificado",
        texto: `<p>O livro de Apocalipse começa estabelecendo sua natureza como "revelação de Jesus Cristo", indicando tanto a origem quanto o conteúdo central do livro. João identifica-se como o autor, escrevendo da ilha de Patmos onde estava exilado "por causa da palavra de Deus e do testemunho de Jesus".</p>
        <p>Após uma saudação trinitária (vv. 4-5), o capítulo apresenta a primeira visão do livro: o Cristo ressurreto e glorificado. A descrição utiliza linguagem simbólica para comunicar a natureza divina e a absoluta autoridade de Cristo, utilizando imagens que ecoam o livro de Daniel.</p>
        <p>João reage à visão caindo "como morto", mas é confortado pelas palavras de Jesus: "Não temas". Cristo então se identifica como "o primeiro e o último, e o que vive; estive morto, mas eis que estou vivo pelos séculos dos séculos".</p>`,
      },
      {
        numero: 5,
        titulo: "O Livro Selado e o Cordeiro",
        texto: `<p>Este capítulo continua a visão do trono celestial iniciada no capítulo 4. João vê um livro selado com sete selos na mão direita daquele que está sentado no trono, mas ninguém é encontrado digno de abrir os selos.</p>
        <p>A solução para este dilema é apresentada na forma de "um Cordeiro, como tendo sido morto", representando Cristo em sua morte sacrificial e ressurreição vitoriosa. A aparente fraqueza do Cordeiro imolado contrasta dramaticamente com sua identificação como "o Leão da tribo de Judá", demonstrando que a vitória de Cristo foi alcançada através do aparente fracasso da cruz.</p>
        <p>O capítulo culmina com uma adoração cósmica dirigida tanto a Deus quanto ao Cordeiro, unificando-os como objetos de louvor e destacando a divindade de Cristo.</p>`,
      },
      {
        numero: 21,
        titulo: "A Nova Jerusalém",
        texto: `<p>Os capítulos finais de Apocalipse apresentam a conclusão do plano redentor de Deus com a criação de "novos céus e nova terra". João vê a Nova Jerusalém descendo do céu como uma noiva adornada para seu esposo, simbolizando a perfeita comunhão entre Deus e seu povo redimido.</p>
        <p>A descrição da cidade é rica em simbolismo, com medidas perfeitas, materiais preciosos, e uma forma cúbica que ecoa o Santo dos Santos do templo. Notavelmente, não há templo na cidade, "porque o seu templo é o Senhor Deus Todo-Poderoso e o Cordeiro".</p>
        <p>Temas do Éden são restaurados e aperfeiçoados: o rio da vida, a árvore da vida, e a ausência de maldição. A comunhão direta com Deus é restaurada, com os redimidos vendo sua face e tendo seu nome em suas frontes. A descrição culmina com a afirmação "reinarão pelos séculos dos séculos", indicando a participação do povo de Deus em seu reino eterno.</p>`,
      },
    ],
    temas: [
      "Sete Igrejas",
      "Sete Selos",
      "Sete Trombetas",
      "Sete Taças",
      "Nova Jerusalém",
    ],
    bibliografiaRecomendada: [
      "Mais Que Vencedores (William Hendriksen)",
      "Apocalipse: Uma Interpretação Eclética (Craig S. Keener)",
      "Apocalipse: Um Comentário (G.K. Beale)",
    ],
    versiculosChave: [
      {
        referencia: "Apocalipse 1:8",
        texto:
          "Eu sou o Alfa e o Ômega, diz o Senhor Deus, aquele que é, que era e que há de vir, o Todo-Poderoso.",
      },
      {
        referencia: "Apocalipse 5:5-6",
        texto:
          "Então, um dos anciãos me disse: Não chores; eis que o Leão da tribo de Judá, a Raiz de Davi, venceu para abrir o livro e os seus sete selos. Então, vi, no meio do trono e dos quatro seres viventes e entre os anciãos, de pé, um Cordeiro como tendo sido morto.",
      },
      {
        referencia: "Apocalipse 21:3-4",
        texto:
          "Então, ouvi grande voz vinda do trono, dizendo: Eis o tabernáculo de Deus com os homens. Deus habitará com eles. Eles serão povos de Deus, e Deus mesmo estará com eles. E lhes enxugará dos olhos toda lágrima, e a morte já não existirá, já não haverá luto, nem pranto, nem dor, porque as primeiras coisas passaram.",
      },
    ],
  },
};

/**
 * Busca todos os livros do Antigo Testamento com comentários disponíveis
 * @returns {Promise<Array>} Lista de livros do Antigo Testamento
 */
export async function buscarLivrosAT() {
  try {
    // Simula um pequeno atraso de rede para dar realismo
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Lista de livros do Antigo Testamento
    const livrosAT = [
      "genesis",
      "exodo",
      "levitico",
      "numeros",
      "deuteronomio",
      "josue",
      "juizes",
      "rute",
      "1samuel",
      "2samuel",
      "salmos",
      "proverbios",
      "isaias",
      "daniel",
    ];

    // Filtra apenas os que têm comentários disponíveis
    const comentariosDisponiveis = livrosAT.filter((id) => comentarios[id]);

    // Retorna dados básicos para cada livro disponível
    return comentariosDisponiveis.map((id) => {
      const livro = comentarios[id];
      return {
        id: livro.id,
        nome: livro.nome,
        autor: livro.autor,
        resumo: livro.resumo,
        imagemCapa: livro.imagemCapa,
      };
    });
  } catch (error) {
    console.error("Erro ao buscar livros do Antigo Testamento:", error);
    throw error;
  }
}

/**
 * Busca todos os livros do Novo Testamento com comentários disponíveis
 * @returns {Promise<Array>} Lista de livros do Novo Testamento
 */
export async function buscarLivrosNT() {
  try {
    // Simula um pequeno atraso de rede para dar realismo
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Lista de livros do Novo Testamento
    const livrosNT = [
      "mateus",
      "marcos",
      "lucas",
      "joao",
      "atos",
      "romanos",
      "1corintios",
      "galatas",
      "efesios",
      "filipenses",
      "hebreus",
      "tiago",
      "1pedro",
      "apocalipse",
    ];

    // Filtra apenas os que têm comentários disponíveis
    const comentariosDisponiveis = livrosNT.filter((id) => comentarios[id]);

    // Retorna dados básicos para cada livro disponível
    return comentariosDisponiveis.map((id) => {
      const livro = comentarios[id];
      return {
        id: livro.id,
        nome: livro.nome,
        autor: livro.autor,
        resumo: livro.resumo,
        imagemCapa: livro.imagemCapa,
      };
    });
  } catch (error) {
    console.error("Erro ao buscar livros do Novo Testamento:", error);
    throw error;
  }
}

/**
 * Busca o comentário completo para um livro específico
 * @param {string} id - ID do livro (ex: "genesis", "mateus", "apocalipse")
 * @returns {Promise<object>} Dados completos do comentário
 */
export async function buscarComentarioPorLivro(id) {
  try {
    // Simula um pequeno atraso de rede para dar realismo
    await new Promise((resolve) => setTimeout(resolve, 300));

    const comentario = comentarios[id];

    if (!comentario) {
      throw new Error(`Comentário para o livro '${id}' não encontrado`);
    }

    return comentario;
  } catch (error) {
    console.error(`Erro ao buscar comentário para o livro ${id}:`, error);
    throw error;
  }
}

/**
 * Busca capítulos específicos de um comentário
 * @param {string} livroId - ID do livro
 * @param {number} capituloNumero - Número do capítulo
 * @returns {Promise<object>} Dados do capítulo específico
 */
export async function buscarCapituloComentario(livroId, capituloNumero) {
  try {
    // Simula um pequeno atraso de rede para dar realismo
    await new Promise((resolve) => setTimeout(resolve, 300));

    const livro = comentarios[livroId];

    if (!livro) {
      throw new Error(`Livro '${livroId}' não encontrado`);
    }

    const capitulo = livro.capitulos.find(
      (cap) => cap.numero === parseInt(capituloNumero)
    );

    if (!capitulo) {
      throw new Error(
        `Capítulo ${capituloNumero} do livro ${livro.nome} não encontrado`
      );
    }

    return {
      livro: {
        id: livro.id,
        nome: livro.nome,
      },
      capitulo,
    };
  } catch (error) {
    console.error(
      `Erro ao buscar capítulo ${capituloNumero} do livro ${livroId}:`,
      error
    );
    throw error;
  }
}

export default {
  buscarLivrosAT,
  buscarLivrosNT,
  buscarComentarioPorLivro,
  buscarCapituloComentario,
};
