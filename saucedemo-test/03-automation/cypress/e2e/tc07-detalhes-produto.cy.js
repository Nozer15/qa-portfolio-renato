describe('TC07 - Abrir detalhes do produto', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
  })

  it('deve abrir página de detalhes ao clicar no produto', () => {
    cy.get('.inventory_item_name').first().click()
    cy.get('.inventory_details').should('be.visible')
  })
})
