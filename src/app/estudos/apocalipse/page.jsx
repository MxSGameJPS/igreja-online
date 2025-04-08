"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function EstudosApocalipse() {
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Simula um carregamento
    const timer = setTimeout(() => {
      setCarregando(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.apocalipsePage}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.apocalipseHero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>O Livro de Apocalipse</h1>
            <p>
              Uma jornada através das visões, profecias e simbolismos do último
              livro da Bíblia
            </p>
          </div>
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.container}>
          {carregando ? (
            <div className={styles.carregando}>
              <p>Carregando estudos sobre Apocalipse...</p>
            </div>
          ) : (
            <>
              {/* Introdução */}
              <section className={styles.introSection}>
                <h2 className={styles.sectionTitle}>
                  Sobre Esta Série de Estudos
                </h2>
                <div className={styles.divider}></div>
                <p className={styles.introText}>
                  O livro de Apocalipse é possivelmente o mais fascinante e
                  complexo de toda a Bíblia. Escrito pelo apóstolo João durante
                  seu exílio na ilha de Patmos, este livro contém visões
                  proféticas, simbolismos ricos e mensagens poderosas que têm
                  intrigado estudiosos da Bíblia por séculos.
                </p>
                <p className={styles.introText}>
                  Nesta série de estudos, vamos explorar capítulo por capítulo,
                  desvendando os significados, contextos históricos e aplicações
                  para os dias atuais. Seja você um iniciante ou um estudioso
                  experiente da Bíblia, encontrará conteúdo valioso para
                  aprofundar sua compreensão das revelações divinas.
                </p>
              </section>

              {/* Estrutura da Série */}
              <section className={styles.estruturaSection}>
                <h2 className={styles.sectionTitle}>Estrutura da Série</h2>
                <div className={styles.divider}></div>
                <div className={styles.estruturaGrid}>
                  <div className={styles.estruturaItem}>
                    <div className={styles.estruturaNumero}>1</div>
                    <div className={styles.estruturaConteudo}>
                      <h3>Introdução e Contexto</h3>
                      <p>
                        Contexto histórico, autor, data de escrita e propósito
                        do livro de Apocalipse
                      </p>
                    </div>
                  </div>

                  <div className={styles.estruturaItem}>
                    <div className={styles.estruturaNumero}>2</div>
                    <div className={styles.estruturaConteudo}>
                      <h3>As Sete Igrejas</h3>
                      <p>
                        Análise das mensagens de Cristo às sete igrejas da Ásia
                        Menor (Capítulos 1-3)
                      </p>
                    </div>
                  </div>

                  <div className={styles.estruturaItem}>
                    <div className={styles.estruturaNumero}>3</div>
                    <div className={styles.estruturaConteudo}>
                      <h3>A Visão do Trono</h3>
                      <p>
                        O trono celestial, o livro selado e o Cordeiro
                        (Capítulos 4-5)
                      </p>
                    </div>
                  </div>

                  <div className={styles.estruturaItem}>
                    <div className={styles.estruturaNumero}>4</div>
                    <div className={styles.estruturaConteudo}>
                      <h3>Os Sete Selos</h3>
                      <p>
                        O significado da abertura dos sete selos (Capítulos 6-7)
                      </p>
                    </div>
                  </div>

                  <div className={styles.estruturaItem}>
                    <div className={styles.estruturaNumero}>5</div>
                    <div className={styles.estruturaConteudo}>
                      <h3>As Sete Trombetas</h3>
                      <p>
                        A sequência de juízos representados pelas trombetas
                        (Capítulos 8-11)
                      </p>
                    </div>
                  </div>

                  <div className={styles.estruturaItem}>
                    <div className={styles.estruturaNumero}>6</div>
                    <div className={styles.estruturaConteudo}>
                      <h3>O Conflito Cósmico</h3>
                      <p>
                        A mulher, o dragão, as bestas e o falso profeta
                        (Capítulos 12-14)
                      </p>
                    </div>
                  </div>

                  <div className={styles.estruturaItem}>
                    <div className={styles.estruturaNumero}>7</div>
                    <div className={styles.estruturaConteudo}>
                      <h3>As Sete Taças</h3>
                      <p>
                        O derramamento das taças da ira de Deus (Capítulos
                        15-16)
                      </p>
                    </div>
                  </div>

                  <div className={styles.estruturaItem}>
                    <div className={styles.estruturaNumero}>8</div>
                    <div className={styles.estruturaConteudo}>
                      <h3>A Queda da Babilônia</h3>
                      <p>
                        O julgamento do sistema mundial corrompido (Capítulos
                        17-18)
                      </p>
                    </div>
                  </div>

                  <div className={styles.estruturaItem}>
                    <div className={styles.estruturaNumero}>9</div>
                    <div className={styles.estruturaConteudo}>
                      <h3>A Segunda Vinda e o Milênio</h3>
                      <p>
                        O retorno de Cristo e o reino milenar (Capítulos 19-20)
                      </p>
                    </div>
                  </div>

                  <div className={styles.estruturaItem}>
                    <div className={styles.estruturaNumero}>10</div>
                    <div className={styles.estruturaConteudo}>
                      <h3>Novos Céus e Nova Terra</h3>
                      <p>
                        A Nova Jerusalém e a conclusão da história redentora
                        (Capítulos 21-22)
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Destaques */}
              <section className={styles.destaquesSection}>
                <h2 className={styles.sectionTitle}>Destaques da Série</h2>
                <div className={styles.divider}></div>
                <div className={styles.destaquesGrid}>
                  <div className={styles.destaqueCard}>
                    <Image
                      src="/images/leão.webp"
                      alt="O Leão da Tribo de Judá"
                      width={350}
                      height={200}
                      className={styles.destaqueImg}
                    />
                    <h3>Jesus Cristo: O Alfa e o Ômega</h3>
                    <p>
                      Estudo sobre os diferentes títulos e representações de
                      Jesus em Apocalipse
                    </p>
                    <Link
                      href="/estudos/apocalipse/jesus"
                      className={styles.destaqueLink}
                    >
                      Em breve
                    </Link>
                  </div>

                  <div className={styles.destaqueCard}>
                    <Image
                      src="/images/biblia.webp"
                      alt="As 7 igrejas do Apocalipse"
                      width={350}
                      height={200}
                      className={styles.destaqueImg}
                    />
                    <h3>As Sete Igrejas da Ásia</h3>
                    <p>
                      Análise detalhada das mensagens às sete igrejas e suas
                      aplicações atuais
                    </p>
                    <Link
                      href="/estudos/apocalipse/sete-igrejas"
                      className={styles.destaqueLink}
                    >
                      Em breve
                    </Link>
                  </div>

                  <div className={styles.destaqueCard}>
                    <Image
                      src="/images/leão.webp"
                      alt="Jesus está voltando"
                      width={350}
                      height={200}
                      className={styles.destaqueImg}
                    />
                    <h3>Adoração Celestial</h3>
                    <p>
                      O significado da adoração no livro de Apocalipse e lições
                      para nossa vida devocional
                    </p>
                    <Link
                      href="/estudos/apocalipse/adoracao"
                      className={styles.destaqueLink}
                    >
                      Em breve
                    </Link>
                  </div>
                </div>
              </section>

              {/* Inscrição */}
              <section className={styles.inscricaoSection}>
                <div className={styles.inscricaoContainer}>
                  <h2>Receba os Estudos por Email</h2>
                  <p>
                    Inscreva-se para receber diretamente em seu email cada novo
                    estudo sobre o livro de Apocalipse. Não perca nenhum
                    conteúdo desta fascinante jornada bíblica.
                  </p>

                  <form className={styles.inscricaoForm}>
                    <input
                      type="email"
                      placeholder="Seu endereço de e-mail"
                      className={styles.emailInput}
                      required
                    />
                    <button type="submit" className={styles.inscricaoBtn}>
                      Inscrever-se
                    </button>
                  </form>

                  <p className={styles.privacidade}>
                    Respeitamos sua privacidade. Você pode cancelar a inscrição
                    a qualquer momento.
                  </p>
                </div>
              </section>

              {/* Navegação */}
              <section className={styles.navegacaoSection}>
                <Link href="/estudos" className={styles.voltarBtn}>
                  ← Voltar para Estudos Bíblicos
                </Link>
              </section>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
