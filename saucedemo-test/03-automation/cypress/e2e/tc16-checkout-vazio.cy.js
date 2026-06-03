describe('TC16 - Checkout com campos vazios', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
  })

  it('deve exibir erro ao continuar sem preencher campos', () => {
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]').should('be.visible')
  })
})
