"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "geral",
    mensagem: "",
  });

  const [enviando, setEnviando] = useState(false);
  const [mensagemStatus, setMensagemStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setMensagemStatus(null);

    // Simulação de envio para demonstração
    try {
      // Aqui seria feita a requisição real para enviar os dados do formulário
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simular sucesso após o "envio"
      setMensagemStatus({
        tipo: "sucesso",
        texto: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      });

      // Limpar o formulário após envio bem-sucedido
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        assunto: "geral",
        mensagem: "",
      });
    } catch (error) {
      setMensagemStatus({
        tipo: "erro",
        texto:
          "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
      });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className={styles.contatoPage}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.contatoHero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <div className={styles.contatoHeroContent}>
            <h1>Entre em Contato</h1>
            <p>
              Estamos aqui para responder suas dúvidas e receber seu feedback
            </p>
          </div>
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.contatoGrid}>
            {/* Formulário de Contato */}
            <section className={styles.formSection}>
              <div className={styles.formContainer}>
                <h2>Envie uma Mensagem</h2>

                {mensagemStatus && (
                  <div
                    className={`${styles.statusMensagem} ${
                      styles[mensagemStatus.tipo]
                    }`}
                  >
                    {mensagemStatus.texto}
                  </div>
                )}

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="nome">Nome Completo*</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">E-mail*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="seu.email@exemplo.com"
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="telefone">Telefone</label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="assunto">Assunto*</label>
                    <select
                      id="assunto"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleChange}
                      required
                      className={styles.select}
                    >
                      <option value="geral">Informações Gerais</option>
                      <option value="cultos">Horários de Cultos</option>
                      <option value="eventos">Eventos</option>
                      <option value="estudos">Estudos Bíblicos</option>
                      <option value="oracao">Pedido de Oração</option>
                      <option value="comunidade">
                        Participar da Comunidade
                      </option>
                      <option value="outro">Outro Assunto</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="mensagem">Mensagem*</label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      required
                      placeholder="Digite sua mensagem aqui..."
                      className={styles.textarea}
                      rows={6}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={enviando}
                  >
                    {enviando ? "Enviando..." : "Enviar Mensagem"}
                  </button>
                </form>
              </div>
            </section>

            {/* Informações de Contato */}
            <section className={styles.infoSection}>
              <div className={styles.infoContainer}>
                <h2>Informações de Contato</h2>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcone}>📞</div>
                  <div className={styles.infoConteudo}>
                    <h3>Telefone</h3>
                    <p>(00) 0000-0000</p>
                    <p>(00) 0000-0000</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcone}>✉️</div>
                  <div className={styles.infoConteudo}>
                    <h3>E-mail</h3>
                    <p>contato@igrejaonline.com</p>
                    <p>atendimento@igrejaonline.com</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcone}>📍</div>
                  <div className={styles.infoConteudo}>
                    <h3>Endereço</h3>
                    <p>Rua Exemplo, 123 - Bairro</p>
                    <p>Cidade/UF - CEP: 00000-000</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcone}>⏰</div>
                  <div className={styles.infoConteudo}>
                    <h3>Horários de Culto</h3>
                    <p>Domingos: 09:00 e 19:00</p>
                    <p>Quartas-feiras: 19:30</p>
                  </div>
                </div>

                <div className={styles.redesSociais}>
                  <h3>Redes Sociais</h3>
                  <div className={styles.redesLinks}>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Facebook"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Instagram"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="YouTube"
                    >
                      YouTube
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
