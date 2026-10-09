/**
 * =====================================================
 * Container
 * -----------------------------------------------------
 * Centraliza o conteúdo da aplicação e define
 * uma largura máxima para todas as seções.
 *
 * Projeto: Portfólio 2.0
 * Autor: Carlos Lima
 * =====================================================
 */

import styles from "./Container.module.css";

function Container({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

export default Container;