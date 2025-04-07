/**
 * Serviço para interagir com a API da Bíblia
 * @see https://bible-api.com
 */

const BASE_URL = "https://bible-api.com";
const TRADUCAO_PADRAO = "almeida";

/**
 * Busca um versículo aleatório do Novo Testamento
 * @returns {Promise<object>} Dados do versículo aleatório
 */
export async function buscarVersiculoAleatorio() {
  try {
    // Banco de dados local de versículos populares em português
    const versiculosEmPortugues = [
      {
        text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
        reference: "João 3:16",
      },
      {
        text: "O Senhor é o meu pastor, nada me faltará.",
        reference: "Salmos 23:1",
      },
      {
        text: "Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.",
        reference: "Provérbios 3:5-6",
      },
      {
        text: "Posso todas as coisas naquele que me fortalece.",
        reference: "Filipenses 4:13",
      },
      {
        text: "Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz, e não de mal, para vos dar o fim que esperais.",
        reference: "Jeremias 29:11",
      },
      {
        text: "E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.",
        reference: "Romanos 8:28",
      },
      {
        text: "Portanto ide, fazei discípulos de todas as nações, batizando-os em nome do Pai, e do Filho, e do Espírito Santo; Ensinando-os a guardar todas as coisas que eu vos tenho mandado; e eis que eu estou convosco todos os dias, até a consumação dos séculos.",
        reference: "Mateus 28:19-20",
      },
      {
        text: "Mas os que esperam no Senhor renovarão as suas forças, subirão com asas como águias; correrão, e não se cansarão; caminharão, e não se fatigarão.",
        reference: "Isaías 40:31",
      },
      {
        text: "Não to mandei eu? Esforça-te, e tem bom ânimo; não temas, nem te espantes; porque o Senhor teu Deus é contigo, por onde quer que andares.",
        reference: "Josué 1:9",
      },
      {
        text: "Ora, a fé é o firme fundamento das coisas que se esperam, e a prova das coisas que não se veem.",
        reference: "Hebreus 11:1",
      },
    ];

    // Escolhe um versículo aleatório da lista local
    const versiculoAleatorio =
      versiculosEmPortugues[
        Math.floor(Math.random() * versiculosEmPortugues.length)
      ];

    // Simula um pequeno atraso de rede para dar realismo
    await new Promise((resolve) => setTimeout(resolve, 300));

    return versiculoAleatorio;
  } catch (error) {
    console.error("Erro no serviço de Bíblia (versículo aleatório):", error);

    // Em caso de erro, retorna um versículo fixo em português
    return {
      text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
      reference: "João 3:16",
    };
  }
}

/**
 * Busca um versículo ou passagem específica
 * @param {string} referencia - Referência bíblica (ex: "João 3:16")
 * @param {string} traducao - Código da tradução (padrão: almeida)
 * @returns {Promise<object>} Dados do versículo ou passagem
 */
export async function buscarPorReferencia(
  referencia,
  traducao = TRADUCAO_PADRAO
) {
  try {
    const response = await fetch(
      `${BASE_URL}/${encodeURIComponent(referencia)}?translation=${traducao}`
    );

    if (!response.ok) {
      throw new Error("Erro ao buscar referência");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro no serviço de Bíblia (buscar referência):", error);
    throw error;
  }
}

/**
 * Busca os dados de um livro específico
 * @param {string} idLivro - ID do livro (ex: "JHN" para João)
 * @param {string} traducao - Código da tradução (padrão: almeida)
 * @returns {Promise<object>} Dados do livro
 */
export async function buscarLivro(idLivro, traducao = TRADUCAO_PADRAO) {
  try {
    const response = await fetch(`${BASE_URL}/data/${traducao}/${idLivro}`);

    if (!response.ok) {
      throw new Error("Erro ao buscar livro");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro no serviço de Bíblia (buscar livro):", error);
    throw error;
  }
}

/**
 * Busca os dados de um capítulo específico
 * @param {string} idLivro - ID do livro (ex: "JHN" para João)
 * @param {number} capitulo - Número do capítulo
 * @param {string} traducao - Código da tradução (padrão: almeida)
 * @returns {Promise<object>} Dados do capítulo
 */
export async function buscarCapitulo(
  idLivro,
  capitulo,
  traducao = TRADUCAO_PADRAO
) {
  try {
    const response = await fetch(
      `${BASE_URL}/data/${traducao}/${idLivro}/${capitulo}`
    );

    if (!response.ok) {
      throw new Error("Erro ao buscar capítulo");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro no serviço de Bíblia (buscar capítulo):", error);
    throw error;
  }
}

/**
 * Busca um versículo específico
 * @param {string} idLivro - ID do livro (ex: "JHN" para João)
 * @param {number} capitulo - Número do capítulo
 * @param {number} versiculo - Número do versículo
 * @param {string} traducao - Código da tradução (padrão: almeida)
 * @returns {Promise<object>} Dados do versículo
 */
export async function buscarVersiculo(
  idLivro,
  capitulo,
  versiculo,
  traducao = TRADUCAO_PADRAO
) {
  try {
    const livro = await buscarLivro(idLivro, traducao);
    const nomeLivro = livro.name || idLivro;

    const response = await fetch(
      `${BASE_URL}/${encodeURIComponent(
        `${nomeLivro} ${capitulo}:${versiculo}`
      )}?translation=${traducao}`
    );

    if (!response.ok) {
      throw new Error("Erro ao buscar versículo");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro no serviço de Bíblia (buscar versículo):", error);
    throw error;
  }
}

/**
 * Obtém todas as traduções disponíveis
 * @returns {Promise<object>} Lista de traduções disponíveis
 */
export async function buscarTraducoes() {
  try {
    const response = await fetch(`${BASE_URL}/data`);

    if (!response.ok) {
      throw new Error("Erro ao buscar traduções");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro no serviço de Bíblia (buscar traduções):", error);
    throw error;
  }
}

export default {
  buscarVersiculoAleatorio,
  buscarPorReferencia,
  buscarLivro,
  buscarCapitulo,
  buscarVersiculo,
  buscarTraducoes,
};
