/* global Given, Then, When */
import { Given } from "cypress-cucumber-preprocessor/steps";
import { When } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";
import Site from '../pageobjects/AcessoSite'
const site = new Site
import Cadastro from '../pageobjects/Cadastro'
const fluxoCadastro = new Cadastro

Given("que o usuário realizou acesso ao site", () => {
    site.acessarSite();
})

When("a página é carregada", () => {
    site.validarPagina();
})

Then("deve ser exibido a opção de se cadastrar", () => {
    site.validarOpcaoDeCadastro();
})

Given("clicou na botão de cadastro", () => {
    fluxoCadastro.iniciarCadastro();
})

When("a página de cadastro é carregada", () => {
    fluxoCadastro.validarPagina();
})

Then("devem ser exibidos os campos de Email e Botão Create Account", () => {
    fluxoCadastro.validarOpcaoDeCadastro();
})

Given("que o usuário informou o email", () => {
    fluxoCadastro.inserirEmail();
})

Given("que o usuário acionou o botão Create an account", () => {
    fluxoCadastro.acionarBotaoAccount();
})

Then("deve ser iniciado o fluxo de criacao de conta", () => {
    fluxoCadastro.validarPaginaDeCadastro();
})

Then("deve ser exibida a validação", () => {
    fluxoCadastro.validarNotificacao();
})

Given("que foi solicitado a confirmação dos dados", () => {
    fluxoCadastro.validarNotificacao();
})

Given("que o usuário acionou o botão de CONFIRMAR DADOS", () => {
    fluxoCadastro.acionarBotaoConfirmarDados();
})

Then("deve ser exibida a página DADOS IMPORTANTES", () => {
    fluxoCadastro.validarPaginaDadosImportantes();
})

Given("que foi exibida a página DADOS IMPORTANTES", () => {
    fluxoCadastro.validarPaginaDadosImportantes();
})

Given("que o usuário inseriu a IDADE e a DATA DE NASCIMENTO", () => {
    fluxoCadastro.inserirIdade();    
    fluxoCadastro.inserirDataDeNascimento();
})

Given("que o usuário inseriu a QUANTIDADE DE PARCELAS e o VALOR", () => {
    fluxoCadastro.inserirQuantidadeDeParcelas();    
    fluxoCadastro.inserirValorParcelas();
})

When("for acionado o botão VALIDAR CONTRATO", () => {
    fluxoCadastro.acionarValidarContrato();
})

Then("deve ser exibida notificação de DADOS INVÁLIDOS", () => {
    fluxoCadastro.validarNotificacaoDadosInvalidos();
})