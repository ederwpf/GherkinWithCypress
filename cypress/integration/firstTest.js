describe('My First Test', () => {
    it('Gets, types and asserts', () => {
      //Abaixo o código para acessar a URL
      cy.visit('https://example.cypress.io')
      // Abaixo é realizado um click na opção "Type"  
      cy.contains('type').click()  
      // O código abaixo valida se o conteúdo da URL está de acordo com o esperado
      cy.url().should('include', '/commands/actions')  
      // O código abaixo busca o campo de email utilizando o identificador da classe, insere um valor de exemplo no campo e por último verifica se o conteúdo foi inserido
      cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    })
  })