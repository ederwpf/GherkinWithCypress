#language: pt

Funcionalidade: ACESSAR SITE E REALIZAR CADASTRO
Cenário: ACESSAR SITE
Dado que o usuário realizou acesso ao site
Quando a página é carregada
Então deve ser exibido a opção de se cadastrar

Cenário: ACESSAR PÁGINA DE CADASTRO
Dado clicou na botão de cadastro
Quando a página de cadastro é carregada
Então devem ser exibidos os campos de Email e Botão Create Account

Cenário: INICIAR CADASTRO
Dado que o usuário informou o email
Dado que o usuário acionou o botão Create an account
Então deve ser iniciado o fluxo de criacao de conta