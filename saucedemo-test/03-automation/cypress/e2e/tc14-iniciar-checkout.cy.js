describe('TC14 - Iniciar checkout', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
  })

  it('deve redirecionar para formulário de checkout', () => {
    cy.screenshot('tc14-01-carrinho-antes-checkout')
    cy.get('[data-test="checkout"]').click()
    cy.url().should('include', 'checkout-step-one')
    cy.screenshot('tc14-02-formulario-checkout')
  })
})
