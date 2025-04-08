"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para mudar a aparência da navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar menu quando mudar de página
  useEffect(() => {
    setMenuAberto(false);
  }, [pathname]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <h1>Portal Cristão</h1>
          </Link>
        </div>

        {/* Menu para dispositivos móveis */}
        <div
          className={`${styles.menuToggle} ${menuAberto ? styles.active : ""}`}
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links de navegação */}
        <ul className={`${styles.navLinks} ${menuAberto ? styles.active : ""}`}>
          <li>
            <Link href="/" className={pathname === "/" ? styles.active : ""}>
              Início
            </Link>
          </li>
          <li>
            <Link
              href="/biblia"
              className={pathname === "/biblia" ? styles.active : ""}
            >
              Bíblia
            </Link>
          </li>
          <li>
            <Link
              href="/estudos"
              className={pathname === "/estudos" ? styles.active : ""}
            >
              Estudos
            </Link>
          </li>
          <li>
            <Link
              href="/devocional"
              className={pathname === "/devocional" ? styles.active : ""}
            >
              Devocional
            </Link>
          </li>
          <li>
            <Link
              href="/oracao"
              className={pathname === "/oracao" ? styles.active : ""}
            >
              Oração
            </Link>
          </li>
          <li>
            <Link
              href="/estudos/livros"
              className={pathname === "/estudos/livros" ? styles.active : ""}
            >
              Comentários Bíblicos
            </Link>
          </li>
          <li>
            <Link
              href="/sobre"
              className={pathname === "/sobre" ? styles.active : ""}
            >
              Sobre
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
