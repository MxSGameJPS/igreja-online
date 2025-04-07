"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function EstudosTematicos() {
  const [filtroAtivo, setFiltroAtivo] = useState("todos");
  const [pesquisa, setPesquisa] = useState("");

  const temas = [
    {
      id: "salvacao",
      titulo: "Plano de Salvação",
      descricao: "Compreendendo o plano divino para a redenção da humanidade",
      imagem: "/images/cruz.jpg",
      categoria: "doutrina",
      versiculoChave: "João 3:16",
      disponivel: true,
    },
    {
      id: "fe",
      titulo: "Fé e Obras",
      descricao: "A relação entre a fé salvadora e as obras na vida cristã",
      imagem: "/images/biblia.jpg",
      categoria: "vida-crista",
      versiculoChave: "Tiago 2:26",
      disponivel: true,
    },
    {
      id: "familia",
      titulo: "Família Cristã",
      descricao: "Princípios bíblicos para um lar que honra a Deus",
      imagem: "/images/familia.jpg",
      categoria: "relacionamentos",
      versiculoChave: "Efésios 5:21-6:4",
      disponivel: true,
    },
    {
      id: "oracao",
      titulo: "Poder da Oração",
      descricao: "Desenvolvendo uma vida de oração eficaz e transformadora",
      imagem: "/images/oração.jpg",
      categoria: "vida-crista",
      versiculoChave: "1 Tessalonicenses 5:17",
      disponivel: true,
    },
    {
      id: "espirito-santo",
      titulo: "Espírito Santo",
      descricao: "A pessoa e obra do Espírito Santo na vida do crente",
      imagem: "/images/pomba.jpg",
      categoria: "doutrina",
      versiculoChave: "João 14:26",
      disponivel: true,
    },
    {
      id: "perda",
      titulo: "Lidando com Perdas",
      descricao: "Conforto bíblico em tempos de luto e dificuldades",
      imagem: "/images/conforto.jpg",
      categoria: "vida-crista",
      versiculoChave: "Mateus 5:4",
      disponivel: true,
    },
    {
      id: "perdao",
      titulo: "Perdão e Reconciliação",
      descricao: "Superando mágoas e restaurando relacionamentos",
      imagem: "/images/perdao.jpg",
      categoria: "relacionamentos",
      versiculoChave: "Mateus 6:14-15",
      disponivel: true,
    },
    {
      id: "apocalipse",
      titulo: "Escatologia Bíblica",
      descricao: "Estudo sobre os eventos finais e a volta de Cristo",
      imagem: "/images/leão.webp",
      categoria: "profetico",
      versiculoChave: "Apocalipse 1:7",
      disponivel: true,
    },
    {
      id: "tentacao",
      titulo: "Vencendo Tentações",
      descricao: "Estratégias bíblicas para resistir às tentações diárias",
      imagem: "/images/deserto.jpg",
      categoria: "vida-crista",
      versiculoChave: "1 Coríntios 10:13",
      disponivel: true,
    },
    {
      id: "missoes",
      titulo: "Missões",
      descricao: "O chamado e a responsabilidade de compartilhar o evangelho",
      imagem: "/images/mundo.jpg",
      categoria: "ministerio",
      versiculoChave: "Mateus 28:19-20",
      disponivel: true,
    },
    {
      id: "lideranca",
      titulo: "Liderança Servidora",
      descricao: "Princípios bíblicos para líderes que desejam impactar vidas",
      imagem: "/images/lider.jpg",
      categoria: "ministerio",
      versiculoChave: "Marcos 10:45",
      disponivel: true,
    },
    {
      id: "daniel",
      titulo: "Livro de Daniel",
      descricao: "Estudo profético sobre fidelidade em tempos de crise",
      imagem: "/images/leões.jpg",
      categoria: "profetico",
      versiculoChave: "Daniel 2:44",
      disponivel: true,
    },
  ];

  const categorias = [
    { id: "todos", nome: "Todos os Temas" },
    { id: "doutrina", nome: "Doutrinas Fundamentais" },
    { id: "vida-crista", nome: "Vida Cristã" },
    { id: "relacionamentos", nome: "Relacionamentos" },
    { id: "profetico", nome: "Estudos Proféticos" },
    { id: "ministerio", nome: "Ministério e Serviço" },
  ];

  const handleFiltroCategorias = (categoria) => {
    setFiltroAtivo(categoria);
  };

  const handlePesquisaChange = (e) => {
    setPesquisa(e.target.value);
  };

  const filtrarTemas = () => {
    return temas.filter((tema) => {
      const matchesCategoria =
        filtroAtivo === "todos" || tema.categoria === filtroAtivo;
      const matchesPesquisa =
        tema.titulo.toLowerCase().includes(pesquisa.toLowerCase()) ||
        tema.descricao.toLowerCase().includes(pesquisa.toLowerCase());

      return matchesCategoria && matchesPesquisa && tema.disponivel;
    });
  };

  const temasFiltrados = filtrarTemas();

  return (
    <div className={styles.temasPage}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>Estudos Temáticos</h1>
            <p>
              Explore temas bíblicos relevantes para fortalecer sua fé e
              conhecimento
            </p>
          </div>
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Filtros */}
          <section className={styles.filtrosSection}>
            <div className={styles.pesquisaBox}>
              <input
                type="text"
                placeholder="Buscar estudos..."
                className={styles.pesquisaInput}
                value={pesquisa}
                onChange={handlePesquisaChange}
              />
              <button className={styles.pesquisaBtn}>
                <span className={styles.pesquisaIcon}></span>
              </button>
            </div>

            <div className={styles.categoriasFiltro}>
              <h2>Categorias</h2>
              <div className={styles.categoriasList}>
                {categorias.map((categoria) => (
                  <button
                    key={categoria.id}
                    className={`${styles.categoriaBtn} ${
                      filtroAtivo === categoria.id ? styles.categoriaAtiva : ""
                    }`}
                    onClick={() => handleFiltroCategorias(categoria.id)}
                  >
                    {categoria.nome}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Lista de Temas */}
          <section className={styles.temasGrid}>
            {temasFiltrados.length > 0 ? (
              temasFiltrados.map((tema) => (
                <div key={tema.id} className={styles.temaCard}>
                  <div className={styles.temaImageContainer}>
                    <Image
                      src={tema.imagem}
                      alt={tema.titulo}
                      width={350}
                      height={200}
                      className={styles.temaImage}
                    />
                    <div className={styles.temaCategoria}>
                      {
                        categorias.find((cat) => cat.id === tema.categoria)
                          ?.nome
                      }
                    </div>
                  </div>
                  <div className={styles.temaContent}>
                    <h3>{tema.titulo}</h3>
                    <p className={styles.temaDescricao}>{tema.descricao}</p>
                    <p className={styles.temaVersiculoChave}>
                      Versículo-chave: <span>{tema.versiculoChave}</span>
                    </p>
                    <Link
                      href={`/estudos/${tema.id}`}
                      className={styles.temaLink}
                    >
                      Ver Estudo Completo
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.semResultados}>
                <h3>Nenhum estudo encontrado</h3>
                <p>
                  Tente uma pesquisa diferente ou selecione outra categoria.
                </p>
              </div>
            )}
          </section>

          {/* Inscrição */}
          <section className={styles.inscricaoSection}>
            <div className={styles.inscricaoContainer}>
              <h2>Receba Novos Estudos</h2>
              <p>
                Inscreva-se para receber diretamente em seu email cada novo
                estudo temático publicado em nosso portal. Mantenha-se
                atualizado e cresça em conhecimento bíblico.
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
                Respeitamos sua privacidade. Você pode cancelar a inscrição a
                qualquer momento.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
