describe('TC12 - Carrinho vazio', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })

  it('deve abrir carrinho vazio sem erro', () => {
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.screenshot('tc12-01-carrinho-vazio')
    cy.get('.cart_item').should('not.exist')
    cy.get('[data-test="checkout"]').should('be.visible')
    cy.screenshot('tc12-02-botao-checkout-visivel')
  })
})
