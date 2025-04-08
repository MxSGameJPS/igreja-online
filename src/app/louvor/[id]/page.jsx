"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "./page.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function DetalheHino() {
  const params = useParams();
  const id = params.id;
  const [hino, setHino] = useState(null);
  const [tocando, setTocando] = useState(false);

  useEffect(() => {
    // Aqui buscaríamos o hino de uma API real
    // Mas como é um exemplo, vamos usar dados simulados
    const hinoEncontrado = getHinoPorId(id);
    setHino(hinoEncontrado);
  }, [id]);

  // Função para simular a busca do hino pelo ID
  const getHinoPorId = (id) => {
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
        audioUrl: "/audios/grande-e-o-senhor.mp3", // Seria um arquivo real em produção
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
        audioUrl: "/audios/ao-unico.mp3", // Seria um arquivo real em produção
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
        audioUrl: "/audios/majestoso.mp3", // Seria um arquivo real em produção
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
        audioUrl: "/audios/digno-e-o-senhor.mp3", // Seria um arquivo real em produção
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
        audioUrl: "/audios/o-nome-de-jesus.mp3", // Seria um arquivo real em produção
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
        audioUrl: "/audios/canto-do-apocalipse.mp3", // Seria um arquivo real em produção
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
        audioUrl: "/audios/firme-nas-promessas.mp3", // Seria um arquivo real em produção
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
        audioUrl: "/audios/maravilhosa-graca.mp3", // Seria um arquivo real em produção
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
        audioUrl: "/audios/grandioso-es-tu.mp3", // Seria um arquivo real em produção
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
        audioUrl: "/audios/brilha-estrelinha.mp3", // Seria um arquivo real em produção
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
        audioUrl: "/audios/meu-barquinho.mp3", // Seria um arquivo real em produção
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
        audioUrl: "/audios/aleluia.mp3", // Seria um arquivo real em produção
      },
    ];

    return hinos.find((h) => h.id === id) || null;
  };

  const handleTocarClick = () => {
    // Em uma aplicação real, aqui iriamos tocar o áudio
    // Como é simulado, apenas alteramos o estado
    setTocando(!tocando);
  };

  if (!hino) {
    return (
      <div className={styles.louvorPage}>
        <Navbar />
        <main className={styles.main}>
          <div className={styles.container}>
            <div className={styles.carregando}>Carregando...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const categorias = [
    { id: "todos", nome: "Todos" },
    { id: "adoracao", nome: "Adoração" },
    { id: "louvor", nome: "Louvor" },
    { id: "classicos", nome: "Clássicos" },
    { id: "infantil", nome: "Infantil" },
    { id: "coral", nome: "Coral" },
  ];

  const categoriaNome =
    categorias.find((cat) => cat.id === hino.categoria)?.nome || "Música";

  return (
    <div className={styles.louvorPage}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.navegacaoVoltar}>
            <Link href="/louvor" className={styles.linkVoltar}>
              &larr; Voltar para Hinários
            </Link>
          </div>

          <div className={styles.hinoDetalhes}>
            <div className={styles.hinoHeader}>
              <div className={styles.hinoTitulo}>
                <h1>{hino.titulo}</h1>
                <span className={styles.hinoCategoria}>{categoriaNome}</span>
              </div>
              <div className={styles.hinoControles}>
                <button
                  className={`${styles.botaoTocar} ${
                    tocando ? styles.tocando : ""
                  }`}
                  onClick={handleTocarClick}
                >
                  {tocando ? "Pausar" : "Tocar"}
                </button>
              </div>
            </div>

            <div className={styles.hinoInfo}>
              <div className={styles.hinoMetadados}>
                <p>
                  <strong>Compositor:</strong> {hino.compositor}
                </p>
                <p>
                  <strong>Referência Bíblica:</strong> {hino.versiculoBase}
                </p>
              </div>
            </div>

            <div className={styles.hinoConteudo}>
              <div className={styles.hinoLetra}>
                <h2>Letra</h2>
                <pre>{hino.letra}</pre>
              </div>

              <div className={styles.hinoRecursos}>
                <h2>Recursos Disponíveis</h2>
                <div className={styles.recursosBotoes}>
                  <button className={styles.recursoBtn}>
                    <span className={styles.iconeRecurso}>📝</span>
                    Cifra
                  </button>
                  <button className={styles.recursoBtn}>
                    <span className={styles.iconeRecurso}>🎵</span>
                    Partitura
                  </button>
                  <button className={styles.recursoBtn}>
                    <span className={styles.iconeRecurso}>🔊</span>
                    Playback
                  </button>
                  <button className={styles.recursoBtn}>
                    <span className={styles.iconeRecurso}>📽️</span>
                    Slides
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.hinosRelacionados}>
              <h2>Você também pode gostar</h2>
              <div className={styles.hinosRelacionadosLista}>
                <Link href="/louvor/1" className={styles.hinoRelacionadoLink}>
                  Grande é o Senhor
                </Link>
                <Link href="/louvor/4" className={styles.hinoRelacionadoLink}>
                  Digno é o Senhor
                </Link>
                <Link href="/louvor/9" className={styles.hinoRelacionadoLink}>
                  Grandioso És Tu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
