"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Eventos de demonstração
const eventosDemonstracao = [
  {
    id: 1,
    titulo: "Culto de Adoração",
    descricao:
      "Venha adorar a Deus com música, pregação da Palavra e comunhão.",
    data: "2023-08-20",
    horario: "19:00",
    local: "Templo Principal",
    imagem: "/images/leão.webp",
    categoria: "culto",
  },
  {
    id: 2,
    titulo: "Encontro de Jovens",
    descricao:
      "Um tempo especial para jovens compartilharem experiências e crescerem juntos na fé.",
    data: "2023-08-25",
    horario: "20:00",
    local: "Salão de Eventos",
    imagem: "/images/oração.jpg",
    categoria: "jovens",
  },
  {
    id: 3,
    titulo: "Estudo Bíblico",
    descricao:
      "Aprofunde seu conhecimento nas Escrituras com nossos estudos bíblicos semanais.",
    data: "2023-08-22",
    horario: "19:30",
    local: "Sala de Estudos",
    imagem: "/images/biblia.webp",
    categoria: "estudo",
  },
  {
    id: 4,
    titulo: "Retiro Espiritual",
    descricao:
      "Um fim de semana dedicado à renovação espiritual, oração e comunhão.",
    data: "2023-09-15",
    horario: "08:00",
    local: "Chácara Refúgio",
    imagem: "/images/espirito-santo.jpg",
    categoria: "retiro",
  },
  {
    id: 5,
    titulo: "Culto de Louvor",
    descricao:
      "Uma noite especial de louvor e adoração com a participação do ministério de música.",
    data: "2023-08-27",
    horario: "19:00",
    local: "Templo Principal",
    imagem: "/images/leão.webp",
    categoria: "culto",
  },
  {
    id: 6,
    titulo: "Encontro de Casais",
    descricao:
      "Momento especial para fortalecer relacionamentos e aprender princípios bíblicos para o casamento.",
    data: "2023-09-02",
    horario: "19:30",
    local: "Salão de Eventos",
    imagem: "/images/oração.jpg",
    categoria: "familia",
  },
];

export default function Eventos() {
  const [filtroCategoria, setFiltroCategoria] = useState("todos");
  const [termoBusca, setTermoBusca] = useState("");

  // Filtrar eventos com base na categoria e no termo de busca
  const eventosFiltrados = eventosDemonstracao.filter((evento) => {
    // Filtro por categoria
    const passouFiltroCategorias =
      filtroCategoria === "todos" || evento.categoria === filtroCategoria;

    // Filtro por termo de busca
    const termoLowerCase = termoBusca.toLowerCase();
    const passouFiltroBusca =
      termoBusca === "" ||
      evento.titulo.toLowerCase().includes(termoLowerCase) ||
      evento.descricao.toLowerCase().includes(termoLowerCase) ||
      evento.local.toLowerCase().includes(termoLowerCase);

    return passouFiltroCategorias && passouFiltroBusca;
  });

  // Ordenar eventos por data (mais próximos primeiro)
  const eventosOrdenados = eventosFiltrados.sort(
    (a, b) => new Date(a.data) - new Date(b.data)
  );

  // Formatar data para exibição
  const formatarData = (dataString) => {
    const data = new Date(dataString);
    return data.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className={styles.eventosPage}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.eventosHero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <div className={styles.eventosHeroContent}>
            <h1>Eventos da Igreja</h1>
            <p>Fique por dentro de tudo que acontece em nossa comunidade</p>
          </div>
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Barra de Filtros */}
          <section className={styles.filtrosSection}>
            <div className={styles.filtrosContainer}>
              <div className={styles.buscaContainer}>
                <input
                  type="text"
                  placeholder="Buscar eventos..."
                  value={termoBusca}
                  onChange={(e) => setTermoBusca(e.target.value)}
                  className={styles.buscaInput}
                />
              </div>

              <div className={styles.categoriasFiltro}>
                <button
                  onClick={() => setFiltroCategoria("todos")}
                  className={`${styles.filtroButton} ${
                    filtroCategoria === "todos" ? styles.ativo : ""
                  }`}
                >
                  Todos
                </button>
                <button
                  onClick={() => setFiltroCategoria("culto")}
                  className={`${styles.filtroButton} ${
                    filtroCategoria === "culto" ? styles.ativo : ""
                  }`}
                >
                  Cultos
                </button>
                <button
                  onClick={() => setFiltroCategoria("estudo")}
                  className={`${styles.filtroButton} ${
                    filtroCategoria === "estudo" ? styles.ativo : ""
                  }`}
                >
                  Estudos
                </button>
                <button
                  onClick={() => setFiltroCategoria("jovens")}
                  className={`${styles.filtroButton} ${
                    filtroCategoria === "jovens" ? styles.ativo : ""
                  }`}
                >
                  Jovens
                </button>
                <button
                  onClick={() => setFiltroCategoria("familia")}
                  className={`${styles.filtroButton} ${
                    filtroCategoria === "familia" ? styles.ativo : ""
                  }`}
                >
                  Família
                </button>
                <button
                  onClick={() => setFiltroCategoria("retiro")}
                  className={`${styles.filtroButton} ${
                    filtroCategoria === "retiro" ? styles.ativo : ""
                  }`}
                >
                  Retiros
                </button>
              </div>
            </div>
          </section>

          {/* Lista de Eventos */}
          <section className={styles.eventosListaSection}>
            {eventosOrdenados.length === 0 ? (
              <div className={styles.nenhumEvento}>
                <p>Nenhum evento encontrado com os filtros selecionados.</p>
                <button
                  onClick={() => {
                    setFiltroCategoria("todos");
                    setTermoBusca("");
                  }}
                  className={styles.limparFiltrosButton}
                >
                  Limpar Filtros
                </button>
              </div>
            ) : (
              <div className={styles.eventosGrid}>
                {eventosOrdenados.map((evento) => (
                  <div key={evento.id} className={styles.eventoCard}>
                    <div className={styles.eventoImagem}>
                      <Image
                        src={evento.imagem}
                        alt={evento.titulo}
                        width={400}
                        height={250}
                        className={styles.cardImage}
                      />
                      <span className={styles.eventoCategoria}>
                        {evento.categoria === "culto" && "Culto"}
                        {evento.categoria === "estudo" && "Estudo"}
                        {evento.categoria === "jovens" && "Jovens"}
                        {evento.categoria === "familia" && "Família"}
                        {evento.categoria === "retiro" && "Retiro"}
                      </span>
                    </div>
                    <div className={styles.eventoInfo}>
                      <h3>{evento.titulo}</h3>
                      <p className={styles.eventoDescricao}>
                        {evento.descricao}
                      </p>
                      <div className={styles.eventoDetalhes}>
                        <div className={styles.detalheItem}>
                          <span className={styles.detalheIcone}>📅</span>
                          <span>{formatarData(evento.data)}</span>
                        </div>
                        <div className={styles.detalheItem}>
                          <span className={styles.detalheIcone}>⏰</span>
                          <span>{evento.horario}</span>
                        </div>
                        <div className={styles.detalheItem}>
                          <span className={styles.detalheIcone}>📍</span>
                          <span>{evento.local}</span>
                        </div>
                      </div>
                      <Link
                        href={`/eventos/${evento.id}`}
                        className={styles.saberMaisButton}
                      >
                        Saber Mais
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Seção de Destaque */}
          <section className={styles.destaqueSection}>
            <div className={styles.destaqueCard}>
              <div className={styles.destaqueConteudo}>
                <h2>Quer organizar um evento?</h2>
                <p>
                  Entre em contato conosco para agendar e organizar eventos
                  especiais para a comunidade.
                </p>
                <Link href="/contato" className={styles.contatoButton}>
                  Entre em Contato
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
