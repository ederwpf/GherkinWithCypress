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
        cy.wait(4000)
    }

    validarContrato(){
        cy.contains('VALIDAR CONTRATO').click({ force: true });
    }

    validarNotificacao(){
        cy.contains('CONFIRMAR DADOS')
    }

    acionarBotaoConfirmarDados(){
        cy.contains('CONFIRMAR DADOS').click({ force: true });
    }

    validarPaginaDadosImportantes(){
        cy.contains('DADOS IMPORTANTES')
    }

    inserirIdade(){        
        cy.get(siteElements.campo_IDADE).type(dados.idade)
    }

    inserirDataDeNascimento(){
        cy.get(siteElements.campo_DATA_NASCIMENTO).type(dados.dataNascimento)
    }

    inserirQuantidadeDeParcelas(){
        cy.get(siteElements.campo_QUANTIDADE_PARCELAS).type(dados.quantidadeParcelas)
    }

    inserirValorParcelas(){
        cy.get(siteElements.campo_VALOR_PARCELA).type(dados.valorParcela)
    }

    acionarValidarContrato(){
        cy.get(siteElements.campo_IDADE).click();
        cy.get(siteElements.botao_VALIDAR_CONTRATO).click();            
    }

    validarNotificacaoDadosInvalidos(){
        cy.contains('dados inválidos')
    }
}

export default FluxoCadastro;