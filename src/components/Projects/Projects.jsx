/*
=====================================================
COMPONENTE: Projects

Responsabilidade:

Apresentar os principais projetos
desenvolvidos ao longo da trajetória.

A seção responde três perguntas:

1. Quais projetos foram desenvolvidos?
2. Quais tecnologias foram utilizadas?
3. Onde visualizar o projeto e seu código?

Nesta etapa a seção apresenta
projetos reais e mantém uma estrutura
preparada para futuras expansões.

Projeto: Portfólio 2.0
Autor: Carlos Lima
=====================================================
*/

import Container from "../Container/Container";
import { useLanguage } from "../../hooks/useLanguage";
import portfolioPreview from "../../assets/projects/portfolio2.png";
import styles from "./Projects.module.css";

function Projects() {

    const { texts } = useLanguage();
    
    return (

        <section 
            id="projects"
            className={styles.projects}
        >

            <Container>

                <div className={styles.content}>

                    {/* ==========================
                       APRESENTAÇÃO DA SEÇÃO
                    ========================== */}

                    <div className={styles.info}>

                        <span className={styles.badge}>
                            {texts.projects.badge}
                        </span>

                        <h2>
                            {texts.projects.title}
                        </h2>

                        <p>
                            {texts.projects.description}
                        </p>

                    </div>

                    {/* ===============================================
                        PROJETOS

                        Os links serão habilitados após a publicação
                        do repositório e do projeto em produção.
                    ================================================ */}

                    <div className={styles.projectsGrid}>

                        <article className={styles.projectCard}>

                            <div className={styles.preview}>

                                <img 
                                    src={portfolioPreview}
                                    alt={texts.projects.portfolio.previewAlt}
                                    loading="lazy"
                                    className={styles.previewImage}
                                />

                            </div>
                            
                            <h3>{texts.projects.portfolio.title}</h3>

                            <p>
                                {texts.projects.portfolio.description}
                            </p>

                            <div className={styles.techStack}>

                                <span>React</span>
                                <span>Vite</span>
                                <span>CSS Modules</span>

                            </div>
                            {/*
                            <div className={styles.actions}>

                                <a 
                                    href="#"
                                    className={styles.secondaryButton}
                                >
                                    {texts.projects.githubButton}
                                </a>

                                <a 
                                    href="#"
                                    className={styles.primaryButton}
                                >
                                    {texts.projects.viewProjectButton}
                                </a>

                            </div>
                            */}
                        </article>

                    {/*
                    =========================================================
                    PROJETOS FUTUROS
                    Os cards abaixo permanecem preparados para futuras versões
                    do portfólio. Serão reativados quando os projetos forem
                    concluídos e publicados.
                    =========================================================

                        <article className={styles.projectCard}>

                            <div className={styles.preview}>

                                Preview do Projeto

                            </div>
                            
                            <h3>Sistema de Login</h3>

                            <p>
                                Aplicação completa com autenticação utilizando
                                React, Node.js, MySQL e JWT.
                            </p>

                            <div className={styles.techStack}>

                                <span>React</span>
                                <span>Node.js</span>
                                <span>MySQL</span>
                                <span>JWT</span>

                            </div>

                            <div className={styles.actions}>

                                <a 
                                    href="#"
                                    className={styles.secondaryButton}
                                >

                                    GitHub
                                </a>

                                <a 
                                    href="#"
                                    className={styles.primaryButton}
                                >

                                    Ver Projeto
                                </a>

                            </div>

                        </article>

                        <article className={styles.projectCard}>

                            <div className={styles.preview}>

                                Preview do Projeto

                            </div>
                            
                            <h3>API REST</h3>

                            <p>
                                Desenvolvimento de uma API utilizando Node.js,
                                organizada em camadas e seguindo boas práticas.
                            </p>

                            <div className={styles.techStack}>

                                <span>Node.js</span>
                                <span>Express</span>
                                <span>REST API</span>

                            </div>

                            <div className={styles.actions}>

                                <a 
                                    href="#"
                                    className={styles.secondaryButton}
                                >

                                    GitHub
                                </a>

                                <a 
                                    href="#"
                                    className={styles.primaryButton}
                                >

                                    Ver Projeto
                                </a>

                            </div>

                        </article>

                        <article className={styles.projectCard}>

                            <div className={styles.preview}>

                                Preview do Projeto

                            </div>
                            
                            <h3>WAR em C</h3>

                            <p>
                                Projeto acadêmico desenvolvido em linguagem C,
                                aplicando lógica, estruturas de dados e programação estruturada.
                            </p>

                            <div className={styles.techStack}>

                                <span>C</span>
                                <span>Estruturas</span>
                                <span>Lógica</span>

                            </div>

                            <div className={styles.actions}>

                                <a 
                                    href="#"
                                    className={styles.secondaryButton}
                                >

                                    GitHub
                                </a>

                                <a 
                                    href="#"
                                    className={styles.primaryButton}
                                >

                                    Ver Projeto
                                </a>

                            </div>

                        </article>

                    */}

                    </div>

                </div>

            </Container>
            
        </section>
    );

}

export default Projects;