describe('TC10 - Remover produto do carrinho', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  })

  it('deve remover produto do carrinho', () => {
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('not.exist')
  })
})
