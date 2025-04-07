"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Louvor() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");
  const [pesquisa, setPesquisa] = useState("");

  const categorias = [
    { id: "todos", nome: "Todos" },
    { id: "adoracao", nome: "Adoração" },
    { id: "louvor", nome: "Louvor" },
    { id: "classicos", nome: "Clássicos" },
    { id: "infantil", nome: "Infantil" },
    { id: "coral", nome: "Coral" },
  ];

  const hinos = [
    {
      id: "1",
      titulo: "Grande é o Senhor",
      compositor: "Michael W. Smith",
      categoria: "adoracao",
      letra: `Grande é o Senhor e mui digno de louvor
Na cidade do nosso Deus, seu santo monte
Alegria de toda a terra
Grande é o Senhor em quem nós temos a vitória
E que nos ajuda contra o inimigo
Por isso diante dele nos prostramos`,
      versiculoBase: "Salmos 48:1",
    },
    {
      id: "2",
      titulo: "Ao Único",
      compositor: "Adhemar de Campos",
      categoria: "adoracao",
      letra: `Ao único que é digno de receber
A honra e a glória, a força e o poder
Ao Rei eterno, imortal, invisível, mas real
A Ele ministramos o louvor`,
      versiculoBase: "1 Timóteo 1:17",
    },
    {
      id: "3",
      titulo: "Majestoso",
      compositor: "Aline Barros",
      categoria: "adoracao",
      letra: `Majestoso, soberano
Cristo exaltado seja
Em Tua presença eu me prostro
Contemplo Tua grandeza
Majestoso, soberano
Cristo exaltado seja
Em Tua presença eu me prostro
Contemplo Tua grandeza`,
      versiculoBase: "Isaías 6:1",
    },
    {
      id: "4",
      titulo: "Digno é o Senhor",
      compositor: "Ron Kenoly",
      categoria: "louvor",
      letra: `Digno é o Senhor
No céu, sentado em Seu trono
De receber honra, glória e poder
Somente o Senhor
No céu, sentado em Seu trono
De receber honra, glória e poder`,
      versiculoBase: "Apocalipse 4:11",
    },
    {
      id: "5",
      titulo: "O Nome de Jesus",
      compositor: "Ludmila Ferber",
      categoria: "louvor",
      letra: `O nome de Jesus é mais doce que o mel
O nome de Jesus venceu a morte cruel
O nome de Jesus cura enfermidades
O nome de Jesus traz paz ao coração`,
      versiculoBase: "Filipenses 2:9-10",
    },
    {
      id: "6",
      titulo: "Canção do Apocalipse",
      compositor: "Alda Célia",
      categoria: "louvor",
      letra: `Santo, Santo, Santo
Santo, Santo, Santo
É o Senhor Deus Todo-Poderoso
Que era, que é, e que há de vir
Santo, Santo, Santo
É o Senhor Todo-Poderoso
Digno de receber honra e glória`,
      versiculoBase: "Apocalipse 4:8",
    },
    {
      id: "7",
      titulo: "Firme nas Promessas",
      compositor: "Russell Kelso Carter",
      categoria: "classicos",
      letra: `Firme nas promessas do meu salvador
Cantarei louvores ao meu criador
Firme nas promessas de Jesus, o Cristo
Que não me abandona, nem me deixa só`,
      versiculoBase: "2 Coríntios 1:20",
    },
    {
      id: "8",
      titulo: "Maravilhosa Graça",
      compositor: "John Newton",
      categoria: "classicos",
      letra: `Maravilhosa graça! Maior que o meu pecar
Como pode o doce som um miserável salvar?
Perdido estava eu, mas fui achado então
Cego, mas posso ver: Pela graça, salvação`,
      versiculoBase: "Efésios 2:8-9",
    },
    {
      id: "9",
      titulo: "Grandioso És Tu",
      compositor: "Stuart K. Hine",
      categoria: "classicos",
      letra: `Senhor meu Deus, quando eu, maravilhado
Contemplo a Tua imensa criação
A terra e o mar e o céu todo estrelado
Me vêm falar da Tua perfeição`,
      versiculoBase: "Salmos 8:3-4",
    },
    {
      id: "10",
      titulo: "Brilha, Brilha Estrelinha",
      compositor: "Tradicional",
      categoria: "infantil",
      letra: `Brilha, brilha estrelinha
Quero ver você brilhar
Brilha, brilha estrelinha
Deus te fez para brilhar`,
      versiculoBase: "Mateus 5:16",
    },
    {
      id: "11",
      titulo: "Meu Barquinho",
      compositor: "Tradicional",
      categoria: "infantil",
      letra: `Meu barquinho é pequenino
Mas Jesus está por perto
Se o mar se enfurecer
Posso a ti recorrer
Meu barquinho é pequenino
Mas Jesus me conduz`,
      versiculoBase: "Marcos 4:37-39",
    },
    {
      id: "12",
      titulo: "Aleluia (A Deus Toda Glória)",
      compositor: "Georg Friedrich Händel",
      categoria: "coral",
      letra: `Aleluia, Aleluia, Aleluia, Aleluia
O Senhor Deus Onipotente reina
Aleluia, Aleluia, Aleluia, Aleluia
O reino deste mundo se tornou
O Reino de nosso Senhor e do seu Cristo`,
      versiculoBase: "Apocalipse 19:6",
    },
  ];

  const handleCategoriaClick = (categoria) => {
    setCategoriaAtiva(categoria);
  };

  const handlePesquisaChange = (e) => {
    setPesquisa(e.target.value);
  };

  const filtrarHinos = () => {
    return hinos.filter((hino) => {
      const matchesCategoria =
        categoriaAtiva === "todos" || hino.categoria === categoriaAtiva;
      const matchesPesquisa =
        hino.titulo.toLowerCase().includes(pesquisa.toLowerCase()) ||
        hino.compositor.toLowerCase().includes(pesquisa.toLowerCase()) ||
        hino.letra.toLowerCase().includes(pesquisa.toLowerCase());

      return matchesCategoria && matchesPesquisa;
    });
  };

  const hinosFiltrados = filtrarHinos();

  return (
    <div className={styles.louvorPage}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>Hinários e Cânticos</h1>
            <p>Encontre letras, cifras e partituras para o louvor e adoração</p>
          </div>
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Introdução */}
          <section className={styles.introSection}>
            <div className={styles.introContent}>
              <h2 className={styles.sectionTitle}>Música que Exalta a Deus</h2>
              <div className={styles.divider}></div>
              <p>
                A música sempre foi parte fundamental da adoração a Deus. Desde
                os tempos bíblicos, o povo de Deus tem expressado sua fé,
                gratidão e louvor através de cânticos. Nossa coletânea reúne
                hinos clássicos, cânticos contemporâneos e músicas para
                diferentes momentos do culto.
              </p>
              <p>
                Utilize este recurso para enriquecer seus momentos de adoração
                pessoal, para a preparação de cultos comunitários ou
                simplesmente para meditar nas verdades eternas expressas nestas
                composições inspiradas.
              </p>
            </div>
            <div className={styles.introImagem}>
              <Image
                src="/images/louvor.jpg"
                alt="Adoração e Louvor"
                width={400}
                height={300}
                className={styles.introImg}
              />
            </div>
          </section>

          {/* Ferramentas de Busca */}
          <section className={styles.buscaSection}>
            <div className={styles.pesquisaContainer}>
              <input
                type="text"
                placeholder="Buscar por título, compositor ou letra..."
                className={styles.pesquisaInput}
                value={pesquisa}
                onChange={handlePesquisaChange}
              />
            </div>

            <div className={styles.categoriasFiltro}>
              {categorias.map((categoria) => (
                <button
                  key={categoria.id}
                  className={`${styles.categoriaBtn} ${
                    categoriaAtiva === categoria.id ? styles.categoriaAtiva : ""
                  }`}
                  onClick={() => handleCategoriaClick(categoria.id)}
                >
                  {categoria.nome}
                </button>
              ))}
            </div>
          </section>

          {/* Lista de Hinos */}
          <section className={styles.hinosGrid}>
            {hinosFiltrados.length > 0 ? (
              hinosFiltrados.map((hino) => (
                <div key={hino.id} className={styles.hinoCard}>
                  <div className={styles.hinoHeader}>
                    <h3>{hino.titulo}</h3>
                    <span className={styles.hinoCategoria}>
                      {
                        categorias.find((cat) => cat.id === hino.categoria)
                          ?.nome
                      }
                    </span>
                  </div>
                  <p className={styles.hinoCompositor}>Por {hino.compositor}</p>
                  <p className={styles.hinoVersiculo}>
                    Baseado em: {hino.versiculoBase}
                  </p>
                  <div className={styles.hinoLetra}>
                    <pre>{hino.letra}</pre>
                  </div>
                  <div className={styles.hinoFooter}>
                    <Link
                      href={`/louvor/${hino.id}`}
                      className={styles.hinoLink}
                    >
                      Ver detalhes
                    </Link>
                    <div className={styles.hinoBtns}>
                      <button className={styles.hinoIconBtn} title="Ver cifra">
                        <span className={styles.cifraIcon}></span>
                      </button>
                      <button
                        className={styles.hinoIconBtn}
                        title="Ver partitura"
                      >
                        <span className={styles.partituraIcon}></span>
                      </button>
                      <button className={styles.hinoIconBtn} title="Baixar MP3">
                        <span className={styles.mp3Icon}></span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.semResultados}>
                <h3>Nenhum hino encontrado</h3>
                <p>
                  Tente uma pesquisa diferente ou selecione outra categoria.
                </p>
              </div>
            )}
          </section>

          {/* Recursos */}
          <section className={styles.recursosSection}>
            <h2 className={styles.sectionTitle}>
              Recursos para Ministério de Louvor
            </h2>
            <div className={styles.divider}></div>
            <div className={styles.recursosGrid}>
              <div className={styles.recursoCard}>
                <div className={styles.recursoIcon}>
                  <span className={styles.playlistIcon}></span>
                </div>
                <h3>Playlists Temáticas</h3>
                <p>
                  Coleções organizadas por temas como "Gratidão", "Esperança",
                  "Missões" e muito mais. Ideal para montar repertórios.
                </p>
                <Link href="/louvor/playlists" className={styles.recursoLink}>
                  Ver Playlists
                </Link>
              </div>

              <div className={styles.recursoCard}>
                <div className={styles.recursoIcon}>
                  <span className={styles.workshopIcon}></span>
                </div>
                <h3>Workshops Online</h3>
                <p>
                  Capacitações para músicos, cantores e técnicos de som, com
                  dicas práticas para melhorar o ministério de louvor.
                </p>
                <Link href="/louvor/workshops" className={styles.recursoLink}>
                  Acessar Workshops
                </Link>
              </div>

              <div className={styles.recursoCard}>
                <div className={styles.recursoIcon}>
                  <span className={styles.devocionalIcon}></span>
                </div>
                <h3>Devocionais para Músicos</h3>
                <p>
                  Reflexões bíblicas especialmente preparadas para quem serve no
                  ministério de música da igreja.
                </p>
                <Link href="/louvor/devocionais" className={styles.recursoLink}>
                  Ler Devocionais
                </Link>
              </div>

              <div className={styles.recursoCard}>
                <div className={styles.recursoIcon}>
                  <span className={styles.downloadIcon}></span>
                </div>
                <h3>Downloads</h3>
                <p>
                  Partituras, cifras, playbacks e slides de letra para utilizar
                  nos cultos e momentos de adoração em grupo.
                </p>
                <Link href="/louvor/downloads" className={styles.recursoLink}>
                  Área de Downloads
                </Link>
              </div>
            </div>
          </section>

          {/* Inscrição */}
          <section className={styles.inscricaoSection}>
            <div className={styles.inscricaoContainer}>
              <h2>Receba Novidades</h2>
              <p>
                Inscreva-se para receber atualizações sobre novos hinos,
                recursos para música e eventos relacionados ao ministério de
                louvor.
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
