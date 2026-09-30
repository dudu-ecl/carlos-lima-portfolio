/*
=====================================================
COMPONENTE: Footer

Responsabilidade:

Encerrar a experiência do portfólio de forma
profissional, oferecendo:

1. Identidade do profissional;
2. Navegação rápida pelas principais seções;
3. Informações finais do projeto;
4. Atalho para retornar ao início da página.

O Footer reforça a identidade do portfólio
e facilita a navegação ao final da experiência.

Projeto: Portfólio 2.0
Autor: Carlos Lima
=====================================================
*/

import Container from "../Container/Container";
import { useLanguage } from "../../hooks/useLanguage";
import styles from "./Footer.module.css";

function Footer() {

    const { texts } = useLanguage();

    return (

        <footer
            id="footer"
            className={styles.footer}
        >

            <Container>

                <div className={styles.content}>

                    {/* ==========================
                        IDENTIDADE PROFISSIONAL
                    ========================== */}

                    <div className={styles.info}>

                        <p className={styles.name}>

                            Carlos Lima

                        </p>

                        <p>

                            {texts.footer.description}

                        </p>

                    </div>

                    {/* ==========================
                        NAVEGAÇÃO RÁPIDA
                    ========================== */}

                    <nav 
                        className={styles.links}
                        aria-label={texts.footer.navigationLabel}
                    >

                        <a href="#about">
                            {texts.footer.links.about}
                        </a>
                        <a href="#projects">
                            {texts.footer.links.projects}
                        </a>
                        <a href="#skills">
                            {texts.footer.links.skills}
                        </a>
                        <a href="#journey">
                            {texts.footer.links.journey}
                        </a>
                        <a href="#contact">
                            {texts.footer.links.contact}
                        </a>

                    </nav>

                </div>

                 {/* ==========================
                    INFORMAÇÕES FINAIS
                 ========================== */}

                <div className={styles.bottom}>

                    <p>

                       {texts.footer.copyright}
                       
                    </p>

                    <a href="#home">

                        {texts.footer.backToTop}
                        
                    </a>

                </div>

            </Container>

        </footer>
    );
    
}

export default Footer;