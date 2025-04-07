/**
 * Serviço para gerenciar estudos bíblicos
 */

/**
 * Lista de estudos bíblicos disponíveis
 */
const estudos = [
  {
    id: 1,
    titulo: "Estudo sobre o Livro de Apocalipse",
    descricao:
      "Uma jornada através do último livro da Bíblia, desvendando suas profecias e simbolismos.",
    imagem: "/images/leão.webp",
    resumo:
      "O livro de Apocalipse é o último livro da Bíblia e contém visões proféticas sobre o fim dos tempos. Este estudo explora os símbolos, as mensagens às sete igrejas e o significado das profecias para os cristãos de hoje.",
    autor: "Pr. Samuel Rodrigues",
    dataPublicacao: "2023-10-15",
    topicos: [
      "Os Sete Selos",
      "As Sete Igrejas",
      "A Nova Jerusalém",
      "O Trono de Deus",
      "A Besta e o Falso Profeta",
    ],
    conteudo: `
      <h2>Introdução ao Livro de Apocalipse</h2>
      
      <p>Apocalipse, também conhecido como "Revelação", foi escrito pelo apóstolo João durante seu exílio na ilha de Patmos, por volta do ano 95 d.C. O livro tem como objetivo trazer esperança aos cristãos que enfrentavam perseguição, mostrando que Deus está no controle da história e que o triunfo final pertence a Cristo.</p>
      
      <h2>As Sete Igrejas (Apocalipse 1-3)</h2>
      
      <p>Os três primeiros capítulos de Apocalipse contêm mensagens específicas para sete igrejas da Ásia Menor. Cada mensagem segue um padrão semelhante, incluindo elogios, repreensões e promessas. Estas igrejas representam não apenas comunidades históricas, mas também tipos de comunidades cristãs que existem ao longo da história.</p>
      
      <h2>A Visão do Trono Celestial (Apocalipse 4-5)</h2>
      
      <p>Nestes capítulos, João descreve uma impressionante visão do trono de Deus, cercado por seres celestiais que adoram continuamente. O ponto central é o Cordeiro que foi morto (Jesus Cristo), o único digno de abrir o livro selado com sete selos.</p>
      
      <h2>Os Sete Selos e os Julgamentos (Apocalipse 6-16)</h2>
      
      <p>A maior parte do livro de Apocalipse detalha uma série de julgamentos que virão sobre a terra: os sete selos, as sete trombetas e as sete taças da ira de Deus. Estes julgamentos revelam como Deus lidará com o mal e a injustiça no mundo.</p>
      
      <h2>A Queda da Babilônia e o Triunfo Final (Apocalipse 17-22)</h2>
      
      <p>Os capítulos finais descrevem a queda do império mundial (simbolizado pela Babilônia), a derrota final de Satanás e seus seguidores, e a criação dos novos céus e da nova terra. O livro termina com a descrição da Nova Jerusalém, onde Deus habitará com seu povo para sempre.</p>
    `,
  },
  {
    id: 2,
    titulo: "Os Salmos e sua Aplicação Diária",
    descricao:
      "Como os Salmos podem trazer conforto e direção para nossa vida cotidiana.",
    imagem: "/images/biblia.webp",
    resumo:
      "O livro de Salmos contém uma rica coleção de orações, louvores e reflexões que expressam toda a gama de emoções humanas. Este estudo explora como os Salmos podem nos ensinar a orar, a adorar e a encontrar conforto em todas as circunstâncias da vida.",
    autor: "Dra. Maria Oliveira",
    dataPublicacao: "2023-08-22",
    topicos: [
      "Salmos de Louvor",
      "Salmos de Lamento",
      "Salmos Messiânicos",
      "Orações nos Salmos",
      "Meditação com os Salmos",
    ],
    conteudo: `
      <h2>Introdução aos Salmos</h2>
      
      <p>O livro de Salmos é uma coletânea de 150 poemas líricos que serviam como o hinário do antigo Israel. Escritos ao longo de vários séculos, os Salmos expressam uma ampla variedade de emoções e experiências humanas perante Deus.</p>
      
      <h2>Os Diferentes Tipos de Salmos</h2>
      
      <p>Os Salmos podem ser classificados em diferentes categorias, incluindo salmos de louvor, lamento, agradecimento, confiança, sabedoria e reais. Cada tipo serve a um propósito diferente na vida espiritual do crente.</p>
      
      <h2>Os Salmos como Guia para Oração</h2>
      
      <p>Os Salmos nos ensinam a linguagem da oração, mostrando como podemos nos dirigir a Deus com honestidade e transparência. Eles nos dão palavras para expressar alegria, tristeza, arrependimento, gratidão e muitas outras emoções.</p>
      
      <h2>Os Salmos Messiânicos</h2>
      
      <p>Vários Salmos contêm profecias sobre o Messias que foram cumpridas em Jesus Cristo. Salmos como o 22, 69 e 110 são frequentemente citados no Novo Testamento em referência a Cristo.</p>
      
      <h2>Aplicação Prática dos Salmos</h2>
      
      <p>Este estudo inclui orientações sobre como incorporar os Salmos em sua vida devocional diária, usando-os para meditação, memorização e como guia para suas próprias orações.</p>
    `,
  },
  {
    id: 3,
    titulo: "As Parábolas de Jesus",
    descricao:
      "Entendendo os ensinamentos de Jesus através de suas histórias e metáforas.",
    imagem: "/images/oração.jpg",
    resumo:
      "Jesus frequentemente ensinava usando parábolas - histórias simples com significados profundos. Este estudo analisa as principais parábolas de Jesus, seus contextos históricos e as lições atemporais que elas contêm para os seguidores de Cristo hoje.",
    autor: "Prof. João Batista",
    dataPublicacao: "2023-05-10",
    topicos: [
      "O Semeador",
      "O Filho Pródigo",
      "O Bom Samaritano",
      "As Dez Virgens",
      "Os Talentos",
    ],
    conteudo: `
      <h2>Por que Jesus Falava em Parábolas?</h2>
      
      <p>Jesus explicou que usava parábolas para revelar os mistérios do Reino de Deus àqueles que estavam abertos a recebê-los, enquanto ocultava esses mesmos mistérios daqueles cujos corações estavam endurecidos (Mateus 13:10-17).</p>
      
      <h2>Parábolas sobre o Reino de Deus</h2>
      
      <p>Muitas parábolas de Jesus descrevem a natureza do Reino de Deus - como ele cresce (O Semeador, O Grão de Mostarda), seu valor inestimável (O Tesouro Escondido, A Pérola de Grande Valor) e como afeta as vidas das pessoas (O Fermento).</p>
      
      <h2>Parábolas sobre o Amor e a Misericórdia de Deus</h2>
      
      <p>Algumas das parábolas mais tocantes de Jesus revelam o amor profundo e a misericórdia de Deus para com os pecadores. A Parábola do Filho Pródigo (Lucas 15) é talvez o exemplo mais conhecido, ilustrando o acolhimento amoroso de Deus para aqueles que se arrependem.</p>
      
      <h2>Parábolas sobre a Responsabilidade Cristã</h2>
      
      <p>Jesus também contou parábolas que enfatizavam a responsabilidade de seus seguidores em usar seus dons e recursos sabiamente (Os Talentos, As Minas), mostrar amor ao próximo (O Bom Samaritano) e estar preparados para sua volta (As Dez Virgens).</p>
      
      <h2>Interpretando as Parábolas Hoje</h2>
      
      <p>Este estudo fornece princípios para interpretar corretamente as parábolas de Jesus, considerando o contexto histórico e cultural, o ponto principal de cada história e como aplicar seus ensinamentos em nossa vida hoje.</p>
    `,
  },
  {
    id: 4,
    titulo: "Personagens Bíblicos: Exemplos de Fé",
    descricao:
      "Lições de vida dos principais personagens da Bíblia que podemos aplicar hoje.",
    imagem: "/images/leão.webp",
    resumo:
      "A Bíblia está repleta de histórias de homens e mulheres que demonstraram fé extraordinária em circunstâncias desafiadoras. Este estudo examina vidas de personagens bíblicos notáveis e as lições que podemos aprender com suas jornadas de fé.",
    autor: "Pr. Carlos Mendes",
    dataPublicacao: "2023-12-05",
    topicos: [
      "Abraão: O Pai da Fé",
      "Moisés: Liderança em Tempos Difíceis",
      "Davi: Um Homem Segundo o Coração de Deus",
      "Ester: Coragem para Um Momento Como Este",
      "Paulo: De Perseguidor a Apóstolo",
    ],
    conteudo: `
      <h2>Abraão: O Pai da Fé</h2>
      
      <p>Abraão é conhecido como o "pai da fé" porque confiou nas promessas de Deus mesmo quando pareciam impossíveis. Sua jornada desde Ur dos Caldeus até a terra prometida, sua longa espera por um filho e sua disposição para sacrificar Isaac demonstram uma fé inabalável que ainda nos inspira hoje.</p>
      
      <h2>Moisés: Liderança em Tempos Difíceis</h2>
      
      <p>A vida de Moisés é dividida em três partes distintas: 40 anos na corte egípcia, 40 anos no deserto de Midiã e 40 anos liderando Israel. Sua história nos ensina sobre a preparação divina, o chamado relutante e a liderança perseverante em meio a muitos desafios.</p>
      
      <h2>Davi: Um Homem Segundo o Coração de Deus</h2>
      
      <p>Davi é descrito como "um homem segundo o coração de Deus", não porque fosse perfeito, mas porque amava a Deus profundamente e buscava segui-Lo. Sua vida como pastor, guerreiro, fugitivo e rei oferece lições sobre coragem, humildade e o verdadeiro arrependimento após o fracasso.</p>
      
      <h2>Ester: Coragem para Um Momento Como Este</h2>
      
      <p>Ester, uma jovem judia que se tornou rainha da Pérsia, arriscou sua vida para salvar seu povo. Sua história nos ensina sobre a coragem, a identidade e como Deus pode nos posicionar estrategicamente "para um momento como este".</p>
      
      <h2>Paulo: De Perseguidor a Apóstolo</h2>
      
      <p>A transformação dramática de Saulo, o perseguidor da igreja, em Paulo, o apóstolo aos gentios, destaca o poder transformador do encontro com Cristo. Sua vida e ministério nos ensinam sobre dedicação ao evangelho, perseverança em meio ao sofrimento e a importância de discipular outros.</p>
    `,
  },
];

/**
 * Busca todos os estudos disponíveis
 * @returns {Promise<Array>} Lista de estudos
 */
export async function buscarTodosEstudos() {
  try {
    // Simula um pequeno atraso de rede para dar realismo
    await new Promise((resolve) => setTimeout(resolve, 300));

    return estudos.map((estudo) => ({
      id: estudo.id,
      titulo: estudo.titulo,
      descricao: estudo.descricao,
      imagem: estudo.imagem,
      resumo: estudo.resumo,
      autor: estudo.autor,
      dataPublicacao: estudo.dataPublicacao,
      topicos: estudo.topicos,
    }));
  } catch (error) {
    console.error("Erro ao buscar estudos:", error);
    throw error;
  }
}

/**
 * Busca um estudo pelo ID
 * @param {number} id - ID do estudo
 * @returns {Promise<object>} Dados completos do estudo
 */
export async function buscarEstudoPorId(id) {
  try {
    // Simula um pequeno atraso de rede para dar realismo
    await new Promise((resolve) => setTimeout(resolve, 300));

    const estudo = estudos.find((e) => e.id === parseInt(id));

    if (!estudo) {
      throw new Error("Estudo não encontrado");
    }

    return estudo;
  } catch (error) {
    console.error(`Erro ao buscar estudo com ID ${id}:`, error);
    throw error;
  }
}

/**
 * Busca estudos por tópico ou palavra-chave
 * @param {string} termo - Termo de busca
 * @returns {Promise<Array>} Lista de estudos que correspondem à busca
 */
export async function buscarEstudosPorTermo(termo) {
  try {
    // Simula um pequeno atraso de rede para dar realismo
    await new Promise((resolve) => setTimeout(resolve, 300));

    if (!termo || termo.trim() === "") {
      return buscarTodosEstudos();
    }

    const termoBusca = termo.toLowerCase().trim();

    const resultados = estudos.filter(
      (estudo) =>
        estudo.titulo.toLowerCase().includes(termoBusca) ||
        estudo.descricao.toLowerCase().includes(termoBusca) ||
        estudo.resumo.toLowerCase().includes(termoBusca) ||
        estudo.topicos.some((topico) =>
          topico.toLowerCase().includes(termoBusca)
        )
    );

    return resultados.map((estudo) => ({
      id: estudo.id,
      titulo: estudo.titulo,
      descricao: estudo.descricao,
      imagem: estudo.imagem,
      resumo: estudo.resumo,
      autor: estudo.autor,
      dataPublicacao: estudo.dataPublicacao,
      topicos: estudo.topicos,
    }));
  } catch (error) {
    console.error(`Erro ao buscar estudos com o termo "${termo}":`, error);
    throw error;
  }
}

export default {
  buscarTodosEstudos,
  buscarEstudoPorId,
  buscarEstudosPorTermo,
};
