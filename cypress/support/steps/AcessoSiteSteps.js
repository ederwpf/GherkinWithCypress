/* global Given, Then, When */
import { Given } from "cypress-cucumber-preprocessor/steps";
import { When } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";
import Site from '../pageobjects/AcessoSite'
const site = new Site

Given("que o usuário realizou acesso ao site", () => {
    site.acessarSite();
})

When("a página é carregada", () => {
    site.validarPagina();
})

Then("deve ser exibido a opção de se cadastrar", () => {
    site.validarOpcaoDeCadastro();
})