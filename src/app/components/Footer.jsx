import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h3>Portal Cristão</h3>
            <p>
              Fortalecendo sua fé e conectando a comunidade cristã através da
              palavra de Deus.
            </p>
            {/* <div className={styles.socialLinks}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className={styles.facebookIcon}></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className={styles.instagramIcon}></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <i className={styles.youtubeIcon}></i>
              </a>
            </div> */}
          </div>

          <div className={styles.footerColumn}>
            <h4>Links Rápidos</h4>
            <ul>
              <li>
                <Link href="/">Início</Link>
              </li>
              <li>
                <Link href="/biblia">Bíblia</Link>
              </li>
              <li>
                <Link href="/estudos">Estudos</Link>
              </li>
              <li>
                <Link href="/devocional">Devocional</Link>
              </li>
              <li>
                <Link href="/oracao">Oração</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Recursos</h4>
            <ul>
              <li>
                <Link href="/devocional">Devocionais Diários</Link>
              </li>
              <li>
                <Link href="/estudos/temas">Estudos Temáticos</Link>
              </li>
              <li>
                <Link href="/estudos/livros">Comentários Bíblicos</Link>
              </li>
              <li>
                <Link href="/louvor">Hinários e Cânticos</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Contato</h4>
            <address className={styles.address}>
              <p>
                <i className={styles.emailIcon}></i> contato@portalcristao.com
              </p>
              <p>
                <i className={styles.phoneIcon}></i> (51) 99339-2983
              </p>
            </address>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>
            &copy; {new Date().getFullYear()} Portal Cristão. Todos os direitos
            reservados.
          </p>
          <p> Desenvolvido por Saulo Pavanello </p>
          <p>
            <Link href="/politica-privacidade">Política de Privacidade</Link> |
            <Link href="/termos-uso"> Termos de Uso</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
