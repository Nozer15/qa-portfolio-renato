describe('TC16 - Checkout com campos vazios', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
  })

  it('deve exibir erro ao continuar sem preencher campos', () => {
    cy.screenshot('tc16-01-campos-vazios')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.screenshot('tc16-02-erro-campos-obrigatorios')
  })
})
