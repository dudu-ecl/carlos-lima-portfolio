/*
=====================================================
HOOK: useNavbar

Responsabilidade:

Centralizar o comportamento relacionado
ao estado de scroll da Navbar.

O hook detecta quando a página sofreu scroll
e disponibiliza esse estado para a Navbar.

Atualmente esse comportamento é utilizado
para aplicar o estado visual da navegação
após o deslocamento da página.

Projeto: Portfólio 2.0
Autor: Carlos Lima
=====================================================
*/

import { useEffect, useState } from "react";

export function useNavbar() {

    /*
    Indica se a página já foi rolada.
    */
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {

        function handleScroll() {

             /*
            Se a página estiver mais de
            20px abaixo do topo,
            consideramos que houve scroll.
            */
           setIsScrolled(window.scrollY > 20);
            
        }

        /*
        Adiciona o evento.
        */

        window.addEventListener(
            "scroll",
            handleScroll
        );

        /*
        Executa uma vez
        para definir o estado inicial.
        */

        handleScroll();

        /*
        Remove o evento quando
        o componente deixar de existir.

        Evita vazamento de memória.
        */

        return () => {

            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);

    return {

        isScrolled

    };
    
}