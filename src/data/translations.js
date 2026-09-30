/*
=====================================================
TRADUÇÕES

Centraliza os textos utilizados pela aplicação
nos idiomas disponíveis.

Idiomas atuais:

- Português-BR
- English

Os textos são organizados por seção,
mantendo a mesma estrutura entre os idiomas
para facilitar manutenção e futuras expansões.

Projeto: Portfólio 2.0
Autor: Carlos Lima
=====================================================
*/

export const translations = {

    "pt-BR": {

        seo: {

            title: 

                "Carlos Lima | Desenvolvedor Fullstack",

            description:

                "Portfólio profissional de Carlos Lima, Desenvolvedor Fullstack, com projetos em React, JavaScript e tecnologias web modernas, focado em organização, responsividade e boas práticas de desenvolvimento."
                
        },

        navbar: {

            navigationLabel: "Navegação principal",

            about: "Sobre",
            projects: "Projetos",
            skills: "Tecnologias",
            journey: "Jornada",
            contact: "Contato",

            openMenu: "Abrir menu",
            closeMenu: "Fechar menu"

        },

        themeToggle: {
            light: "Ativar tema claro",
            dark: "Ativar tema escuro"
        },

        languageToggle: {
            toEnglish: "Alterar idioma para inglês",
            toPortuguese: "Alterar idioma para português"
        },

        hero: {

            badge: "Fullstack Developer",

            title:

                "Desenvolvedor Fullstack criando aplicações web modernas, funcionais e focadas no usuário",

            description: 
            
                "Transformo ideias em aplicações web utilizando tecnologias do ecossistema JavaScript, com foco em performance, organização, manutenção e boas práticas de desenvolvimento.",

            projectsButton: "Ver projetos",
            contactButton: "Contato",
        },

        about: {

            badge: "Sobre mim",

            title:

                "Mais do que programar, acredito em construir soluções que gerem valor.",

            paragraphOne:

                "Acredito que desenvolver software vai muito além de escrever código. Busco compreender o problema por trás de cada solução, criando aplicações com arquitetura organizada, código limpo e foco em qualidade, manutenção e evolução contínua.",

            paragraphTwo:

                "Estou em constante evolução, aprendendo novas tecnologias e aprimorando minhas habilidades para desenvolver aplicações modernas, funcionais e bem estruturadas, sempre com o objetivo de entregar soluções confiáveis, escaláveis e que gerem valor para quem as utiliza.",

            cards: {

                organization: {
                    title: "Organização",
                    description:
                        "Projetos estruturados para facilitar manutenção, evolução e escalabilidade."
                },

                bestPractices: {
                    title: "Boas práticas",
                    description: 
                        "Código limpo, componentização e atenção aos detalhes em cada implementação."
                },

                continuousLearning: {
                    title: "Aprendizado Contínuo",
                    description: 
                        "Busco evoluir constantemente, aprendendo novas tecnologias e aprimorando minhas habilidades."
                }

            }
        },

        projects: {

            badge: "Projetos",

            title:

                "Projetos que demonstram minha evolução como desenvolvedor.",

            description:

                "Cada projeto representa uma oportunidade de aplicar conhecimentos, explorar novas tecnologias e transformar conceitos em soluções práticas, funcionais e bem estruturadas.",

            portfolio: {

                title: "Portfólio 2.0",

                description:
                    "Portfólio profissional desenvolvido com React e Vite, utilizando componentização, CSS Modules, Context API e hooks personalizados para estruturar uma aplicação organizada, responsiva e escalável. O projeto também implementa gerenciamento global de temas com persistência, boas práticas de desenvolvimento e uma arquitetura preparada para futuras evoluções.",

                previewAlt:
                    "Interface do projeto Portfólio 2.0"

            },

            githubButton: "GitHub",
            viewProjectButton: "Ver Projeto"

        },

        skills: {

            badge: "Tecnologias",

            title:

                "Tecnologias que utilizo para construir aplicações modernas e bem estruturadas.",

            description:

                "Minha stack reúne tecnologias para desenvolvimento Front-end, Back-end, bancos de dados e ferramentas que utilizo na construção de aplicações organizadas, responsivas e preparadas para evolução contínua.",

            categories: {

                frontend: "Front-end",
                backend: "Back-end",
                database: "Banco de Dados",
                tools: "Ferramentas"

            },

            modeling: "Modelagem"

        },

        journey: {

           badge: "Jornada",
           
           title:

                "Minha evolução como desenvolvedor.",

            description:

                "Cada etapa da minha trajetória contribuiu para desenvolver conhecimentos sólidos em programação, boas práticas, arquitetura de software e desenvolvimento de aplicações web modernas.",

            items: {

                education: {
                    period: "Em andamento",
                    title: "Formação",
                    description:
                        "Graduação em andamento, aliada à dedicação contínua aos estudos e ao desenvolvimento de projetos práticos."
                },

                projects: {
                    period: "2025 - Atual",
                    title: "Projetos",
                    description:
                        "Desenvolvimento de projetos práticos utilizando React e outras tecnologias do ecossistema JavaScript, aplicando conceitos de organização, responsividade e boas práticas."
                },

                studies: {
                    period: "Aprendizado contínuo",
                    title: "Estudos",
                    description:
                        "Aprofundamento contínuo em JavaScript, arquitetura de software, desenvolvimento web moderno e boas práticas de programação."
                },

                goals: {
                    period: "Próximos passos",
                    title: "Próximos Objetivos",
                    description:
                        "Expandir conhecimentos em TypeScript, Next.js, testes automatizados e computação em nuvem para desenvolver aplicações cada vez mais completas e escaláveis."
                }

            }

        },

        contact: {

            badge: "Contato",

            title:

                "Vamos transformar ideias em projetos.",

            description:

                "Estou aberto a conversar sobre oportunidades profissionais, projetos, colaborações e novas ideias. Será um prazer conhecer sua proposta e entender como posso contribuir.",

            channels: {

                email: "Email",
                whatsapp: "WhatsApp",
                linkedin: "LinkedIn",
                github: "GitHub"

            }

        },

        footer: {

             description:

                "Desenvolvedor Fullstack criando experiências digitais modernas, funcionais e focadas no usuário.",

            navigationLabel: "Navegação do rodapé",

            links: {

                about: "Sobre",
                projects: "Projetos",
                skills: "Tecnologias",
                journey: "Jornada",
                contact: "Contato"

            },

            copyright:

                "© 2026 Carlos Lima. Todos os direitos reservados.",

            backToTop: "Voltar ao topo"

        }

    },

    en: {

        seo: {

             title:

                "Carlos Lima | Fullstack Developer",
            
            description:

                "Professional portfolio of Carlos Lima, Fullstack Developer, featuring projects built with React, JavaScript, and modern web technologies, with a focus on organization, responsiveness, and development best practices."
                
        },

        navbar: {

            navigationLabel: "Main navigation",

            about: "About",
            projects: "Projects",
            skills: "Technologies",
            journey: "Journey",
            contact: "Contact",

            openMenu: "Open menu",
            closeMenu: "Close menu"

        },

        themeToggle: {
            light: "Enable light theme",
            dark: "Enable dark theme"
        },

        languageToggle: {
            toEnglish: "Change language to English",
            toPortuguese: "Change language to Portuguese"
        },

        hero: {

            badge: "Fullstack Developer",

            title: 
            
                "Fullstack developer building modern, functional web applications focused on the user experience",
            
            description: 
            
                "I turn ideas into web applications using technologies from the JavaScript ecosystem, with a focus on performance, organization, maintainability, and development best practices.",

            projectsButton: "View Projects",
            contactButton: "Contact"
        },

        about: {

            badge: "About Me",

            title: 

                "More than writing code, I believe in building solutions that create value.",

            paragraphOne:

                "I believe software development goes far beyond writing code. I seek to understand the problem behind each solution, building applications with organized architecture, clean code, and a focus on quality, maintainability, and continuous evolution.",

            paragraphTwo:

                "I am constantly evolving, learning new technologies and improving my skills to build modern, functional, and well-structured applications, always aiming to deliver reliable, scalable solutions that create value for the people who use them.",

            cards: {

                organization: {
                    title: "Organization",
                    description:
                        "Projects structured to support maintainability, evolution, and scalability."
                },

                bestPractices: {
                    title: "Best Practices",
                    description:
                        "Clean code, componentization, and attention to detail in every implementation."
                },

                continuousLearning: {
                    title: "Continuous Learning",
                    description:
                        "I continuously seek to grow by learning new technologies and improving my skills."
                }
            }
        },

        projects: {

            badge: "Projects",

            title:

                "Projects that reflect my growth as a developer.",

            description:

                "Each project represents an opportunity to apply knowledge, explore new technologies, and turn concepts into practical, functional, and well-structured solutions.",

            portfolio: {

                title: "Portfolio 2.0",

                description: 
                    "Professional portfolio built with React and Vite, using componentization, CSS Modules, Context API, and custom hooks to structure an organized, responsive, and scalable application. The project also implements global theme management with persistence, development best practices, and an architecture prepared for future evolution.",

                previewAlt:
                    "Interface of the Portfolio 2.0 project"

            },

            githubButton: "GitHub",
            viewProjectButton: "View Project"

        },

        skills: {

            badge: "Technologies",

            title:

                "Technologies I use to build modern and well-structured applications.",

            description:

                "My stack includes technologies for Front-end and Back-end development, databases, and tools I use to build organized, responsive applications prepared for continuous evolution.",

            categories: {

                frontend: "Front-end",
                backend: "Back-end",
                database: "Databases",
                tools: "Tools"

            },

            modeling: "Data Modeling"

        },

        journey: {

            badge: "Journey",

            title:

                "My growth as a developer.",

            description:

                "Each stage of my journey has contributed to building a solid foundation in programming, development best practices, software architecture, and modern web application development.",

            items: {

                education: {
                    period: "In progress",
                    title: "Education",
                    description:
                         "Currently pursuing my degree while continuously studying and developing practical projects."
                },

                projects: {
                    period: "2025 - Present",
                    title: "Projects",
                    description:
                        "Developing practical projects with React and other technologies from the JavaScript ecosystem, applying concepts of organization, responsiveness, and development best practices."
                },

                studies: {
                    period: "Continuous learning",
                    title: "Studies",
                    description:
                        "Continuously deepening my knowledge of JavaScript, software architecture, modern web development, and programming best practices."
                },

                goals: {
                    period: "Next steps",
                    title: "Next Goals",
                    description:
                        "Expanding my knowledge of TypeScript, Next.js, automated testing, and cloud computing to build increasingly complete and scalable applications."
                }

            }

        },

        contact: {

            badge: "Contact",

            title: 

                "Let's turn ideas into projects.",

            description:

                "I'm open to discussing professional opportunities, projects, collaborations, and new ideas. I'd be glad to learn more about your proposal and understand how I can contribute.",

            channels: {

                email: "Email",
                whatsapp: "WhatsApp",
                linkedin: "LinkedIn",
                github: "GitHub"

            }

        },

        footer: {

             description:

                "Fullstack Developer building modern, functional digital experiences focused on the user.",

            navigationLabel: "Footer navigation",

            links: {

                about: "About",
                projects: "Projects",
                skills: "Technologies",
                journey: "Journey",
                contact: "Contact"

            },

            copyright:
            
                "© 2026 Carlos Lima. All rights reserved.",

            backToTop: "Back to top"            

        }

    }

};