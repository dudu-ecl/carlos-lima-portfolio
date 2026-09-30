/*
=====================================================
COMPONENTE: Hero

Responsabilidade:

Apresentar o profissional logo no início da experiência,
comunicando de forma objetiva:

1. Quem é o profissional;
2. Qual é sua atuação;
3. Quais tecnologias fazem parte de sua stack;
4. Como acessar seus projetos ou entrar em contato.

A seção também apresenta um card visual simulando
um editor de código, reforçando a identidade técnica
do portfólio.

Projeto: Portfólio 2.0
Autor: Carlos Lima
=====================================================
*/

import Container from "../Container/Container";
import { useLanguage } from "../../hooks/useLanguage";
import styles from "./Hero.module.css";


function Hero() {

    const { texts } = useLanguage();

    return (

        <section 
            id="home"
            className={styles.hero}
        >

            <Container>

                <div className={styles.content}>

                   {/* ===========================
                        APRESENTAÇÃO PROFISSIONAL
                    =========================== */}

                    <div className={styles.info}>

                        {/* Identificação da área de atuação */}
                        <span className={styles.badge}>
                            {texts.hero.badge}
                        </span>

                        {/* Principal mensagem da página */}
                        <h1>

                            {texts.hero.title}

                        </h1>

                        {/* Resumo da proposta profissional */}
                        <p>

                            {texts.hero.description}

                        </p>

                        {/* Ações principais da seção */}
                        <div className={styles.buttons}>

                            <a 
                                href="#projects"
                                className={styles.primaryButton}
                            >

                                {texts.hero.projectsButton}

                            </a>

                            <a 
                                href="#contact"
                                className={styles.secondaryButton}
                            >

                                {texts.hero.contactButton}

                            </a>

                        </div>

                        {/* Tecnologias principais utilizadas */}
                        <div className={styles.techStack}>

                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>React</span>
                            <span>Node.js</span>
                            <span>TypeScript</span>
                            <span>Next.js</span>
                            <span>Git</span>
                            <span>GitHub</span>

                        </div>

                    </div>

                    {/* ===========================
                        REPRESENTAÇÃO TÉCNICA
                    =========================== */}

                    <div className={styles.codeCard}>

                        <pre>

{`const developer = {
    name: "Carlos Lima",
    role: "Fullstack",
    stack: [
        "React",
        "Node.js",
        "JavaScript"
    ],

    status: "Available"
};`}

                        </pre>

                    </div>

                </div>

            </Container>

        </section>

    );
}

export default Hero;