describe('TC20 - Refresh na página', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })

  it('deve manter estado do carrinho após refresh', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.screenshot('tc20-01-produto-adicionado')
    cy.reload()
    cy.get('.shopping_cart_badge').should('have.text', '1')
    cy.screenshot('tc20-02-apos-refresh')
  })
})
