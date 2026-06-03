describe('TC06 - Verificar listagem de produtos', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })

  it('deve exibir lista de produtos após login', () => {
    cy.get('.inventory_list').should('be.visible')
    cy.screenshot('tc06-01-lista-produtos')
    cy.get('.inventory_item').should('have.length.greaterThan', 0)
    cy.screenshot('tc06-02-produtos-carregados')
  })
})