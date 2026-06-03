describe('TC07 - Abrir detalhes do produto', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })

  it('deve abrir página de detalhes ao clicar no produto', () => {
    cy.screenshot('tc07-01-lista-antes-clicar')
    cy.get('.inventory_item_name').first().click()
    cy.get('.inventory_details').should('be.visible')
    cy.screenshot('tc07-02-detalhes-produto')
  })
})