"use client";

import { useState, useEffect } from "react";
import styles from "./VersiculoDia.module.css";
import bibliaService from "../services/bibliaService";

export default function VersiculoDia() {
  const [versiculoDia, setVersiculoDia] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [compartilhado, setCompartilhado] = useState(false);

  useEffect(() => {
    buscarVersiculoAleatorio();
  }, []);

  const buscarVersiculoAleatorio = async () => {
    setCarregando(true);
    setErro(null);
    setCompartilhado(false);

    try {
      const data = await bibliaService.buscarVersiculoAleatorio();
      setVersiculoDia(data);
    } catch (error) {
      setErro("Não foi possível carregar o versículo do dia.");
      console.error("Erro ao buscar versículo aleatório:", error);
    } finally {
      setCarregando(false);
    }
  };

  const compartilharVersiculo = async () => {
    if (!versiculoDia) return;

    const textoCompartilhamento = `"${versiculoDia.text.trim()}" - ${
      versiculoDia.reference
    } | Portal Cristão`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Versículo do Dia",
          text: textoCompartilhamento,
          url: window.location.href,
        });
        setCompartilhado(true);
        setTimeout(() => setCompartilhado(false), 3000);
      } else {
        // Fallback para navegadores que não suportam a API Web Share
        await navigator.clipboard.writeText(textoCompartilhamento);
        setCompartilhado(true);
        setTimeout(() => setCompartilhado(false), 3000);
      }
    } catch (error) {
      console.error("Erro ao compartilhar versículo:", error);
    }
  };

  return (
    <div className={styles.verseCard}>
      <div className={styles.verseContent}>
        <h3>Versículo do Dia</h3>

        {carregando && <p className={styles.carregando}>Carregando...</p>}

        {erro && (
          <div className={styles.erro}>
            <p>{erro}</p>
            <button
              onClick={buscarVersiculoAleatorio}
              className={styles.recarregarButton}
            >
              Tentar Novamente
            </button>
          </div>
        )}

        {!carregando && !erro && versiculoDia && (
          <>
            <p className={styles.verse}>{versiculoDia.text}</p>
            <p className={styles.verseReference}>{versiculoDia.reference}</p>
            <div className={styles.verseBtns}>
              <button
                onClick={buscarVersiculoAleatorio}
                className={styles.novoVersiculoBtn}
                title="Carregar outro versículo"
              >
                <i className="fas fa-sync-alt"></i>
              </button>
              <button
                onClick={compartilharVersiculo}
                className={styles.compartilharBtn}
                title="Compartilhar versículo"
              >
                <i className="fas fa-share-alt"></i>
              </button>
            </div>
            {compartilhado && (
              <p className={styles.mensagemCompartilhado}>
                {navigator.share
                  ? "Compartilhado com sucesso!"
                  : "Copiado para a área de transferência!"}
              </p>
            )}
          </>
        )}

        {!carregando && !erro && !versiculoDia && (
          <div className={styles.semVersiculoContainer}>
            <p>Nenhum versículo carregado.</p>
            <button
              onClick={buscarVersiculoAleatorio}
              className={styles.recarregarButton}
            >
              Carregar Versículo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
