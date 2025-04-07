import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import VersiculoDia from "./components/VersiculoDia";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Portal Cristão Online</h1>
            <p>Fortalecendo sua fé através da palavra de Deus</p>
            <div className={styles.heroBtns}>
              <Link href="/biblia" className={styles.primaryBtn}>
                Acessar a Bíblia
              </Link>
              <Link href="/sobre" className={styles.secondaryBtn}>
                Sobre o Portal
              </Link>
            </div>
          </div>
        </section>

        {/* Seção Versículo do Dia */}
        <section className={styles.versiculoSection}>
          <div className={styles.versiculoContainer}>
            <h2 className={styles.sectionTitle}>Versículo do Dia</h2>
            <div className={styles.divider}></div>
            <VersiculoDia />
          </div>
        </section>

        {/* Recursos Principais */}
        <section className={styles.recursosSection}>
          <div className={styles.recursosContainer}>
            <h2 className={styles.sectionTitle}>Recursos Disponíveis</h2>
            <div className={styles.divider}></div>
            <div className={styles.recursosGrid}>
              <div className={styles.recursoCard}>
                <div className={styles.recursoIcone}>
                  <i className="fas fa-bible"></i>
                </div>
                <h3>Bíblia Online</h3>
                <p>
                  Acesse a Bíblia Sagrada em diversas traduções, realize buscas
                  por palavras-chave e compartilhe versículos.
                </p>
                <Link href="/biblia" className={styles.recursoBtn}>
                  Acessar
                </Link>
              </div>

              <div className={styles.recursoCard}>
                <div className={styles.recursoIcone}>
                  <i className="fas fa-pray"></i>
                </div>
                <h3>Pedidos de Oração</h3>
                <p>
                  Compartilhe seus pedidos de oração e interceda por outros
                  irmãos da comunidade cristã.
                </p>
                <Link href="/oracao" className={styles.recursoBtn}>
                  Participar
                </Link>
              </div>

              <div className={styles.recursoCard}>
                <div className={styles.recursoIcone}>
                  <i className="fas fa-book-reader"></i>
                </div>
                <h3>Estudos Bíblicos</h3>
                <p>
                  Encontre estudos temáticos, comentários e material para
                  aprofundar seu conhecimento da Palavra.
                </p>
                <Link href="/estudos" className={styles.recursoBtn}>
                  Explorar
                </Link>
              </div>

              <div className={styles.recursoCard}>
                <div className={styles.recursoIcone}>
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h3>Devocional Diário</h3>
                <p>
                  Meditações diárias para fortalecer sua caminhada espiritual e
                  manter o foco em Deus.
                </p>
                <Link href="/devocional" className={styles.recursoBtn}>
                  Ler Hoje
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Destaques e Tópicos Recentes */}
        <section className={styles.destaquesSection}>
          <div className={styles.destaquesContainer}>
            <h2 className={styles.sectionTitle}>Destaques</h2>
            <div className={styles.divider}></div>
            <div className={styles.destaquesGrid}>
              <div className={styles.destaqueCard}>
                <div className={styles.destaqueImagem}>
                  <Image
                    src="/images/leão.webp"
                    alt="Estudos sobre o Livro de Apocalipse"
                    width={400}
                    height={250}
                    className={styles.destaqueImg}
                  />
                </div>
                <div className={styles.destaqueInfo}>
                  <h3>Série: O Livro de Apocalipse</h3>
                  <p>
                    Uma jornada através do último livro da Bíblia, desvendando
                    suas profecias e simbolismos.
                  </p>
                  <Link
                    href="/estudos/apocalipse"
                    className={styles.saibaMaisBtn}
                  >
                    Saiba Mais
                  </Link>
                </div>
              </div>

              <div className={styles.destaqueCard}>
                <div className={styles.destaqueImagem}>
                  <Image
                    src="/images/oração.jpg"
                    alt="Guia de Oração e Jejum"
                    width={400}
                    height={250}
                    className={styles.destaqueImg}
                  />
                </div>
                <div className={styles.destaqueInfo}>
                  <h3>Guia de Oração e Jejum</h3>
                  <p>
                    Aprenda como desenvolver uma vida de oração mais profunda e
                    significativa.
                  </p>
                  <Link href="/oracao/guia" className={styles.saibaMaisBtn}>
                    Saiba Mais
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaOverlay}></div>
          <div className={styles.ctaContent}>
            <h2>Cresça em Conhecimento e Fé</h2>
            <p>
              Explore nossos recursos e fortaleça sua caminhada espiritual
              diariamente.
            </p>
            <Link href="/cadastro" className={styles.ctaBtn}>
              Cadastre-se Gratuitamente
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
