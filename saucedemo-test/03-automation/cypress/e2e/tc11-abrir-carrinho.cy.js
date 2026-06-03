describe('TC11 - Abrir carrinho', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  })

  it('deve abrir página do carrinho com itens', () => {
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('.cart_item').should('be.visible')
  })
})
