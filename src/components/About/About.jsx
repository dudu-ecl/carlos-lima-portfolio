/*
=====================================================
COMPONENTE: About

Responsabilidade:

Apresentar o profissional além do Hero,
comunicando sua forma de pensar, trabalhar
e desenvolver soluções.

A seção destaca:

- Visão sobre desenvolvimento de software;
- Organização e boas práticas;
- Aprendizado contínuo;
- Compromisso com qualidade e manutenção.

Projeto: Portfólio 2.0
Autor: Carlos Lima
=====================================================
*/

import Container from "../Container/Container";
import { useLanguage } from "../../hooks/useLanguage";
import styles from "./About.module.css";

function About() {

    const { texts } = useLanguage();

    return (

        <section 
            id="about" 
            className={styles.about}
        >

            <Container>

                <div className={styles.content}>

                    {/* ===========================
                        APRESENTAÇÃO PROFISSIONAL
                    =========================== */}

                    <div className={styles.info}>

                        {/* Identificação da seção */}
                        <span>
                            {texts.about.badge}
                        </span>

                        {/* Principal mensagem da seção */}
                        <h2>
                            {texts.about.title}
                        </h2>

                        {/* Visão sobre desenvolvimento de software */}
                        <p>
                            {texts.about.paragraphOne}
                        </p>

                        {/* Evolução e aprimoramento profissional */}
                        <p>
                            {texts.about.paragraphTwo}
                        </p>

                    </div>

                    {/* ===========================
                        DIFERENCIAIS
                    =========================== */}

                    <div className={styles.cards}>

                        <div className={styles.card}>

                            <h3>{texts.about.cards.organization.title}</h3>
                        
                            <p>
                                {texts.about.cards.organization.description}
                            </p>

                        </div>

                        <div className={styles.card}>

                            <h3>{texts.about.cards.bestPractices.title}</h3>

                            <p>
                                {texts.about.cards.bestPractices.description}
                            </p>

                        </div>

                        <div className={styles.card}>

                            <h3>{texts.about.cards.continuousLearning.title}</h3>

                            <p>
                                {texts.about.cards.continuousLearning.description}
                            </p>

                        </div>

                    </div>

                </div>

            </Container>

        </section>

    );
    
}

export default About;