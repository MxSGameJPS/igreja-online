"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bibliaService from "../services/bibliaService";
import estudosService from "../services/estudosService";

export default function Estudos() {
  const [carregando, setCarregando] = useState(false);
  const [carregandoEstudos, setCarregandoEstudos] = useState(false);
  const [versiculo, setVersiculo] = useState(null);
  const [estudos, setEstudos] = useState([]);
  const [erro, setErro] = useState(null);

  // Buscar um versículo aleatório para exibir como inspiração
  const buscarVersiculoInspirador = async () => {
    if (!versiculo) {
      setCarregando(true);
      try {
        const resultado = await bibliaService.buscarVersiculoAleatorio();
        setVersiculo(resultado);
      } catch (error) {
        console.error("Erro ao buscar versículo:", error);
      } finally {
        setCarregando(false);
      }
    }
  };

  // Buscar estudos disponíveis
  const buscarEstudos = async () => {
    setCarregandoEstudos(true);
    setErro(null);

    try {
      const resultado = await estudosService.buscarTodosEstudos();
      setEstudos(resultado);
    } catch (error) {
      console.error("Erro ao buscar estudos bíblicos:", error);
      setErro(
        "Não foi possível carregar os estudos bíblicos. Tente novamente mais tarde."
      );
    } finally {
      setCarregandoEstudos(false);
    }
  };

  // Chamar as funções assim que a página carregar
  useEffect(() => {
    buscarVersiculoInspirador();
    buscarEstudos();
  }, []);

  return (
    <div className={styles.estudosPage}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.estudosHero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <div className={styles.estudosHeroContent}>
            <h1>Estudos Bíblicos</h1>
            <p>Aprofunde seu conhecimento nas Escrituras e fortaleça sua fé</p>
          </div>
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Versículo Inspirador */}
          <section className={styles.versiculoSection}>
            <div className={styles.versiculoContainer}>
              <h2 className={styles.sectionTitle}>Versículo para Reflexão</h2>
              <div className={styles.divider}></div>

              <div className={styles.versiculoCard}>
                {carregando ? (
                  <p>Carregando versículo...</p>
                ) : versiculo ? (
                  <>
                    <p className={styles.versiculoTexto}>"{versiculo.text}"</p>
                    <p className={styles.versiculoReferencia}>
                      {versiculo.reference}
                    </p>
                  </>
                ) : (
                  <p>Não foi possível carregar o versículo.</p>
                )}
              </div>
            </div>
          </section>

          {/* Lista de Estudos */}
          <section className={styles.estudosListaSection}>
            <div className={styles.estudosContainer}>
              <h2 className={styles.sectionTitle}>Estudos Disponíveis</h2>
              <div className={styles.divider}></div>

              {erro && <p className={styles.mensagemErro}>{erro}</p>}

              {carregandoEstudos ? (
                <p>Carregando estudos bíblicos...</p>
              ) : (
                <div className={styles.estudosGrid}>
                  {estudos.map((estudo) => (
                    <div key={estudo.id} className={styles.estudoCard}>
                      <div className={styles.estudoImagem}>
                        <Image
                          src={estudo.imagem}
                          alt={estudo.titulo}
                          width={400}
                          height={250}
                          className={styles.estudoImg}
                        />
                      </div>
                      <div className={styles.estudoInfo}>
                        <h3>{estudo.titulo}</h3>
                        <p>{estudo.descricao}</p>
                        <Link
                          href={`/estudos/${estudo.id}`}
                          className={styles.estudoBtn}
                        >
                          Acessar Estudo
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* CTA */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContainer}>
              <h2>Deseja contribuir com estudos?</h2>
              <p>
                Se você tem interesse em compartilhar seus estudos bíblicos com
                nossa comunidade, entre em contato conosco. Valorizamos
                diferentes perspectivas e interpretações baseadas na Palavra de
                Deus.
              </p>
              <Link href="/contato" className={styles.ctaBtn}>
                Entre em Contato
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
