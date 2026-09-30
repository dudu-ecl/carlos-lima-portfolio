/**
 * =====================================================
 * AppProviders
 * -----------------------------------------------------
 * Centraliza os Providers globais da aplicação.
 *
 * Providers atuais:
 * - ThemeProvider
 * - LanguageProvider
 *
 * Essa estrutura facilita futuras expansões
 * sem concentrar responsabilidades no App.jsx.
 *
 * Projeto: Portfólio 2.0
 * Autor: Carlos Lima
 * =====================================================
 */

import { ThemeProvider } from "./ThemeContext.jsx";
import { LanguageProvider } from "./LanguageProvider.jsx";

function AppProviders({ children }) {

    return(

        <ThemeProvider>

            <LanguageProvider>

                {children}

            </LanguageProvider>

        </ThemeProvider>

    );
}

export default AppProviders;