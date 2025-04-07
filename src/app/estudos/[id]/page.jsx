"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import estudosService from "../../services/estudosService";

export default function EstudoDetalhe() {
  const params = useParams();
  const router = useRouter();
  const [estudo, setEstudo] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarEstudo = async () => {
      // Verificar se temos um ID válido
      if (!params.id) {
        router.push("/estudos");
        return;
      }

      setCarregando(true);
      setErro(null);

      try {
        const resultado = await estudosService.buscarEstudoPorId(params.id);
        setEstudo(resultado);
      } catch (error) {
        console.error(`Erro ao buscar estudo com ID ${params.id}:`, error);
        setErro("Não foi possível encontrar o estudo solicitado.");
      } finally {
        setCarregando(false);
      }
    };

    buscarEstudo();
  }, [params.id, router]);

  return (
    <div className={styles.estudoDetalhePage}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          {carregando ? (
            <div className={styles.carregando}>
              <p>Carregando estudo...</p>
            </div>
          ) : erro ? (
            <div className={styles.erro}>
              <h2>Erro</h2>
              <p>{erro}</p>
              <Link href="/estudos" className={styles.botaoVoltar}>
                Voltar para Estudos
              </Link>
            </div>
          ) : estudo ? (
            <>
              {/* Hero do Estudo */}
              <section className={styles.estudoHero}>
                <div className={styles.estudoImagem}>
                  <Image
                    src={estudo.imagem}
                    alt={estudo.titulo}
                    width={900}
                    height={500}
                    className={styles.heroImg}
                  />
                </div>
                <div className={styles.estudoHeader}>
                  <h1>{estudo.titulo}</h1>
                  <div className={styles.estudoMeta}>
                    <p className={styles.estudoAutor}>Por: {estudo.autor}</p>
                    <p className={styles.estudoData}>
                      Publicado em:{" "}
                      {new Date(estudo.dataPublicacao).toLocaleDateString(
                        "pt-BR"
                      )}
                    </p>
                  </div>
                </div>
              </section>

              {/* Resumo */}
              <section className={styles.resumoSection}>
                <div className={styles.resumoContainer}>
                  <h2 className={styles.sectionTitle}>Resumo</h2>
                  <div className={styles.divider}></div>
                  <p className={styles.resumoTexto}>{estudo.resumo}</p>
                </div>
              </section>

              {/* Tópicos */}
              <section className={styles.topicosSection}>
                <div className={styles.topicosContainer}>
                  <h2 className={styles.sectionTitle}>Tópicos Abordados</h2>
                  <div className={styles.divider}></div>
                  <ul className={styles.topicosList}>
                    {estudo.topicos.map((topico, index) => (
                      <li key={index} className={styles.topicoItem}>
                        {topico}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Conteúdo Principal */}
              <section className={styles.conteudoSection}>
                <div className={styles.conteudoContainer}>
                  <h2 className={styles.sectionTitle}>Conteúdo do Estudo</h2>
                  <div className={styles.divider}></div>
                  <div
                    className={styles.conteudoHtml}
                    dangerouslySetInnerHTML={{ __html: estudo.conteudo }}
                  />
                </div>
              </section>

              {/* Navegação */}
              <section className={styles.navegacaoSection}>
                <div className={styles.navegacaoContainer}>
                  <Link href="/estudos" className={styles.botaoVoltar}>
                    ← Voltar para Lista de Estudos
                  </Link>
                  <div className={styles.compartilhar}>
                    <span>Compartilhar:</span>
                    <div className={styles.compartilharBotoes}>
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
              <h2>Estudo não encontrado</h2>
              <p>
                O estudo que você está procurando não existe ou foi removido.
              </p>
              <Link href="/estudos" className={styles.botaoVoltar}>
                Voltar para Estudos
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
