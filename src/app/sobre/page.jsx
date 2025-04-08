import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Sobre() {
  return (
    <div className={styles.sobrePage}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.sobreHero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <div className={styles.sobreHeroContent}>
            <h1>Sobre o Portal</h1>
            <p>Conheça nossa missão, valores e como apoiar esse ministério</p>
            <div className={styles.versiculoDestaque}>
              "Examinais as Escrituras, porque vós cuidais ter nelas a vida
              eterna, e são elas que de mim testificam." - João 5:39
            </div>
          </div>
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Seção de História */}
          <section className={styles.historiaSection}>
            <div className={styles.sectionHeader}>
              <h2>Nossa História</h2>
              <div className={styles.divider}></div>
            </div>

            <div className={styles.historiaConteudo}>
              <div className={styles.historiaTexto}>
                <p>
                  O Portal Cristão Online nasceu do desejo de democratizar o
                  acesso à Palavra de Deus e recursos de estudo bíblico de
                  qualidade para todos os cristãos. Este é um projeto novo,
                  ainda em desenvolvimento, criado com a visão de compartilhar
                  estudos bíblicos e devocionais diários com todos que buscam
                  crescer na fé.
                </p>

                <p>
                  Estamos trabalhando continuamente para expandir nossos
                  recursos e atender às diferentes necessidades dos usuários.
                  Nossa meta é oferecer ferramentas de busca na Bíblia, estudos
                  temáticos, materiais para reflexão e crescimento espiritual,
                  além de recursos para louvor e adoração.
                </p>

                <p>
                  Nossa visão é ser um ministério digital comprometido em
                  fornecer conteúdo bíblico de qualidade, acessível a qualquer
                  pessoa com conexão à internet, independentemente de onde
                  esteja. Queremos que cada cristão tenha acesso às ferramentas
                  necessárias para aprofundar sua fé e conhecimento da Palavra.
                </p>
              </div>

              <div className={styles.historiaImagem}>
                <Image
                  src="/images/biblia.webp"
                  alt="Bíblia Sagrada"
                  width={400}
                  height={300}
                  className={styles.imagemArredondada}
                />
              </div>
            </div>
          </section>

          {/* Seção de Missão e Valores */}
          <section className={styles.missaoSection}>
            <div className={styles.sectionHeader}>
              <h2>Nossa Missão e Valores</h2>
              <div className={styles.divider}></div>
            </div>

            <div className={styles.missaoValoresGrid}>
              <div className={styles.missaoCard}>
                <div className={styles.cardIcone}>🕊️</div>
                <h3>Missão</h3>
                <p>
                  Proporcionar acesso livre e de qualidade à Bíblia Sagrada e
                  recursos de estudo bíblico para fortalecer a fé e o
                  conhecimento de cristãos em todo o mundo.
                </p>
              </div>

              <div className={styles.missaoCard}>
                <div className={styles.cardIcone}>👁️</div>
                <h3>Visão</h3>
                <p>
                  Ser o principal portal de referência para estudo bíblico e
                  recursos cristãos em língua portuguesa, acessível a todos e
                  comprometido com a fidelidade às Escrituras.
                </p>
              </div>

              <div className={styles.missaoCard}>
                <div className={styles.cardIcone}>❤️</div>
                <h3>Acessibilidade</h3>
                <p>
                  Acreditamos que o conhecimento bíblico deve estar disponível
                  para todos, independentemente de limitações geográficas,
                  financeiras ou físicas.
                </p>
              </div>

              <div className={styles.missaoCard}>
                <div className={styles.cardIcone}>📖</div>
                <h3>Fidelidade</h3>
                <p>
                  Comprometemo-nos com a precisão e fidelidade ao texto bíblico,
                  mantendo o respeito pela interpretação histórica das
                  Escrituras.
                </p>
              </div>

              <div className={styles.missaoCard}>
                <div className={styles.cardIcone}>🙏</div>
                <h3>Espiritualidade</h3>
                <p>
                  Reconhecemos que o estudo bíblico vai além do conhecimento
                  acadêmico e deve promover uma conexão espiritual mais profunda
                  com Deus.
                </p>
              </div>

              <div className={styles.missaoCard}>
                <div className={styles.cardIcone}>🤝</div>
                <h3>Comunidade</h3>
                <p>
                  Valorizamos a construção de uma comunidade virtual onde
                  cristãos possam compartilhar conhecimento, experiências e
                  apoio mútuo.
                </p>
              </div>
            </div>
          </section>

          {/* Seção de Recursos */}
          <section className={styles.recursosSection}>
            <div className={styles.sectionHeader}>
              <h2>Nossos Recursos</h2>
              <div className={styles.divider}></div>
            </div>

            <div className={styles.recursosGrid}>
              <div className={styles.recursoCard}>
                <div className={styles.recursoIcone}>📱</div>
                <h3>Bíblia Online</h3>
                <p>
                  Acesso rápido e fácil a diferentes traduções da Bíblia, com
                  ferramentas de busca, marcação de versículos e leitura diária
                  personalizada.
                </p>
              </div>

              <div className={styles.recursoCard}>
                <div className={styles.recursoIcone}>📚</div>
                <h3>Estudos Bíblicos</h3>
                <p>
                  Estudos temáticos, comentários, explicações de contexto
                  histórico e análises de livros da Bíblia, desenvolvidos por
                  estudiosos respeitados.
                </p>
              </div>

              <div className={styles.recursoCard}>
                <div className={styles.recursoIcone}>🎵</div>
                <h3>Recursos de Louvor</h3>
                <p>
                  Coletânea de hinos, cânticos contemporâneos e músicas para
                  momentos de adoração pessoal ou comunitária, com letras,
                  cifras e partituras.
                </p>
              </div>

              <div className={styles.recursoCard}>
                <div className={styles.recursoIcone}>📅</div>
                <h3>Devocionais</h3>
                <p>
                  Meditações diárias, reflexões espirituais e conteúdo para
                  momentos de oração e intimidade com Deus.
                </p>
              </div>
            </div>
          </section>

          {/* Seção de Doação */}
          <section className={styles.doacaoSection}>
            <div className={styles.doacaoCard}>
              <h2>Apoie Este Ministério</h2>
              <div className={styles.divider}></div>
              <p className={styles.doacaoTexto}>
                O Portal Cristão Online está em fase inicial de desenvolvimento.
                Estamos criando este projeto com muito amor e dedicação para
                fornecer um ambiente completo para estudo bíblico e crescimento
                espiritual. Ainda temos muito a implementar e melhorar, e cada
                contribuição nos ajuda a tornar esse sonho realidade.
              </p>

              <div className={styles.planoAcesso}>
                <h3>Acesso Completo</h3>
                <div className={styles.planoPreco}>R$ 20,00</div>
                <p>
                  Com uma única doação de R$ 20,00, você terá acesso a todos os
                  recursos do site:
                </p>
                <ul className={styles.doacaoLista}>
                  <li>Todos os estudos bíblicos e comentários</li>
                  <li>Devocionais exclusivos</li>
                  <li>Ferramentas avançadas de estudo</li>
                  <li>Recursos de áudio e vídeo</li>
                  <li>Acesso a materiais para download</li>
                </ul>

                <div className={styles.instrucoesPagamento}>
                  <h4>Como fazer sua doação:</h4>
                  <ol className={styles.passosDoacao}>
                    <li>
                      Faça uma transferência PIX para:{" "}
                      <strong>CPF: 120.119.617-50</strong>
                    </li>
                    <li>
                      Envie o comprovante para o WhatsApp:{" "}
                      <strong>(51) 99339-2983</strong>
                    </li>
                    <li>Você receberá seu acesso em até 24 horas</li>
                  </ol>
                </div>
              </div>

              <p className={styles.doacaoTexto}>
                Este é um trabalho que fazemos com paixão e toda doação,
                independente do valor, faz diferença para continuarmos
                crescendo. Como diz a Palavra: "Cada um contribua segundo propôs
                no seu coração; não com tristeza, ou por necessidade; porque
                Deus ama ao que dá com alegria." - 2 Coríntios 9:7
              </p>
              <div className={styles.doacaoBotoes}>
                <Link href="/doacao" className={styles.doacaoButton}>
                  Fazer uma Doação
                </Link>
                <Link href="/contato" className={styles.contatoButton}>
                  Fale Conosco
                </Link>
              </div>
            </div>
          </section>

          {/* Seção de Participação */}
          <section className={styles.participacaoSection}>
            <div className={styles.participacaoCard}>
              <h2>Faça Parte da Nossa Comunidade</h2>
              <p>
                Convidamos você a explorar todos os recursos disponíveis em
                nosso portal e a se juntar à nossa comunidade. Cadastre-se para
                receber atualizações sobre novos conteúdos e recursos.
              </p>
              <div className={styles.participacaoBotoes}>
                <Link href="/cadastro" className={styles.participacaoButton}>
                  Cadastre-se Gratuitamente
                </Link>
                <Link href="/contato" className={styles.contatoButton}>
                  Entre em Contato
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
