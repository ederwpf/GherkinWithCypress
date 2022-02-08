/// <reference types="Cypress" />

//import LoginElements from '../elements/LoginElements'
//const loginElements = new LoginElements

class Site {
    acessarSite() {
        cy.server();
        cy.route('POST', 'https://portal.bancorenault.com.br/portalrci/services/content/getLogo?automaker=RENAULT&userLogged=').as('postLogo');
        cy.visit('https://portal.bancorenault.com.br/portal/');
        cy.wait('@postLogo').its('status').should('eq', 200)
    }

    validarPagina() {
        cy.contains('Conexão ao portal do cliente')
    }

    validarOpcaoDeCadastro() {
        cy.contains('CADASTRE-SE')
    }
}

export default Site;