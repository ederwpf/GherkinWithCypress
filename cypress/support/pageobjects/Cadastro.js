/// <reference types="Cypress" />

import SiteElements from '../elements/SiteElements'
const siteElements = new SiteElements
const dados = require('./../../fixtures/dados.json')

class FluxoCadastro {
    iniciarCadastro() {
        cy.contains('Sign in').click({ force: true });            
    }

    validarPagina() {
        cy.contains('Authentication')
    }

    validarOpcaoDeCadastro() {
        cy.contains('Email address')
        cy.contains('Create an account')
    }
    
    inserirEmail(){                
        cy.get(siteElements.campo_Email).type(dados.email)             
    }

    acionarBotaoAccount(){                                        
        cy.get(siteElements.botao_Account).click()        
    }

    validarPaginaDeCadastro(){                
        cy.contains('YOUR PERSONAL INFORMATION')
    }
}

export default FluxoCadastro;