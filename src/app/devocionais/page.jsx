"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import devocionalService from "../services/devocionalService";

export default function Devocionais() {
  const [carregando, setCarregando] = useState(true);
  const [devocionais, setDevocionais] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarDevocionais = async () => {
      setCarregando(true);
      try {
        const resultado = await devocionalService.obterTodosDevocionais();
        setDevocionais(resultado);
      } catch (error) {
        console.error("Erro ao buscar devocionais:", error);
        setErro(
          "Não foi possível carregar a lista de devocionais. Por favor, tente novamente mais tarde."
        );
      } finally {
        setCarregando(false);
      }
    };

    buscarDevocionais();
  }, []);

  const formatarData = (dataString) => {
    const data = new Date(dataString);
    return data.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className={styles.devocionaisPage}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.devocionaisHero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>Arquivo de Devocionais</h1>
            <p>
              Explore nossos devocionais anteriores para aprofundar seu estudo
              bíblico
            </p>
          </div>
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.introSection}>
            <h2 className={styles.sectionTitle}>Devocionais Recentes</h2>
            <div className={styles.divider}></div>
            <p className={styles.introText}>
              Nossos devocionais diários são escritos para ajudar você a
              refletir sobre as Escrituras e aplicar os ensinamentos bíblicos em
              sua vida diária. Abaixo você encontrará nossos devocionais mais
              recentes.
            </p>

            <div className={styles.ctaDevocional}>
              <Link href="/devocional" className={styles.ctaBtn}>
                Ver Devocional de Hoje
              </Link>
            </div>
          </section>

          <section className={styles.devocionaisListaSection}>
            {carregando ? (
              <div className={styles.carregando}>
                <p>Carregando devocionais...</p>
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
            ) : devocionais.length > 0 ? (
              <div className={styles.devocionaisLista}>
                {devocionais.map((devocional) => (
                  <div key={devocional.id} className={styles.devocionalCard}>
                    <div className={styles.devocionalData}>
                      {formatarData(devocional.dataPublicacao)}
                    </div>
                    <div className={styles.devocionalConteudo}>
                      <h3 className={styles.devocionalTitulo}>
                        {devocional.titulo}
                      </h3>
                      <p className={styles.devocionalAutor}>
                        Por: {devocional.autor}
                      </p>
                      <div className={styles.versiculoPreview}>
                        <p className={styles.versiculoTextoPreview}>
                          "
                          {devocional.versiculoChave.texto.length > 100
                            ? `${devocional.versiculoChave.texto.substring(
                                0,
                                100
                              )}...`
                            : devocional.versiculoChave.texto}
                          "
                        </p>
                        <p className={styles.versiculoReferenciaPreview}>
                          {devocional.versiculoChave.referencia}
                        </p>
                      </div>
                      <Link
                        href={`/devocional/${devocional.id}`}
                        className={styles.lerMaisBtn}
                      >
                        Ler Devocional Completo
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.semDevocionais}>
                <p>Nenhum devocional disponível no momento.</p>
              </div>
            )}
          </section>

          <section className={styles.inscricaoSection}>
            <div className={styles.inscricaoContainer}>
              <h2>Receba Devocionais Diários</h2>
              <p>
                Inscreva-se para receber nossos devocionais diretamente em seu
                e-mail todas as manhãs. Uma maneira simples de começar seu dia
                com reflexões baseadas nas Escrituras.
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
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
