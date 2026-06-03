describe('TC20 - Refresh na página', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
  })

  it('deve manter estado do carrinho após refresh', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.reload()
    cy.get('.shopping_cart_badge').should('have.text', '1')
  })
})
