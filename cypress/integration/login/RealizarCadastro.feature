#language: pt

Funcionalidade: ACESSAR SITE E REALIZAR CADASTRO
Cenário: ACESSAR SITE DA RENAULT
Dado que o usuário realizou acesso ao site
Quando a página é carregada
Então deve ser exibido a opção de se cadastrar

Cenário: ACESSAR PÁGINA DE CADASTRO
Dado clicou na botão de cadastro
Quando a página de cadastro é carregada
Então devem ser exibidos os campos de IDENTIFICACAO e NUMERO DO CONTRATO

Cenário: INICIAR CADASTRO
Dado que o usuário informou o CPF
Dado que o usuário informou o NUMERO DO CONTRATO
Quando acionar o botão VALIDAR CONTRATO
Então deve ser exibida a validação

Cenário: CONFIRMAR DADOS
Dado que foi solicitado a confirmação dos dados
Dado que o usuário acionou o botão de CONFIRMAR DADOS
Então deve ser exibida a página DADOS IMPORTANTES

Cenário: INSERIR DADOS IMPORTANTES
Dado que foi exibida a página DADOS IMPORTANTES
Dado que o usuário inseriu a IDADE e a DATA DE NASCIMENTO
Dado que o usuário inseriu a QUANTIDADE DE PARCELAS e o VALOR
Quando for acionado o botão VALIDAR CONTRATO
Então deve ser exibida notificação de DADOS INVÁLIDOS

Cenário: INSERIR DADOS IMPORTANTES - EXAMPLO DE COMMIT
Dado que foi exibida a página DADOS IMPORTANTES
Dado que o usuário inseriu a IDADE e a DATA DE NASCIMENTO
Dado que o usuário inseriu a QUANTIDADE DE PARCELAS e o VALOR
Quando for acionado o botão VALIDAR CONTRATO
Então deve ser exibida notificação de DADOS INVÁLIDOS