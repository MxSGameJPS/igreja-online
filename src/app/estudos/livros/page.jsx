"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import comentariosService from "../../services/comentariosService";

export default function ComentariosBiblicos() {
  const [testamentoAtivo, setTestamentoAtivo] = useState("at");
  const [carregando, setCarregando] = useState(true);
  const [livros, setLivros] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarLivros = async () => {
      setCarregando(true);
      try {
        let resultado;
        if (testamentoAtivo === "at") {
          resultado = await comentariosService.buscarLivrosAT();
        } else {
          resultado = await comentariosService.buscarLivrosNT();
        }

        setLivros(resultado);
        setErro(null);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
        setErro(
          "Não foi possível carregar a lista de comentários. Por favor, tente novamente mais tarde."
        );
      } finally {
        setCarregando(false);
      }
    };

    buscarLivros();
  }, [testamentoAtivo]);

  return (
    <div className={styles.comentariosPage}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>Comentários Bíblicos</h1>
            <p>
              Ferramentas acadêmicas para um estudo aprofundado das Escrituras
            </p>
          </div>
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Introdução */}
          <section className={styles.introSection}>
            <div className={styles.introContent}>
              <h2 className={styles.sectionTitle}>Sobre Nossos Comentários</h2>
              <div className={styles.divider}></div>
              <p>
                Nossa coleção de comentários bíblicos foi desenvolvida por
                teólogos e estudiosos com ampla experiência acadêmica e
                pastoral. Cada comentário oferece uma análise contextual,
                histórica e teológica, proporcionando uma compreensão mais
                profunda da Palavra de Deus.
              </p>
              <p>
                Estes recursos são ideais para pastores, líderes, estudantes de
                teologia e qualquer pessoa interessada em explorar as Escrituras
                além de uma leitura superficial. Cada livro é abordado com rigor
                acadêmico, mas apresentado de forma acessível para todos os
                níveis de conhecimento bíblico.
              </p>
            </div>
          </section>

          {/* Seletor de Testamento */}
          <section className={styles.seletorSection}>
            <div className={styles.tabButtons}>
              <button
                className={`${styles.tabBtn} ${
                  testamentoAtivo === "at" ? styles.active : ""
                }`}
                onClick={() => setTestamentoAtivo("at")}
              >
                Antigo Testamento
              </button>
              <button
                className={`${styles.tabBtn} ${
                  testamentoAtivo === "nt" ? styles.active : ""
                }`}
                onClick={() => setTestamentoAtivo("nt")}
              >
                Novo Testamento
              </button>
            </div>
          </section>

          {/* Lista de Livros */}
          <section className={styles.livrosGrid}>
            {carregando ? (
              <div className={styles.carregandoContainer}>
                <p className={styles.carregando}>Carregando comentários...</p>
              </div>
            ) : erro ? (
              <div className={styles.erroContainer}>
                <h2>Erro</h2>
                <p>{erro}</p>
                <button
                  className={styles.botaoTentarNovamente}
                  onClick={() => window.location.reload()}
                >
                  Tentar Novamente
                </button>
              </div>
            ) : livros.length === 0 ? (
              <div className={styles.semLivrosContainer}>
                <p>
                  Nenhum comentário disponível para este testamento no momento.
                </p>
              </div>
            ) : (
              livros.map((livro) => (
                <div key={livro.id} className={styles.livroCard}>
                  <div className={styles.livroImageContainer}>
                    <Image
                      src={livro.imagemCapa}
                      alt={`Comentário sobre ${livro.nome}`}
                      width={200}
                      height={300}
                      className={styles.livroImage}
                    />
                  </div>
                  <div className={styles.livroContent}>
                    <h3>{livro.nome}</h3>
                    <p className={styles.livroAutor}>Por {livro.autor}</p>
                    <p className={styles.livroDescricao}>{livro.resumo}</p>
                    <Link
                      href={`/estudos/livros/${livro.id}`}
                      className={styles.livroLink}
                    >
                      Ver Comentário
                    </Link>
                  </div>
                </div>
              ))
            )}
          </section>

          {/* CTA: Plano de Assinatura */}
          <section id="doacao" className={styles.assinaturaSection}>
            <div className={styles.assinaturaContainer}>
              <h2>Apoie Nosso Ministério</h2>
              <p>
                O Portal Cristão foi criado e pensado para ajudar a comunidade
                evangélica, oferecendo recursos bíblicos de qualidade
                gratuitamente. Estamos desenvolvendo mais recursos como a
                inclusão da harpa cristã, além de uma IA para ajudar na criação
                de sermões e pregações.
              </p>
              <p>
                Porém, para que isso aconteça, precisamos da ajuda da
                comunidade. Qualquer doação é bem-vinda e nos ajudará a
                continuar expandindo este ministério.
              </p>
              <div className={styles.doacaoCard}>
                <h3>Faça sua contribuição</h3>
                <div className={styles.doacaoInfo}>
                  <p>
                    <strong>Chave PIX:</strong> (51) 99339-2983
                  </p>
                  <p>Suas doações serão usadas para:</p>
                  <ul className={styles.planoFeatures}>
                    <li>Manutenção e desenvolvimento do site</li>
                    <li>Criação de novos recursos bíblicos</li>
                    <li>Desenvolvimento da IA para auxílio em sermões</li>
                    <li>Inclusão da harpa cristã</li>
                    <li>Ampliação dos comentários bíblicos</li>
                  </ul>
                </div>
              </div>
              <p className={styles.planoInfo}>
                Toda doação, por menor que seja, faz uma grande diferença para
                nossa missão. Que Deus abençoe sua generosidade!
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
