"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import styles from "./page.module.css";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import comentariosService from "../../../services/comentariosService";

export default function ComentarioLivro() {
  const params = useParams();
  const livroId = params.id;

  const [carregando, setCarregando] = useState(true);
  const [comentario, setComentario] = useState(null);
  const [erro, setErro] = useState(null);
  const [capituloSelecionado, setCapituloSelecionado] = useState(null);

  useEffect(() => {
    const buscarComentario = async () => {
      setCarregando(true);
      try {
        const resultado = await comentariosService.buscarComentarioPorLivro(
          livroId
        );
        setComentario(resultado);

        // Seleciona o primeiro capítulo por padrão se existirem capítulos
        if (resultado.capitulos && resultado.capitulos.length > 0) {
          setCapituloSelecionado(resultado.capitulos[0]);
        }
      } catch (error) {
        console.error(`Erro ao buscar comentário para ${livroId}:`, error);
        setErro(`Não foi possível carregar o comentário para o livro selecionado. 
                 Por favor, tente novamente mais tarde.`);
      } finally {
        setCarregando(false);
      }
    };

    if (livroId) {
      buscarComentario();
    }
  }, [livroId]);

  const selecionarCapitulo = (capitulo) => {
    setCapituloSelecionado(capitulo);
    // Scroll para o topo da seção de conteúdo
    const conteudoElement = document.getElementById("conteudo-capitulo");
    if (conteudoElement) {
      conteudoElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.comentarioPage}>
      <Navbar />

      {carregando ? (
        <div className={styles.carregandoContainer}>
          <p className={styles.carregando}>Carregando comentário...</p>
        </div>
      ) : erro ? (
        <div className={styles.erroContainer}>
          <h2>Erro</h2>
          <p>{erro}</p>
          <Link href="/estudos/livros" className={styles.botaoVoltar}>
            Voltar para Comentários
          </Link>
        </div>
      ) : comentario ? (
        <>
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.heroOverlay}></div>
            <div className={styles.container}>
              <div className={styles.heroContent}>
                <h1>Comentário: {comentario.nome}</h1>
                <p>Por {comentario.autor}</p>
              </div>
            </div>
          </section>

          <main className={styles.main}>
            <div className={styles.container}>
              {/* Introdução */}
              <section className={styles.introSection}>
                <div className={styles.livroInfo}>
                  <div className={styles.livroImageContainer}>
                    <Image
                      src={comentario.imagemCapa}
                      alt={`Capa do comentário sobre ${comentario.nome}`}
                      width={200}
                      height={300}
                      className={styles.livroImage}
                    />
                  </div>
                  <div className={styles.livroTextoInfo}>
                    <h2 className={styles.livroTitulo}>{comentario.nome}</h2>
                    <p className={styles.livroAutor}>
                      Comentário por: {comentario.autor}
                    </p>
                    <div className={styles.divider}></div>
                    <p className={styles.livroResumo}>{comentario.resumo}</p>

                    <div className={styles.temasTags}>
                      <h3>Temas Principais</h3>
                      <div className={styles.tags}>
                        {comentario.temas &&
                          comentario.temas.map((tema, index) => (
                            <span key={index} className={styles.tag}>
                              {tema}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Seleção de Capítulos */}
              <section className={styles.capitulosSection}>
                <h2 className={styles.sectionTitle}>Capítulos Comentados</h2>
                <div className={styles.divider}></div>

                <div className={styles.capitulosNavegacao}>
                  {comentario.capitulos &&
                    comentario.capitulos.map((capitulo) => (
                      <button
                        key={capitulo.numero}
                        className={`${styles.capituloBtn} ${
                          capituloSelecionado &&
                          capituloSelecionado.numero === capitulo.numero
                            ? styles.capituloAtivo
                            : ""
                        }`}
                        onClick={() => selecionarCapitulo(capitulo)}
                      >
                        {capitulo.numero}
                      </button>
                    ))}
                </div>
              </section>

              {/* Conteúdo do Capítulo */}
              {capituloSelecionado && (
                <section
                  id="conteudo-capitulo"
                  className={styles.conteudoSection}
                >
                  <h2 className={styles.capituloTitulo}>
                    Capítulo {capituloSelecionado.numero}:{" "}
                    {capituloSelecionado.titulo}
                  </h2>
                  <div className={styles.divider}></div>

                  <div
                    className={styles.capituloConteudo}
                    dangerouslySetInnerHTML={{
                      __html: capituloSelecionado.texto,
                    }}
                  />
                </section>
              )}

              {/* Versículos Chave */}
              <section className={styles.versiculosSection}>
                <h2 className={styles.sectionTitle}>Versículos Chave</h2>
                <div className={styles.divider}></div>

                <div className={styles.versiculosLista}>
                  {comentario.versiculosChave &&
                    comentario.versiculosChave.map((versiculo, index) => (
                      <div key={index} className={styles.versiculoCard}>
                        <p className={styles.versiculoTexto}>
                          "{versiculo.texto}"
                        </p>
                        <p className={styles.versiculoReferencia}>
                          {versiculo.referencia}
                        </p>
                      </div>
                    ))}
                </div>
              </section>

              {/* Bibliografia Recomendada */}
              <section className={styles.bibliografiaSection}>
                <h2 className={styles.sectionTitle}>
                  Bibliografia Recomendada
                </h2>
                <div className={styles.divider}></div>

                <ul className={styles.bibliografiaLista}>
                  {comentario.bibliografiaRecomendada &&
                    comentario.bibliografiaRecomendada.map((livro, index) => (
                      <li key={index} className={styles.bibliografiaItem}>
                        {livro}
                      </li>
                    ))}
                </ul>
              </section>

              {/* Call to Action */}
              <section className={styles.ctaSection}>
                <div className={styles.ctaContainer}>
                  <h2>Aprofunde seus Estudos Bíblicos</h2>
                  <p>
                    Tenha acesso a todos os nossos comentários bíblicos
                    completos e recursos adicionais para enriquecer seu
                    conhecimento das Escrituras.
                  </p>
                  <Link
                    href="/estudos/livros#assinatura"
                    className={styles.ctaBtn}
                  >
                    Ver Planos de Assinatura
                  </Link>
                </div>
              </section>

              {/* Navegação */}
              <section className={styles.navegacaoSection}>
                <Link href="/estudos/livros" className={styles.botaoVoltar}>
                  ← Voltar para Comentários Bíblicos
                </Link>
              </section>
            </div>
          </main>
        </>
      ) : (
        <div className={styles.naoEncontradoContainer}>
          <h2>Comentário não encontrado</h2>
          <p>
            O comentário solicitado não está disponível ou não existe. Por
            favor, verifique o link e tente novamente.
          </p>
          <Link href="/estudos/livros" className={styles.botaoVoltar}>
            Voltar para Comentários
          </Link>
        </div>
      )}

      <Footer />
    </div>
  );
}
