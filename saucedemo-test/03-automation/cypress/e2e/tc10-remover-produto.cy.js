describe('TC10 - Remover produto do carrinho', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  })

  it('deve remover produto do carrinho', () => {
    cy.screenshot('tc10-01-produto-no-carrinho')
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('not.exist')
    cy.screenshot('tc10-02-produto-removido')
  })
})
