"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import devocionalService from "../services/devocionalService";

export default function Devocional() {
  const [carregando, setCarregando] = useState(true);
  const [devocional, setDevocional] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarDevocional = async () => {
      setCarregando(true);
      try {
        const resultado =
          await devocionalService.obterDevocionalComVersiculoAleatorio();
        setDevocional(resultado);
      } catch (error) {
        console.error("Erro ao buscar devocional:", error);
        setErro(
          "Não foi possível carregar o devocional do dia. Por favor, tente novamente mais tarde."
        );
      } finally {
        setCarregando(false);
      }
    };

    buscarDevocional();
  }, []);

  const formatarData = (dataString) => {
    const data = new Date(dataString);
    return data.toLocaleDateString("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className={styles.devocionalPage}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.devocionalHero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>Devocional Diário</h1>
            <p>Um momento diário para reflexão e crescimento espiritual</p>
          </div>
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.container}>
          {carregando ? (
            <div className={styles.carregando}>
              <p>Carregando devocional diário...</p>
            </div>
          ) : erro ? (
            <div className={styles.erro}>
              <h2>Erro</h2>
              <p>{erro}</p>
              <button
                className={styles.botaoTentarNovamente}
                onClick={() => window.location.reload()}
              >
                Tentar Novamente
              </button>
            </div>
          ) : devocional ? (
            <>
              {/* Cabeçalho do Devocional */}
              <section className={styles.devocionalHeader}>
                <h2 className={styles.devocionalTitulo}>{devocional.titulo}</h2>
                <div className={styles.devocionalMeta}>
                  <p className={styles.devocionalAutor}>
                    Por: {devocional.autor}
                  </p>
                  <p className={styles.devocionalData}>
                    {formatarData(devocional.dataPublicacao)}
                  </p>
                </div>
              </section>

              {/* Versículo Chave */}
              <section className={styles.versiculoChaveSection}>
                <div className={styles.versiculoChaveContainer}>
                  <h3 className={styles.sectionTitle}>Versículo-Chave</h3>
                  <div className={styles.divider}></div>

                  <div className={styles.versiculoCard}>
                    <p className={styles.versiculoTexto}>
                      "{devocional.versiculoChave.texto}"
                    </p>
                    <p className={styles.versiculoReferencia}>
                      {devocional.versiculoChave.referencia}
                    </p>
                  </div>
                </div>
              </section>

              {/* Conteúdo do Devocional */}
              <section className={styles.conteudoSection}>
                <div className={styles.conteudoContainer}>
                  <div
                    className={styles.conteudoHtml}
                    dangerouslySetInnerHTML={{ __html: devocional.conteudo }}
                  />
                </div>
              </section>

              {/* Versículo Complementar */}
              {devocional.versiculoComplementar && (
                <section className={styles.versiculoComplementarSection}>
                  <div className={styles.versiculoComplementarContainer}>
                    <h3 className={styles.sectionTitle}>
                      Versículo Adicional para Reflexão
                    </h3>
                    <div className={styles.divider}></div>

                    <div className={styles.versiculoCard}>
                      <p className={styles.versiculoTexto}>
                        "{devocional.versiculoComplementar.text}"
                      </p>
                      <p className={styles.versiculoReferencia}>
                        {devocional.versiculoComplementar.reference}
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* Compartilhamento e Links */}
              <section className={styles.compartilharSection}>
                <div className={styles.compartilharContainer}>
                  <div className={styles.compartilharButtons}>
                    <span>Compartilhar:</span>
                    <button
                      className={styles.compartilharBtn}
                      aria-label="Compartilhar no WhatsApp"
                    >
                      <span>WhatsApp</span>
                    </button>
                    <button
                      className={styles.compartilharBtn}
                      aria-label="Compartilhar no Facebook"
                    >
                      <span>Facebook</span>
                    </button>
                    <button
                      className={styles.compartilharBtn}
                      aria-label="Compartilhar por Email"
                    >
                      <span>Email</span>
                    </button>
                  </div>
                  <div className={styles.links}>
                    <Link href="/devocionais" className={styles.linkBtn}>
                      Ver Devocionais Anteriores
                    </Link>
                    <Link href="/estudos" className={styles.linkBtn}>
                      Explorar Estudos Bíblicos
                    </Link>
                  </div>
                </div>
              </section>
            </>
          ) : (
            <div className={styles.naoEncontrado}>
              <h2>Devocional Indisponível</h2>
              <p>
                No momento não temos um devocional disponível. Por favor, tente
                novamente mais tarde.
              </p>
              <button
                className={styles.botaoTentarNovamente}
                onClick={() => window.location.reload()}
              >
                Tentar Novamente
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
