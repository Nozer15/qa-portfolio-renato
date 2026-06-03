describe('TC14 - Iniciar checkout', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
  })

  it('deve redirecionar para formulário de checkout', () => {
    cy.get('[data-test="checkout"]').click()
    cy.url().should('include', 'checkout-step-one')
  })
})
