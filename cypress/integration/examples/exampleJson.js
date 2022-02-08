import name from '../../fixtures/fileExample.json'

it('Example of read json file', () => {
  cy.readFile('cypress/fixtures/fileExample.json')
    .its('name')
    .should('eq', 'Muffien')

  /*cy.fixture('fileExample').then(nameFixture => {
    expect(name, 'joao2').to.deep.equal(nameFixture)
  })*/
})
