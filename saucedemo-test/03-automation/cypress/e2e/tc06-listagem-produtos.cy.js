describe('TC06 - Verificar listagem de produtos', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
  })

  it('deve exibir lista de produtos após login', () => {
    cy.get('.inventory_list').should('be.visible')
    cy.get('.inventory_item').should('have.length.greaterThan', 0)
  })
})
