/* =====================================================
 * COMPONENTE: Navbar
 * -----------------------------------------------------
 * Responsabilidade:
 * Exibir a navegação principal da aplicação.
 *
 * A Navbar é composta por:
 *
 * • Logo
 * • Links de navegação
 * • Botão de idioma
 * • Botão de tema
 * • Menu mobile
 *
 *
 * Projeto: Portfólio 2.0
 * Autor: Carlos Lima
 * =====================================================
 */

import Container from "../Container/Container";
import ThemeToggle from "../ThemeToggle";
import { useNavbar } from "../../hooks/useNavbar";
import { useState } from "react";
import LanguageToggle from "../LanguageToggle";
import { useLanguage } from "../../hooks/useLanguage";

import styles from "./Navbar.module.css";

function Navbar() {

    const { isScrolled } = useNavbar();
    const { texts } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function closeMenu() {

        setIsMenuOpen(false);

    }

    return (
        <header className={`
                    ${styles.header}
                    ${isScrolled ? styles.scrolled : ""}
                `}
        >
            <Container>
                <nav 
                    className={styles.nav}
                    aria-label={texts.navbar.navigationLabel}
                >
                    {/* ==================================================
                        LOGO
                        --------------------------------------------------
                        O "CL" é utilizado como identidade visual do
                        portfólio e também representa o favicon da aplicação.
                    =================================================== */}

                    <div className={styles.logo}>
                    
                        <span className={styles.logoIcon}>
                            CL
                        </span>

                        <span className={styles.logoText}>
                            Carlos Lima
                        </span>

                    </div>

                    {/* ==================================================
                        LINKS PRINCIPAIS
                    =================================================== */}

                    <ul 
                        id="navbar-menu"
                        className={`
                            ${styles.links}
                            ${isMenuOpen ? styles.linksOpen : ""}
                        `}
                    >

                        <li>
                            <a href="#about"
                               onClick={closeMenu} 
                            >
                                {texts.navbar.about}
                            </a>
                        </li>

                        <li>
                            <a href="#projects"
                               onClick={closeMenu} 
                            >
                                {texts.navbar.projects}
                            </a>
                        </li>

                        <li>
                            <a href="#skills"
                               onClick={closeMenu} 
                            >
                                {texts.navbar.skills}
                            </a>
                        </li>

                        <li>
                            <a href="#journey"
                               onClick={closeMenu} 
                            >
                                {texts.navbar.journey}
                            </a>
                        </li>

                        <li>
                            <a href="#contact"
                               onClick={closeMenu} 
                            >
                                {texts.navbar.contact}
                            </a>
                        </li>

                    </ul>

                    {/* ==================================================
                        MENU MOBILE
                    =================================================== */}

                    <button 
                        className={styles.menuButton}
                        aria-label={
                            isMenuOpen
                                ? texts.navbar.closeMenu
                                : texts.navbar.openMenu
                        }
                        aria-expanded={isMenuOpen}
                        aria-controls="navbar-menu"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >

                        <span />
                        <span />
                        <span />

                    </button>

                    {/* ==================================================
                        AÇÕES DA NAVBAR
                    =================================================== */}

                    <div className={styles.actions}>

                        {/* Alternância de idioma */}

                        <LanguageToggle />

                        <ThemeToggle />

                    </div>

                </nav>

            </Container>

        </header>
    );
}

export default Navbar;