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
            <h1>Sobre Nossa Igreja</h1>
            <p>Conheça nossa história, missão e valores</p>
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
                  A Igreja Online nasceu do desejo de levar a Palavra de Deus a
                  todas as pessoas, independentemente de onde estejam. Fundada
                  em 2010, nossa comunidade começou como um pequeno grupo de
                  estudo bíblico que se reunia em uma casa simples.
                </p>

                <p>
                  Com o passar dos anos, nossa congregação cresceu, e em 2015
                  pudemos inaugurar nosso primeiro templo. A cada dia, mais
                  pessoas se juntavam à nossa comunidade, atraídas pela mensagem
                  de amor, esperança e fé que compartilhamos.
                </p>

                <p>
                  Em 2020, diante dos desafios impostos pela pandemia,
                  expandimos nossa presença online, alcançando fiéis em diversas
                  partes do mundo. Hoje, somos uma igreja que mantém suas portas
                  físicas e virtuais abertas para todos que desejam conhecer e
                  se aproximar de Deus.
                </p>
              </div>

              <div className={styles.historiaImagem}>
                <Image
                  src="/images/leão.webp"
                  alt="História da Igreja"
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
                  Levar a Palavra de Deus a todas as pessoas, em todos os
                  lugares, promovendo a transformação de vidas por meio da
                  mensagem do Evangelho de Jesus Cristo.
                </p>
              </div>

              <div className={styles.missaoCard}>
                <div className={styles.cardIcone}>👁️</div>
                <h3>Visão</h3>
                <p>
                  Ser uma igreja referência na propagação do amor de Cristo,
                  formando discípulos comprometidos com a Palavra e com impacto
                  positivo na sociedade.
                </p>
              </div>

              <div className={styles.missaoCard}>
                <div className={styles.cardIcone}>❤️</div>
                <h3>Amor</h3>
                <p>
                  Manifestamos o amor de Cristo em tudo o que fazemos, acolhendo
                  cada pessoa com respeito e compaixão, independentemente de sua
                  origem ou história.
                </p>
              </div>

              <div className={styles.missaoCard}>
                <div className={styles.cardIcone}>📖</div>
                <h3>Palavra</h3>
                <p>
                  Valorizamos a Bíblia como autoridade em nossa fé e prática,
                  buscando estudá-la e aplicá-la em nossas vidas diariamente.
                </p>
              </div>

              <div className={styles.missaoCard}>
                <div className={styles.cardIcone}>🙏</div>
                <h3>Oração</h3>
                <p>
                  Cremos no poder da oração como meio de comunicação com Deus e
                  como instrumento de transformação pessoal e comunitária.
                </p>
              </div>

              <div className={styles.missaoCard}>
                <div className={styles.cardIcone}>🤝</div>
                <h3>Comunhão</h3>
                <p>
                  Cultivamos relacionamentos genuínos, baseados no respeito
                  mútuo e na unidade do corpo de Cristo, fortalecendo nossa
                  comunidade de fé.
                </p>
              </div>
            </div>
          </section>

          {/* Seção de Liderança */}
          <section className={styles.liderancaSection}>
            <div className={styles.sectionHeader}>
              <h2>Nossa Liderança</h2>
              <div className={styles.divider}></div>
            </div>

            <div className={styles.liderancaGrid}>
              <div className={styles.liderCard}>
                <div className={styles.liderImagem}>
                  <Image
                    src="/images/espirito-santo.jpg"
                    alt="Pastor João Silva"
                    width={200}
                    height={200}
                    className={styles.liderFoto}
                  />
                </div>
                <h3>Pr. João Silva</h3>
                <p className={styles.liderCargo}>Pastor Presidente</p>
                <p className={styles.liderBio}>
                  Servindo há mais de 20 anos no ministério, o Pastor João
                  lidera nossa igreja com sabedoria e amor.
                </p>
              </div>

              <div className={styles.liderCard}>
                <div className={styles.liderImagem}>
                  <Image
                    src="/images/oração.jpg"
                    alt="Maria Oliveira"
                    width={200}
                    height={200}
                    className={styles.liderFoto}
                  />
                </div>
                <h3>Pra. Maria Oliveira</h3>
                <p className={styles.liderCargo}>Pastora de Louvor</p>
                <p className={styles.liderBio}>
                  Com seu coração apaixonado por adoração, a Pastora Maria
                  coordena nosso ministério de música.
                </p>
              </div>

              <div className={styles.liderCard}>
                <div className={styles.liderImagem}>
                  <Image
                    src="/images/biblia.webp"
                    alt="Paulo Santos"
                    width={200}
                    height={200}
                    className={styles.liderFoto}
                  />
                </div>
                <h3>Pr. Paulo Santos</h3>
                <p className={styles.liderCargo}>Pastor de Ensino</p>
                <p className={styles.liderBio}>
                  Responsável pelos estudos bíblicos e formação teológica em
                  nossa comunidade.
                </p>
              </div>
            </div>
          </section>

          {/* Seção de Participação */}
          <section className={styles.participacaoSection}>
            <div className={styles.participacaoCard}>
              <h2>Faça Parte da Nossa Comunidade</h2>
              <p>
                Queremos te convidar a conhecer mais sobre nossa igreja e
                participar de nossas atividades. Venha nos visitar em um de
                nossos cultos ou entre em contato para mais informações.
              </p>
              <div className={styles.participacaoBotoes}>
                <Link href="/eventos" className={styles.participacaoButton}>
                  Ver Horários de Cultos
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
