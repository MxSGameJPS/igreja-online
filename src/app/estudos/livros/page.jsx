"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ComentariosBiblicos() {
  const [testamentoAtivo, setTestamentoAtivo] = useState("at");

  const livrosAT = [
    {
      id: "genesis",
      nome: "Gênesis",
      autor: "Dr. Paulo Martins",
      disponivel: true,
      imagem: "/images/genesis.jpg",
      descricao:
        "Comentário detalhado sobre o livro das origens e a formação do povo de Israel.",
    },
    {
      id: "exodo",
      nome: "Êxodo",
      autor: "Dr. Paulo Martins",
      disponivel: true,
      imagem: "/images/exodo.jpg",
      descricao:
        "Análise da libertação do Egito e a formação da identidade nacional israelita.",
    },
    {
      id: "levitico",
      nome: "Levítico",
      autor: "Dr. José Silva",
      disponivel: true,
      imagem: "/images/levitico.jpg",
      descricao: "Estudo sobre o sistema sacrificial e as leis de santidade.",
    },
    {
      id: "numeros",
      nome: "Números",
      autor: "Dr. José Silva",
      disponivel: true,
      imagem: "/images/numeros.jpg",
      descricao:
        "Comentário sobre a jornada de Israel pelo deserto e suas lições.",
    },
    {
      id: "deuteronomio",
      nome: "Deuteronômio",
      autor: "Dr. Paulo Martins",
      disponivel: true,
      imagem: "/images/deuteronomio.jpg",
      descricao:
        "Exposição dos discursos finais de Moisés e a renovação da aliança.",
    },
    {
      id: "josue",
      nome: "Josué",
      autor: "Dra. Ana Ribeiro",
      disponivel: true,
      imagem: "/images/josue.jpg",
      descricao:
        "Análise da conquista de Canaã e o estabelecimento na Terra Prometida.",
    },
    {
      id: "juizes",
      nome: "Juízes",
      autor: "Dra. Ana Ribeiro",
      disponivel: true,
      imagem: "/images/juizes.jpg",
      descricao:
        "Estudo sobre o ciclo de apostasia e libertação no período pré-monárquico.",
    },
    {
      id: "rute",
      nome: "Rute",
      autor: "Dra. Marta Santos",
      disponivel: true,
      imagem: "/images/rute.jpg",
      descricao: "Comentário sobre redenção, lealdade e providência divina.",
    },
    {
      id: "1samuel",
      nome: "1 Samuel",
      autor: "Dr. Marcos Oliveira",
      disponivel: true,
      imagem: "/images/samuel.jpg",
      descricao:
        "Análise da transição de Israel para uma monarquia e o reinado de Saul.",
    },
    {
      id: "2samuel",
      nome: "2 Samuel",
      autor: "Dr. Marcos Oliveira",
      disponivel: true,
      imagem: "/images/samuel.jpg",
      descricao:
        "Estudo sobre o reinado de Davi e o estabelecimento da dinastia davídica.",
    },
    {
      id: "salmos",
      nome: "Salmos",
      autor: "Dr. Roberto Alves",
      disponivel: true,
      imagem: "/images/salmos.jpg",
      descricao:
        "Comentário sobre a rica coleção de hinos, orações e meditações de Israel.",
    },
    {
      id: "proverbios",
      nome: "Provérbios",
      autor: "Dr. Roberto Alves",
      disponivel: true,
      imagem: "/images/proverbios.jpg",
      descricao: "Exposição da sabedoria prática para a vida cotidiana.",
    },
    {
      id: "isaias",
      nome: "Isaías",
      autor: "Dr. Lucas Mendes",
      disponivel: true,
      imagem: "/images/isaias.jpg",
      descricao:
        "Análise do livro profético que revela o plano redentor de Deus.",
    },
    {
      id: "daniel",
      nome: "Daniel",
      autor: "Dr. Lucas Mendes",
      disponivel: true,
      imagem: "/images/daniel.jpg",
      descricao:
        "Estudo sobre as visões proféticas e a soberania de Deus sobre as nações.",
    },
  ];

  const livrosNT = [
    {
      id: "mateus",
      nome: "Mateus",
      autor: "Dr. Pedro Santos",
      disponivel: true,
      imagem: "/images/mateus.jpg",
      descricao:
        "Comentário sobre Jesus como o Messias prometido e o Rei dos judeus.",
    },
    {
      id: "marcos",
      nome: "Marcos",
      autor: "Dr. Pedro Santos",
      disponivel: true,
      imagem: "/images/marcos.jpg",
      descricao:
        "Estudo sobre o evangelho que enfatiza Jesus como o Servo sofredor.",
    },
    {
      id: "lucas",
      nome: "Lucas",
      autor: "Dra. Carla Rodrigues",
      disponivel: true,
      imagem: "/images/lucas.jpg",
      descricao:
        "Análise do evangelho histórico que apresenta Jesus como o Filho do Homem.",
    },
    {
      id: "joao",
      nome: "João",
      autor: "Dra. Carla Rodrigues",
      disponivel: true,
      imagem: "/images/joao.jpg",
      descricao:
        "Exposição do evangelho que revela Jesus como o Filho de Deus.",
    },
    {
      id: "atos",
      nome: "Atos",
      autor: "Dr. Ricardo Ferreira",
      disponivel: true,
      imagem: "/images/atos.jpg",
      descricao:
        "Comentário sobre o desenvolvimento da igreja primitiva e a expansão do evangelho.",
    },
    {
      id: "romanos",
      nome: "Romanos",
      autor: "Dr. Paulo Martins",
      disponivel: true,
      imagem: "/images/romanos.jpg",
      descricao:
        "Análise da obra magistral de Paulo sobre a doutrina da justificação pela fé.",
    },
    {
      id: "1corintios",
      nome: "1 Coríntios",
      autor: "Dr. Paulo Martins",
      disponivel: true,
      imagem: "/images/corintios.jpg",
      descricao: "Estudo sobre os problemas e questões da igreja em Corinto.",
    },
    {
      id: "galatas",
      nome: "Gálatas",
      autor: "Dr. Ricardo Ferreira",
      disponivel: true,
      imagem: "/images/galatas.jpg",
      descricao:
        "Comentário sobre a liberdade cristã e o verdadeiro evangelho da graça.",
    },
    {
      id: "efesios",
      nome: "Efésios",
      autor: "Dr. Lucas Mendes",
      disponivel: true,
      imagem: "/images/efesios.jpg",
      descricao:
        "Análise da igreja como o corpo de Cristo e a nova humanidade.",
    },
    {
      id: "filipenses",
      nome: "Filipenses",
      autor: "Dr. Lucas Mendes",
      disponivel: true,
      imagem: "/images/filipenses.jpg",
      descricao: "Estudo sobre a alegria cristã em meio às adversidades.",
    },
    {
      id: "hebreus",
      nome: "Hebreus",
      autor: "Dra. Ana Ribeiro",
      disponivel: true,
      imagem: "/images/hebreus.jpg",
      descricao:
        "Comentário sobre a superioridade de Cristo e o novo concerto.",
    },
    {
      id: "tiago",
      nome: "Tiago",
      autor: "Dr. Roberto Alves",
      disponivel: true,
      imagem: "/images/tiago.jpg",
      descricao: "Exposição sobre a fé autêntica demonstrada por obras.",
    },
    {
      id: "1pedro",
      nome: "1 Pedro",
      autor: "Dr. José Silva",
      disponivel: true,
      imagem: "/images/pedro.jpg",
      descricao:
        "Análise sobre sofrimento, santidade e esperança para cristãos perseguidos.",
    },
    {
      id: "apocalipse",
      nome: "Apocalipse",
      autor: "Dr. Lucas Mendes",
      disponivel: true,
      imagem: "/images/apocalipse.jpg",
      descricao:
        "Estudo sobre as visões e profecias do fim dos tempos e a vitória final de Cristo.",
    },
  ];

  const livrosAtivos = testamentoAtivo === "at" ? livrosAT : livrosNT;

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
            {livrosAtivos.map((livro) => (
              <div key={livro.id} className={styles.livroCard}>
                <div className={styles.livroImageContainer}>
                  <Image
                    src={livro.imagem}
                    alt={`Comentário sobre ${livro.nome}`}
                    width={200}
                    height={300}
                    className={styles.livroImage}
                  />
                </div>
                <div className={styles.livroContent}>
                  <h3>{livro.nome}</h3>
                  <p className={styles.livroAutor}>Por {livro.autor}</p>
                  <p className={styles.livroDescricao}>{livro.descricao}</p>
                  <Link
                    href={`/estudos/livros/${livro.id}`}
                    className={styles.livroLink}
                  >
                    Ver Comentário
                  </Link>
                </div>
              </div>
            ))}
          </section>

          {/* CTA: Plano de Assinatura */}
          <section className={styles.assinaturaSection}>
            <div className={styles.assinaturaContainer}>
              <h2>Acesso Premium aos Comentários</h2>
              <p>
                Assine o plano anual e tenha acesso ilimitado a todos os nossos
                comentários bíblicos, além de recursos exclusivos como notas de
                estudo, mapas históricos, cronologias e ferramentas de pesquisa
                avançada.
              </p>
              <div className={styles.planos}>
                <div className={styles.planoCard}>
                  <h3>Plano Mensal</h3>
                  <p className={styles.planoPreco}>
                    R$ 19,90 <span>/mês</span>
                  </p>
                  <ul className={styles.planoFeatures}>
                    <li>Acesso a todos os comentários</li>
                    <li>Ferramentas básicas de anotação</li>
                    <li>Versão digital para dispositivos móveis</li>
                  </ul>
                  <button className={styles.planoBtn}>Assinar Agora</button>
                </div>

                <div className={`${styles.planoCard} ${styles.planoDestaque}`}>
                  <div className={styles.planoTag}>Mais Popular</div>
                  <h3>Plano Anual</h3>
                  <p className={styles.planoPreco}>
                    R$ 149,90 <span>/ano</span>
                  </p>
                  <p className={styles.planoEconomia}>Economize R$ 89,90</p>
                  <ul className={styles.planoFeatures}>
                    <li>Acesso a todos os comentários</li>
                    <li>Ferramentas avançadas de estudo</li>
                    <li>Mapas e recursos visuais exclusivos</li>
                    <li>Seminários online mensais</li>
                    <li>Versão digital para dispositivos móveis</li>
                  </ul>
                  <button className={styles.planoBtn}>Assinar Agora</button>
                </div>
              </div>
              <p className={styles.planoInfo}>
                Oferecemos garantia de satisfação de 15 dias. Cancele a qualquer
                momento sem compromisso.
              </p>
            </div>
          </section>

          {/* Depoimentos */}
          <section className={styles.depoimentosSection}>
            <h2 className={styles.sectionTitle}>O que Estão Dizendo</h2>
            <div className={styles.divider}></div>
            <div className={styles.depoimentosGrid}>
              <div className={styles.depoimentoCard}>
                <p className={styles.depoimentoTexto}>
                  "Os comentários são extremamente bem fundamentados e
                  acessíveis. Como pastor, tenho usado estes recursos para
                  preparar sermões mais profundos e contextualmente precisos."
                </p>
                <p className={styles.depoimentoAutor}>
                  — Pr. Eduardo Campos, São Paulo
                </p>
              </div>

              <div className={styles.depoimentoCard}>
                <p className={styles.depoimentoTexto}>
                  "Sou estudante de teologia e estes comentários têm sido
                  fundamentais para meus trabalhos acadêmicos. A profundidade
                  teológica aliada à clareza de exposição é simplesmente
                  notável."
                </p>
                <p className={styles.depoimentoAutor}>
                  — Maria Luiza, estudante de Teologia
                </p>
              </div>

              <div className={styles.depoimentoCard}>
                <p className={styles.depoimentoTexto}>
                  "Como líder de pequenos grupos, estes comentários me ajudam a
                  esclarecer passagens difíceis e a preparar estudos
                  biblicamente sólidos. Mudou completamente minha forma de
                  abordar a Escritura."
                </p>
                <p className={styles.depoimentoAutor}>
                  — Carlos Mendes, líder de ministério
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
