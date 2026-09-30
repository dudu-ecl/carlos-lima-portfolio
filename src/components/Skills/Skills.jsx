/*
=====================================================
COMPONENTE: Skills

Responsabilidade:

Apresentar as principais tecnologias
e ferramentas utilizadas no desenvolvimento.

A seção responde à pergunta:

Quais tecnologias fazem parte da minha stack?

O conteúdo está organizado por áreas para
facilitar a leitura e permitir futuras expansões.

Projeto: Portfólio 2.0
Autor: Carlos Lima
=====================================================
*/

import Container from "../Container/Container";
import { useLanguage } from "../../hooks/useLanguage";
import styles from "./Skills.module.css";

function Skills() {

    const { texts } = useLanguage();
    
    return (

        <section
            id="skills"
            className={styles.skills}
        >

            <Container>
                
                <div className={styles.content}>

                    {/* ==========================
                        APRESENTAÇÃO DAS SKILLS
                    ========================== */}

                    <div className={styles.info}>

                        <span>

                            {texts.skills.badge}

                        </span>

                        <h2>

                            {texts.skills.title}

                        </h2>

                        <p>

                            {texts.skills.description}

                        </p>

                    </div>

                    {/* ==========================
                        CATEGORIAS E TECNOLOGIAS
                    ========================== */}

                    <div className={styles.skillsGrid}>

                        <div className={styles.card}>

                            <h3>

                                {texts.skills.categories.frontend}

                            </h3>

                            <div className={styles.techList}>

                                <span>React</span>
                                <span>Next.js</span>
                                <span>JavaScript</span>
                                <span>TypeScript</span>
                                <span>HTML5</span>
                                <span>CSS3</span>

                            </div>

                        </div>

                        <div className={styles.card}>

                            <h3>

                               {texts.skills.categories.backend}

                            </h3>

                            <div className={styles.techList}>

                                <span>Node.js</span>
                                <span>Express</span>
                                <span>REST API</span>
                                <span>JWT</span>

                            </div>

                        </div>

                        <div className={styles.card}>

                            <h3>

                                {texts.skills.categories.database}

                            </h3>

                            <div className={styles.techList}>

                                <span>MySQL</span>
                                <span>SQL</span>
                                <span>{texts.skills.modeling}</span>

                            </div>

                        </div>

                        <div className={styles.card}>

                            <h3>

                                {texts.skills.categories.tools}
                                
                            </h3>

                            <div className={styles.techList}>

                                <span>Git</span>
                                <span>GitHub</span>
                                <span>VS Code</span>
                                <span>Figma</span>

                            </div>

                        </div>

                    </div>

                </div>

            </Container>

        </section>

    );
}

export default Skills;