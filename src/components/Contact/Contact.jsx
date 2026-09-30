/*
=====================================================
COMPONENTE: Contact

Responsabilidade:

Facilitar o contato com o profissional através
de canais diretos e relevantes.

A seção apresenta canais diretos de contato:

1. Email para contato direto;
2. WhatsApp;
3. LinkedIn;
4. GitHub.

O objetivo é oferecer formas simples e acessíveis
para recrutadores, clientes e colaboradores
iniciarem uma conversa.

Projeto: Portfólio 2.0
Autor: Carlos Lima
=====================================================
*/

import Container from "../Container/Container";
import { useLanguage } from "../../hooks/useLanguage";
import styles from "./Contact.module.css";

function Contact() {

    const { texts } = useLanguage();
    
    return (

        <section 
            id="contact"
            className={styles.contact}
        >

            <Container>

                <div className={styles.content}>

                    {/* ==========================
                        APRESENTAÇÃO DO CONTATO
                    ========================== */}

                    <div className={styles.info}>

                        <span>
                    
                            {texts.contact.badge}

                        </span>

                        <h2>

                            {texts.contact.title}

                        </h2>

                        <p>

                            {texts.contact.description}

                        </p>

                    </div>

                    {/* ==========================
                        CANAIS DE CONTATO
                    ========================== */}

                    <div className={styles.contactCard}>

                        <div className={styles.item}>

                            <h3>{texts.contact.channels.email}</h3>

                            <a href="mailto:dudu_ecl@hotmail.com">
                                
                                dudu_ecl@hotmail.com
                                
                            </a>

                        </div>

                        <div className={styles.item}>

                            <h3>{texts.contact.channels.whatsapp}</h3>

                            <a 
                                href="https://wa.me/5581997275973"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                
                                (81) 99727-5973
                                
                            </a>

                        </div>

                        <div className={styles.item}>

                            <h3>{texts.contact.channels.linkedin}</h3>

                            <a
                                href="https://linkedin.com/in/carloseduardocl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                
                                linkedin.com/in/carloseduardocl
                                
                            </a>

                        </div>

                        <div className={styles.item}>

                            <h3>{texts.contact.channels.github}</h3>

                            <a
                                href="https://github.com/dudu-ecl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                
                                github.com/dudu-ecl
                                
                            </a>

                        </div>

                    </div>

                </div>

            </Container>

        </section>

    );

}

export default Contact;