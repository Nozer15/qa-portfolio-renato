describe('TC18 - Spam de cliques em botão', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
  })

  it('não deve duplicar comportamento com múltiplos cliques', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')
  })
})
