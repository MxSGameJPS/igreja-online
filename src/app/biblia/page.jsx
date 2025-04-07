"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bibliaService from "../services/bibliaService";

const livrosBiblia = [
  { id: "GEN", nome: "Gênesis", abrev: "gn" },
  { id: "EXO", nome: "Êxodo", abrev: "ex" },
  { id: "LEV", nome: "Levítico", abrev: "lv" },
  { id: "NUM", nome: "Números", abrev: "nm" },
  { id: "DEU", nome: "Deuteronômio", abrev: "dt" },
  { id: "JOS", nome: "Josué", abrev: "js" },
  { id: "JDG", nome: "Juízes", abrev: "jz" },
  { id: "RUT", nome: "Rute", abrev: "rt" },
  { id: "1SA", nome: "1 Samuel", abrev: "1sm" },
  { id: "2SA", nome: "2 Samuel", abrev: "2sm" },
  { id: "1KI", nome: "1 Reis", abrev: "1rs" },
  { id: "2KI", nome: "2 Reis", abrev: "2rs" },
  { id: "1CH", nome: "1 Crônicas", abrev: "1cr" },
  { id: "2CH", nome: "2 Crônicas", abrev: "2cr" },
  { id: "EZR", nome: "Esdras", abrev: "ed" },
  { id: "NEH", nome: "Neemias", abrev: "ne" },
  { id: "EST", nome: "Ester", abrev: "et" },
  { id: "JOB", nome: "Jó", abrev: "jó" },
  { id: "PSA", nome: "Salmos", abrev: "sl" },
  { id: "PRO", nome: "Provérbios", abrev: "pv" },
  { id: "ECC", nome: "Eclesiastes", abrev: "ec" },
  { id: "SNG", nome: "Cânticos", abrev: "ct" },
  { id: "ISA", nome: "Isaías", abrev: "is" },
  { id: "JER", nome: "Jeremias", abrev: "jr" },
  { id: "LAM", nome: "Lamentações", abrev: "lm" },
  { id: "EZK", nome: "Ezequiel", abrev: "ez" },
  { id: "DAN", nome: "Daniel", abrev: "dn" },
  { id: "HOS", nome: "Oséias", abrev: "os" },
  { id: "JOL", nome: "Joel", abrev: "jl" },
  { id: "AMO", nome: "Amós", abrev: "am" },
  { id: "OBA", nome: "Obadias", abrev: "ob" },
  { id: "JON", nome: "Jonas", abrev: "jn" },
  { id: "MIC", nome: "Miquéias", abrev: "mq" },
  { id: "NAM", nome: "Naum", abrev: "na" },
  { id: "HAB", nome: "Habacuque", abrev: "hc" },
  { id: "ZEP", nome: "Sofonias", abrev: "sf" },
  { id: "HAG", nome: "Ageu", abrev: "ag" },
  { id: "ZEC", nome: "Zacarias", abrev: "zc" },
  { id: "MAL", nome: "Malaquias", abrev: "ml" },
  { id: "MAT", nome: "Mateus", abrev: "mt" },
  { id: "MRK", nome: "Marcos", abrev: "mc" },
  { id: "LUK", nome: "Lucas", abrev: "lc" },
  { id: "JHN", nome: "João", abrev: "jo" },
  { id: "ACT", nome: "Atos", abrev: "at" },
  { id: "ROM", nome: "Romanos", abrev: "rm" },
  { id: "1CO", nome: "1 Coríntios", abrev: "1co" },
  { id: "2CO", nome: "2 Coríntios", abrev: "2co" },
  { id: "GAL", nome: "Gálatas", abrev: "gl" },
  { id: "EPH", nome: "Efésios", abrev: "ef" },
  { id: "PHP", nome: "Filipenses", abrev: "fp" },
  { id: "COL", nome: "Colossenses", abrev: "cl" },
  { id: "1TH", nome: "1 Tessalonicenses", abrev: "1ts" },
  { id: "2TH", nome: "2 Tessalonicenses", abrev: "2ts" },
  { id: "1TI", nome: "1 Timóteo", abrev: "1tm" },
  { id: "2TI", nome: "2 Timóteo", abrev: "2tm" },
  { id: "TIT", nome: "Tito", abrev: "tt" },
  { id: "PHM", nome: "Filemom", abrev: "fm" },
  { id: "HEB", nome: "Hebreus", abrev: "hb" },
  { id: "JAS", nome: "Tiago", abrev: "tg" },
  { id: "1PE", nome: "1 Pedro", abrev: "1pe" },
  { id: "2PE", nome: "2 Pedro", abrev: "2pe" },
  { id: "1JN", nome: "1 João", abrev: "1jo" },
  { id: "2JN", nome: "2 João", abrev: "2jo" },
  { id: "3JN", nome: "3 João", abrev: "3jo" },
  { id: "JUD", nome: "Judas", abrev: "jd" },
  { id: "REV", nome: "Apocalipse", abrev: "ap" },
];

export default function Biblia() {
  const [versiculoDia, setVersiculoDia] = useState(null);
  const [pesquisa, setPesquisa] = useState("");
  const [resultadoPesquisa, setResultadoPesquisa] = useState(null);
  const [livroSelecionado, setLivroSelecionado] = useState(null);
  const [capitulo, setCapitulo] = useState(1);
  const [versiculo, setVersiculo] = useState("");
  const [resultadoLeitura, setResultadoLeitura] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);
  const [totalCapitulos, setTotalCapitulos] = useState(0);

  // Buscar o versículo do dia ao carregar a página
  useEffect(() => {
    buscarVersiculoAleatorio();
  }, []);

  // Função para buscar versículo aleatório
  const buscarVersiculoAleatorio = async () => {
    setCarregando(true);
    setErro(null);

    try {
      const data = await bibliaService.buscarVersiculoAleatorio();
      setVersiculoDia(data);
    } catch (error) {
      setErro(
        "Não foi possível carregar o versículo do dia. Tente novamente mais tarde."
      );
      console.error("Erro ao buscar versículo aleatório:", error);
    } finally {
      setCarregando(false);
    }
  };

  // Função para buscar por referência específica
  const buscarPorReferencia = async (e) => {
    e.preventDefault();

    if (!pesquisa.trim()) return;

    setCarregando(true);
    setErro(null);
    setResultadoPesquisa(null);

    try {
      const data = await bibliaService.buscarPorReferencia(pesquisa);
      setResultadoPesquisa(data);
    } catch (error) {
      setErro(
        "Não foi possível encontrar a referência bíblica. Verifique se está no formato correto (ex: João 3:16)."
      );
      console.error("Erro ao buscar referência:", error);
    } finally {
      setCarregando(false);
    }
  };

  // Função para buscar livro e capítulo
  const buscarLivroCapitulo = async () => {
    if (!livroSelecionado) return;

    setCarregando(true);
    setErro(null);
    setResultadoLeitura(null);

    try {
      let data;

      if (versiculo) {
        // Se um versículo específico for selecionado
        data = await bibliaService.buscarVersiculo(
          livroSelecionado.id,
          capitulo,
          versiculo
        );
      } else {
        // Se apenas o capítulo for selecionado
        data = await bibliaService.buscarCapitulo(
          livroSelecionado.id,
          capitulo
        );
      }

      setResultadoLeitura(data);
    } catch (error) {
      setErro(
        "Não foi possível carregar o texto bíblico. Verifique se a referência existe."
      );
      console.error("Erro ao buscar capítulo/versículo:", error);
    } finally {
      setCarregando(false);
    }
  };

  // Quando o livro for selecionado, atualiza o total de capítulos
  useEffect(() => {
    if (livroSelecionado) {
      buscarTotalCapitulos();
    }
  }, [livroSelecionado]);

  // Função para buscar o total de capítulos de um livro
  const buscarTotalCapitulos = async () => {
    if (!livroSelecionado) return;

    try {
      const data = await bibliaService.buscarLivro(livroSelecionado.id);
      setTotalCapitulos(data.length || 0);
    } catch (error) {
      console.error("Erro ao buscar total de capítulos:", error);
      setTotalCapitulos(0);
    }
  };

  return (
    <div className={styles.bibliaPage}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.bibliaHero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <div className={styles.bibliaHeroContent}>
            <h1>Bíblia Sagrada</h1>
            <p>Explore a palavra de Deus e encontre inspiração espiritual</p>
          </div>
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Busca por Referência */}
          <section className={styles.buscaSection}>
            <div className={styles.buscaBox}>
              <h2>Buscar por Referência</h2>
              <form onSubmit={buscarPorReferencia} className={styles.buscaForm}>
                <input
                  type="text"
                  value={pesquisa}
                  onChange={(e) => setPesquisa(e.target.value)}
                  placeholder="Ex: João 3:16"
                  className={styles.buscaInput}
                />
                <button type="submit" className={styles.buscaButton}>
                  Buscar
                </button>
              </form>
              <p className={styles.buscaDica}>
                Dica: Você pode buscar por livro, capítulo e versículo (João
                3:16) ou por capítulos (João 3)
              </p>
            </div>
          </section>

          {/* Navegação da Bíblia */}
          <section className={styles.navegacaoSection}>
            <div className={styles.navegacaoContainer}>
              <div className={styles.livrosContainer}>
                <h3>Selecione um Livro</h3>
                <div className={styles.livrosList}>
                  {livrosBiblia.map((livro) => (
                    <button
                      key={livro.id}
                      onClick={() => {
                        setLivroSelecionado(livro);
                        setCapitulo(1);
                        setVersiculo("");
                      }}
                      className={`${styles.livroButton} ${
                        livroSelecionado?.id === livro.id
                          ? styles.livroSelecionado
                          : ""
                      }`}
                    >
                      {livro.nome}
                    </button>
                  ))}
                </div>
              </div>

              {livroSelecionado && (
                <div className={styles.capitulosContainer}>
                  <h3>Capítulo</h3>
                  <div className={styles.capitulosList}>
                    {Array.from(
                      { length: totalCapitulos },
                      (_, i) => i + 1
                    ).map((num) => (
                      <button
                        key={num}
                        onClick={() => {
                          setCapitulo(num);
                          setVersiculo("");
                          buscarLivroCapitulo();
                        }}
                        className={`${styles.capituloButton} ${
                          capitulo === num ? styles.capituloSelecionado : ""
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>

                  <div className={styles.versiculoContainer}>
                    <h3>Versículo (opcional)</h3>
                    <input
                      type="number"
                      value={versiculo}
                      onChange={(e) => setVersiculo(e.target.value)}
                      placeholder="Versículo específico"
                      className={styles.versiculoInput}
                      min="1"
                    />
                    <button
                      onClick={buscarLivroCapitulo}
                      className={styles.buscaButton}
                    >
                      Ler Texto
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Resultado da Pesquisa/Leitura */}
          <section className={styles.resultadoSection}>
            {carregando && <p className={styles.carregando}>Carregando...</p>}

            {erro && <p className={styles.erro}>{erro}</p>}

            {resultadoPesquisa && (
              <div className={styles.resultadoBox}>
                <h2>{resultadoPesquisa.reference}</h2>
                <p className={styles.textoVersiculos}>
                  {resultadoPesquisa.text}
                </p>
                <p className={styles.traducao}>
                  Tradução:{" "}
                  {resultadoPesquisa.translation_name ||
                    "João Ferreira de Almeida"}
                </p>
              </div>
            )}

            {resultadoLeitura && !resultadoPesquisa && (
              <div className={styles.resultadoBox}>
                <h2>
                  {livroSelecionado.nome} {capitulo}
                  {versiculo ? `:${versiculo}` : ""}
                </h2>
                {resultadoLeitura.text ? (
                  <p className={styles.textoVersiculos}>
                    {resultadoLeitura.text}
                  </p>
                ) : (
                  <div className={styles.textoVersiculos}>
                    {resultadoLeitura.verses ? (
                      resultadoLeitura.verses.map((v) => (
                        <p key={v.verse} className={styles.versiculo}>
                          <span className={styles.versiculoNumero}>
                            {v.verse}
                          </span>{" "}
                          {v.text}
                        </p>
                      ))
                    ) : (
                      <p>Não foi possível carregar o texto bíblico.</p>
                    )}
                  </div>
                )}
                <p className={styles.traducao}>
                  Tradução: João Ferreira de Almeida
                </p>
              </div>
            )}

            {!resultadoPesquisa &&
              !resultadoLeitura &&
              !carregando &&
              !erro && (
                <div className={styles.versiculoDiaBox}>
                  <h2>Versículo do Dia</h2>
                  {versiculoDia ? (
                    <>
                      <p className={styles.textoVersiculos}>
                        {versiculoDia.text}
                      </p>
                      <p className={styles.verseReference}>
                        {versiculoDia.reference}
                      </p>
                    </>
                  ) : (
                    <button
                      onClick={buscarVersiculoAleatorio}
                      className={styles.buscaButton}
                    >
                      Carregar Versículo do Dia
                    </button>
                  )}
                </div>
              )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
