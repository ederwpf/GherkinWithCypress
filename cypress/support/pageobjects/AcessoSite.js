/// <reference types="Cypress" />

//import LoginElements from '../elements/LoginElements'
//const loginElements = new LoginElements

class Site {
    acessarSite() {
        cy.server();
        //cy.route('POST', 'https://portal.bancorenault.com.br/portalrci/services/content/getLogo?automaker=RENAULT&userLogged=').as('postLogo');
        cy.visit('http://automationpractice.com/index.php');
        //cy.wait('@postLogo').its('status').should('eq', 200)
        cy.get('#search_query_top').should('be.visible')
    }

    validarPagina() {
        cy.contains('Cart')
    }

    validarOpcaoDeCadastro() {
        cy.contains('Sign in')
    }
}

export default Site;