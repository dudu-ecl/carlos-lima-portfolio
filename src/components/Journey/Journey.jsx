/*
=====================================================
COMPONENTE: Journey

Responsabilidade:

Apresentar a trajetória de evolução profissional
através de uma linha do tempo organizada.

A seção reúne:

1. Formação acadêmica;
2. Desenvolvimento de projetos práticos;
3. Aprendizado contínuo;
4. Próximos objetivos profissionais.

O objetivo é demonstrar evolução constante,
aprendizado aplicado e direcionamento de carreira.

Projeto: Portfólio 2.0
Autor: Carlos Lima
=====================================================
*/

import Container from "../Container/Container";
import { useLanguage } from "../../hooks/useLanguage";
import styles from "./Journey.module.css";

function Journey() {

    const { texts } = useLanguage();

    return (

        <section 
            id="journey"
            className={styles.journey}
        >

            <Container>

                <div className={styles.content}>

                    {/* ==========================
                        APRESENTAÇÃO DA JORNADA
                    ========================== */}

                    <div className={styles.info}>

                        <span>

                            {texts.journey.badge}

                        </span>

                        <h2>

                            {texts.journey.title}

                        </h2>

                        <p>

                            {texts.journey.description}

                        </p>

                    </div>

                    {/* ==========================
                        LINHA DO TEMPO
                    ========================== */}

                    <div className={styles.timeline}>

                        <div className={styles.timelineItem}>

                            <span>{texts.journey.items.education.period}</span>

                            <h3>

                                {texts.journey.items.education.title}

                            </h3>

                            <p>

                                {texts.journey.items.education.description}

                            </p>

                        </div>

                        <div className={styles.timelineItem}>

                            <span>{texts.journey.items.projects.period}</span>

                            <h3>

                                {texts.journey.items.projects.title}

                            </h3>

                            <p>

                                {texts.journey.items.projects.description}

                            </p>

                        </div>

                        <div className={styles.timelineItem}>

                            <span>{texts.journey.items.studies.period}</span>

                            <h3>

                                {texts.journey.items.studies.title}

                            </h3>

                            <p>

                                {texts.journey.items.studies.description}

                            </p>

                        </div>

                        <div className={styles.timelineItem}>

                            <span>{texts.journey.items.goals.period}</span>

                            <h3>

                                {texts.journey.items.goals.title}

                            </h3>

                            <p>

                                {texts.journey.items.goals.description}
                                
                            </p>

                        </div>

                    </div>

                </div>

            </Container>

        </section>

    );
    
}

export default Journey;