describe('TC11 - Abrir carrinho', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  })

  it('deve abrir página do carrinho com itens', () => {
    cy.screenshot('tc11-01-antes-abrir-carrinho')
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('.cart_item').should('be.visible')
    cy.screenshot('tc11-02-carrinho-aberto')
  })
})
