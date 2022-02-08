/// <reference types="Cypress" />

import SiteElements from '../elements/SiteElements'
const siteElements = new SiteElements
const dados = require('./../../fixtures/dados.json')

class FluxoCadastro {
    iniciarCadastro() {
        cy.contains('CADASTRE-SE').click({ force: true });            
    }

    validarPagina() {
        cy.contains('VALIDAR CONTRATO')
    }

    validarOpcaoDeCadastro() {
        cy.contains('Identificação')
        cy.contains('Número do contrato')
    }
    
    preencherCPF(){                
        cy.get(siteElements.campo_CPF_CNPJ).type(dados.cpf)
    }

    preencherNumeroDoContrato(){                
        cy.get(siteElements.campo_NUMERO_CONTRATO).type(dados.numeroContrato)
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