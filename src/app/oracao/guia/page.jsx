"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function GuiaOracao() {
  const [topicosAtivos, setTopicosAtivos] = useState({
    preparacao: false,
    tecnicas: false,
    jejum: false,
    estudoBiblico: false,
    intercessao: false,
  });

  const toggleTopico = (topico) => {
    setTopicosAtivos((prev) => ({
      ...prev,
      [topico]: !prev[topico],
    }));
  };

  return (
    <div className={styles.guiaPage}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.guiaHero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>Guia de Oração e Jejum</h1>
            <p>
              Aprenda a desenvolver uma vida de oração mais profunda e
              significativa
            </p>
          </div>
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Introdução */}
          <section className={styles.introSection}>
            <div className={styles.introContent}>
              <h2 className={styles.sectionTitle}>Por Que Orar?</h2>
              <div className={styles.divider}></div>
              <p>
                A oração é um diálogo com Deus, uma comunicação bidirecional
                através da qual expressamos nossos pensamentos, sentimentos,
                necessidades e agradecimentos a Deus, e também escutamos sua
                voz. É uma das práticas espirituais mais poderosas e
                transformadoras disponíveis para os cristãos.
              </p>
              <p>
                Jesus, nosso maior exemplo, dedicava tempo significativo à
                oração, muitas vezes retirando-se para lugares solitários para
                comungar com o Pai. Através da oração, encontramos orientação,
                força, conforto, paz e um relacionamento mais profundo com nosso
                Criador.
              </p>
              <p>
                Este guia foi elaborado para ajudá-lo a desenvolver uma vida de
                oração mais rica e significativa, oferecendo princípios
                bíblicos, dicas práticas e insights sobre como combinar a oração
                com outras disciplinas espirituais como o jejum.
              </p>
            </div>
            <div className={styles.introImagem}>
              <Image
                src="/images/oração.jpg"
                alt="Pessoa orando"
                width={400}
                height={300}
                className={styles.introImg}
              />
            </div>
          </section>

          {/* Fundamentos da Oração */}
          <section className={styles.fundamentosSection}>
            <h2 className={styles.sectionTitle}>
              Fundamentos Bíblicos da Oração
            </h2>
            <div className={styles.divider}></div>
            <div className={styles.fundamentosGrid}>
              <div className={styles.fundamentoCard}>
                <h3>Comunicação Contínua</h3>
                <p className={styles.versiculoReferencia}>
                  1 Tessalonicenses 5:16-18
                </p>
                <p className={styles.versiculo}>
                  "Regozijai-vos sempre. Orai sem cessar. Em tudo dai graças,
                  porque esta é a vontade de Deus em Cristo Jesus para
                  convosco."
                </p>
                <p>
                  A oração não deve ser apenas um evento ocasional, mas uma
                  atitude contínua de comunhão com Deus ao longo do dia.
                </p>
              </div>

              <div className={styles.fundamentoCard}>
                <h3>Relacionamento Íntimo</h3>
                <p className={styles.versiculoReferencia}>Mateus 6:6</p>
                <p className={styles.versiculo}>
                  "Tu, porém, quando orares, entra no teu quarto e, fechando a
                  tua porta, ora a teu Pai que está em secreto; e teu Pai, que
                  vê em secreto, te recompensará."
                </p>
                <p>
                  A oração é uma expressão de intimidade com Deus, não uma
                  demonstração pública de espiritualidade.
                </p>
              </div>

              <div className={styles.fundamentoCard}>
                <h3>Abertura e Honestidade</h3>
                <p className={styles.versiculoReferencia}>Salmos 62:8</p>
                <p className={styles.versiculo}>
                  "Confiai nele, ó povo, em todo o tempo; derramai perante ele o
                  vosso coração. Deus é o nosso refúgio."
                </p>
                <p>
                  Na oração, podemos ser completamente honestos com Deus,
                  expressando nossos pensamentos, emoções e lutas mais
                  profundas.
                </p>
              </div>

              <div className={styles.fundamentoCard}>
                <h3>Perseverança</h3>
                <p className={styles.versiculoReferencia}>Lucas 18:1</p>
                <p className={styles.versiculo}>
                  "E contou-lhes também uma parábola sobre o dever de orar
                  sempre e nunca desfalecer."
                </p>
                <p>
                  A oração eficaz muitas vezes requer persistência, não
                  desistindo mesmo quando as respostas parecem demorar.
                </p>
              </div>
            </div>
          </section>

          {/* Tópicos Expansíveis */}
          <section className={styles.topicosSection}>
            <h2 className={styles.sectionTitle}>Aprofundando na Oração</h2>
            <div className={styles.divider}></div>

            <div className={styles.topicoItem}>
              <button
                className={styles.topicoHeader}
                onClick={() => toggleTopico("preparacao")}
                aria-expanded={topicosAtivos.preparacao}
              >
                <h3>Preparação para a Oração</h3>
                <span
                  className={
                    topicosAtivos.preparacao
                      ? styles.setaMenos
                      : styles.setaMais
                  }
                ></span>
              </button>
              {topicosAtivos.preparacao && (
                <div className={styles.topicoConteudo}>
                  <ol>
                    <li>
                      <strong>Encontre um lugar adequado:</strong> Busque um
                      ambiente tranquilo, livre de distrações, onde você possa
                      se concentrar inteiramente em Deus.
                    </li>
                    <li>
                      <strong>Defina um horário regular:</strong> Estabeleça um
                      horário consistente para oração, idealmente no início do
                      dia, antes que as demandas cotidianas comecem a surgir.
                    </li>
                    <li>
                      <strong>Prepare seu coração:</strong> Comece com um
                      momento de quietude e reflexão, reconhecendo a presença de
                      Deus e abrindo-se para ouvir Sua voz.
                    </li>
                    <li>
                      <strong>Use a Escritura:</strong> Inicie sua oração lendo
                      e meditando em um trecho da Bíblia, permitindo que a
                      Palavra de Deus molde seus pensamentos e orações.
                    </li>
                    <li>
                      <strong>Tenha um caderno de oração:</strong> Mantenha um
                      diário onde você possa registrar suas orações, insights e
                      as respostas que receber ao longo do tempo.
                    </li>
                  </ol>
                </div>
              )}
            </div>

            <div className={styles.topicoItem}>
              <button
                className={styles.topicoHeader}
                onClick={() => toggleTopico("tecnicas")}
                aria-expanded={topicosAtivos.tecnicas}
              >
                <h3>Técnicas e Modelos de Oração</h3>
                <span
                  className={
                    topicosAtivos.tecnicas ? styles.setaMenos : styles.setaMais
                  }
                ></span>
              </button>
              {topicosAtivos.tecnicas && (
                <div className={styles.topicoConteudo}>
                  <h4>O Modelo da Oração do Senhor (Mateus 6:9-13)</h4>
                  <p>
                    A oração que Jesus ensinou a seus discípulos oferece um
                    excelente modelo estrutural:
                  </p>
                  <ul>
                    <li>
                      <strong>Adoração:</strong> "Pai nosso, que estás nos céus,
                      santificado seja o teu nome."
                    </li>
                    <li>
                      <strong>Submissão:</strong> "Venha o teu reino, seja feita
                      a tua vontade."
                    </li>
                    <li>
                      <strong>Petição:</strong> "O pão nosso de cada dia nos dá
                      hoje."
                    </li>
                    <li>
                      <strong>Confissão:</strong> "Perdoa-nos as nossas dívidas,
                      assim como perdoamos..."
                    </li>
                    <li>
                      <strong>Proteção:</strong> "Não nos induzas à tentação,
                      mas livra-nos do mal."
                    </li>
                    <li>
                      <strong>Reconhecimento:</strong> "Teu é o reino, o poder e
                      a glória para sempre."
                    </li>
                  </ul>

                  <h4>O Método A.C.T.S.</h4>
                  <p>
                    Uma abordagem simples e eficaz para estruturar suas orações:
                  </p>
                  <ul>
                    <li>
                      <strong>Adoração:</strong> Comece louvando a Deus por quem
                      Ele é.
                    </li>
                    <li>
                      <strong>Confissão:</strong> Reconheça seus pecados e peça
                      perdão.
                    </li>
                    <li>
                      <strong>Agradecimento (Thanksgiving):</strong> Expresse
                      gratidão pelas bênçãos recebidas.
                    </li>
                    <li>
                      <strong>Súplica:</strong> Apresente seus pedidos e
                      intercessões.
                    </li>
                  </ul>

                  <h4>Orações Contemplativas</h4>
                  <p>
                    Práticas que enfatizam a escuta e a receptividade à presença
                    de Deus:
                  </p>
                  <ul>
                    <li>
                      <strong>Lectio Divina:</strong> Leitura meditativa da
                      Escritura, permitindo que Deus fale através da Sua
                      Palavra.
                    </li>
                    <li>
                      <strong>Oração Centrante:</strong> Simplificando a mente
                      para focar inteiramente na presença de Deus.
                    </li>
                    <li>
                      <strong>Exame de Consciência:</strong> Revisão do dia com
                      Deus, reconhecendo Sua presença nos eventos cotidianos.
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className={styles.topicoItem}>
              <button
                className={styles.topicoHeader}
                onClick={() => toggleTopico("jejum")}
                aria-expanded={topicosAtivos.jejum}
              >
                <h3>Combinando Oração e Jejum</h3>
                <span
                  className={
                    topicosAtivos.jejum ? styles.setaMenos : styles.setaMais
                  }
                ></span>
              </button>
              {topicosAtivos.jejum && (
                <div className={styles.topicoConteudo}>
                  <h4>O Que é o Jejum Bíblico?</h4>
                  <p>
                    O jejum é a prática voluntária de abster-se de alimentos (e
                    às vezes de bebidas) por um período específico, com o
                    propósito de focar mais intensamente na oração e na busca
                    por Deus. É uma disciplina espiritual que demonstra
                    humildade diante de Deus e intensifica nossa vida de oração.
                  </p>

                  <h4>Propósitos do Jejum</h4>
                  <ul>
                    <li>
                      <strong>Humilhação:</strong> Demonstrando dependência
                      completa de Deus (Esdras 8:21).
                    </li>
                    <li>
                      <strong>Arrependimento:</strong> Como sinal de verdadeira
                      contrição (Joel 2:12-13).
                    </li>
                    <li>
                      <strong>Orientação:</strong> Buscando direção divina para
                      decisões importantes (Atos 13:2-3).
                    </li>
                    <li>
                      <strong>Libertação Espiritual:</strong> Intensificando a
                      oração contra forças espirituais (Marcos 9:29).
                    </li>
                    <li>
                      <strong>Proximidade com Deus:</strong> Criando espaço para
                      uma comunhão mais profunda.
                    </li>
                  </ul>

                  <h4>Tipos de Jejum</h4>
                  <ul>
                    <li>
                      <strong>Jejum Completo:</strong> Abstinência de comida e
                      água (não recomendado por mais de 1-3 dias e com
                      supervisão médica).
                    </li>
                    <li>
                      <strong>Jejum Normal:</strong> Abstinência de alimentos,
                      mas consumindo água e líquidos.
                    </li>
                    <li>
                      <strong>Jejum Parcial:</strong> Limitando certos tipos de
                      alimentos (como Daniel, que evitou carnes e vinhos).
                    </li>
                    <li>
                      <strong>Jejum Intermitente:</strong> Saltando refeições
                      específicas (como o café da manhã ou o jantar).
                    </li>
                    <li>
                      <strong>Jejum não Alimentar:</strong> Abstendo-se de
                      atividades como mídias sociais, televisão ou
                      entretenimento.
                    </li>
                  </ul>

                  <h4>Orientações Práticas</h4>
                  <ol>
                    <li>
                      Sempre consulte um médico antes de iniciar um jejum,
                      especialmente se tiver condições de saúde pré-existentes.
                    </li>
                    <li>
                      Comece com jejuns mais curtos e gradualmente aumente a
                      duração conforme sua experiência.
                    </li>
                    <li>
                      Estabeleça objetivos claros para seu jejum – o que você
                      está buscando de Deus?
                    </li>
                    <li>
                      Dedique o tempo que normalmente gastaria comendo para
                      oração, leitura bíblica e reflexão.
                    </li>
                    <li>
                      Mantenha-se hidratado durante o jejum, bebendo bastante
                      água.
                    </li>
                    <li>
                      Evite atividades físicas intensas durante jejuns
                      prolongados.
                    </li>
                    <li>
                      Quebre o jejum gradualmente, começando com refeições leves
                      e fáceis de digerir.
                    </li>
                  </ol>
                </div>
              )}
            </div>

            <div className={styles.topicoItem}>
              <button
                className={styles.topicoHeader}
                onClick={() => toggleTopico("estudoBiblico")}
                aria-expanded={topicosAtivos.estudoBiblico}
              >
                <h3>Combinando Oração e Estudo Bíblico</h3>
                <span
                  className={
                    topicosAtivos.estudoBiblico
                      ? styles.setaMenos
                      : styles.setaMais
                  }
                ></span>
              </button>
              {topicosAtivos.estudoBiblico && (
                <div className={styles.topicoConteudo}>
                  <p>
                    A oração e o estudo da Bíblia são disciplinas
                    complementares. Quando estudamos a Escritura, estamos
                    ouvindo Deus falar através de Sua Palavra. Quando oramos,
                    estamos respondendo a Ele e engajando-nos em diálogo.
                  </p>

                  <h4>Métodos de Integração</h4>
                  <ul>
                    <li>
                      <strong>Oração antes do estudo:</strong> Comece seu tempo
                      de estudo bíblico pedindo ao Espírito Santo que ilumine
                      sua mente e coração para compreender e aplicar a Palavra.
                    </li>
                    <li>
                      <strong>Lectio Divina:</strong> Esta prática antiga
                      combina leitura, meditação, oração e contemplação da
                      Escritura, permitindo que você dialogue com Deus sobre o
                      que está lendo.
                    </li>
                    <li>
                      <strong>Orações baseadas na Escritura:</strong> Transforme
                      os textos bíblicos em orações pessoais. Por exemplo, você
                      pode orar os Salmos ou as orações de Paulo nas epístolas.
                    </li>
                    <li>
                      <strong>Journaling:</strong> Após ler um trecho da Bíblia,
                      escreva suas reflexões, questionamentos e orações
                      relacionadas ao texto.
                    </li>
                    <li>
                      <strong>Memorização e meditação:</strong> Memorize
                      versículos-chave e medite neles durante o dia,
                      transformando-os em conversas contínuas com Deus.
                    </li>
                  </ul>

                  <h4>Benefícios desta Integração</h4>
                  <ul>
                    <li>
                      Orações mais alinhadas com a vontade de Deus revelada na
                      Escritura.
                    </li>
                    <li>
                      Compreensão mais profunda da Palavra através da iluminação
                      do Espírito Santo.
                    </li>
                    <li>
                      Crescimento na capacidade de ouvir a voz de Deus no
                      cotidiano.
                    </li>
                    <li>
                      Transformação do caráter para refletir mais a semelhança
                      de Cristo.
                    </li>
                    <li>
                      Desenvolvimento de um relacionamento mais íntimo e
                      autêntico com Deus.
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className={styles.topicoItem}>
              <button
                className={styles.topicoHeader}
                onClick={() => toggleTopico("intercessao")}
                aria-expanded={topicosAtivos.intercessao}
              >
                <h3>Oração Intercessória</h3>
                <span
                  className={
                    topicosAtivos.intercessao
                      ? styles.setaMenos
                      : styles.setaMais
                  }
                ></span>
              </button>
              {topicosAtivos.intercessao && (
                <div className={styles.topicoConteudo}>
                  <p>
                    A intercessão é o ato de orar em favor de outras pessoas,
                    situações ou necessidades. É um ministério poderoso onde nos
                    colocamos como mediadores, levando as necessidades de outros
                    diante do trono de Deus.
                  </p>

                  <h4>Princípios Bíblicos da Intercessão</h4>
                  <ul>
                    <li>
                      <strong>Amor e Compaixão:</strong> A verdadeira
                      intercessão nasce de um coração que ama e se importa
                      genuinamente com os outros (1 Coríntios 13:1-3).
                    </li>
                    <li>
                      <strong>Persistência:</strong> Jesus ensinou a importância
                      da perseverança na oração através da parábola da viúva
                      persistente (Lucas 18:1-8).
                    </li>
                    <li>
                      <strong>Fé:</strong> A intercessão eficaz requer confiança
                      no poder e na bondade de Deus (Hebreus 11:6).
                    </li>
                    <li>
                      <strong>Alinhamento com a Vontade de Deus:</strong> Nossos
                      pedidos devem estar em conformidade com os propósitos de
                      Deus (1 João 5:14-15).
                    </li>
                  </ul>

                  <h4>Áreas de Intercessão</h4>
                  <ul>
                    <li>
                      <strong>Família e Amigos:</strong> Necessidades pessoais,
                      relacionamentos, crescimento espiritual.
                    </li>
                    <li>
                      <strong>Igreja:</strong> Liderança, ministérios,
                      necessidades dos membros, avivamento.
                    </li>
                    <li>
                      <strong>Comunidade:</strong> Escolas, governo local,
                      problemas sociais, evangelização.
                    </li>
                    <li>
                      <strong>Nação:</strong> Líderes políticos, questões
                      morais, paz e prosperidade.
                    </li>
                    <li>
                      <strong>Mundo:</strong> Povos não alcançados, perseguição
                      religiosa, crises humanitárias.
                    </li>
                  </ul>

                  <h4>Dicas Práticas</h4>
                  <ol>
                    <li>
                      Crie uma lista de intercessão, organizando os pedidos por
                      categorias.
                    </li>
                    <li>
                      Estabeleça horários específicos para interceder por certos
                      grupos ou necessidades.
                    </li>
                    <li>
                      Forme ou participe de um grupo de intercessão para unir
                      forças com outros crentes.
                    </li>
                    <li>
                      Use mapas ou imagens como auxílios visuais ao orar por
                      lugares específicos.
                    </li>
                    <li>
                      Registre as respostas às orações como testemunhos da
                      fidelidade de Deus.
                    </li>
                  </ol>
                </div>
              )}
            </div>
          </section>

          {/* Testemunhos */}
          <section className={styles.testemunhosSection}>
            <h2 className={styles.sectionTitle}>Testemunhos</h2>
            <div className={styles.divider}></div>
            <div className={styles.testemunhosGrid}>
              <div className={styles.testemunhoCard}>
                <p className={styles.testemunhoTexto}>
                  "Depois de começar a aplicar o método A.C.T.S. em minhas
                  orações diárias, percebi uma profunda transformação na minha
                  vida devocional. Minha conexão com Deus se tornou mais
                  autêntica e menos centrada apenas em pedidos. Aprendi a
                  adorá-Lo pelo que Ele é, não apenas pelo que Ele faz."
                </p>
                <p className={styles.testemunhoAutor}>— Maria S., 34 anos</p>
              </div>

              <div className={styles.testemunhoCard}>
                <p className={styles.testemunhoTexto}>
                  "O jejum transformou completamente minha vida de oração. Nas
                  primeiras vezes foi desafiador, mas logo descobri que ao
                  desistir do alimento físico, meu espírito se tornava mais
                  sensível à voz de Deus. Durante um jejum de três dias, recebi
                  clareza sobre uma decisão importante que mudou o rumo da minha
                  vida."
                </p>
                <p className={styles.testemunhoAutor}>— Carlos R., 45 anos</p>
              </div>

              <div className={styles.testemunhoCard}>
                <p className={styles.testemunhoTexto}>
                  "Comecei a praticar a intercessão há dois anos, após
                  participar de um grupo de oração na igreja. Manter um diário
                  de oração me ajudou a ver os padrões de como Deus responde, às
                  vezes de maneiras inesperadas. Intercessão não mudou apenas as
                  situações pelas quais oro, mas transformou meu próprio
                  coração."
                </p>
                <p className={styles.testemunhoAutor}>— Ana L., 28 anos</p>
              </div>
            </div>
          </section>

          {/* Recursos Adicionais */}
          <section className={styles.recursosSection}>
            <h2 className={styles.sectionTitle}>Recursos Recomendados</h2>
            <div className={styles.divider}></div>
            <div className={styles.recursosLista}>
              <div className={styles.recursoItem}>
                <h3>Livros sobre Oração</h3>
                <ul>
                  <li>O Poder da Oração Perseverante (Andrew Murray)</li>
                  <li>Uma Chamada à Oração (E.M. Bounds)</li>
                  <li>
                    Oração: Experimentando Intimidade com Deus (Timothy Keller)
                  </li>
                  <li>
                    Jejum: Abrindo a Porta para uma Vida Mais Profunda (Jentezen
                    Franklin)
                  </li>
                </ul>
              </div>

              <div className={styles.recursoItem}>
                <h3>Aplicativos</h3>
                <ul>
                  <li>PrayerMate - Organização de listas de oração</li>
                  <li>Echo Prayer - Lembretes e registros de oração</li>
                  <li>Abide - Orações guiadas e meditação bíblica</li>
                  <li>
                    Lectio 365 - Devocionais diários baseados em Lectio Divina
                  </li>
                </ul>
              </div>

              <div className={styles.recursoItem}>
                <h3>Cursos e Workshops</h3>
                <ul>
                  <li>
                    <Link href="/oracao/iniciante" className={styles.cursoLink}>
                      Curso Básico de Oração para Iniciantes
                    </Link>
                  </li>
                  <li>
                    <Link href="/oracao/avancado" className={styles.cursoLink}>
                      Workshop Avançado de Intercessão
                    </Link>
                  </li>
                  <li>
                    <Link href="/oracao/pratico" className={styles.cursoLink}>
                      Guia Prático de Jejum (em breve)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContainer}>
              <h2>Comece Sua Jornada de Oração Hoje</h2>
              <p>
                A oração não é uma habilidade que se domina da noite para o dia,
                mas um relacionamento que se desenvolve ao longo da vida. Comece
                de onde você está, dê pequenos passos consistentes, e permita
                que Deus transforme sua vida através da comunicação contínua com
                Ele.
              </p>
              <div className={styles.ctaBotoes}>
                <Link href="/oracao" className={styles.ctaBtn}>
                  Participar da Comunidade de Oração
                </Link>
                <a
                  href="#"
                  className={styles.ctaSecondary}
                  onClick={(e) => {
                    e.preventDefault();
                    window.print();
                  }}
                >
                  Imprimir este Guia
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
