"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import devocionalService from "../../services/devocionalService";

export default function DevocionalDetalhes() {
  const params = useParams();
  const router = useRouter();
  const [carregando, setCarregando] = useState(true);
  const [devocional, setDevocional] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarDevocional = async () => {
      // Verificar se temos um ID válido
      if (!params.id) {
        router.push("/devocionais");
        return;
      }

      setCarregando(true);
      try {
        const resultado = await devocionalService.obterDevocionalPorId(
          params.id
        );
        setDevocional(resultado);
      } catch (error) {
        console.error(`Erro ao buscar devocional com ID ${params.id}:`, error);
        setErro("Não foi possível encontrar o devocional solicitado.");
      } finally {
        setCarregando(false);
      }
    };

    buscarDevocional();
  }, [params.id, router]);

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
    <div className={styles.devocionalDetalhePage}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          {carregando ? (
            <div className={styles.carregando}>
              <p>Carregando devocional...</p>
            </div>
          ) : erro ? (
            <div className={styles.erro}>
              <h2>Erro</h2>
              <p>{erro}</p>
              <Link href="/devocionais" className={styles.botaoVoltar}>
                Voltar para Devocionais
              </Link>
            </div>
          ) : devocional ? (
            <>
              {/* Cabeçalho do Devocional */}
              <section className={styles.devocionalHeader}>
                <div className={styles.dataPublicacao}>
                  {formatarData(devocional.dataPublicacao)}
                </div>
                <h1 className={styles.devocionalTitulo}>{devocional.titulo}</h1>
                <p className={styles.devocionalAutor}>
                  Por: {devocional.autor}
                </p>
              </section>

              {/* Versículo Chave */}
              <section className={styles.versiculoChaveSection}>
                <div className={styles.versiculoChaveContainer}>
                  <h2 className={styles.sectionTitle}>Versículo-Chave</h2>
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
                  <h2 className={styles.sectionTitle}>Reflexão</h2>
                  <div className={styles.divider}></div>

                  <div
                    className={styles.conteudoHtml}
                    dangerouslySetInnerHTML={{ __html: devocional.conteudo }}
                  />
                </div>
              </section>

              {/* Navegação e Compartilhamento */}
              <section className={styles.navegacaoSection}>
                <div className={styles.navegacaoContainer}>
                  <div className={styles.navegacaoBotoes}>
                    <Link href="/devocionais" className={styles.botaoVoltar}>
                      ← Voltar para Devocionais
                    </Link>
                    <Link
                      href="/devocional"
                      className={styles.botaoDevocionalHoje}
                    >
                      Devocional de Hoje
                    </Link>
                  </div>

                  <div className={styles.compartilhar}>
                    <span>Compartilhar:</span>
                    <div className={styles.compartilharButtons}>
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
                  </div>
                </div>
              </section>
            </>
          ) : (
            <div className={styles.naoEncontrado}>
              <h2>Devocional não encontrado</h2>
              <p>
                O devocional que você está procurando não existe ou foi
                removido.
              </p>
              <Link href="/devocionais" className={styles.botaoVoltar}>
                Voltar para Devocionais
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
