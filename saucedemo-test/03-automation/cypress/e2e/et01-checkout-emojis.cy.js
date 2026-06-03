describe('ET03 - Checkout utilizando emojis', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
  })

  it('deve tratar emojis sem apresentar falhas', () => {
    cy.get('[data-test="firstName"]').type('🎉🔥💥')
    cy.get('[data-test="lastName"]').type('😎🚀🎯')
    cy.get('[data-test="postalCode"]').type('🏠📮✉️')
    cy.get('[data-test="continue"]').click()
    cy.get('body').should('be.visible')
    cy.url().should('not.include', 'error')
  })
})
