/**
 * Serviço para gerenciar devocionais diários
 */

import bibliaService from "./bibliaService";

/**
 * Banco de dados local de devocionais
 */
const devocionais = [
  {
    id: 1,
    titulo: "O Poder da Gratidão",
    dataPublicacao: "2024-01-10",
    autor: "Pr. Ricardo Santos",
    versiculoChave: {
      referencia: "1 Tessalonicenses 5:18",
      texto:
        "Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.",
    },
    conteudo: `
      <p>A gratidão é uma poderosa ferramenta espiritual que transforma nossa perspectiva diante das circunstâncias. Quando escolhemos ser gratos, mesmo em meio às dificuldades, estamos declarando nossa confiança no caráter de Deus e em Sua soberania sobre nossas vidas.</p>
      
      <p>O apóstolo Paulo nos exorta a dar graças em todas as situações - não apenas nas boas, mas em todas. Isso pode parecer contraditório, afinal, como podemos ser gratos por momentos de dor, perda ou frustração? Paulo não está sugerindo que sejamos gratos <em>pelas</em> dificuldades, mas que possamos ser gratos <em>nas</em> dificuldades.</p>
      
      <p>Quando praticamos a gratidão regularmente, criamos um escudo contra o desânimo e a amargura. A gratidão nos ajuda a manter os olhos fixos nas bênçãos que já recebemos e na fidelidade constante de Deus, mesmo quando o caminho parece incerto.</p>
      
      <h3>Aplicação Prática:</h3>
      <p>Reserve alguns minutos hoje para listar pelo menos cinco bênçãos em sua vida pelas quais você é grato. Podem ser coisas simples, como o ar que respira, ou bênçãos específicas que Deus tem concedido. Transforme cada item da lista em uma breve oração de agradecimento.</p>
      
      <h3>Oração:</h3>
      <p>"Pai Celestial, obrigado por Sua bondade e fidelidade em minha vida. Ajuda-me a cultivar um coração grato em todas as circunstâncias, confiando que Tu estás no controle. Que eu possa reconhecer Tuas bênçãos diárias e ser um exemplo de gratidão para aqueles ao meu redor. Em nome de Jesus, amém."</p>
    `,
  },
  {
    id: 2,
    titulo: "Águas Tranquilas em Tempos Turbulentos",
    dataPublicacao: "2024-01-11",
    autor: "Pr. Lucas Oliveira",
    versiculoChave: {
      referencia: "Salmos 23:2-3",
      texto:
        "Deitar-me faz em verdes pastos, guia-me mansamente a águas tranquilas. Refrigera a minha alma.",
    },
    conteudo: `
      <p>Em um mundo acelerado e repleto de demandas constantes, muitos de nós nos sentimos sobrecarregados e exaustos. A ansiedade e o estresse tornaram-se companheiros indesejados em nossa jornada diária. É nesse contexto que as palavras do Salmo 23 ressoam com promessas reconfortantes.</p>
      
      <p>Davi, o autor deste salmo, não era estranho às pressões da vida. Como rei, enfrentou guerras, traições e responsabilidades enormes. No entanto, ele encontrou um segredo poderoso: permitir que Deus, seu Pastor, o guiasse para lugares de descanso e restauração.</p>
      
      <p>As "águas tranquilas" mencionadas no salmo representam mais que apenas um cenário idílico. Elas simbolizam a paz interior que só Deus pode proporcionar, independentemente das circunstâncias externas. É interessante notar que o Pastor não elimina os desafios (o vale da sombra da morte é mencionado mais adiante no mesmo salmo), mas nos guia através deles, oferecendo-nos descanso ao longo do caminho.</p>
      
      <h3>Aplicação Prática:</h3>
      <p>Reserve 15 minutos hoje para um momento de "águas tranquilas". Desligue o celular, encontre um lugar quieto e simplesmente descanse na presença de Deus. Você pode ler lentamente o Salmo 23, meditar em suas promessas ou apenas ficar em silêncio, permitindo que Deus renove suas forças.</p>
      
      <h3>Oração:</h3>
      <p>"Bom Pastor, venho a Ti cansado e necessitado de restauração. Guia-me para longe do ruído e da pressa deste mundo, para o lugar de paz que só Tu podes oferecer. Renova minha mente, acalma meu coração e refrigera minha alma. Ajuda-me a confiar em Tua liderança mesmo quando o caminho atravessa vales escuros. Amém."</p>
    `,
  },
  {
    id: 3,
    titulo: "Buscando Sabedoria Para Decisões",
    dataPublicacao: "2024-01-12",
    autor: "Dra. Ana Beatriz Mendes",
    versiculoChave: {
      referencia: "Tiago 1:5",
      texto:
        "Se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente e não lança em rosto, e ser-lhe-á dada.",
    },
    conteudo: `
      <p>Todos nós enfrentamos momentos de decisão – alguns pequenos e cotidianos, outros que podem alterar significativamente o curso de nossas vidas. Diante de escolhas importantes, podemos nos sentir inseguros sobre qual caminho seguir, pesando prós e contras, mas ainda assim inseguros sobre a melhor opção.</p>
      
      <p>A carta de Tiago nos oferece uma perspectiva transformadora: a sabedoria divina está disponível para todos que a solicitam. Não se trata apenas de inteligência humana ou capacidade de análise, mas de uma compreensão mais profunda que vem do próprio Deus.</p>
      
      <p>Observe as características desta promessa: Deus dá "liberalmente" - não com parcimônia ou relutância, mas generosamente. Além disso, Ele "não lança em rosto" - não nos repreende por precisarmos pedir, nem mantém um registro de quantas vezes já solicitamos Sua ajuda. Essa é uma porta sempre aberta para os filhos de Deus.</p>
      
      <h3>Aplicação Prática:</h3>
      <p>Existe alguma decisão importante que você precisa tomar atualmente? Dedique tempo hoje para apresentá-la especificamente a Deus, pedindo Sua sabedoria. Anote os pensamentos, impressões ou direções que surgirem durante esse tempo de oração. Lembre-se que a sabedoria divina geralmente se alinha com princípios bíblicos, então consulte as Escrituras em busca de orientação.</p>
      
      <h3>Oração:</h3>
      <p>"Pai Celestial, reconheço minha necessidade de Tua sabedoria para as decisões que enfrento. As limitações da minha compreensão humana são evidentes, e desejo escolher o caminho que Te agrada e que trará os melhores resultados a longo prazo. Venho confiante em Tua promessa de conceder sabedoria a quem pede. Ilumina minha mente, dirige meus passos e ajuda-me a discernir Tua vontade. Em nome de Jesus, amém."</p>
    `,
  },
  {
    id: 4,
    titulo: "O Fruto do Espírito em Ação",
    dataPublicacao: "2024-01-13",
    autor: "Pr. Carlos Eduardo Lima",
    versiculoChave: {
      referencia: "Gálatas 5:22-23",
      texto:
        "Mas o fruto do Espírito é: amor, alegria, paz, longanimidade, benignidade, bondade, fidelidade, mansidão, domínio próprio. Contra estas coisas não há lei.",
    },
    conteudo: `
      <p>Quando Paulo escreveu sobre o "fruto do Espírito", ele utilizou uma metáfora poderosa do mundo natural. Assim como uma árvore produz frutos de acordo com sua natureza, nossa vida espiritual produz determinadas qualidades quando permitimos que o Espírito Santo trabalhe em nós.</p>
      
      <p>É significativo que Paulo use a palavra "fruto" (singular) e não "frutos". Isso sugere que estas nove qualidades formam um conjunto integrado, não características isoladas que podemos escolher desenvolver separadamente. Quando o Espírito Santo habita em nós, todas estas virtudes começam a se manifestar gradualmente.</p>
      
      <p>Também é importante notar que o fruto é resultado de um processo, não algo instantâneo. Assim como na natureza, o crescimento espiritual requer tempo, nutrição adequada e condições favoráveis. No entanto, diferentemente das árvores naturais, temos a capacidade de cooperar com ou resistir ao trabalho do Espírito Santo em nossas vidas.</p>
      
      <h3>Aplicação Prática:</h3>
      <p>Dentre as nove qualidades mencionadas por Paulo, identifique aquela que representa seu maior desafio atual. Ao longo do dia de hoje, preste atenção especial às situações que testam esta área específica, e faça uma pausa antes de reagir, pedindo a ajuda do Espírito Santo. Lembre-se: não estamos tentando produzir o fruto por esforço próprio, mas permitindo que o Espírito Santo o desenvolva em nós.</p>
      
      <h3>Oração:</h3>
      <p>"Espírito Santo, reconheço que não posso produzir estas qualidades por meus próprios esforços. Convido-Te a trabalhar profundamente em meu coração, transformando meus desejos e atitudes para refletir o caráter de Cristo. Ajuda-me a cooperar com Tua obra em minha vida, removendo os obstáculos que impedem o pleno desenvolvimento do Teu fruto. Que as pessoas ao meu redor possam ver Cristo em mim através destas qualidades. Amém."</p>
    `,
  },
  {
    id: 5,
    titulo: "Vencendo o Medo com Fé",
    dataPublicacao: "2024-01-14",
    autor: "Pr. Samuel Rodrigues",
    versiculoChave: {
      referencia: "2 Timóteo 1:7",
      texto:
        "Porque Deus não nos deu espírito de covardia, mas de poder, de amor e de moderação.",
    },
    conteudo: `
      <p>O medo é uma das emoções mais poderosas e paralisantes que enfrentamos. Ele pode se manifestar de diversas formas: ansiedade sobre o futuro, preocupação com o que os outros pensam, temor diante de desafios ou mesmo terror frente a ameaças reais ou imaginárias. Independentemente de sua forma, o medo tem o potencial de nos impedir de viver plenamente a vida que Deus planejou para nós.</p>
      
      <p>Paulo escreveu estas palavras a Timóteo, um jovem líder que provavelmente enfrentava seus próprios medos e inseguranças. A mensagem é clara e revolucionária: o medo não vem de Deus. Quando nos sentimos dominados pelo medo, não estamos operando no espírito que Deus nos concedeu.</p>
      
      <p>Em contraste com o espírito de medo, Paulo menciona três qualidades divinas que nos foram dadas: poder (capacidade de enfrentar desafios), amor (que expulsa o medo, conforme 1 João 4:18) e moderação (ou mente sã, que nos permite avaliar situações com clareza, não através das lentes distorcidas do medo).</p>
      
      <h3>Aplicação Prática:</h3>
      <p>Identifique um medo específico que tem influenciado negativamente suas decisões ou seu bem-estar emocional. Escreva-o em um papel. Ao lado, escreva o versículo de 2 Timóteo 1:7. Sempre que esse medo surgir hoje, leia o versículo em voz alta, lembrando-se que você recebeu poder, amor e moderação para enfrentá-lo.</p>
      
      <h3>Oração:</h3>
      <p>"Pai Celestial, confesso que muitas vezes permito que o medo, e não a fé, dirija minhas ações e pensamentos. Obrigado porque Tu não me deste espírito de medo, mas de poder para enfrentar os desafios, amor para vencer a ansiedade, e uma mente sã para discernir a verdade. Ajuda-me a viver na realidade do que Tu me deste, e não na ilusão dos meus temores. Quando o medo bater à porta do meu coração, que a Tua Palavra responda. Em nome de Jesus, que venceu o mundo e todos os seus terrores, amém."</p>
    `,
  },
];

/**
 * Obtém o devocional do dia atual
 * @returns {Promise<object>} Devocional do dia
 */
export async function obterDevocionalDoDia() {
  try {
    // Simula um pequeno atraso de rede para dar realismo
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Para fins de demonstração, estamos escolhendo um devocional aleatório
    // Em uma implementação real, você pode querer selecionar com base na data atual
    const indiceAleatorio = Math.floor(Math.random() * devocionais.length);

    return devocionais[indiceAleatorio];
  } catch (error) {
    console.error("Erro ao obter devocional do dia:", error);
    throw error;
  }
}

/**
 * Obtém um devocional específico pelo ID
 * @param {number} id - ID do devocional
 * @returns {Promise<object>} Dados do devocional
 */
export async function obterDevocionalPorId(id) {
  try {
    // Simula um pequeno atraso de rede para dar realismo
    await new Promise((resolve) => setTimeout(resolve, 300));

    const devocional = devocionais.find((d) => d.id === parseInt(id));

    if (!devocional) {
      throw new Error("Devocional não encontrado");
    }

    return devocional;
  } catch (error) {
    console.error(`Erro ao buscar devocional com ID ${id}:`, error);
    throw error;
  }
}

/**
 * Obtém todos os devocionais disponíveis
 * @param {number} limite - Limite de resultados a retornar (opcional)
 * @returns {Promise<Array>} Lista de devocionais
 */
export async function obterTodosDevocionais(limite = null) {
  try {
    // Simula um pequeno atraso de rede para dar realismo
    await new Promise((resolve) => setTimeout(resolve, 300));

    let resultado = [...devocionais];

    // Ordena por data de publicação (mais recente primeiro)
    resultado.sort(
      (a, b) => new Date(b.dataPublicacao) - new Date(a.dataPublicacao)
    );

    // Aplica limite se especificado
    if (limite && Number.isInteger(limite) && limite > 0) {
      resultado = resultado.slice(0, limite);
    }

    return resultado;
  } catch (error) {
    console.error("Erro ao obter lista de devocionais:", error);
    throw error;
  }
}

/**
 * Obtém devocional com um versículo aleatório
 * @returns {Promise<object>} Devocional com versículo aleatório
 */
export async function obterDevocionalComVersiculoAleatorio() {
  try {
    // Simula um pequeno atraso de rede para dar realismo
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Obtém um devocional aleatório
    const indiceAleatorio = Math.floor(Math.random() * devocionais.length);
    const devocional = { ...devocionais[indiceAleatorio] };

    // Busca um versículo aleatório para complementar
    const versiculoAleatorio = await bibliaService.buscarVersiculoAleatorio();

    // Adiciona o versículo aleatório ao devocional
    devocional.versiculoComplementar = versiculoAleatorio;

    return devocional;
  } catch (error) {
    console.error("Erro ao obter devocional com versículo aleatório:", error);
    throw error;
  }
}

export default {
  obterDevocionalDoDia,
  obterDevocionalPorId,
  obterTodosDevocionais,
  obterDevocionalComVersiculoAleatorio,
};
