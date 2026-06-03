describe('TC17 - Finalizar compra', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('João')
    cy.get('[data-test="lastName"]').type('Silva')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()
  })

  it('deve exibir mensagem de pedido concluído', () => {
    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').should('contain', 'Thank you for your order')
  })
})
