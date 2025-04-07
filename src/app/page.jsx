import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/">
              <h1>Igreja Online</h1>
            </Link>
          </div>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li>
              <Link href="/eventos">Eventos</Link>
            </li>
            <li>
              <Link href="/biblia">Bíblia</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <Image
            src="/images/leao-hero.jpg"
            alt="Leão de Judá"
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroText}>
            <h1>Bem-vindo à Igreja Online</h1>
            <p>Fortalecendo sua fé e conectando a comunidade evangélica</p>
            <div className={styles.heroCtas}>
              <Link href="/biblia" className={styles.primaryButton}>
                Acessar a Bíblia
              </Link>
              <Link href="/eventos" className={styles.secondaryButton}>
                Eventos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seções principais */}
      <main className={styles.main}>
        {/* Seção de Bíblia */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Palavra de Deus</h2>
              <p>
                Acesse a Bíblia Sagrada e fortaleça sua caminhada com Cristo
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureImage}>
                <Image
                  src="/images/biblia.webp"
                  alt="Bíblia Sagrada"
                  width={400}
                  height={300}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.featureContent}>
                <h3>Bíblia Online</h3>
                <p>
                  Acesse a Bíblia em diversas traduções, realize buscas por
                  palavras e versículos, e compartilhe com facilidade.
                </p>
                <Link href="/biblia" className={styles.featureLink}>
                  Acessar a Bíblia →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Oração */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Momento de Oração</h2>
              <p>A oração nos conecta diretamente com Deus</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureContent}>
                <h3>Pedidos de Oração</h3>
                <p>
                  Envie seus pedidos de oração para nossa comunidade. Unidos,
                  intercederemos por você e sua família.
                </p>
                <Link href="/oracao" className={styles.featureLink}>
                  Enviar pedido →
                </Link>
              </div>
              <div className={styles.featureImage}>
                <Image
                  src="/images/oração.jpg"
                  alt="Momento de Oração"
                  width={400}
                  height={300}
                  className={styles.cardImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção Espírito Santo */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Guiados pelo Espírito</h2>
              <p>O Espírito Santo nos guia em nossa jornada de fé</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureImage}>
                <Image
                  src="/images/espirito-santo.jpg"
                  alt="Espírito Santo"
                  width={400}
                  height={300}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.featureContent}>
                <h3>Devocionais Diários</h3>
                <p>
                  Comece seu dia com uma palavra edificante. Receba devocionais
                  inspiradores diretamente no seu e-mail.
                </p>
                <Link href="/devocionais" className={styles.featureLink}>
                  Inscrever-se →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Versículo Aleatório */}
        <section className={`${styles.section} ${styles.verseSection}`}>
          <div className={styles.container}>
            <div className={styles.verseCard}>
              <div className={styles.verseContent}>
                <h3>Versículo do Dia</h3>
                <p className={styles.verse}>
                  "Porque Deus amou o mundo de tal maneira que deu o seu Filho
                  unigênito, para que todo aquele que nele crê não pereça, mas
                  tenha a vida eterna."
                </p>
                <p className={styles.verseReference}>João 3:16</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerColumn}>
              <h3>Igreja Online</h3>
              <p>
                Fortalecendo sua fé e conectando a comunidade evangélica através
                da palavra de Deus.
              </p>
            </div>
            <div className={styles.footerColumn}>
              <h4>Links Rápidos</h4>
              <ul>
                <li>
                  <Link href="/">Início</Link>
                </li>
                <li>
                  <Link href="/sobre">Sobre</Link>
                </li>
                <li>
                  <Link href="/eventos">Eventos</Link>
                </li>
                <li>
                  <Link href="/biblia">Bíblia</Link>
                </li>
                <li>
                  <Link href="/contato">Contato</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4>Contato</h4>
              <address>
                <p>Email: contato@igrejaonline.com</p>
                <p>Telefone: (00) 0000-0000</p>
              </address>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>
              &copy; {new Date().getFullYear()} Igreja Online. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
