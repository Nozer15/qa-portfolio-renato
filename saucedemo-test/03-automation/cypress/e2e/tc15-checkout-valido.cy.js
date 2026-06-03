describe('TC15 - Checkout com dados válidos', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
  })

  it('deve avançar para resumo com dados válidos', () => {
    cy.get('[data-test="firstName"]').type('João')
    cy.get('[data-test="lastName"]').type('Silva')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.screenshot('tc15-01-dados-preenchidos')
    cy.get('[data-test="continue"]').click()
    cy.url().should('include', 'checkout-step-two')
    cy.screenshot('tc15-02-resumo-checkout')
  })
})
