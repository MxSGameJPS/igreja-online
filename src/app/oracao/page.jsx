"use client";

import React from "react";
import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Oracao() {
  return (
    <div className={styles.oracaoPage}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>O Poder da Oração</h1>
            <p>Comunicando-se com Deus e fortalecendo sua fé</p>
          </div>
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Introdução */}
          <section className={styles.introSection}>
            <div className={styles.introContent}>
              <h2 className={styles.sectionTitle}>Por Que Devemos Orar?</h2>
              <div className={styles.divider}></div>
              <p>
                A oração é o canal direto de comunicação entre o ser humano e
                Deus. É através da oração que podemos expressar nossos
                sentimentos, agradecer pelas bênçãos recebidas, confessar nossos
                pecados e apresentar nossas petições. Como está escrito em
                Filipenses 4:6-7: "Não andeis ansiosos por coisa alguma; antes
                em tudo sejam os vossos pedidos conhecidos diante de Deus pela
                oração e súplica com ações de graças; e a paz de Deus, que
                excede todo entendimento, guardará os vossos corações e as
                vossas mentes em Cristo Jesus."
              </p>
              <p>
                A oração não é apenas um ritual religioso, mas uma necessidade
                espiritual que nos aproxima do Criador. Jesus mesmo nos ensinou
                a importância da oração e nos deu um modelo a seguir em Mateus
                6:9-13, conhecido como o "Pai Nosso". Além disso, o próprio
                Jesus dedicava tempo à oração, muitas vezes se retirando para
                lugares solitários para comungar com o Pai.
              </p>
            </div>
          </section>

          {/* Benefícios da Oração */}
          <section className={styles.beneficiosSection}>
            <h2 className={styles.sectionTitle}>Benefícios da Oração</h2>
            <div className={styles.divider}></div>
            <div className={styles.beneficiosGrid}>
              <div className={styles.beneficioCard}>
                <div className={styles.beneficioIcon}>🙏</div>
                <h3>Fortalecimento Espiritual</h3>
                <p>
                  A oração fortalece nossa conexão com Deus e desenvolve nossa
                  vida espiritual. Como o corpo precisa de alimento, nossa alma
                  necessita da comunhão com Deus.
                </p>
              </div>
              <div className={styles.beneficioCard}>
                <div className={styles.beneficioIcon}>❤️</div>
                <h3>Paz Interior</h3>
                <p>
                  Ao orarmos, entregamos nossas preocupações a Deus e recebemos
                  Sua paz que excede todo entendimento, como promete Filipenses
                  4:7.
                </p>
              </div>
              <div className={styles.beneficioCard}>
                <div className={styles.beneficioIcon}>🛡️</div>
                <h3>Proteção Espiritual</h3>
                <p>
                  A oração nos reveste da armadura de Deus (Efésios 6:10-18) e
                  nos protege contra os ataques espirituais do inimigo.
                </p>
              </div>
              <div className={styles.beneficioCard}>
                <div className={styles.beneficioIcon}>🔍</div>
                <h3>Discernimento</h3>
                <p>
                  Através da oração, podemos buscar a direção de Deus para
                  nossas vidas e receber sabedoria para tomar decisões corretas.
                </p>
              </div>
            </div>
          </section>

          {/* Boas Práticas */}
          <section className={styles.praticasSection}>
            <h2 className={styles.sectionTitle}>Boas Práticas de Oração</h2>
            <div className={styles.divider}></div>
            <div className={styles.praticasContent}>
              <div className={styles.praticaItem}>
                <h3>1. Ore com Regularidade</h3>
                <p>
                  Estabeleça momentos específicos do dia para orar. Daniel orava
                  três vezes ao dia (Daniel 6:10). Paulo nos exorta a "orar sem
                  cessar" (1 Tessalonicenses 5:17). A constância na oração
                  fortalece nossa comunhão com Deus.
                </p>
              </div>
              <div className={styles.praticaItem}>
                <h3>2. Ore com Sinceridade</h3>
                <p>
                  Deus conhece nosso coração. Não precisamos usar palavras
                  rebuscadas ou fórmulas. O que importa é a sinceridade do nosso
                  coração. "O sacrifício agradável a Deus é o espírito
                  quebrantado; ao coração quebrantado e contrito não
                  desprezarás, ó Deus" (Salmo 51:17).
                </p>
              </div>
              <div className={styles.praticaItem}>
                <h3>3. Ore com Fé</h3>
                <p>
                  "E, tudo quanto pedirdes em oração, crendo, recebereis"
                  (Mateus 21:22). A oração sem fé não produz resultado. Devemos
                  crer que Deus nos ouve e que Ele responderá conforme a Sua
                  vontade.
                </p>
              </div>
              <div className={styles.praticaItem}>
                <h3>4. Inclua Gratidão</h3>
                <p>
                  Sempre comece suas orações com agradecimento. Reconheça as
                  bênçãos que Deus já concedeu em sua vida. "Em tudo dai graças,
                  porque esta é a vontade de Deus em Cristo Jesus para convosco"
                  (1 Tessalonicenses 5:18).
                </p>
              </div>
              <div className={styles.praticaItem}>
                <h3>5. Ore pela Vontade de Deus</h3>
                <p>
                  Jesus nos ensinou a orar: "Seja feita a Tua vontade" (Mateus
                  6:10). Devemos buscar a vontade de Deus acima dos nossos
                  desejos. "E esta é a confiança que temos nele: que, se
                  pedirmos alguma coisa segundo a sua vontade, ele nos ouve" (1
                  João 5:14).
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContainer}>
              <h2>Construa sua vida de oração</h2>
              <p>
                Explore nossos guias e recursos para aprofundar sua vida de
                oração e fortalecer seu relacionamento com Deus.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/oracao/guia" className={styles.ctaBtn}>
                  Guias de Oração
                </a>
                <a href="/estudos/oracao" className={styles.ctaBtnOutline}>
                  Estudos sobre Oração
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
